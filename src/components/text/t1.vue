<template>
  <div>
    <a href="javascript:;" @click="$store.dispatch('switch_dialog')">点击</a>
    <t2></t2>
  </div>
</template>

<script>
import t2 from './t2.vue'
export default {
  components:{
    t2
  }
}
</script>