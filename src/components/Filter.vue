<template>
  <div id="bandFilter">
    <select v-model="type" id="osc-type" class="ui dropdown">
      <option disabled value="">
        Type
      </option>
      <option value="lowpass">
        Lowpass
      </option>
      <option value="highpass">
        Highpass
      </option>
      <option value="bandpass">
        Bandpass
      </option>
      <option value="lowshelf">
        Lowshelf
      </option>
      <option value="highshelf">
        Highshelf
      </option>
      <option value="peaking">
        Peaking
      </option>
      <option value="notch">
        Notch
      </option>
      <option value="allpass">
        Allpass
      </option>
    </select>
    <div>
      Frequency
      <div ref="freq" class="freq">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'bandFilter',
  data () {
    return {
      type: ""
    }
  },
  watch: {
    type: function(value) {
      this.$emit("filterType", value)
    }
  },
  mounted() {
    var vm = this
    $(this.$refs.freq).slider({
      min: 22,
      max: 22000,
      step: 1,
      value: 22,
      slide: function(event, ui) {
        vm.$emit("slide", "filter", ui.value)
      }
    })
  }
}



</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
