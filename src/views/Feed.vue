<template>
  <Header/>
  <form @submit.once="(event) => postMessage(event)" id="createPost">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Title</span>
      </div>
      <input
        type="text"
        class="form-control"
        aria-label="title"
        aria-describedby="basic-addon1"
        v-model="post.title"
        required
      />
    </div>
    <div class="input-group">
      <span class="input-group-text">Message</span>
      <textarea
        class="form-control"
        aria-label="With textarea"
        v-model="post.message"
        required
      ></textarea>
    </div>
    <button class="btn btn-primary" type="submit">POST</button>
  </form>
  <div v-for="post in posts" :key="post.id"> 
    <Post v-bind="post" />
  </div> 
</template>
<script lang="ts">
import { defineComponent, onMounted, onUpdated, ref } from "vue";
import INewsFeed from "@/interface/news-feed.interface";
import Header from "@/shared/component/header.vue"
import { newsFeedServices } from "@/services/feed.service";
import moment from 'moment'
import Post from '@/shared/component/post.vue'

export default defineComponent({
  name: "Feed",
  components: {
    Header,
    Post,
  },
  setup() {
    const post = ref<INewsFeed>({
      id: 0,
      title: "",
      message: "",
      author: "",
      createdAt:  '',
      updatedAt: ''
    });
    const posts = ref<INewsFeed[]>([]);

    const newsFeed = async () => {
        newsFeedServices.getAll().then((value: INewsFeed[]) => {
        posts.value = value;
      });
    }

    onMounted(() => {
      newsFeed();
    });
    
    onUpdated(() => {
      newsFeed();
    })

    const date = () => {
      return moment.utc(new Date).format("MM/DD/YYYY");
      };

    async function postMessage(el:any) {
      el.preventDefault();
      el.stopPropagation();
      post.value.author = "Jerry";
      const reqBody: INewsFeed= {
          author: post.value.author,
          title: post.value.title,
          message: post.value.message,
          createdAt: date(),
          updatedAt: date(),
      }
      console.log(reqBody);
      const test = await newsFeedServices.createNewPost(reqBody);
      console.log(test)
      newsFeed()
    }

    return { posts, post, newsFeed, postMessage };
  },
});
</script>

<style scoped>
#createPost {
  width: 50%;
  margin: 5% 25%;
  padding: 2%;
  background-color: #3a506b;
  border-radius: 20px;
}
.jumbotron {
  width: 50%;
  margin: 30px 25%;
  background-color: #1c2541;
  padding: 1%;
  border-radius: 20px;
  color: #faf9f9;
}
.input-group {
  margin: 5% 0%;
  width: 100%;
}
.modal-content {
  width: 100%;
  padding: 1%;
}
button {
  display: inline-block;
}
.h3 {
  display: inline-block;
}
.action-buttons {
  margin-top: 10px;
}
.bi {
  opacity: 0.5;
  margin-right: 5px;
}
.bi:hover {
  opacity: 1;
  color: red;
}
.modal-content {
  color: #1c2541;
}
.action-button-left{
  margin-left: 78%;
  display: inline-block;
}
.test{
  width: 50%;
  height: 50%;
}
</style>
