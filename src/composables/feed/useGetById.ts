import INewsFeed from '@/interface/news-feed.interface'
import client from '@/services/client.service'
import { ref } from 'vue'

function useGetById(id: number) {
  const post = ref<INewsFeed>({
    id!: 0,
    title: "",
    message: "",
    author: "",
    createdAt:  '',
    updatedAt: ''
  })

  const getPostById = async () => {
    await client({ 
    method: 'GET',
    url: `posts/${id}`
    }).then( async (response) => {
      post.value = await response.json();
    })
  }

  return { post, getPostById }
}

export default useGetById