<template>
  <div class="language-switcher">
    <button
      :class="{ active: currentLanguage === 'sk' }"
      @click="setLanguage('sk')"
    >
      <img src="../../public/sk.png" alt="Slovak" class="flag-icon" />
    </button>
    <button
      :class="{ active: currentLanguage === 'en' }"
      @click="setLanguage('en')"
    >
      <img src="../../public/br.png" alt="English" class="flag-icon" />
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
.language-switcher {
  display: flex;
  gap: 10px;
}

.language-switcher button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
}

.flag-icon {
  width: 24px;
  height: auto;
  transition: opacity 0.3s;
}

.language-switcher .active .flag-icon {
  opacity: 0.7;
}
</style>
