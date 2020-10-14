<template>
 <div>{{timeNow}}</div>
</template>

<script>
import moment from 'moment'


export default {
  name: 'counter',
  data: function() {
    return {
    }
  },
  computed: {
    timeNow: function() {
      return moment().format('LTS');
    }
  }
}
</script>

<style>
</style>