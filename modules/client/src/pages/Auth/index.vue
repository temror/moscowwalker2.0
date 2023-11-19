<template>
  <div class="auth load">
    <img class="backIcon" src="../../assets/images/icons/backIcon.svg" alt="back" @click="$router.push('/')">
    <img src="../../assets/images/logo.svg" alt="htf"/>
    <div class="auth__form">
      <div class="auth__item">
        <input
            autocapitalize="none"
            autocomplete="off"
            ref="login"
            v-model.trim="state.username"
            name="login"
            type="text"
            class="auth__input"
            :class="{ border: focusLogin }"
        />
        <p
            class="auth__label"
            :class="{ focus: focusLogin }"
            @click="$refs.login.focus()"
        >
          {{ state.showName ? "Придумайте логин" : "Введите логин" }}
        </p>
      </div>
      <div class="auth__item" :class="{hidden: !state.showName}">
        <input
            autocapitalize="none"
            autocomplete="off"
            ref="name"
            v-model.trim="state.email"
            name="name"
            type="text"
            class="auth__input"
            :class="{ border: focusName }"
        />
        <p
            class="auth__label"
            :class="{ focus: focusName }"
            @click="$refs.name.focus()"
        >
          Введите почту
        </p>
      </div>
      <div class="auth__item">
        <input
            autocapitalize="none"
            autocomplete="off"
            ref="password"
            v-model.trim="state.password"
            name="password"
            :type="state.showPassword ? 'text' : 'password'"
            class="auth__input"
            :class="{ border: focusPassword }"
        />
        <p
            class="auth__label"
            :class="{ focus: focusPassword }"
            @click="$refs.password.focus()"
        >
          {{ state.showName ? "Придумайте пароль" : "Введите пароль" }}
        </p>
        <el-icon class="auth__showPassword" @click="state.showPassword = !state.showPassword">
          <View v-if="state.showPassword"/>
          <Hide v-else/>
        </el-icon>
      </div>
      <div class="auth__buttons">
        <button @click="login"
                @dblclick="emptyLoginThrottled"
                :class="{disabled: loginDisabled, selected: !state.showName}">ВОЙТИ
        </button>
        <button @click="register"
                @dblclick="emptyLoginThrottled"
                style="margin-left: 20px"
                :class="{selected: state.showName, disabled: passwordDisabled}">РЕГИСТРАЦИЯ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, reactive} from "vue";
import {useStore} from "@/stores/store";
import {validateLogin} from "@/lib/validateLogin";
import {ElIcon, ElMessage} from "element-plus";
import {Hide, View} from "@element-plus/icons-vue"
import {useRouter} from "vue-router";
import {throttle} from "@/lib/throttle";

const state = reactive({
  username: "",
  email: "",
  password: "",
  showName: false,
  label: true,
  showPassword: false
});

const {auth} = useStore()

const router = useRouter()

const loginDisabled = computed(() => (!state.showName && !state.username) || (!state.showName && !state.password))

const passwordDisabled = computed(() => (state.showName && !state.username) || (state.showName && !state.password))

const focusLogin = computed(() => state.username !== "");

const focusName = computed(() => state.email !== "");

const focusPassword = computed(() => state.password !== "");

const emptyLogin = () => {
  if (!state.username || !state.password)
    ElMessage('Поле логина или пароля пустое 🧐')
}

const emptyLoginThrottled = throttle(emptyLogin, 1000)

const useLogin = async (isAuth) => {
  if (state.showName !== isAuth) {
    state.showName = isAuth
    return
  }

  if (!state.username || !state.password) return

  const validate = validateLogin(state.username, state.password)

  if (validate) {

    const res = isAuth
        ? await auth.auth(state.username, state.password)
        : await auth.login(state.username, state.password)

    if(!isAuth && res !== null) await router.push('/')
  }
}

const login = () => useLogin(false)

const register = () => useLogin(true)

</script>

<style lang="scss" scoped>
$transition: 0.2s;
$main-color: #4ca24c;

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.auth {
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fefefe;

  h3 {
    font-weight: lighter;
    color: #525252;
    padding-bottom: 40px;
  }

  img {
    margin: 100px 0 100px 0;
    height: 140px;
  }

  h1 {
    margin: 20px 0 60px 0;
    font-weight: normal;
    color: #a4a9a4;
    font-size: 29px;
  }

  .subtitle {
    margin-bottom: 35px;
    color: rgba(28, 31, 31, 0.31);
    font-weight: lighter;
    text-align: center;
    line-height: 25px;
  }

  &__item {
    height: 50px;
    background-color: #fefefe;
    width: content-box;
    display: flex;
    flex-direction: column;
    transition: $transition;
    margin-bottom: 19px;
    position: relative;

    &:hover > input {
      border: 1px solid $main-color;
      transition: $transition;
    }

    &:hover > p {
      color: $main-color;
      transition: $transition;
    }

    input:focus {
      outline: 2px solid $main-color;
      border: 1px solid #f5f5f5;
      transition: $transition;
    }

    input:focus ~ p {
      transform: scale(0.7) translateY(-34px) translateX(-35px);
      color: $main-color;
      transition: $transition;
    }
  }

  &__label {
    transition: $transition;
    cursor: text;
    background-color: #fefefe;
    align-self: flex-start;
    margin: -52px 0 22px 10px;
    z-index: 1000;
    padding: 2px;
    font-size: 18px;
    color: #969696;
    border-radius: 30px;
    font-weight: lighter;
  }

  &__form {
    display: flex;
    flex-direction: column;
    min-width: 300px;
  }

  &__input {
    outline: 2px solid #f5f5f5;
    margin-bottom: 15px;
    background: none;
    border: 1px solid #969696;
    padding: 15px;
    border-radius: 10px;
    transition: $transition;
    caret-color: $main-color;
  }

  &__buttons {
    align-self: center;
    width: 400px;
    display: flex;
    justify-content: center;
    margin-top: 30px;

    button {
      padding: 15px 25px;
      font-family: Roboto Regular, sans-serif;
      border: none;
      background: none;
      color: $main-color;
      border-radius: 10px;
      font-size: 16px;
      cursor: pointer;
      transition: $transition;
      width: 200px;
    }

    button:hover {
      background-color: rgba(51, 108, 51, 0.2);
    }
  }

  &__showPassword {
    position: absolute;
    top: 12px;
    right: 18px;
    cursor: pointer;
    transition: $transition;
  }

  &__showPassword:hover {
    color: $main-color;
    transition: $transition;
  }
}

.focus {
  transform: scale(0.7) translateY(-34px) translateX(-35px);
  color: $main-color;
  transition: $transition;
}

.border {
  border: 1px solid $main-color;
}

.hidden {
  height: 0;
  margin-bottom: 0;
  transition: var(--common-transition);
  overflow: hidden;
}

.backIcon {
  position: absolute;
  top: 10px;
  left: 10px;
  margin: 20px !important;
  padding: 20px;
  width: 90px;
  height: 90px !important;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
}

.selected{
  background-color: $main-color !important;
  color: white !important;
}

.disabled {
  color: #7a7a7a !important;
  background: none !important;
  cursor: not-allowed !important;
  outline: 2px solid $main-color;
}

@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
