<template>
    <div class="admin-page">
        <h1>Admin Page</h1>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <!-- Графики -->
            <div class="charts">
                <h2>Statistics</h2>
                <div class="chart-container">
                    <h3>Product Categories Distribution (Pie)</h3>
                    <Chart type="pie" :data="categoryChartData" />
                </div>
                <div class="chart-container">
                    <h3>Orders Over Time (Line)</h3>
                    <Chart type="line" :data="ordersChartData" />
                </div>
            </div>

            <!-- Таблица продуктов -->
            <h2>Products</h2>
            <button @click="openProductForm()">Add Product</button>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td><img :src="product.image" alt="Product image" v-if="product.image" /></td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.category_name }}</td>
                        <td>{{ product.description }}</td>
                        <td>
                            <button @click="openProductForm(product)">Edit</button>
                            <button @click="deleteProduct(product.id)">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Таблица заказов -->
            <h2>Orders</h2>
            <table class="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Client</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders" :key="order.id">
                        <td>{{ order.id }}</td>
                        <td>{{ order.product_name }}</td>
                        <td>{{ order.client_name }}</td>
                        <td>{{ order.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Модальные окна -->
        <div v-if="showProductForm" class="modal">
            <div class="modal-content">
                <span class="close" @click="cancelEdit">&times;</span>
                <h3>{{ formProduct.id ? 'Edit' : 'Add' }} Product</h3>
                <form @submit.prevent="saveProduct">
                    <label>
                        Name:
                        <input v-model="formProduct.name" required />
                    </label>
                    <label>
                        Description:
                        <textarea v-model="formProduct.description" required></textarea>
                    </label>
                    <label>
                        Image URL:
                        <input v-model="formProduct.image" />
                    </label>
                    <label>
                        Category:
                        <select v-model="formProduct.category_id" required>
                            <option v-for="category in categories" :key="category.id" :value="category.id">
                                {{ category.name }}
                            </option>
                        </select>
                    </label>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Chart from 'primevue/chart';

export default {
    name: 'AdminPage',
    components: { Chart },
    data() {
        return {
            products: [],
            categories: [],
            orders: [],
            formProduct: { id: null, name: '', description: '', image: '', category_id: null },
            showProductForm: false,
            loading: true,
            categoryChartData: null,
            ordersChartData: null,
        };
    },
    methods: {
        checkAuth() {
            if (!localStorage.getItem('token')) {
                this.$router.push('/login');
            }
        },
        async fetchProducts() {
            try {
                const response = await axios.get('/api/products', this.getAuthHeader());
                this.products = response.data.map(product => ({
                    ...product,
                    category_name: this.categories.find(cat => cat.id === product.category_id)?.name || 'Unknown',
                }));
                this.prepareChartData();
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                this.loading = false;
            }
        },
        async fetchCategories() {
            try {
                const response = await axios.get('/api/categories', this.getAuthHeader());
                this.categories = response.data;
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        },
        async fetchOrders() {
            try {
                const response = await axios.get('/api/orders', this.getAuthHeader());
                this.orders = response.data.map(order => ({
                    ...order,
                    product_name: this.products.find(p => p.id === order.product_id)?.name || 'Unknown',
                    client_name: `${order.client.first_name} ${order.client.last_name}`,
                }));
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        },
        prepareChartData() {
            const categoryCounts = this.products.reduce((acc, product) => {
                acc[product.category_id] = (acc[product.category_id] || 0) + 1;
                return acc;
            }, {});

            this.categoryChartData = {
                labels: this.categories.map(category => category.name),
                datasets: [{ data: Object.values(categoryCounts), backgroundColor: ['#42A5F5', '#66BB6A'] }],
            };

            const ordersByDate = this.orders.reduce((acc, order) => {
                acc[order.date] = (acc[order.date] || 0) + 1;
                return acc;
            }, {});

            this.ordersChartData = {
                labels: Object.keys(ordersByDate),
                datasets: [{ data: Object.values(ordersByDate), borderColor: '#42A5F5', fill: false }],
            };
        },
        getAuthHeader() {
            return { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } };
        },
        openProductForm(product = null) {
            this.showProductForm = true;
            this.formProduct = product || { id: null, name: '', description: '', image: '', category_id: null };
        },
        cancelEdit() {
            this.showProductForm = false;
        },
        async saveProduct() {
            try {
                const method = this.formProduct.id ? 'put' : 'post';
                const url = this.formProduct.id ? `/api/products/${this.formProduct.id}` : '/api/products';
                await axios[method](url, this.formProduct, this.getAuthHeader());
                this.fetchProducts();
                this.showProductForm = false;
            } catch (error) {
                console.error('Error saving product:', error);
            }
        },
        async deleteProduct(id) {
            try {
                await axios.delete(`/api/products/${id}`, this.getAuthHeader());
                this.fetchProducts();
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        },
    },
    created() {
        this.checkAuth();
        this.fetchCategories();
        this.fetchProducts();
        this.fetchOrders();
    },
};
</script>

<style scoped>
.admin-page {
    padding: 20px;
}
.data-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}
.data-table th,
.data-table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: center;
}
.modal {
    display: flex;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}
.modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 300px;
    position: relative;
}
.close {
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
}
</style>
