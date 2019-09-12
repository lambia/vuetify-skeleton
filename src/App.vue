<template>
  <v-app>
    <navbar :items="config.menu.items" :options="config.menu.options" />
    <drawer :items="config.menu.items" />

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
          props: {
            color: "white"
          }
        },
        items: [
          {
            title: "Chiudi",
            icon: "mdi-close",
            events: {
              click: {
                channel: "drawer.toggle",
                payload: false
              }
            },
            override: {
              Navbar: {
                hidden: true
              }
            }
          },
          {
            title: "Home",
            icon: "mdi-home",
            props: {
              to: "/"
            },
            override: {
              Navbar: {
                props: {
                  class: "d-none d-sm-flex"
                }
              }
            }
          },
          {
            title: "About",
            icon: "mdi-account",
            props: {
              to: "/about"
            },
            override: {
              Navbar: {
                props: {
                  class: "d-none d-sm-flex"
                }
              }
            }
          },
          {
            title: "Mostra menu",
            icon: "mdi-menu",
            events: {
              click: {
                channel: "drawer.toggle"
              }
            },
            override: {
              Navbar: {
                props: {
                  class: "d-sm-none d-flex"
                }
              },
              Drawer: { hidden: true }
            }
          }
        ]
      }
    }
  })
};
</script>

<style>
/* Togli il focus dai bottoni */
.v-btn:focus::before {
  opacity: 0 !important;
}
/* .v-btn:not(.v-btn--active):focus::before {
  opacity: 0 !important;
} */
.v-btn--active:focus::before {
  opacity: 0.24 !important;
}
</style>