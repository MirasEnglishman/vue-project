<!-- src/components/AppFooter.vue -->
<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-logo-socials">
        <img src="@/assets/images/logo_grey.png" alt="Valve Engineering Logo" class="footer-logo" />
        <div class="footer-socials">
          <img src="@/assets/images/whatsapp_grey.png" alt="WhatsApp" class="social-icon" />
          <img src="@/assets/images/insta_grey.png" alt="Instagram" class="social-icon" />
        </div>
      </div>
      <div class="footer-info">
        <p>TOO «Valve Engineering»</p>
        <p>Республика Казахстан, …, г. Алматы, район …, ул. …</p>
        <p>БИН: …</p>
        <p>Телефон: …</p>
        <p>Эл. почта: …</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

.footer {
  background-color: #333; /* Темный фон */
  color: #ccc; /* Светлый текст */
  padding: 20px;
}

.footer-content {
  display: flex;
  align-items: flex-start; /* Выровнять элементы по началу */
  gap: 20px;
  margin-bottom: 10px;
}

.footer-logo-socials {
  margin-top: 10px;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Центрирование логотипа и иконок по горизонтали */
}

.footer-logo {
  width: 80px;
  height: auto;
  margin-bottom: 10px;
}

.footer-info {
  margin-left: 5%;
  flex: 1;
  font-size: 14px;
  line-height: 1.6;
  text-align: left; /* Выровнять текст по левому краю */
}

.footer-socials {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 10px; /* Отступ сверху, чтобы иконки были ниже логотипа */
}

.social-icon {
  width: 24px;
  height: 24px;
}

.footer-copyright {
  text-align: center;
  font-size: 12px;
  color: #aaa;
  margin-top: 10px;
}
</style>
