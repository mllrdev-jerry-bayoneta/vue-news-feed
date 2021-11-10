<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/home">Home</a>
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
import router from '@/router'
import { defineComponent } from 'vue'

export default defineComponent({
  name: "Header",
  
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
