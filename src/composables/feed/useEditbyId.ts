import INewsFeed from '@/interface/news-feed.interface'
import client from '@/services/client.service'

function useEditById(){

  const editById = async(editedPost: INewsFeed) => {
    return await client({
      method: 'PATCH',
      url: `posts/${editedPost.id}`,
      data: editedPost
    }).then(() => {
      return true
    })
    .catch(() => {
      return false
    })
  }

  return { editById }
}

export default useEditById