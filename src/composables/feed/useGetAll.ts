import INewsFeed from '@/interface/news-feed.interface'
import client from '@/services/client.service'
import { ref } from 'vue'

 function useGetAll() {
  const posts = ref<INewsFeed[]>([]);

  const getAllFeed = async ()=> {
  return await client({
      method: 'GET',
      url: 'posts'
    }).then( async (response) => {
      posts.value = await response.json();
      return true
    })
    .catch(() => {
      return false
    })
  }

  return { posts, getAllFeed }
}

export default useGetAll

