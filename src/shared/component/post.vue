<template>
    <div
    class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">{{news.title}}</h1>
      <Modal v-if="read">
        <div class="modal-content">
          <p class="lead">{{ news.message }}</p>
        </div>
      </Modal>
      <div class="action-buttons">
        <h4>{{news.updatedAt}}</h4>
        <button class="btn btn-primary" @click="readMore()">read</button>
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
import { defineComponent, ref } from 'vue'
import RouteName from '@/enum/routes-name.enum'
import { useRouter } from 'vue-router'
import useDeleteById from '@/composables/feed/useDeleteById'
import Modal from '@/shared/component/modal.vue'

export default defineComponent({
  name: "Post",
  components: {
    Modal,
  },
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
    },
    updatedAt: {
      type: String
    }
  },
  setup(props) {
    const { deletePostById } = useDeleteById();
    const news = props;
    const router = useRouter();
    const read = ref(false)
    function deletePost(id: number) {
      if (confirm(`delete?`)) {
        deletePostById(id);
      }
        location.reload();
      
    }
    function editNewsFeed(id: number) {
      router.push({
        name: RouteName.EDIT,
        params: {
          id: id
        }
      })
    }

    function readMore() {
      read.value = !read.value;
    }
    return { deletePost, readMore, editNewsFeed, news, read }
  },
})
</script>

<style scoped>
.jumbotron {
  width: 50%;
  margin: 20px 25%;
  background-color: #1c2541;
  border-radius: 10px;
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
  margin-bottom: 15px;
  background-color: #3a506b;
  padding: 8px;
  border-radius: 10px;
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
  color: #1c254180;
}
.action-button-left{
  margin-left: 63%;
  display: inline-block;
}
h4{
  display: inline-block;
  margin-right: 10px;
}
.lead{
  padding: 5px;
}
</style>


