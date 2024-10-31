<template>
  <div class="product-catalog">
    <div class="container">
      <div class="header">
        <h2>
          <img src="@/assets/images/dotes.svg" alt="Иконка" class="icon" />
          Каталог товаров
        </h2>
        <div class="search-container">
          <img src="@/assets/images/search.png" alt="Поиск" class="search-icon" />
          <input type="text" placeholder="Поиск среди..." v-model="searchQuery" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
};
</script>

<style scoped>
.product-catalog {
  background-color: white;
  padding: 0px;
}

.container {
  width: 90%; /* Ограничиваем ширину контейнера 90% от ширины экрана */
  max-width: 100%; /* Максимальная ширина */
  margin: 0 auto; /* Центрируем контейнер */
}

.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

h2 {
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  background-color: #E4530F;
  height: 60px;
  padding-left: 15px;
  padding-right: 15px;
  white-space: nowrap;
}

.search-container {
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #eaeaea;
  width: 100%; /* Увеличиваем ширину до 100% контейнера */
}

.icon {
  width: 24px;
  height: 24px;
}

.search-icon {
  width: 20px;
  height: 20px;
  margin: 0px 20px;
}

input[type="text"] {
  font-family:'Montserrat', serif;
  text-align: start;
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  color: #666;
  margin: 0;
}
</style>
