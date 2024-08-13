<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-600">{{ $t('message.food') }}</h1>
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 border-gray-300 bg-white focus:ring-orange-500 focus:border-orange-500 mb-6 w-full p-2"
      :placeholder="$t('message.searchForIngredients')"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <a
        v-for="ingredient in computedIngredients"
        :key="ingredient.idIngredient"
        @click.prevent="openIngredient(ingredient)"
        class="block bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
      >
        <h3 class="text-2xl font-semibold">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import axiosClient from '../axiosClient';
import store from '../store';

const router = useRouter();
const keyword = ref('');
const ingredients = ref([]);
const computedIngredients = computed(() => {
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

function openIngredient(ingredient) {
  store.commit('setIngredient', ingredient);
  router.push({
    name: 'byIngredient',
    params: { ingredient: ingredient.strIngredient },
  });
}

onMounted(() => {
  axiosClient.get('list.php?i=list').then(({ data }) => {
    if (data && data.meals) {
      ingredients.value = data.meals;
    } else {
      console.error('Unexpected data format:', data);
    }
  }).catch((error) => {
    console.error('Error fetching ingredients:', error);
  });
});
</script>


