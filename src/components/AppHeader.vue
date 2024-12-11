<template>
    <header>
      <div class="header-top">
        <div class="contact-info">
          
        </div>
        <div class="logo">
          <img src="@/assets/logo.png" alt="Logo" />
        </div>
        <div class="address">
          
        </div>
      </div>
  
      <nav class="main-nav">
        <router-link to="/products">Продукты</router-link>
        <router-link to="/users">Пользователи</router-link>
        <router-link to="/orders">Заказы</router-link>
        <router-link to="/categories">Категории</router-link>
      </nav>
    </header>
  </template>
  
  
  
  <script>
  export default {
    name: 'AppHeader',
  };
  </script>
  
  <style scoped>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 20px;
  }
  
  .header-top {
    width:90%;
    display: flex;
    justify-content: space-between;
    align-items: center; /* Выровнять элементы по центру по вертикали */
    padding: 10px 0px;
    background-color: #fff;
    font-size: 14px;
    color: #666;
    
  }
  
  
  
  .contact-info,
  .address {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    /* Запрещает перенос текста */
  }
  
  .request-link,
  .address a {
    color: blue;
    text-decoration: none;
  }
  .request-link:hover,
  .address a:hover {
    color: blue;
    text-decoration: underline;
  }
  .logo-wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .logo img {
    max-height: 100px;
    width: auto;
  }
  .main-nav {
    display: flex;
    justify-content: center;
    gap: 5px;
    /* margin-left: 20vw; /* 10% от ширины экрана слева */
    /* margin-right: 20vw; 10% от ширины экрана справа */ 
    margin-top: 15px;
    width: 80vw; /* Ширина 80% от ширины экрана */
  }
  
  
  .main-nav a {
    width: 100%;
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #eaeaea;
    transition: background-color 0.3s;
    text-align: center; /* Горизонтальное центрирование текста */
    display: flex;
    align-items: center; /* Вертикальное центрирование текста */
    justify-content: center; /* Горизонтальное центрирование текста */
  }
  
  
  .main-nav a:hover {
    background-color:blue;
    color: #fff;
  }
  </style>
  