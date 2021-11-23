import INewsFeed from '@/interface/news-feed.interface'
import client from '@/services/client.service'
import { ref } from 'vue'

function useCreate() {
  const post = ref<INewsFeed>({
    id!: 0,
    title: "",
    message: "",
    author: "",
    createdAt:  '',
    updatedAt: ''
  })

  const create =  async(newPost: INewsFeed) =>{
    return await client({
      method: 'POST',
      url: 'posts',
      data: newPost
    }).then(() => {
      return true
    })
    .catch(() => {
      return false
    })
  }

  return { post, create }
}

export default useCreate