<template>
  <v-app>
    <v-app-bar app :elevation="2" class="secondary" :dark="$config.dark.secondary">
      <v-toolbar-title>
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-sm-block">
        <v-btn
          v-for="(item, i) in menu.items"
          :key="i"
          :href="item.href"
          :target="item.target"
          :to="item.to"
          :color="(item.color!=undefined)?item.color:menu.config.color"
          text
          :icona="(item.icon!=undefined)?true:false"
          exact="true"
        >
          <v-icon center class="mx-2 mx-md-1">{{ item.icon }}</v-icon>
          <span class="d-none d-md-block mx-1">{{ item.title }}</span>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { readlink } from "fs";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data: () => ({
    menu: {
      config: {
        color: "white"
      },
      items: [
        //   {
        //     title: "Google",
        //     href: "https://www.google.it",
        //     target: "_blank"
        //   },
        {
          title: "Home",
          to: "/",
          icon: "mdi-home"
        },
        {
          title: "About",
          to: "/about",
          icon: "mdi-account"
        }
      ]
    }
  })
};
</script>
