<template>
  <div>
    <div>{{ count }}</div>
    <button @click="add">add</button>
  </div>
</template>

<script>
  import useCount from '@/hooks/useCount'
  export default {
    setup() {
      const { count, add } = useCount()
      return {
        count,
        add
      }
    }
  }
</script>

<style lang="less" scoped></style>