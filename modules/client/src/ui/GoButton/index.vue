<template>
  <div class="go">
    <img src="../../assets/images/goButton/go.svg" alt="go" class="go__item" />
    <img src="../../assets/images/goButton/go.svg" alt="go" class="go__item go__item_three" />
    <img src="../../assets/images/goButton/go1.svg" alt="go" class="go__item go__item_reverse" />
    <h1><slot></slot></h1>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.go {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: 0.4s;
  height: 400px;
  position: relative;
  margin-top: 50px;
  * {
    position: absolute;
  }
  h1 {
    z-index: 1000;
    font-family: "Roboto Light", sans-serif;
    font-weight: lighter;
    color: #e1e1e1;
    font-size: 70px;
    margin-top: 100px;
  }
  &:hover {
    transform: scale(1.02);
    transition: 0.4s;
  }
  &__item {
    width: 300px;
    animation: go 4s infinite linear;
  }
  &__item_reverse {
    transform: rotate(180deg);
    animation: go 5s infinite reverse linear 2s;
  }
  &__item_three {
    animation: go 7s infinite linear 1s;
  }
}
@keyframes go {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
