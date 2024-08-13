<template>
  <header class="bg-orange-600 shadow-md h-16 flex justify-between items-center px-5 text-white relative">
    <!-- Hamburger Button -->
    <button
      @click="toggleMenu"
      class="lg:hidden text-2xl focus:outline-none mr-4"
    >
      <span v-if="!isMenuOpen">&#9776;</span>
      <span v-else>&#10005;</span>
    </button>

    <!-- Logo/Title with margin for mobile -->
    <div class="flex items-center flex-grow lg:w-auto">
      <router-link
        :to="{ name: 'home' }"
        class="text-2xl font-bold hover:text-gray-200 transition"
      >
        {{ $t('message.home') }} 🏠
      </router-link>
    </div>

    <!-- Desktop LanguageSwitcher -->
    <div class="hidden lg:flex lg:items-center lg:gap-8 lg:ml-4">
      <LanguageSwitcher class="mr-4" />
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-orange-600 lg:hidden flex flex-col items-start px-5 py-4 z-50"
      @click.self="hideMenu"
      style="height: 50vh;" 
    >
      <button
        @click="hideMenu"
        class="text-white text-2xl absolute top-4 right-5"
      >
        &#10005;
      </button>
      <div class="flex flex-col w-full mt-12 overflow-y-auto">
        <router-link
          @click="hideMenu"
          :to="{ name: 'byName' }"
          class="menu-item"
        >
          {{ $t('message.search') }}
        </router-link>
        <router-link
          @click="hideMenu"
          :to="{ name: 'byLetter' }"
          class="menu-item"
        >
          {{ $t('message.letter') }}
        </router-link>
        <router-link
          @click="hideMenu"
          :to="{ name: 'ingredients' }"
          class="menu-item"
        >
          {{ $t('message.ingredients') }}
        </router-link>
      </div>
    </div>

    <!-- Mobile LanguageSwitcher -->
    <div class="lg:hidden absolute right-5 top-1/2 transform -translate-y-1/2">
      <LanguageSwitcher />
    </div>

    <!-- Desktop Menu -->
    <div class="hidden lg:flex lg:items-center lg:gap-8 lg:ml-4">
      <router-link
        :to="{ name: 'byName' }"
        class="px-4 py-2 rounded-lg hover:bg-orange-700 transition"
      >
        {{ $t('message.search') }}
      </router-link>
      <router-link
        :to="{ name: 'byLetter' }"
        class="px-4 py-2 rounded-lg hover:bg-orange-700 transition"
      >
        {{ $t('message.letter') }}
      </router-link>
      <router-link
        :to="{ name: 'ingredients' }"
        class="px-4 py-2 rounded-lg hover:bg-orange-700 transition"
      >
        {{ $t('message.ingredients') }}
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import LanguageSwitcher from './LanguageSwitcher.vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function hideMenu() {
  isMenuOpen.value = false;
}
</script>

<style scoped>
/* Ensures that content is not hidden behind the mobile menu */
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50; /* Ensure the menu is above other content */
}

/* Adds a backdrop when menu is open */
.fixed:before {
  content: "";
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: -1;
}

/* Mobile menu item styles */
.menu-item {
  display: block;
  width: 100%;
  padding: 16px 0;
  text-align: center;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

/* Hover and active effect for mobile menu items */
.menu-item:hover,
.menu-item:active {
  background-color: #ff5722; /* Bright orange for better visibility */
}

/* Desktop menu item styles */
.lg\\:hover\\:bg-orange-700:hover {
  background-color: #e65100; /* Darker orange for hover on desktop */
}
</style>
