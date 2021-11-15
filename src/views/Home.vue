<template>
  <Header />
  <h1 @click="goToNewsFeed()">Hello</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from '@/shared/component/header.vue'
import RouteName from '@/enum/routes-name.enum'
import { useRouter } from "vue-router"

export default defineComponent({
  name: 'Home',
  components: {
    Header
  },
  setup() {
    const router = useRouter()

    function goToNewsFeed() {
      router.push({
        name: RouteName.FEED
      })
    }
    
    return { goToNewsFeed }
  },
})
</script>

<style scoped>
h1{
  text-align: center;
  margin-top: 10%;
  font-size: 150px;
}
</style>
