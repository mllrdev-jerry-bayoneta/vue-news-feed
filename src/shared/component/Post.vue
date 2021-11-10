<template>
  <div class="post">
    this is post
  </div>
</template>

<script lang="ts">
import INewsFeed from '@/interface/news-feed.interface'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: "Post",
  components:{},
  props: {
    post:{
      require: false,
    type: Array as PropType<INewsFeed[]>
    }
    
  },
  setup(props) {
    const word = 'yes';
    return word
  
  }
})
</script>
