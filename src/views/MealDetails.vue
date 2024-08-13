<template>
  <div class="max-w-3xl mt-3 mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h1 class="text-4xl font-bold mb-5 text-orange-600">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full h-80 object-cover rounded-lg mb-5" />
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-lg mb-5">
      <div>
        <strong class="font-bold text-gray-800">{{ $t('message.category') }}:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold text-gray-800">{{ $t('message.area') }}:</strong> {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold text-gray-800">{{ $t('message.tags') }}:</strong> {{ meal.strTags }}
      </div>
    </div>

    <div class="mb-5">
      <h2 class="text-2xl font-semibold mb-2">{{ $t('message.instructions') }}</h2>
      <p class="text-gray-700">{{ meal.strInstructions }}</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <h2 class="text-2xl font-semibold mb-2">{{ $t('message.food') }}</h2>
        <ul class="list-disc pl-5">
          <template v-for="(el, ind) in new Array(20)" :key="'ingredient-' + ind">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-2">{{ $t('message.measures') }}</h2>
        <ul class="list-disc pl-5">
          <template v-for="(el, ind) in new Array(20)" :key="'measure-' + ind">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
    </div>

    <div class="mt-6 flex gap-4">
      <YouTubeButton :href="meal.strYoutube" />
      <a
        :href="meal.strSource"
        target="_blank"
        class="ml-3 px-4 py-2 rounded-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-100 transition-colors"
      >
        {{ $t('message.view') }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YouTubeButton from '../components/YouTubeButton.vue';

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({ data }) => {
      meal.value = data.meals[0] || {};
    })
});
</script>

<style scoped>
/* Uprav štýly podľa potreby */
</style>
