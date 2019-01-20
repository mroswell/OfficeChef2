<template>
  <div>
    <v-list>
      <v-subheader v-if="!favorites.length"
        >Your favorites list is empty</v-subheader
      >
      <div v-else class="text-xs-center">
        <v-subheader>Your Favorites</v-subheader>
        <v-list-tile
          avatar
          v-for="recipe in favorites"
          :key="recipe.name"
          @click="
            {
            }
          "
        >
          <v-list-tile-avatar> <img :src="recipe.img" /> </v-list-tile-avatar>
          <v-list-tile-content> {{ recipe.name }} </v-list-tile-content>
          <v-list-tile-action>
            <v-icon @click="removeFromFavorites(recipe);">delete</v-icon>
          </v-list-tile-action>
        </v-list-tile>
        <v-btn to="/form">Adopt</v-btn>
      </div>
    </v-list>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    favorites () {
      return this.$store.state.favorites
    }
  },
  methods: {
    ...mapActions(['removeFromFavorites'])
  }
}
</script>
