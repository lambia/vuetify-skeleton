<template>
  <v-app>
    <v-navigation-drawer
      v-model="state.drawer"
      @transitionend="onDrawerChange"
      right
      temporary
      app
      disable-resize-watcher
      disable-route-watcher
    >
      <v-list dense nav>
        <v-list-item
          v-for="(item, i) in config.menu.items"
          :key="i"
          link
          :href="item.href"
          :target="item.target"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app :elevation="2" class="secondary" :dark="$config.dark.secondary">
      <v-toolbar-title>
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          v-for="(item, i) in config.menu.items"
          :key="i"
          :href="item.href"
          :target="item.target"
          :to="item.to"
          :color="(item.color!==undefined)?item.color:config.menu.color"
          text
          :exact="true"
          class="d-none d-sm-flex"
        >
          <v-icon center class="mx-2 mx-md-1">{{ item.icon }}</v-icon>
          <span class="d-none d-md-block mx-1">{{ item.title }}</span>
        </v-btn>
        <v-btn text class="d-sm-none d-flex" @click="toggleDrawer">
          <v-icon center class="mx-2 mx-md-1">{{ config.menu.mobile.icon }}</v-icon>
          <span class="d-none d-md-block mx-1">{{ config.menu.mobile.title }}</span>
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
  methods: {
    toggleDrawer() {
      this.state.drawer = !this.state.drawer;
    },
    onDrawerChange() {
      console.log("Breakpoint XS: ", $vuetify.breakpoint.xsOnly);
    }
  },
  data: () => ({
    state: {
      drawer: false
    },
    config: {
      menu: {
        color: "white",
        mobile: {
          title: "Mostra menu", //ToDo: convertire in risorse
          icon: "mdi-menu"
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
            icon: "mdi-home",
            class: "d-none d-sm-flex"
          },
          {
            title: "About",
            to: "/about",
            icon: "mdi-account",
            class: "d-none d-sm-flex"
          }
        ]
      }
    }
  })
};
</script>
