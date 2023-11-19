<template>
  <button :class="[props.size, props.type]"><slot></slot></button>
</template>

<script setup lang="ts">
type Size = 'large' | 'medium' | 'small'

type ButtonType = 'primary' | 'secondary'

interface Props{
  size?: Size
  type?: ButtonType
}

const props = withDefaults(defineProps<Props>(),{
  size: 'medium',
  type: 'primary'
})
</script>

<style lang="scss" scoped>
button{
  border: none;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(1,1,1,0.2);
}
.small{
  padding: 10px 20px;
  font-size: calc(var(--font-size) - 4px);

}
.medium{
  padding: 10px 24px;
  font-size: var(--font-size);
}
.large{
  padding: 12px 28px;
  font-size: calc(var(--font-size) + 4px);

}
.primary{
  color: var(--primary-text);
  background-color: var(--primary-bg);
  transition: var(--common-transition);
  &:hover{
    opacity: 0.8;
    transition: var(--common-transition);
  }
}
.secondary{
  color: var(--text-color);
  background-color: var(--background-color);
}
</style>