<template>
  <header>
    <Logo width="170"/>
    <Navbar class="hidden"/>
    <UserMenu/>
  </header>
</template>

<script setup lang="ts">
import Logo from "@/ui/Logo"
import Navbar from "./components/Navbar"
import UserMenu from "./components/UserMenu"
</script>

<style lang="scss" scoped>
header{
  height: 100px;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 1000px) {
.hidden{
  display: none;
}
}
</style>