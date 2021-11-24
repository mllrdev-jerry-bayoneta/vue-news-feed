<template>
  <Header />
  <form id="updatePost" @submit.prevent="applyEditOnNewsFeed">
    <div class="input-group mb-3 title">
      <span class="input-group-text" id="basic-addon1">Title</span>
      <input
        type="text"
        class="form-control"
        aria-label="title"
        aria-describedby="basic-addon1"
        v-model="post.title"
      />
    </div>
    <div class="input-group">
      <span class="input-group-text">Message</span>
      <textarea
        class="form-control message"
        aria-label="With textarea"
        v-model="post.message"
      ></textarea>
    </div>
    <button
      class="btn btn-primary"
      type="submit"
      @click.prevent="applyEditOnNewsFeed(post)"
    >
      Edit
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import INewsFeed from "@/interface/news-feed.interface";
import Header from "@/shared/component/header.vue";
import { useRouter, useRoute } from "vue-router";
import RouteName from "@/enum/routes-name.enum";
import useGetById from "@/composables/feed/useGetById";
import useEditById from "@/composables/feed/useEditbyId";

export default defineComponent({
  name: "Edit",
  components: {
    Header,
  },
  setup() {
    const id = parseInt(useRoute().params.id as string);

    const { post } = useGetById(id);

    const date = new Date();

    const router = useRouter();

    async function applyEditOnNewsFeed(editedPost: INewsFeed) {
      editedPost.updatedAt = date.toLocaleDateString();
      const { res } = useEditById(editedPost);
      if (res) {
        alert("have been updated");
        router.push({
          name: RouteName.FEED,
        });
      } else {
        alert("update failed edit");
      }
    }
    return { post, router, applyEditOnNewsFeed };
  },
});
</script>

<style scoped>
#updatePost {
  width: 98%;
  margin: 5% 1%;
  padding: 2%;
  background-color: #3a506b;
  border-radius: 20px;
}
.title {
  min-height: 50px;
}
.message {
  min-height: 110px;
}
button {
  margin-top: 10px;
}
span {
  width: 100px;
}
</style>