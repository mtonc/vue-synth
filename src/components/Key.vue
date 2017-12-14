<template>
  <div @mousedown="playNote(whiteFreq)" @mouseup="stopNote" class="white-key column">
    <div @mousedown.stop="playNote(blackFreq)" @mouseup.stop="stopNote" class="black-key" v-if="blackKey">

    </div>
  </div>
</template>

<script>
import { EventBus } from '../audio/event-bus.js';

export default {
  name: 'key',
  data () {
    return {
    }
  },
  methods: {
    playNote(freq) {
      EventBus.$emit('playNote', freq)
    },
    stopNote() {
      EventBus.$emit('stopNote')
    }
  },
  props: ["blackKey", "whiteFreq", "blackFreq"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.white-key {
  background-color: #FFFFFF;
  height: 100%;
  border: 1px solid black;
  position: relative;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  .black-key{
    height: 66%;
    background-color: #000000;
    position: absolute;
    right: calc(100%/(-4);
    width: 50%;
    z-index: 100;
    top: 0;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
}
</style>
