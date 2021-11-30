import HttpMethod from '@/enum/http-method.enum'
import client from '@/services/client.service'
import { Ref, ref } from 'vue'

function useDeletePost(id: number): { res: Ref<boolean> } {
  const res = ref<boolean>(false)
  const deletePost = async (): Promise<boolean | Ref<boolean>> => {
    return await client({
      method: HttpMethod.DELETE,
      url: `posts/${id}`
    }).then(() => {
      res.value = true
      return res
    })
      .catch(() => {
        return false
      })
  }

  deletePost()

  return { res }
}

export default useDeletePost