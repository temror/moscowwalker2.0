<template>
  <div class="logo" >
    <img :width="props.width" src="@/assets/images/logo.svg" alt="logo">
  </div>
</template>

<script setup lang="ts">
interface Props{
  width?: number
}

const props = withDefaults(defineProps<Props>(),{
  width: 300
})
</script>

<style lang="scss" scoped>

</style>