<template>
  <Header />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from '@/shared/component/header.vue'
import router from '@/router'
import RouteName from '@/enum/routes-name.enum'

export default defineComponent({
  name: 'Home',
  components: {
    Header
  },
  methods:{
    
    goToNewsFeed(){
      router.push({
        name: RouteName.FEED
      })
    }
  }
})
</script>

<style scoped>
h1{
  text-align: center;
  margin-top: 10%;
  font-size: 150px;
}
</style>
