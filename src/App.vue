<template>
  <v-app>
    <Navbar/>
    <main >
      <div class="app-container">
        <router-view></router-view>
        <footer class="app-footer dark-brown">
          <p>The OfficeChef </p>
        </footer>
        </div>
    </main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  themeSwitched: false,
  computed: {
    favorites () {
      return this.$store.state.favorites
    }
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto");

/*brown and mint*/
/*dark brown 32292F
  light mint 99E1D9
  bisque F0F7F4
  dark mint 70ABAF
  light brown 705D56*/

*,
*:before,
*:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

main {
  padding: 40px;
  font-family: "Roboto", "sans-serif";
  background: #43803E top center repeat;
  color: #444;
  // background-image: url("https://res.cloudinary.com/organica/image/upload/e_gamma:86/v1546406100/OfficeChef.org/Screen_Shot_2018-12-30_at_11.25.43_PM.png");
  // background-image: url("https://res.cloudinary.com/organica/image/upload/b_rgb:ffffff,cs_no_cmyk,e_grayscale,o_41/v1546407225/culinary-backdrop.jpg");
  // background-image: url("https://res.cloudinary.com/organica/image/upload/c_scale,e_grayscale,o_50,w_583/e_gamma:50/v1546407225/culinary-backdrop.jpg")
}

h1,
p {
  margin: 0 0 1em 0;
}
h2 {
  line-height: 114%;
  margin-bottom: 10px;
  }

img {
  max-width: 100%;
  display: block;
  margin: 0 auto;
}

.app-container {
  max-width: 940px;
  margin: 24px auto;
  background-color: #fff;
}

.app-container > * {
  border-radius: 5px;
  font-size: 100%;
  margin-bottom: 10px;
}

.wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
}

.wrapper > * {
  padding: 15px;
  border-radius: 5px;
}

.light-mint {
  background-color: #FFEFA9 /* #99e1d9*/;
}

.dark-mint {
  background-color: #92C24C /* #70abaf */;
}

.bright-sun {
  background-color:#FCD848 /* #705d56*/;
  //* color: #f0f7f4*/;
}

.dark-brown {
  background-color: #32292f;
  color: #f0f7f4;
}

.bisque {
  background-color: #fffadd /* #DCCF4B/* #f0f7f4*/;
}

  a,
  input,
  button {
    transition: .25s;
  }

  .sr-only {
    position: absolute !important;
    top: 0;
    left: -999px;
    width: 1px !important;
    height: 1px !important;
    white-space: nowrap;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
  }

  .required label::after {
    top: -2px;
    content: '*';
    position: relative;
  }

.panel {
  /* needed for the flex layout*/
  margin-left: 5px;
  margin-right: 5px;
  flex: 1 1 200px;
}

.tall-panel {
  grid-row-end: span 2;
}

.app-header,
.app-footer {
  flex: 0 1 100%;
  padding: 15px;
  text-align: center;
}

nav.theme--light.v-toolbar {
  background-color: #FCD848
}

/* We need to set the margin used on flex items to 0 as we have gaps in grid.  */
@supports (display: grid) {
  .wrapper > * {
    margin: 0;
  }
}
</style>
