<template>
  <div id="app" class="ui grid">
    <controls @oscType="updateType" id="controls" class="twelve wide centered column"></controls>
    <keyboard @playNote="playNote" @stopNote="stopNote" id="keyboard" class="twelve wide centered column"></keyboard>
  </div>
</template>

<script>
import Keyboard from './components/Keyboard'
import Controls from './components/Controls'
import Synth from './audio/Synth.js'

var tempSynth = new Synth();

export default {
  name: 'app',
  components: {
    Keyboard,
    Controls
  },
  data() {
    return {
      osc1: tempSynth,
      type: "sine"
    }
  },
  methods: {
    playNote(freq) {
      this.osc1.playNote(freq, this.type)
    },
    stopNote() {
      this.osc1.stopNote()
    },
    updateType(type) {
      this.type = type
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#keyboard {
  height: 400px;
}
</style>
