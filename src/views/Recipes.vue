<template>
  <v-container grid-list-md fluid>
    <v-layout wrap>
      <v-flex xs12 sm4 md3 v-for="recipe in recipes" :key="recipe.recipeCategory">
        <app-recipe :recipe="recipe" @addToFavorites="addToFavorites"></app-recipe>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import { Recipes } from '../data/recipes.js'
import Recipe from '../components/Recipe.vue'

export default {
  components: {
    appRecipe: Recipe
  },
  data () {
    return {
      recipes: Recipes
    }
  },
  methods: {
    ...mapActions(['addToFavorites'])
  }

}
</script>
