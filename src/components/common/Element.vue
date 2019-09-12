<template>
  <v-btn>
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  //name: "Element",
  props: {},
  data: () => ({
    name: "Element",
    state: {}
  })
};
</script>