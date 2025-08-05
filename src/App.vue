<template>
  <input type="text" v-model.lazy="city">
  <ul>
    <li v-for="item in weather" :key="item.date">{{ item.date + item.daytemp_float + item.dayweather }}</li>
  </ul>
</template>

<script setup>
  import { ref } from 'vue'
  import useAxios from '@/hooks/useAxios'

  let city = ref('郑州')
  let { weather } = useAxios(city)

</script>

<style lang="less" scoped></style>
