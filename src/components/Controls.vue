<template lang="pug">
  .Controls
    p
      span(v-bind:style="{ backgroundColor: store.colorFrom }") {{ store.colorFrom }}
      span - 
      span(v-bind:style="{ backgroundColor: store.colorTo }") {{ store.colorTo }}
    ColorInput(@onInput="handleColorFromInput")
    ColorInput(@onInput="handleColorToInput")
    ShadesCount
    button(v-on:click="generateWaterfall") Let it fall!
</template>

<script>
import store from '../store'

import ColorInput from './ColorInput.vue'
import ShadesCount from './ShadesCount.vue'

export default {
  data: () => ({
    store: store.state,
  }),
  components: {
    ColorInput,
    ShadesCount,
  },
  methods: {
    handleColorFromInput: val => store.handleColorFromInput(val),
    handleColorToInput: val => store.handleColorToInput(val),
    generateWaterfall: () => store.generateWaterfall(),
  }
}
</script>

<style>
  .Controls {
    position: absolute;
    left: -10px;
    bottom: 0;
    width: calc(100% + 20px);
    height: 180px;
    background-color: #f2f2f2;
    box-shadow: 0 40px 75px 10px black;
  }
</style>
