<template>
  <div>
    <slot></slot>
    <label v-if="label">{{ label }}</label>
    <p v-if="error" class="error">{{ error }}</p>
    <!-- <p>{{form.rules[prop]}}</p> -->
  </div>
</template>

<script>
import Schema from "async-validator";
export default {
  inject: ["form"],
  data() {
    return {
      error: "",
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  mounted() {
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      const rules = this.form.rules[this.prop];
      const value = this.form.model[this.prop];

      const des = { [this.prop]: rules };
      const validate = new Schema(des);

      return validate.validate({ [this.prop]: value }, (errors) => {
        if (errors) {
          this.error = errors[0].message;
        } else {
          this.error = "";
        }
      });
    },
  },
};
</script>

<style>
.error {
  color: red;
}
</style>