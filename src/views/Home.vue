<template>
  <Header/>
  <h1 @click="goToNewsFeed()">The News Feed</h1>
</template>

<script>
import Header from '@/shared/component/Header.vue'
import router from '@/router'
import RouteName from '@/enum/routes-name.enum'
// @ is an alias to /src

export default {
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
}
</script>

<style scoped>
h1{
  text-align: center;
  margin-top: 10%;
  font-size: 150px;
}
</style>
