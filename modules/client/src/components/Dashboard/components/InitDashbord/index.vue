<template>
  <div class="initDashboard">
    <GoButton>Вперед!</GoButton>
  </div>
</template>

<script setup lang="ts">
import GoButton from "@/ui/GoButton"
import {useStore} from "@/stores/store";
</script>

<style lang="scss" scoped>
.initDashboard{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>