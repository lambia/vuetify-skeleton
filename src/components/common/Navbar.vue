<template>
  <v-app-bar app :elevation="2" class="secondary" :dark="$config.dark.secondary">
    <v-toolbar-title>
      <span>Vuetify</span>
      <span class="font-weight-light">MATERIAL DESIGN</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <template v-for="(item, i) in items">
        <v-btn
          v-if="item.hideFrom!=name"
          :key="i"
          :color="(item.color!==undefined)?item.color:options.color"
          text
          :exact="true"
          @click="eventHandler(item.click)"
          :href="item.href"
          :target="item.target"
          :to="item.to"
          :class="item.class"
        >
          <v-icon center class="mx-2 mx-md-1">{{ item.icon }}</v-icon>
          <span class="d-none d-md-block mx-1">{{ item.title }}</span>
        </v-btn>
      </template>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  //name: "Navbar",
  props: {
    eventBus: Object,
    items: Array,
    options: Object
  },
  methods: {
    eventHandler(e) {
      if (e) {
        this.eventBus.$emit(e.channel, e.payload);
      }
    }
  },
  data: () => ({
    name: "Navbar",
    state: {}
    /* EXAMPLE PROPS (spostare da qui)
    options: {
      color: "white",
      drawer: {
        title: "Mostra menu",
        icon: "mdi-menu"
      }
    },
    items: [
      {
        title: "Home",
        to: "/",
        icon: "mdi-home",
        class: "d-none d-sm-flex"
      },
      {
        title: "Google",
        href: "https://www.google.it",
        icon: "mdi-account",
        class: "d-none d-sm-flex"
      }
    ]
    */
  })
};
</script>
