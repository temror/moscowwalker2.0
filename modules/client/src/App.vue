<script setup lang="ts">
import { RouterView } from 'vue-router'
import {useStore} from "@/stores/store";
import {onMounted} from "vue";
import {localStorageItems} from "@/types/LocalStorage";

const {theme} = useStore()


const {auth, places} = useStore()

onMounted(async ()=>{
  if(localStorage.getItem(localStorageItems.token)) {
    auth.authInit()
    await places.getPlaces()
  }
})
</script>

<template>
  <div class="app load" :class="theme.theme">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.app{
  width: 100%;
  height: 100%;
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--font-size);
}
</style>
