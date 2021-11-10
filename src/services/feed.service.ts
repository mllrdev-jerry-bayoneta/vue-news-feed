import axios from "axios";
import environment from "@/environments/environment";
import INewsFeed from "@/interface/news-feed.interface";
const getNewsFeed = async () => {
  return axios.get(`${environment.baseUrl}/posts`)
  .then(response => {
    const post: INewsFeed[] = response.data;
    return post;

  })
}

export default getNewsFeed