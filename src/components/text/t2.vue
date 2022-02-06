<template>
  <div>
    <button v-if="show == true" @click="onclick">点击</button>
    <p>{{ sex }}</p>
    <p>{{ show }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    sex: (state) => state.sex,
    show: (state) => state.show
  }),
  methods: {
      onclick(){
          this.$store.dispatch('switch_dialog')
      }
  }
};
</script>