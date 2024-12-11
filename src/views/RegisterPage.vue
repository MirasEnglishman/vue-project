<template>
    <div>
      <h1>Register</h1>
      <form @submit.prevent="register">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async register() {
        try {
          await axios.post('/api/register', {
            email: this.email,
            password: this.password,
          });
          alert('Registration successful! Please log in.');
          this.$router.push('/login');
        } catch (error) {
          console.error('Registration failed:', error);
          alert('Registration failed!');
        }
      },
    },
  };
  </script>
  