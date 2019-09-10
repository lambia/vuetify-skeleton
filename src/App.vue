<template>
  <v-app>
    <v-app-bar app :elevation="2">
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text href="/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
      <v-btn text to="/">
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn text to="/about">
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    //
  })
};
</script>
