<template>
  <div id="app" class="ui grid">
    <controls @oscType="updateType" @slide="slide" @filterType="filterType" id="controls" class="twelve wide centered column"></controls>
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
      type: "sine",
      envelope: { attack: 0.1, decay: 0.1, sustain: 1, release: 0.04},
      filter: {type: "lowpass", gain: 25, frequency: 1000}
    }
  },
  methods: {
    playNote(freq) {
      this.osc1.playNote(freq, this.envelope, this.filter, this.type)
    },
    stopNote() {
      this.osc1.stopNote(this.envelope)
    },
    updateType(type) {
      this.type = type
    },
    slide(name, value) {
      switch(name) {
        case 'Attack':
          this.envelope.attack = value
          break;
        case 'Decay':
          this.envelope.decay = value
          break;
        case 'Release':
          this.envelope.release = value
          break;
        case 'Sustain':
          this.envelope.sustain = value
          break;
        case 'filter':
          this.filter.frequency = value
      }
    },
    filterType(value) {
      this.filter.type = value
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

</style>
