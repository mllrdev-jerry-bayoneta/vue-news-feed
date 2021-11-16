<template>
  <Header />
  <form id="updatePost" @submit="applyEditOnNewsFeed">
    <div class="input-group mb-3 test">
        <span class="input-group-text" id="basic-addon1">Title</span>
        <input type="text" class="form-control" aria-label="title" aria-describedby="basic-addon1" v-model="postEdit.title">
    </div>
    <div class="input-group">
      <span class="input-group-text">Message</span>
      <textarea class="form-control message" aria-label="With textarea" v-model="postEdit.message"></textarea>
    </div>
    <button class="btn btn-primary" type="submit" @click="applyEditOnNewsFeed(postEdit)">Edit</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import INewsFeed from '@/interface/news-feed.interface'
import { newsFeedServices } from '@/services/feed.service'
import { useRoute } from 'vue-router'
import Header from '@/shared/component/header.vue'
import {useRouter} from 'vue-router'
import RouteName from '@/enum/routes-name.enum'
import moment from 'moment'

export default defineComponent({
  name: "Edit",
  components: {
    Header
  },
  setup() {
      const postEdit = ref<INewsFeed>({
      id: 0,
      title: '',
      message: '',  
      author: '',
      createdAt: Date(),
      updatedAt: Date()
    })

    const router = useRouter()

    const id = parseInt(useRoute().params.id as string)

    const date = () => {
      return moment.utc(new Date).format("MM/DD/YYYY");
      };

    onMounted(() => {
    newsFeedServices.getById(id).then((value: INewsFeed) => {
        postEdit.value = value;
      })
    })

    function applyEditOnNewsFeed(editedPost: INewsFeed){
      editedPost.updatedAt = date();
      newsFeedServices.editById(editedPost);
      router.push({
        name: RouteName.FEED
      })
    }
    return { postEdit, router, applyEditOnNewsFeed }
  },
  methods: {

  }
});
</script>

<style scoped>
#updatePost{
  width: 98%;
  margin: 5% 1%;
  padding: 2%;
  background-color: #3A506B;
  border-radius: 20px;
}
.test{
  min-height: 50px;
}
.message{
  min-height: 110px;
}
button{
  margin-top: 10px;
}
span{
  width: 100px;
}

</style>