<script setup>
import { ref } from "vue";
import { userService } from "@/services/userService";
import GeneralButton from "../buttons/GeneralButton.vue";
import consts from "@/consts";

// const props = defineProps(['changeLoginState'])
const emit = defineEmits(["changeLoginState", "showError"]);

const userName = ref("");
const password = ref("");

async function onLogin() {
  try {
    console.log(`trying to login with: ${userName.value}, ${password.value}`);
    await userService.login(userName.value, password.value);

    userName.value = "";
    password.value = "";
    emit("showError", null);
    
    console.log("success!")
  } catch (e) {
    console.log("error: ", e);
    emit("showError", "User does not exists, or password is wrong");
  }
}

function onSignUp() {
  console.log("switch to register");
  emit("changeLoginState");
  emit("showError", null);
}
</script>

<template>
  <div class="login-register-wrapper">
    <form @submit.prevent="onLogin">
      <div class="input-box">
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
      </div>
      <GeneralButton
        :disabled="userName.length === 0 || password.length === 0"
        content="Login"
      ></GeneralButton>
    </form>
    <div class="note">
      {{ consts.register.register
      }}<button @click="onSignUp">{{ consts.register.button }}</button>
    </div>
  </div>
</template>
