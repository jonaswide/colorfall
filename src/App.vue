<template lang="pug">
  #app
    .Mountains
      svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 849.631 122.201" preserveAspectRatio="none")
        path(fill="#b17550" d="M849.631,122.149c-8.264-21.115-57.846-17.469-71.615-17.469c-13.771,0-39.479-2.768-49.578-7.357 c-10.098-4.59-24.789-21.121-37.641-22.957c-12.853-1.836-46.82,14.686-71.607,12.85S577.879,60.87,548.502,60.73 s-50.492,30.295-89.049,30.684s-52.327-50.103-91.802-50.103s-37.639,19.557-53.245,19.417S276.768,13.77,219.85,13.77 S143.673,87.212,91.346,87.212S45,22.033,0,0v122.201L849.631,122.149z")
        path(fill="#C7845A" d="M0,97.007c30,1.836,55.542,10.236,87.673,10.098c97.665-0.423,129.137-37.639,170.448-37.639 s54.602,37.098,73.83,37.639c30.946,0.871,31.492-24.765,60.489-24.787c16.524-0.012,39.474,29.377,57.834,29.377 s43.146-14.688,58.753-14.688s24.787,14.688,40.394,14.688c15.605,0,32.129-13.77,51.408-14.688 c19.278-0.918,39.475,19.277,55.999,19.277s29.377-9.18,41.312-9.18c11.934,0,26.9,15.097,44.41,15.051L0,122.201V97.007z")

    h1 Colorfall
    .Sailboat
      .Boat
      .Sail1
      .Sail2
    
    Waterfall
    Controls
</template>

<script>
import Waterfall from './components/Waterfall.vue'
import Controls from './components/Controls.vue'

export default {
  name: 'app',
  components: {
    Waterfall,
    Controls,
  },
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f2f2f2;
  overflow: hidden;
}
* { box-sizing: border-box; }
#app {
  position: absolute;
  left: 10px;
  top: 10px;
  width: calc(100% - 20px);
  height: calc(100% - 10px);
  text-align: center;
  color: #2c3e50;
  background-color: white;
  border-radius: 0 50px 0 0;
  box-shadow: 0 0 45px -17px black;
}

.Mountains {
  position: absolute;
  left: -10px;
  top: 0;
  height: 110px;
  width: calc(50% + 160px);
  z-index: 2;
}

.Mountains svg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

h1 {
  margin: 0;
  height: 120px;
  line-height: 120px;
}

@keyframes sailboat {
  0%, 100% { transform: translateX(0%); }
  50% { transform: translateX(300%); }  
}

.Sailboat {
  position: absolute;
  top: 65px;
  left: 50px;
  width: 50px;
  height: 50px;
  animation: sailboat 60s linear infinite;
  z-index: 2;
  opacity: .2;
  transition: .3s;
}

.Sailboat:hover { opacity: 1; }

.Boat {
  position: absolute;
  left: 0;
  bottom: 0;
  background: #792744;
  border-bottom-right-radius: 3em;
  border-bottom-left-radius: 3em;
  width: 50px;
  height: 17px;
}

.Sail1 {
  position: absolute;
  right: 0;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 30px 0 0 25px;
  border-color: transparent transparent transparent #f2f2f2;
}

.Sail2 {
  position: absolute;
  left: 0;
  top: 8px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 22px 22px;
  border-color: transparent transparent #f2f2f2 transparent;
}
</style>
