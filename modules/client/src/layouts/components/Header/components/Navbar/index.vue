<template>
  <nav>
    <ul>
      <li>Куда идти?</li>
      <li>Зачем идти?</li>
      <li>А что там?</li>
    </ul>
  </nav>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
nav{
  ul{
    display: flex;
    list-style-type: none;
    li{
      font-family: "Roboto Light", sans-serif;
      padding-left: 20px;
      cursor: pointer;
    }
  }
}
</style>