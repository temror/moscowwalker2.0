<template>
  <div>
    <Button v-if="!auth.state.isAuth" @click="$router.push('/auth')">Войти</Button>
    <Button v-else @click="auth.logout">Выйти</Button>
  </div>
</template>

<script setup lang="ts">
import Button from "@/ui/Button"
import {useStore} from "@/stores/store";

const {auth} = useStore()
</script>

<style lang="scss" scoped>

</style>