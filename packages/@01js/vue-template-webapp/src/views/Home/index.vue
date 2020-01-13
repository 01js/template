<template>
  <div class="home">
    <HelloWorld msg="Welcome"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  components: {
    HelloWorld
  }
})
export default class Index extends Vue {}
</script>

<style lang="scss">
</style>
