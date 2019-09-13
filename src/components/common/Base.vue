<script>
export default {
  props: {
    data: Object,
    caller: String,
    props: Object,
    events: Object
  },
  methods: {
    getProps() {
      let result = [];

      if (this.props) {
        result.push(this.props);
      }

      if (this.data.props) {
        result.push(this.data.props);
      }
      if (
        this.data.override &&
        this.data.override[this.caller] &&
        this.data.override[this.caller].props
      ) {
        result.push(this.data.override[this.caller].props);
      }
      return result;
    },
    getEvents() {
      let self = this;
      let eventHandlers = {
        ...self.$listeners
      };

      if (this.data) {
        if (this.data.events) {
          let events = this.data.events;
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
          this.data.override &&
          this.data.override[this.caller] &&
          this.data.override[this.caller].events
        ) {
          let override = this.data.override[this.caller].events;
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