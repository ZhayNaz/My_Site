<template>
  <v-app>
    <v-app-bar
      color="#f1f3f4"
      height="68"
      elevation="2"
      density="comfortable"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="text-dark" />

      <v-app-bar-title class="text-dark">
        <b>Zhay's Technoprenuership</b>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn
        icon
        class="text-dark"
        @click="toggleDarkMode"
      >
        <v-icon>{{ dark ? 'mdi-weather-night' : 'mdi-white-balance-sunny' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      color="#ffffff"
      elevation="2"
      width="250"
      temporary
    >
      <v-list>
        <v-list-item to="/" @click="drawer = false">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item to="/contact" @click="drawer = false">
          <v-list-item-title>Contact</v-list-item-title>
        </v-list-item>

        <v-list-item to="/blogs" @click="drawer = false">
          <v-list-item-title>Blogs</v-list-item-title>
        </v-list-item>

        <v-list-item to="/music" @click="drawer = false">
          <v-list-item-title>Music</v-list-item-title>
        </v-list-item>

        <v-list-item to="/about" @click="drawer = false">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>

        <v-list-item to="/donate" @click="drawer = false">
          <v-list-item-title>Donate</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      dark: true,
    }
  },
  methods: {
    toggleDarkMode() {
      this.dark = !this.dark;
      document.body.classList.toggle('text-dark', this.dark);
    }
  }
}
</script>

<style>
.text-dark {
  color: #3c4043 !important;
}
.bg-grey-lighten-4 {
  background-color: #f5f5f5 !important;
}
</style>