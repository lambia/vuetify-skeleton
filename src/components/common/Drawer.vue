<template>
  <v-navigation-drawer
    v-model="state.visible"
    @transitionend="onDrawerChange"
    right
    temporary
    app
    disable-resize-watcher
    disable-route-watcher
  >
    <v-list dense nav>
      <template v-for="(item, i) in items">
        <Element :key="i" :config="item" :caller="name" :options="options" component="v-list-item">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </Element>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import Element from "@/components/common/Element";

export default {
  //name: "Drawer",
  props: {
    items: Array,
    options: Object
  },
  components: {
    Element
  },
  methods: {
    toggleDrawer(value) {
      if (value != undefined) {
        this.state.visible = value;
      } else {
        this.state.visible = !this.state.visible;
      }
    },
    onDrawerChange() {
      //console.log("Breakpoint XS: ", this.$vuetify.breakpoint.xsOnly);
    }
  },
  created() {
    this.$eventBus
      .$off("drawer.toggle")
      .$on("drawer.toggle", this.toggleDrawer);
  },
  data: () => ({
    name: "Drawer",
    state: {
      visible: false
    }
  })
};
</script>