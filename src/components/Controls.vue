<template>
  <div class="controls ui eight column grid">
    <select v-model="type" id="osc-type" class="ui dropdown column">
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
</template>

<script>

export default {
  name: 'controls',
  data () {
    return {
      type: ""
    }
  },
  components: {

  },
  methods: {

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

</style>
