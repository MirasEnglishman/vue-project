<template>
  <div class="advertisement-carousel">
    <div 
      class="carousel-container" 
      @touchstart="handleTouchStart" 
      @touchend="handleTouchEnd"
    >
      <button class="carousel-button left" @click="prevSlide">
        <img src="@/assets/images/right-arrow.png" alt="Левая стрелка" class="arrow-icon left-arrow" />
      </button>
      <img :src="images[currentSlide]" alt="Рекламная картинка" class="carousel-image" />
      <button class="carousel-button right" @click="nextSlide">
        <img src="@/assets/images/right-arrow.png" alt="Правая стрелка" class="arrow-icon" />
      </button>
    </div>
    <div class="carousel-indicators">
      <span 
        v-for="(image, index) in images" 
        :key="index" 
        :class="{ active: index === currentSlide }" 
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvertisementSection',
  data() {
    return {
      currentSlide: 0,
      images: [
        require('@/assets/images/slide1.jpg'),
        require('@/assets/images/slide2.jpg'),
        require('@/assets/images/slide3.jpeg')
      ],
      startX: 0,
      endX: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    },
    handleTouchStart(event) {
      this.startX = event.touches[0].clientX;
    },
    handleTouchEnd(event) {
      this.endX = event.changedTouches[0].clientX;
      const deltaX = this.endX - this.startX;

      if (deltaX > 50) {
        this.prevSlide();
      } else if (deltaX < -50) {
        this.nextSlide();
      }
    }
  }
};
</script>

<style scoped>
.advertisement-carousel {
  padding: 0;
  position: relative;
  width: 88%;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  height: 400px;
  margin-bottom: 30px;
  background-color: #E9E9E9;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-image {
  
  width: auto;
  height: 100%;
  object-fit: cover;
}

.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none; /* Убираем фон */
  border: none; /* Убираем границу */
  padding: 0; /* Убираем отступы */
  cursor: pointer;
  z-index: 1;
}

.carousel-button.left {
  left: 10px;
}

.carousel-button.right {
  right: 10px;
}

.arrow-icon {
  width: 20px;
  height: 20px;
}

.left-arrow {
  transform: scaleX(-1); /* Отражение по горизонтали для левой стрелки */
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
  position: absolute;
  bottom: 20px;
  width: 100%;
}

.carousel-indicators span {
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid white;
  border-radius: 50%;
  cursor: pointer;
  background-color: white; /* Белая заливка для неактивных индикаторов */
  transition: background-color 0.3s, border-color 0.3s;
}

.carousel-indicators .active {
  background-color: #ff6600; /* Оранжевый цвет для активного индикатора */
  border-color: #ff6600;
}

</style>
