<template>
    <div class="collaboration-section">
      <div class="partners">
        <h3>Сотрудничество</h3>
        <div class="partners-logos">
          <img src="@/assets/images/santehbyt.png" alt="САНТЕХБЫТ" class="partner-logo" />
          <img src="@/assets/images/santehno.png" alt="САНТЕХНО" class="partner-logo" />
          <img src="@/assets/images/santehyug.png" alt="САНТЕХЮГ" class="partner-logo" />
          <img src="@/assets/images/ovkterm.png" alt="ОВКТЕРМ" class="partner-logo" />
        </div>
      </div>
  
      <div class="why-choose-us">
        <h3>Почему нас выбирают</h3>
        <div class="icons-container">
          <div class="icon-item">
            <img src="@/assets/images/tenge.png" alt="Цена" class="icon" />
            <p>Цена соответствующая качеству</p>
          </div>
          <div class="icon-item">
            <img src="@/assets/images/accept.png" alt="Согласовываем все этапы" class="icon" />
            <p>Согласовываем все этапы</p>
          </div>
          <div class="icon-item">
            <img src="@/assets/images/assortment.png" alt="Широкий ассортимент продукции" class="icon" />
            <p>Широкий ассортимент продукции</p>
          </div>
          <div class="icon-item">
            <img src="@/assets/images/review.png" alt="Качественные услуги" class="icon" />
            <p>Качественные услуги</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CollaborationSection',
  };
  </script>
  
  <style scoped>
  .collaboration-section {
    text-align: center;
    margin: 0 auto;
    padding: 40px 0;
    width: 88%;
  }
  
  .partners {
    margin-bottom: 40px;
  }
  
  .partners h3,
.why-choose-us h3 {
    font-size: 20px;
    color: #333;
    margin-bottom: 20px;
    text-align: left; /* Выравнивание заголовка по левому краю */
}

.partners-logos {
  margin-top: 50px;
    display: flex;
    justify-content: space-between; /* Увеличиваем отступы между логотипами */
    gap: 40px; /* Регулируем расстояние между логотипами */
}

  
  .partner-logo {
    height: 60px; /* Adjust height as needed */
    width: auto;
  }

  .why-choose-us{
    margin-top: 100px;
  }

  
  .icons-container {
    margin: 0 auto;
    width: 50%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 40px; /* Снижаем отступы между иконками */
    justify-content: center;
}
  
  .icon-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .icon {
    height: 120px;
    width: 120px;
    margin-bottom: -20px;

    padding: 15px;


  }
  
  .icon-item p {
    max-width: 200px;
    font-size: 14px;
    color: #666;
  }
  </style>
  