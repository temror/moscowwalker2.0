<template>
  <div class="layout">
    <header-component/>
    <main>
      <router-view/>
    </main>
    <footer-component/>
  </div>
</template>

<script setup>
import HeaderComponent from "./components/Header"
import FooterComponent from "./components/Footer"
import Main from "@/pages/Main.vue";
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 1 auto;
}
</style>