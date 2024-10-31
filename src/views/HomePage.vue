<!-- src/views/HomePage.vue -->
<template>
  <div>
    <ProductCatalogSection />
    <AdvertisementSection />
    <CatalogSection />
    <PopularCategoriesSection />
    <SertificationSection />
    <CollaborationSection />
  </div>
</template>

<script>
import ProductCatalogSection from '../components/ProductCatalogSection.vue';
import AdvertisementSection from '../components/AdvertisementSection.vue';
import CatalogSection from '../components/CatalogSection.vue';
import PopularCategoriesSection from '../components/PopularCategoriesSection.vue';
import SertificationSection from '../components/SertificationSection.vue';
import CollaborationSection from '../components/CollaborationSection.vue';

export default {
  name: 'HomePage',
  components: {
    ProductCatalogSection,
    AdvertisementSection,
    CatalogSection,
    PopularCategoriesSection,
    SertificationSection,
    CollaborationSection,
  },
};
</script>
