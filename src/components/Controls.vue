<template>
  <div class="controls">
  <div class="ui grid row">
    <div class="four wide column">
      <select v-model="type" id="osc-type" class="ui dropdown">
        <option disabled value="">
          Type
        </option>
        <option value="sine">
          Sine
        </option>
        <option value="sawtooth">
          Sawtooth
        </option>
        <option value="square">
          Square
        </option>
        <option value="triangle">
          Triangle
        </option>
      </select>
    </div>
    <asdr v-for="slider in envelope" @slide="slide" :envelope="slider.type" :key="slider.type" class="one wide column"></asdr>
    <bandFilter @filterType="filterType" @slide="slide" class="three wide column"></bandFilter>
  </div>
  </div>
</template>

<script>
import Asdr from "./ASDR"
import BandFilter from './Filter'

export default {
  name: 'controls',
  data () {
    return {
      type: "",
      envelope: [{type:"Attack"},{type:"Decay"},{type: "Sustain"},{type:"Release"}]
    }
  },
  components: {
    Asdr,
    BandFilter
  },
  methods: {
    slide(name, value) {
      this.$emit("slide", name, value)
    },
    filterType(value) {
      this.$emit("filterType", value)
    }
  },
  watch: {
    type: function(value) {
      this.$emit("oscType", value)
    }
  }
}

$(document).ready(function() {
  $("#osc-type").dropdown()
});

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.controls div.ui.eight.column.grid {
  height: 200px;
}

</style>
