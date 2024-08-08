// src/i18n.js
import { createI18n } from "vue-i18n";

// Define your translations
const messages = {
  en: {
    message: {
      meals: "Random Meals",
      login: "Login Page",
      nomeals: "There are no meals",
      home: " Home",
      search: "Search Meals",
      letter: "Meals By Letter",
      ingredients: "Meals By Ingredients",
      food: "Ingredients",
      category: "Category",
      area: "Area",
      tags: "Tags",
      measures: "Measures",
      view: "View Original Source",
      mealList: "Meal list",
      mealsFor: "Meals for",
      mealsByLetter: "Meals by Letter",
      searchMealsbyName: "Search Meals by Name",
      searchForIngredients: "Search for Ingredients",
    },
  },
  sk: {
    message: {
      meals: "Náhodné jedlá",
      login: "Stránka na prihlásenie",
      nomeals: "Nie sú tu žiadne jedlá",
      home: "Domov",
      search: "Vyhľadávanie jedál",
      letter: "Stravovanie podľa listu",
      ingredients: "Jedlá podľa ingrediencií",
      food: "Ingrediencie",
      category: "Kategória",
      area: "Oblasť",
      tags: "Poznámky",
      measures: "Miery",
      view: "Zobraziť originálny zdroj",
      mealList: "Zoznam jedál",
      mealsFor: "Jedlá pre",
      mealsByLetter: "Jedlá podľa listu",
      searchMealsbyName: "Vyhľadávanie jedál podľa názvu",
      searchForIngredients: "Vyhľadávanie ingrediencií",
    },
  },
};

// Create i18n instance
const i18n = createI18n({
  locale: "sk", // Default locale
  messages,
});

export default i18n;
