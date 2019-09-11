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
        <v-list-item
          v-if="item.hideFrom!=name"
          :key="i"
          link
          :href="item.href"
          :target="item.target"
          :to="item.to"
          @click="eventHandler(item.event['click'])"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  //name: "Drawer",
  props: {
    eventBus: Object,
    items: Array
  },
  methods: {
    eventHandler(e) {
      this.eventBus.$emit(e.channel, e.payload);
    },
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
    this.eventBus.$off("drawer.toggle").$on("drawer.toggle", this.toggleDrawer);
  },
  data: () => ({
    name: "Drawer",
    state: {
      visible: false
    }
    /* EXAMPLE PROPS (spostare da qui)
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