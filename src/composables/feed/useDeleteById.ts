import client from '@/services/client.service'

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