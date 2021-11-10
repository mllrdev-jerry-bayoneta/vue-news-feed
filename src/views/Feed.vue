<template>
  <Header/>
  <form @submit.prevent="postMessage" id="createPost">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Title</span>
      </div>
      <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    <div class="input-group">
      <span class="input-group-text">Message</span>
      <textarea class="form-control" aria-label="With textarea" v-model="post.message"></textarea>
    </div>
    <button class="btn btn-primary" type="submit">POST</button>
    
  </form>

  <div class="jumbotron jumbotron-fluid" v-for="(news , index) in newsFeeds" :key="index">
  <div class="container">
    <h1 class="display-4">{{ news.title }}</h1>
    <p class="lead">{{ news.message }}</p>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import INewsFeed from '@/interface/news-feed.interface'
import Header from '@/shared/component/Header.vue'
import getNewsFeed from '@/services/feed.service'

export default defineComponent({
  name: 'Feed',
  components:{
    Header,
  },
  setup(){
    const post = ref<INewsFeed>({
      title: '',
      message: '',  
      author: ''
    })
    const newsFeeds = ref<INewsFeed[]>([]);

    onMounted(() => {
      getNewsFeed().then((value: INewsFeed[]) => {
        newsFeeds.value = value;
      })
    })

    return { newsFeeds, post }
  },
  methods: {
    postMessage(){
      
      console.log(this.post.message);
    },
    deletePost(index: number){
      console.log(index);
    }
  }
})
</script>

<style scoped>
#createPost{
  width: 50%;
  margin: 1% 25%;
  padding: 2%;
  background-color: #3A506B;
  border-radius: 20px;;
  
}
.jumbotron{
  width: 50%;
  margin: 30px 25%;
  background-color: #1C2541;
  padding: 1%;
  border-radius: 20px;
  color: #FAF9F9;
}
.input-group{
  margin:  5% 0%;
  width: 100%;
}

</style>
