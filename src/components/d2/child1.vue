<template>
  <div>
    <input v-model="d1" @input="edit"/>
  </div>
</template>
<script>
export default {
  data(){
    return {
      d1: 200
    }
  },
  props: {
    name: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  methods:{
    edit(){
      console.log("1111");
      this.$emit("changeData", this.d1);
    }
  }
};
</script>

<style>
</style>