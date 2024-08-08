<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">{{ $t('message.meals') }}</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from "vue";
import Meals from "../components/Meals.vue";
import axiosClient from "../axiosClient.js";

const meals = ref([]);

onMounted(async () => {
  try {
    for (let i = 0; i < 10; i++) {
      const response = await axiosClient.get('random.php');
      if (response.data && response.data.meals && response.data.meals[0]) {
        meals.value.push(response.data.meals[0]);
      }
    }
  } catch (error) {
    console.error("Error fetching meals:", error);
  }
});
</script>
