<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-600">{{ $t('message.mealsFor') }} {{ ingredient.strIngredient }}</h1>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const ingredient = computed(() => store.state.ingredient);
const meals = computed(() => store.state.mealsByIngredient);

onMounted(() => {
  store.dispatch('searchMealsByIngredient', route.params.ingredient);
});
</script>
