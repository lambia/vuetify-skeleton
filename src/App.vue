<template>
  <v-app>
    <v-app-bar app :elevation="2">
      <v-toolbar-title>
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        v-for="(item, i) in menuItems"
        :key="i"
        :href="item.href"
        :target="item.target"
        :to="item.to"
      >
        <span class="mr-2">{{ item.text }}</span>
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
    menuItems: [
      {
        text: "Google",
        href: "https://www.google.it",
        target: "_blank"
      },
      {
        text: "Home",
        to: "/"
      },
      {
        text: "About",
        to: "/about"
      }
    ]
  })
};
</script>
