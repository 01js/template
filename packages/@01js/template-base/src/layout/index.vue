<template>
  <div class="app-wrapper">

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppMain } from './components'

@Component({
  components: {
    AppMain
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>
