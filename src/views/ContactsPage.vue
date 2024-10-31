<!-- src/views/ContactsPage.vue -->
<template>
  <div class="contacts">
    <h1>Контакты</h1>
    <p>г. Алматы, ул. Пушкина</p>
    <p>Телефон: +7 708 345 56 98</p>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Имя:</label>
        <input type="text" v-model="name" id="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="message">Сообщение:</label>
        <textarea v-model="message" id="message" required></textarea>
      </div>
      <button type="submit">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      alert(`Message sent by ${this.name}`);
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
};
</script>
