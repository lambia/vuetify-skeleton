<template>
  <v-app>
    <navbar :eventBus="eventBus" :items="config.menu.items" :options="config.menu.options" />
    <drawer :eventBus="eventBus" :items="config.menu.items" />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/common/Navbar";
import Drawer from "./components/common/Drawer";
import { readlink } from "fs";

export default {
  name: "App",
  components: {
    Navbar,
    Drawer
  },
  data: () => ({
    eventBus: window.EventBus,
    config: {
      drawer: {
        options: {
          close: {
            title: "Nascondi",
            icon: "mdi-close"
          }
        }
      },
      menu: {
        options: {
          color: "white"
        },
        items: [
          {
            title: "Chiudi",
            icon: "mdi-close",
            event: {
              click: {
                channel: "drawer.toggle",
                payload: false
              }
            },
            hideFrom: "Navbar"
          },
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
          },
          {
            title: "Mostra menu",
            icon: "mdi-menu",
            class: "d-sm-none d-flex",
            event: {
              click: {
                channel: "drawer.toggle"
              }
            },
            hideFrom: "Drawer"
          }
        ]
      }
    }
  })
};
</script>
