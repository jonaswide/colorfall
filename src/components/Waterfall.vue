<template lang="pug">
  .Waterfall
    .Waterfall-top(v-bind:style="{ backgroundColor: waterfall[0] }")
    ul
      li(v-for="(color, i) in waterfall" v-bind:style="{ backgroundColor: color, height: 100 / waterfall.length + '%' }") 
        p {{ color }}
</template>

<script>
import store from '../store'

export default {
  name: 'Waterfall',
  data: () => ({
    colorFrom: store.state.colorFrom,
    waterfall: store.state.waterfall,
  })
}
</script>

<style scoped>
  .Waterfall {
    position: relative;
    height: calc(100% - 120px - 180px);
  }

  .Waterfall-top {
    position: absolute;
    left: -10px;
    bottom: 100%;
    height: 10px;
    width: calc(50% + 200px + 10px);
    border-radius: 0 20px 0 0;
    z-index: 2;
  }

  .Waterfall::after {
    content: "";
    position: absolute;
    left: -10px;
    top: 0;
    height: 100%;
    width: calc(50% - 200px + 10px);
    background-color: #b17550;
  }

  ul {
    position: relative;
    padding: 0;
    width: 100%;
    height: 100%;
    max-width: 400px;
    margin: 0 auto;
    box-shadow: -20px -20px 60px -30px black;
    z-index: 1;
  }

  li {
    position: relative;
    list-style: none;
    width: 100%;
    height: 50px;
    color: #2c3e50;
  }

  p {
    position: absolute;
    top: 50%;
    left: calc(100% + 20px);
    transform: translateY(-50%);
    margin: 0;
    color: #999999;
  }
</style>
