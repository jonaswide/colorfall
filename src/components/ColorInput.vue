<template lang="pug">
  .ColorInput
    input(type="text" v-model="input" @input="$emit('onInput', input)")
</template>

<script>
export default {
  name: 'ColorInput',
  data: () => ({
    input: '',
  })
}
</script>

<style scoped>

</style>
