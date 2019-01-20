<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="3000" top color="success">
      <span>Awesome! you added a new project.</span>
      <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-toolbar flat app dense>
      <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"/>
      <v-toolbar-title class="grey--text">
        <v-toolbar-items>
          <v-btn to="/" flat>
            <span class="font-weight-light">Office</span><span>Chef</span>
            </v-btn>
        </v-toolbar-items>
      </v-toolbar-title>
      <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn to="/" flat>Home</v-btn>
            <v-btn to="/recipes" flat>Recipes</v-btn>
            <v-btn to="/equipment" flat>Equipment</v-btn>
            <v-btn to="/favorites" flat>Favorites</v-btn>
            <v-btn @click="themeSwitched = !themeSwitched;">Switch theme</v-btn>
            </v-toolbar-items>

            <router-link to="/favorites">
              <v-badge
                color="grey lighten-1"
                overlap
                right
                v-model="favorites.length"
              >
                <span slot="badge">{{ favorites.length }}</span>
                <v-icon large>loyalty</v-icon>
              </v-badge>
            </router-link>

      <!-- dropdown menu -->
      <!-- <v-menu offset-y>
        <v-btn flat slot="activator" color="grey">
          <v-icon left>expand_more</v-icon>
          <span>Menu</span>
        </v-btn>
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu> -->

    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <!-- <v-avatar size="100">
            <img src="/avatar-1.png" alt="">
          </v-avatar> -->
          <p class="white--text subheading mt-1">
            OfficeChef
          </p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <!-- <Popup @projectAdded="snackbar = true"/> -->
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
// import Popup from './Popup'

export default {
//   components: { Popup },

  data () {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Home', route: '/' },
        { icon: 'folder', text: 'Recipess', route: '/recipes' },
        { icon: 'person', text: 'Favorites', route: '/favorites' }
      ],
      snackbar: false,
      themeSwitched: false

    }
  },
  computed: {
    favorites () {
      return this.$store.state.favorites
    }
  }
}
</script>
