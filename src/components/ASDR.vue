<template>
  <div class="asdr">
    <div>
      {{envelope}}
      <div ref="time" class="time">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'asdr',
  data () {
    return {

    }
  },
  props: ["envelope"],
  mounted() {
    var vm = this
    $(this.$refs.time).slider({
      orientation: "vertical",
      min: 0,
      max: 2,
      step: 0.05,
      slide: function(event, ui) {
        vm.$emit("slide", vm.envelope, ui.value)
      }
    })
    if(this.envelope == "Sustain") {
      $(this.$refs.time).slider("option", "value", 1)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .time {
   margin: 0 auto;
 }
</style>
