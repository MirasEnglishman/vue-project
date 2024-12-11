<template>
    <div class="categories-page">
      <h1>Categories List</h1>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <table class="categories-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Image</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <td>{{ category.id }}</td>
              <td>{{ category.name }}</td>
              <td>
                <img :src="category.image" alt="Category image" class="category-image" />
              </td>
              <td>{{ formatDate(category.created_at) }}</td>
              <td>{{ formatDate(category.updated_at) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { format } from 'date-fns';
  
  export default {
    name: 'CategoriesPage',
    data() {
      return {
        categories: [],
        loading: true,
      };
    },
    methods: {
      fetchCategories() {
        axios
          .get('http://127.0.0.1:8000/api/categories') // Предполагаемый URL для получения данных
          .then((response) => {
            this.categories = response.data;
            this.loading = false;
          })
          .catch((error) => {
            console.error('Error fetching categories:', error);
            this.loading = false;
          });
      },
      formatDate(date) {
        return date ? format(new Date(date), 'dd.MM.yyyy HH:mm') : 'N/A';
      },
    },
    created() {
      this.fetchCategories();
    },
  };
  </script>
  
  <style scoped>
  .categories-page {
    text-align: center;
    padding: 20px;
  }
  
  .categories-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  .categories-table th,
  .categories-table td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: center;
  }
  
  .categories-table th {
    background-color: #f4f4f4;
    font-weight: bold;
  }
  
  .categories-table td {
    font-size: 0.9em;
  }
  
  .category-image {
    width: 50px;
    height: auto;
    border-radius: 4px;
  }
  </style>
  