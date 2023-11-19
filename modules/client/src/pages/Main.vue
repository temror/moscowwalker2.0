<template>
  <div class="main load">
    <hello-banner v-if="!auth.state.isAuth"/>
    <dashboard v-else/>
  </div>
</template>

<script setup lang="ts">
import HelloBanner from "@/components/HelloBanner/index.vue";
import Dashboard from "@/components/Dashboard/index.vue";
import {useStore} from "@/stores/store";

const {auth} = useStore()
</script>

<style lang="scss" scoped>
.main{
  height: 100%;
}
</style>