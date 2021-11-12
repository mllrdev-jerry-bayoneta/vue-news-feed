<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'App',
  components: {},
});
</script>

<style>
html{
  height: 100%;
  background-color: #6fffe9;
}
div#app{
  background-color: #6fffe9;
  padding-bottom: 1%;
}
#app{
  height: 100%;
}
</style>
