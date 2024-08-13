<template>
    <a
      :href="href"
      target="_blank"
      class="px-2 py-1 rounded border-2 text-white border-red-600  hover:bg-red-600 transition-colors"
    >
      <slot><i class='bx bxl-youtube' style="font-size: 2rem; color: red;"></i></slot>
    </a>
  </template>
  
  <script setup>
  const props = defineProps({
    href: String
  })
  </script>