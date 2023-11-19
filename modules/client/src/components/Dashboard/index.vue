<template>
  <div class="dashboard">
    <InitDashboard v-if="!places.state.places.length"/>
    <div v-else>
      <p v-for="place in places.state.places">{{place.place.title}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import InitDashboard from "./components/InitDashbord"
import {useStore} from "@/stores/store";

const {places} = useStore()
</script>

<style lang="scss" scoped>
.dashboard{
  height: 100%;
}
</style>