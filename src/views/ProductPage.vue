<template>
  <div class="product-page">
    <h1>Product List</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="product-list">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" alt="Product image" v-if="product.image" />
        <h3>{{ product.name }}</h3>
        <p>{{ product.content }}</p>
        <p class="price">Price: ${{ product.price }}</p>
        <p class="stock">Stock: {{ product.stock }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductPage',
  data() {
    return {
      products: [],
      loading: true,
    };
  },
  methods: {
    fetchProducts() {
      axios
        .get('http://127.0.0.1:8000/api/products')
        .then((response) => {
          this.products = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error('Error fetching products:', error);
          this.loading = false;
        });
    },
  },
  created() {
    this.fetchProducts();
  },
};
</script>

<style scoped>
.product-page {
  text-align: center;
  padding: 20px;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.product-card {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.2s;
  background-color: #fff;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  width: 100%;
  height: auto;
  border-radius: 4px;
}

.product-card h3 {
  font-size: 1.2em;
  margin: 10px 0;
}

.product-card p {
  margin: 5px 0;
}

.product-card .price {
  font-weight: bold;
  color: #E4530F;
}

.product-card .stock {
  font-size: 0.9em;
  color: #555;
}
</style>
