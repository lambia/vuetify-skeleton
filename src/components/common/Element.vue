<template>
  <v-btn
    v-if="!data.override || !data.override[caller] || !data.override[caller].hidden"
    v-on="getEvents()"
    v-bind="getProps()"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
import Base from "@/components/common/Base";

export default {
  //name: "Element",
  mixins: [Base],
  props: {
    data: Object,
    caller: String,
    props: Object,
    events: Object
  },
  data: () => ({
    name: "Element"
  })
};
</script>