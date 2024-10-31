<template>
  <div class="popular-categories">
    <h2>Популярные категории</h2>
    <div class="category-list">
      <div
        class="category-item large"
        v-for="(category, index) in largeCategoriesStart"
        :key="index"
        :style="{ backgroundColor: category.bgColor }"
      >
        <img :src="category.image" :alt="category.name" class="category-image mufta-image" />
        <p class="category-name">{{ category.name }}</p>
      </div>

      <div class="category-column">
        <div
          class="category-item small"
          v-for="(category, index) in singleColumnCategoriesStart"
          :key="index + largeCategoriesStart.length"
          :style="{ backgroundColor: category.bgColor }"
        >
          <img :src="category.image" :alt="category.name" 
               :class="['category-image', index === 0 ? 'valve-image' : 'radiator-image']" />
          <p class="category-name">{{ category.name }}</p>
        </div>
      </div>

      <div
        class="category-item large"
        v-for="(category, index) in largeCategoriesEnd"
        :key="index + largeCategoriesStart.length + singleColumnCategoriesStart.length"
        :style="{ backgroundColor: category.bgColor }"
      >
        <img :src="category.image" :alt="category.name" class="category-image pump-image" />
        <p class="category-name">{{ category.name }}</p>
      </div>

      <div class="category-column">
        <div
          class="category-item small"
          v-for="(category, index) in singleColumnCategoriesEnd"
          :key="index + largeCategoriesStart.length + singleColumnCategoriesStart.length + largeCategoriesEnd.length"
          :style="{ backgroundColor: category.bgColor }"
        >
          <img :src="category.image" :alt="category.name" 
               :class="['category-image', index === 0 ? 'meter-image' : 'pipe-image']" />
          <p class="category-name">{{ category.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularCategoriesSection',
  data() {
    return {
      largeCategoriesStart: [
        { name: 'Комбинированные муфты', image: require('@/assets/images/mufta.png'), bgColor: '#8C91B7' }
      ],
      singleColumnCategoriesStart: [
        { name: 'Шаровые краны', image: require('@/assets/images/valve.png'), bgColor: '#F9F39F' },
        { name: 'Радиаторы', image: require('@/assets/images/radiator.png'), bgColor: '#e8e8e8' }
      ],
      largeCategoriesEnd: [
        { name: 'Насосы-автоматы', image: require('@/assets/images/pump.png'), bgColor: '#F7F4C9' }
      ],
      singleColumnCategoriesEnd: [
        { name: 'Универсальный счётчик', image: require('@/assets/images/meter.png'), bgColor: '#B1D7FB' },
        { name: 'Полипропиленовые трубы', image: require('@/assets/images/pipe.png'), bgColor: '#e8e8e8' }
      ]
    };
  }
};
</script>

<style scoped>
.popular-categories {
  text-align: left;
  margin: 0 auto;
  padding: 20px;
  width: 88%;
}
.popular-categories h2{
  padding-bottom: 20px;
}

.category-list {
  max-height: 330px;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch; /* Ensures all items stretch to the same height */
  justify-content: center;
  gap: 20px;
}

.category-item {
  height: 100%;
  padding: 0px 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* Aligns content within items vertically */
  box-sizing: border-box;
}

.category-item.large {
  width: calc(50% - 10px);
  height: 330px;
}

.category-item.small {
  width: calc(100% - 20px);
  height: 140px;
}

.category-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(25% - 10px);
}

/* Individual styling for each image to extend beyond the container */
.mufta-image {
  height: 220px;
  width: auto;
  margin: 10px;
  transform: translateX(-10%);
}

.valve-image {
  width: 100px;
  height: auto;
  margin: 10px;
  transform: translateX(-5%);
}

.radiator-image {
  width: 110px;
  height: auto;
  margin: 10px;
  transform: translateX(5%);
}

.pump-image {
  height: 190px;
  width: auto;
  margin: 10px;
  transform: translateX(10%);
}

.meter-image {
  width: 100px;
  height: auto;
  margin: 10px;
  transform: translateX(-10%);
}

.pipe-image {
  width: 110px;
  height: auto;
  margin: 10px;
  transform: translateX(5%);
}

.category-name {
  font-weight: normal;
  font-size: 18px;
}

</style>
