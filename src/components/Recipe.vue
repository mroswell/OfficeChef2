<template>
  <v-card color="grey lighten-2">
    <v-img :src="recipe.img" height="170px"> </v-img>
    <v-card-title>
      <div>
        <h3>{{ recipe.name }}</h3>
        <p class="recipe-category">{{ recipe.recipeCategory }}</p>
      </div>
    </v-card-title>
    <v-btn @click="$emit('addToFavorites', recipe);">Add to Favorites</v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object
    }
  }
}
</script>
