import HttpMethod from '@/enum/http-method.enum'
import INewsFeed from '@/interface/news-feed.interface'
import client from '@/services/client.service'
import { Ref, ref } from 'vue'

function useCreate(): {
  post: Ref<INewsFeed>;
  create: (newPost: INewsFeed) => Promise<boolean>;
} {
  const post = ref<INewsFeed>({
    id: 0,
    title: "",
    message: "",
    author: "",
    createdAt: '',
    updatedAt: ''
  })

  const create = async (newPost: INewsFeed): Promise<boolean> => {
    return await client({
      method: HttpMethod.POST,
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