import client from '@/services/client.service'
import { ref } from 'vue'

function useDeleteById(){
  const deletePostById = async (id: number) => {
    await client({
      method: 'DELETE',
      url: `posts/${id}`
    }).then(() => {
      return true
    })
    .catch(() => {
      return false
    })


  }

  return { deletePostById }
}

export default useDeleteById