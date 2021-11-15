<template>
    <div
    class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">{{news.title}}</h1>
      <p class="lead">{{news.message}}</p>
      <div class="action-buttons">
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
  Comment:{
  },
  props:{
    id: {
      require: false,
      type: Number
    },
    title: {
      type: String
    },
    message: {
      type: String
    }
  },

  
  setup(props) {
    const news = props;
    const router = useRouter();
    function deletePost(id: number) {
      if (confirm(`delete?`)) newsFeedServices.deletePostById(id);
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


