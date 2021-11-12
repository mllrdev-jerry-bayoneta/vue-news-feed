<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">NavBar</span>
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/feed">News Feed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sign In</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import RouteName from '@/enum/routes-name.enum'
import IUser from '@/interface/user.interface'
import router from '@/router'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: "Header",
  props: {
    user: {
      require: false,
      type: Object as PropType<IUser>
    }
  },
  methods: {
    goToNewsFeed(){
      router.push({
        name: RouteName.FEED
      })
    },
    goToHome(){
      router.push({
        name: RouteName.HOME
      })
    }
  }
})
</script>