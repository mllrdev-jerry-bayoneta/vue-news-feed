import HttpMethod from '@/enum/http-method.enum'
import INewsFeed from '@/interface/news-feed.interface'
import client from '@/services/client.service'
import { Ref, ref } from 'vue'

function useEditById(editedPost: INewsFeed): { res: Ref<boolean>; } {
  const res = ref<boolean>(false)
  const editById = async () => {
    return await client({
      method: HttpMethod.PATCH,
      url: `posts/${editedPost.id}`,
      data: editedPost
    }).then(() => {
      res.value = true
      return res
    })
      .catch(() => {
        return false
      })
  }

  editById()

  return { res }
}

export default useEditById