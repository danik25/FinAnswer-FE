<script setup>
import { ref } from "vue";

import GeneralButton from "../buttons/GeneralButton.vue";
import consts from "@/consts";

import { userService } from "../../services/userService";

const userName = ref("");
const password = ref("");
const passwordVerification = ref("");

const validPassword = ref(false);

const emit = defineEmits(["changeLoginState", "showError"]);

async function onRegister() {
  try {
    const res = await userService.createUser(userName.value, password.value);

    userName.value = "";
    password.value = "";
    passwordVerification.value = "";
    emit("showError", null);
  } catch (e) {
    console.log("error: ", e);
    emit("showError", "User already in use!");
  }
}

function onLogin() {
  console.log("switch to login");
  emit("changeLoginState");
  emit("showError", null);
}

function validatePassword() {
  validPassword.value = passwordVerification.value === password.value;
  console.log("valid: ", validPassword.value)
}
</script>

<template>
  <div class="login-register-wrapper">
    <form @submit.prevent="onRegister">
      <div>
        <div>
          <input
            required
            v-model="userName"
            type="text"
            placeholder="User Name"
          />
        </div>
        <div>
          <input
            required
            v-model="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div>
          <input
            required
            v-model="passwordVerification"
            type="password"
            @input="validatePassword"
            placeholder="Verify Password"
          />
        </div>
      </div>
      <GeneralButton
        :disabled="
          userName.length === 0 || password.length === 0 || !validPassword
        "
        content="Register"
      ></GeneralButton>
    </form>
    <div class="note">
      {{ consts.login.login
      }}<button @click="onLogin">{{ consts.login.button }}</button>
    </div>
  </div>
</template>
