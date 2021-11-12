<template>
  <Header />
  <form @submit.once="postMessage" id="createPost">
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

  <div
    class="jumbotron jumbotron-fluid"
    v-for="(news, index) in newsFeeds"
    :key="index"
  >
    <div class="container">
      <h1 class="display-4">{{ news.title }}</h1>
      <p v-if="news.read" class="lead">{{ news.message.slice(0, 100) }}</p>
      <Modal v-if="!news.read">
        <div class="modal-content">
          <p class="lead">{{ news.message }}</p>
        </div>
      </Modal>
      <div class="action-buttons">
        <button @click="toggleModal(index)" class="btn btn-primary">
          Read
        </button>
        <div class="action-button-left">
          <p class="h3">
            <i class="bi bi-trash bi-xl" @click="deletePost(news.id, news.title)"></i>
          </p>
          <p class="h3"><i class="bi bi-pencil-square" @click="editNewsFeed(news.id)"></i></p>
        </div>

      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import INewsFeed from "@/interface/news-feed.interface";
import Header from "@/shared/component/Header.vue";
import { newsFeedServices } from "@/services/feed.service";
import Modal from "@/shared/component/Modal.vue";
import router from '@/router'
import RouteName from '@/enum/routes-name.enum'
import moment from 'moment'

export default defineComponent({
  name: "Feed",
  components: {
    Header,
    Modal,
  },
  setup() {
    const post = ref<INewsFeed>({
      id: 0,
      title: "",
      message: "",
      author: "",
      read: false,
      createdAt:  '',
      updatedAt: ''
    });
    const newsFeeds = ref<INewsFeed[]>([]);

    const getAllNewsFeed = async () => {
        newsFeedServices.getNewsFeedAll().then((value: INewsFeed[]) => {
        newsFeeds.value = value;
      });
    }

    onMounted(() => {
      getAllNewsFeed();
    });

    const date = () => {
      return moment.utc(new Date).format("MM/DD/YYYY");
      };

    return { newsFeeds, post, date, getAllNewsFeed };
  },
  methods: {
    postMessage() {
      this.post.read = "false";
      this.post.author = "Jerry";
      this.post.createdAt = this.date();
      this.post.updatedAt = this.date();
      console.log(this.post);
      newsFeedServices.createNewPost(this.post);
      this.getAllNewsFeed()
    },
    deletePost(id: number, title: string) {
      if (confirm(`delete ${title}?`)) newsFeedServices.deletePostById(id);
      location.reload();
    },
    toggleModal(index: number) {
      this.newsFeeds[index].read = !this.newsFeeds[index].read;
    },
    editNewsFeed(id: number) {
      router.push({
        name: RouteName.EDIT,
        params: {
          id: id
        }
      })
    }
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
</style>
