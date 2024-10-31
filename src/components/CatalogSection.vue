<template>
    <div class="catalog-section">
      <div class="catalog-content">
        <h3>Инженерная сантехника VALFEX — образец высокого качества и надежности</h3>
        <p>
          VALFEX — российский производитель инженерной сантехники. Торговая марка зарекомендовала себя как образец высокого качества и надежности. На протяжении последних восьми лет, с 2015 по 2023 гг., Valfex уверенно лидирует по объемам продаж полипропиленовых труб и фитингов. В 2022 г. было продано более 36 тыс. тонн изделий из полипропилена.
        </p>
      </div>
      <div class="catalog-right">
        <div class="catalog-images">
          <img src="@/assets/images/catalog1.png" alt="Каталог 1" class="catalog-image catalog-image-1" />
          <img src="@/assets/images/catalog2.png" alt="Каталог 2" class="catalog-image catalog-image-2" />
        </div>
        <div class="catalog-buttons">
          <button class="online-button">Смотреть онлайн</button>
          <button class="pdf-button">⬇ PDF</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CatalogSection'
  };
  </script>
  
  <style scoped>
  .catalog-section {
    padding-top: 2%;
    display: flex;
    align-items: flex-start;
    background-color: #fff;
    width: 80%;
    margin: 0;
    margin-left: 6%;
    text-align: left;
    gap: 10%;
  }
  
  .catalog-content {
    max-width: 60%;
    padding-right: 10px;
  }
  
  .catalog-content h3 {
    font-weight: bold;
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
    max-width: 50%;
  }
  
  .catalog-content p {
    max-width: 77%;
    color: #666;
    font-size: 16px;
    line-height: 1.6;
  }
  
  .catalog-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  
  .catalog-images {
    display: flex;
    position: relative;
  }
  
  .catalog-image {
    height: 280px;
    width: auto;
  }
  
  .catalog-image-1 {
    position: relative;
    left: 100px;
    top: 40px;
    z-index: 1;
  }
  
  .catalog-image-2 {
    position: absolute;
    z-index: 0;
  }
  
  .catalog-buttons {
    margin-left: 30%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
  }
  
 .pdf-button {
    background: none;
    border: 1px solid #E4530F;
    color: #E4530F;
    padding: 5px 15px;
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .online-button {
    margin-top: 50px;
    background: none;
    border:none;
    color: #E4530F;
    font-weight: normal;
    padding: 5px 10px;
  }
  
  .pdf-button {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  
  .pdf-button:hover {
    background-color: #E4530F;
    color: white;
  }
  
  .online-button:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  </style>
  