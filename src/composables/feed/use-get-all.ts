import HttpMethod from '@/enum/http-method.enum';
import INewsFeed from '@/interface/news-feed.interface'
import client from '@/services/client.service'
import { Ref, ref } from 'vue'

function useGetAll(): {
  posts: Ref<INewsFeed[]>;
} {
  const posts = ref<INewsFeed[]>([]);

  const getAllFeed = async () => {
    return await client({
      method: HttpMethod.GET,
      url: 'posts'
    }).then(async (response) => {
      posts.value = await response.json();
      return true
    })
      .catch(() => {
        return false
      })
  }

  getAllFeed();

  return { posts }
}

export default useGetAll

