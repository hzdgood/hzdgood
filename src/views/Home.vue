<template>
  <div class="home">
    <KForm :model="model" :rules="rules" ref="form">
      <KFormItem label="用户名" prop="username">
        <KInput
          v-model="model.username"
          type="text"
          placeholder="qing"
        ></KInput>
      </KFormItem>
      <KFormItem label="密码" prop="password">
        <KInput
          v-model="model.password"
          type="password"
          placeholder="qing"
        ></KInput>
      </KFormItem>
      <KFormItem>
        <button @click="onLogin">登入</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
// @ is an alias to /src
import KInput from "@/components/my/KInput.vue";
import KFormItem from "@/components/my/KFormItem.vue";
import KForm from "@/components/my/KForm.vue";

export default {
  data() {
    return {
      foo: "",
      model: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "111" }],
        password: [{ required: true, message: "222" }],
      },
    };
  },
  name: "Home",
  components: {
    KInput,
    KFormItem,
    KForm,
  },
  methods: {
    onLogin() {
      this.$refs.form.validate((valid) => {
        if (!valid) {
          alert(valid);
        } else {
          alert(valid);
        }
      });
    },
  },
};
</script>
