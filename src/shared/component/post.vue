<template>
    <div
    class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">{{news.title}}</h1>
      <p class="lead">{{news.message}}</p>
      <div class="action-buttons">
        <h4>{{news.createdAt}}</h4>
        <div class="action-button-left">
          <p class="h3">
            <i class="bi bi-trash bi-xl" @click="deletePost(news.id)"></i>
          </p>
          <p class="h3"><i class="bi bi-pencil-square" @click="editNewsFeed(news.id)"></i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RouteName from '@/enum/routes-name.enum'
import { useRouter } from 'vue-router';
import { newsFeedServices } from '@/services/feed.service';

export default defineComponent({
  name: "Post",
  props:{
    id: {
      type: Number
    },
    title: {
      type: String
    },
    message: {
      type: String
    },
    createdAt: {
      type: String
    }
  },
  setup(props) {
    const news = props;
    const router = useRouter();
    function deletePost(id: number) {
      if (confirm(`delete?`)) newsFeedServices.deleteById(id);
      location.reload();
    }

    function toggleModal(index: number) {
      // props.post[index].read = !newsFeeds.value[index].read;
    }
    function editNewsFeed(id: number) {
      router.push({
        name: RouteName.EDIT,
        params: {
          id: id
        }
      })
    }
    return { deletePost, toggleModal, editNewsFeed, news }
  },
})
</script>

<style scoped>
.jumbotron {
  width: 50%;
  margin: 30px 25%;
  background-color: #1c2541;
  padding: 1%;
  border-radius: 20px;
  color: #faf9f9;
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
  margin-left: 71%;
  display: inline-block;
}
h4{
  display: inline-block;
}
</style>


