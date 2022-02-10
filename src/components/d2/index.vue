<template>
  <div>
    <parent :name="name" :value="value" @changeData="edit"></parent>
    {{ d1 }}
    <input type="text" ref="input1"/>
    <button @click="add">添加</button>
  </div>
</template>
<script>
import parent from "./parent.vue";
export default {
  data() {
    return {
      name: "aaa",
      value: "bbb",
      d1: "",
    };
  },
  components: {
    parent,
  },
  methods: {
    edit(d1) {
      this.d1 = d1;
    },
    add(){
      this.$refs.input1.value ="996";
    }
  },
};
</script>
<style>
</style>