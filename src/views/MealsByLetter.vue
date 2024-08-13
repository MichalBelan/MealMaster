<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-600">{{ $t('message.mealsByLetter') }}</h1>
    <div class="flex flex-wrap gap-2 mb-6">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters"
        :key="letter"
        class="text-xl font-bold text-gray-200 hover:text-orange-600 transition-transform transform hover:scale-125"
      >
        {{ letter }}
      </router-link>
    </div>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const meals = computed(() => store.state.mealsByLetter);

watch(() => route.params.letter, (newLetter) => {
  store.dispatch("searchMealsByLetter", newLetter);
});

onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
