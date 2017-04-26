<template>
  <div class="keyboard ui eight column grid">
    <Key @playNote="playNote" @stopNote="stopNote" black-key="true" white-freq="261.6" black-freq="277.2"></Key>
    <Key @playNote="playNote" @stopNote="stopNote" black-key="true" white-freq="293.7" black-freq="311.1"></Key>
    <Key @playNote="playNote" @stopNote="stopNote" white-freq="329.6"></Key>
    <Key @playNote="playNote" @stopNote="stopNote" black-key="true" white-freq="349.2" black-freq="370"></Key>
    <Key @playNote="playNote" @stopNote="stopNote" black-key="true" white-freq="392" black-freq="415.3"></Key>
    <Key @playNote="playNote" @stopNote="stopNote" black-key="true" white-freq="440" black-freq="466.2"></Key>
    <Key @playNote="playNote" @stopNote="stopNote" white-freq="493.9"></Key>
  </div>
</template>

<script>
import Key from './Key'

export default {
  name: 'keyboard',
  data () {
    return {

    }
  },
  components: {
    Key
  },
  methods: {
    playNote(freq) {
      this.$emit('playNote', freq)
    },
    stopNote(freq) {
      this.$emit('stopNote')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
