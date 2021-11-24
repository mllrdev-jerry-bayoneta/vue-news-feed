import HttpMethod from '@/enum/http-method.enum'
import INewsFeed from '@/interface/news-feed.interface'
import client from '@/services/client.service'
import { Ref, ref } from 'vue'

function useGetById(id: number): {
  post: Ref<INewsFeed>;
} {
  const post = ref<INewsFeed>({
    id: 0,
    title: "",
    message: "",
    author: "",
    createdAt: '',
    updatedAt: ''
  })

  const getPostById = async (): Promise<boolean> => {
    return await client({
      method: HttpMethod.GET,
      url: `posts/${id}`
    }).then(async (response) => {
      post.value = await response.json();
      return true
    }).catch(() => {
      return false
    })
  }

  getPostById()

  return { post }
}

export default useGetById