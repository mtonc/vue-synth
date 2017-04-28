<template>
  <div class="asdr">
    <div>
      {{name}}
      <div class="time">
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
  props: ["name"],
  created() {
    var vm = this
    $(document).ready(function(){
      $(".time").slider({
        orientation: "vertical",
        min: 0,
        max: 2,
        step: 0.05,
        slide: function(event, ui) {
          vm.$emit("slide", vm.name, ui.value)
        }
      })
    });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .time {
   margin: 0 auto;
 }
</style>
