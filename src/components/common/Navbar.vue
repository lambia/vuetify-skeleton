<template>
  <v-app-bar app :elevation="2" class="secondary" :dark="$config.dark.secondary">
    <v-toolbar-title>
      <span>Vuetify</span>
      <span class="font-weight-light">MATERIAL DESIGN</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <template v-for="(item, i) in items">
        <Element :key="i" :item="item" :props="props" :caller="name" component="v-btn">
          <v-icon center class="mx-2 mx-md-1">{{ item.icon }}</v-icon>
          <span class="d-none d-md-block mx-1">{{ item.title }}</span>
        </Element>
      </template>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import Element from "@/components/common/Element";

export default {
  //name: "Navbar",
  props: {
    items: Array,
    props: Object
  },
  components: {
    Element
  },
  data: () => ({
    name: "Navbar",
    state: {}
  })
};
</script>
