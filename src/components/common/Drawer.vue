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
          v-if="!item.override || !item.override[name] || !item.override[name].hidden"
          :key="i"
          link
          v-on="eventHandler(item.events)"
          v-bind="getProps(item)"
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
    items: Array
  },
  methods: {
    getProps(item) {
      let props = [];

      if (item.props) {
        props.push(item.props);
      }
      if (
        item.override &&
        item.override[this.name] &&
        item.override[this.name].props
      ) {
        props.push(item.override[this.name].props);
      }
      return props;
    },
    eventHandler(events) {
      let self = this;
      let eventHandlers = {
        ...self.$listeners
      };

      if (events) {
        let eventsKeys = Object.keys(events);

        for (let i = 0; i < eventsKeys.length; i++) {
          const event = eventsKeys[i];
          eventHandlers[event] = function(e) {
            self.$eventBus.$emit(events[event].channel, events[event].payload);
          };
        }
      }

      return eventHandlers;
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
    this.$eventBus
      .$off("drawer.toggle")
      .$on("drawer.toggle", this.toggleDrawer);
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