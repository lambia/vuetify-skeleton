<template>
  <component
    :is="component"
    v-if="!config.override || !config.override[caller] || !config.override[caller].hidden"
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
    config: Object,
    caller: String,
    options: Object,
    component: String
  },
  data: () => ({
    name: "Element",
    state: {}
  }),
  methods: {
    getProps() {
      let props = [];

      if (this.options && this.options.props) {
        props.push(this.options.props);
      }

      if (
        this.options &&
        this.options.override &&
        this.options.override[this.caller]
      ) {
        props.push(this.options.override[this.caller]);
      }

      if (this.config.props) {
        props.push(this.config.props);
      }
      if (
        this.config.override &&
        this.config.override[this.caller] &&
        this.config.override[this.caller].props
      ) {
        props.push(this.config.override[this.caller].props);
      }
      return props;
    },
    eventHandler() {
      let self = this;
      let eventHandlers = {
        ...self.$listeners
      };

      if (this.config) {
        if (this.config.events) {
          let events = this.config.events;
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
          this.config.override &&
          this.config.override[this.caller] &&
          this.config.override[this.caller].events
        ) {
          let override = this.config.override[this.caller].events;
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