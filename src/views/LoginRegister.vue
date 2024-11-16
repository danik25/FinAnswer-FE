<script setup>
import Login from "@/components/account/Login.vue";
import Register from "@/components/account/Register.vue";
import { ref } from "vue";

const loginState = ref(true);
const internalError = ref(null);

function changeLoginState() {
  loginState.value = !loginState.value;
}

function showError(customError) {
  internalError.value = customError;
}
</script>

<template>
  <div>
    <div v-if="loginState">
      <Login @changeLoginState="changeLoginState" @showError="showError"></Login>
    </div>
    <div v-else>
      <Register @changeLoginState="changeLoginState" @showError="showError"></Register>
    </div>
    <div class="custom-error" v-if="showError">{{ internalError }}</div>
  </div>
</template>

<style>
* {
  border-radius: 5px;
}

.custom-error {
  margin: 8px;
  color: lightsalmon;
}
.login-register-wrapper {
  border: 2px solid lightgrey;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

input {
  margin: 8px;
  border: 1px solid lightgrey;
  padding: 5px;
}

.note {
  font-size: 11px;
  color: grey;
  margin: 8px;
}

.note button {
  color: blue;
  border: none;
  font-size: 12px;
  background-color: transparent;
  cursor: pointer;
}
</style>
