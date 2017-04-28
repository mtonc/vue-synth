<template>
  <div class="controls">
  <div class="ui grid row">
    <div class="three wide column">
      <select v-model="type" id="osc-type" class="ui dropdown two wide column">
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
    <asdr @slide="slide" :name="Attack" class="two wide column"></asdr>
    <asdr @slide="slide" :name="Decay" class="two wide column"></asdr>
    <asdr @slide="slide" :name="Release" class="two wide column"></asdr>
  </div>
  </div>
</template>

<script>
import Asdr from "./ASDR"

export default {
  name: 'controls',
  data () {
    return {
      type: ""
    }
  },
  components: {
    Asdr
  },
  methods: {
    slide(name, value) {
      this.$emit("slide", name, value)
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
