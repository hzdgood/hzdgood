<template>
  <div>
    {{name}} : {{value}}
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
    value: {
      type: String,
    },
  },
};
</script>

<style>
</style>