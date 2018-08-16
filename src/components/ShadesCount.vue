<template lang="pug">
  select(v-model="shadesCount" v-on:change="handleShadeCountChange")
    option(value="1") 1
    option(value="2") 2
    option(value="3") 3
    option(value="4") 4
    option(value="5") 5
</template>

<script>
import store from '../store'

export default {
  name: 'ShadesCount',
  data: () => ({
    shadesCount: store.state.shadesCount,
  }),
  methods: {
    handleShadeCountChange() {
      store.handleShadeCountChange(this.shadesCount)
    },
  }
}
</script>
