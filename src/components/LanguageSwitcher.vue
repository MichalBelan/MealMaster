<template>
    <div class="language-switcher">
      <button
        :class="{ active: currentLanguage === 'sk' }"
        @click="setLanguage('sk')"
      >
        SK
      </button>
      <button
        :class="{ active: currentLanguage === 'en' }"
        @click="setLanguage('en')"
      >
        EN 
      </button>
    </div>
  </template>
  
  <script setup>
  import { useI18n } from 'vue-i18n';
  import { computed } from 'vue';
  
  const { locale } = useI18n();
  
  const currentLanguage = computed(() => locale.value);
  
  function setLanguage(language) {
    locale.value = language;
  }
  </script>
  
  <style scoped>
  .language-switcher button {
    background: none;
    border: 1px solid #ccc;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
  }
  
  .language-switcher .active {
    background-color: #f0f0f0;
  }
  </style>
  