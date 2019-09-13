<template>
  <component
    :is="component"
    v-if="!item.override || !item.override[caller] || !item.override[caller].hidden"
    v-on="eventHandler()"
    v-bind="getProps()"
  >
    <slot></slot>
  </component>
</template>

<script>
import { VBtn, VListItem } from "vuetify/lib";

export default {
  //name: "Element",
  components: {
    VBtn,
    VListItem
  },
  props: {
    item: Object,
    caller: String,
    props: Object,
    component: String
  },
  data: () => ({
    name: "Element",
    state: {}
  }),
  methods: {
    getProps() {
      let result = [];

      if (this.props) {
        result.push(this.props);
      }

      if (this.item.props) {
        result.push(this.item.props);
      }
      if (
        this.item.override &&
        this.item.override[this.caller] &&
        this.item.override[this.caller].props
      ) {
        result.push(this.item.override[this.caller].props);
      }
      return result;
    },
    eventHandler() {
      let self = this;
      let eventHandlers = {
        ...self.$listeners
      };

      if (this.item) {
        if (this.item.events) {
          let events = this.item.events;
          let eventsKeys = Object.keys(events);

          for (let i = 0; i < eventsKeys.length; i++) {
            const event = eventsKeys[i];
            eventHandlers[event] = function(e) {
              self.$eventBus.$emit(
                events[event].channel,
                events[event].payload
              );
            };
          }
        }

        if (
          this.item.override &&
          this.item.override[this.caller] &&
          this.item.override[this.caller].events
        ) {
          let override = this.item.override[this.caller].events;
          let eventsKeys = Object.keys(override);

          for (let i = 0; i < eventsKeys.length; i++) {
            const event = eventsKeys[i];
            eventHandlers[event] = function(e) {
              self.$eventBus.$emit(
                override[event].channel,
                override[event].payload
              );
            };
          }
        }
      }

      return eventHandlers;
    }
  }
};
</script>