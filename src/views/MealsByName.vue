<template>
  <div class="p-8">
    <h1 class="text-4xl font-bold mb-4 text-orange-600">{{ $t('message.searchMealsbyName') }}</h1>
    <div class="px-8 pb-3">
      <input
        type="text"
        v-model="keyword"
        class="rounded border-2 border-gray-300 bg-white focus:ring-orange-500 focus:border-orange-500 w-full p-2"
        :placeholder="$t('message.searchMealsbyName')"
        @input="searchMeals"
      />
    </div>
    <Meals :meals="meals" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import store from '../store';
import Meals from '../components/Meals.vue';

const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}

onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
