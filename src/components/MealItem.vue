<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img
        :src="meal.strMealThumb"
        :alt="meal.strMeal"
        class="w-full h-48 object-cover"
      />
    </router-link>
    <div class="p-4">
      <h3 class="text-xl font-bold mb-2">{{ meal.strMeal }}</h3>
      <p class="text-gray-600 mb-4">
        {{ $filters.truncateWords(meal.strInstructions, 20) }}
      </p>
      <div class="flex items-center justify-between">
        <YouTubeButton :href="meal.strYoutube" />
      </div>
    </div>
  </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';

const { meal } = defineProps({
  meal: {
    required: true,
    type: Object
  }
});
</script>
