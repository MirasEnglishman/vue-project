<template>
  <div class="users-page">
    <h1>Clients List</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <table class="clients-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clients" :key="client.id">
            <td>{{ client.id }}</td>
            <td>{{ client.first_name }}</td>
            <td>{{ client.last_name }}</td>
            <td>{{ client.address }}</td>
            <td>{{ client.phone_number }}</td>
            <td>{{ formatDate(client.created_at) }}</td>
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
  name: 'UsersPage',
  data() {
    return {
      clients: [], // Список клиентов
      loading: true, // Флаг загрузки
    };
  },
  methods: {
    // Получение данных клиентов через API
    async fetchClients() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/clients');
        this.clients = response.data;
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        this.loading = false;
      }
    },
    // Форматирование даты
    formatDate(date) {
      return format(new Date(date), 'dd.MM.yyyy HH:mm');
    },
  },
  created() {
    // Загрузка клиентов при инициализации
    this.fetchClients();
  },
};
</script>

<style scoped>
.users-page {
  text-align: center;
  padding: 20px;
}

.clients-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.clients-table th,
.clients-table td {
  padding: 12px;
  border: 1px solid #ddd;
  text-align: center;
}

.clients-table th {
  background-color: #f4f4f4;
  font-weight: bold;
}

.clients-table td {
  font-size: 0.9em;
}
</style>
