import INewsFeed from "@/interface/news-feed.interface";
import client from "./client.service";
const getAll = async (): Promise<INewsFeed[]> => {
  return client({
    method: 'GET',
    url: 'posts'
  })
}

// const getAll = async (): Promise<INewsFeed[]> => {
//   return await fetch('http://localhost:5000/posts')
//     .then(response => response.json())
  
// }

const getById = async (id: number): Promise<INewsFeed> => {
  return client({
    method: 'GET',
    url: `posts/${id}`
  })
}

const createNewPost = async (newPost: INewsFeed) => {
  return await client({
    method: 'POST',
    url: 'posts',
    data: newPost
  }).then(()=>{
      return true;
  }).catch(()=>{
    return false;
  })
  
}

const deleteById = async (id: number): Promise<null> => {
  return client({
    method: 'DELETE',
    url: `posts/${id}`
  })
}

const editById = async (editedPost: INewsFeed): Promise<null> => {
  return client({
    method: 'PATCH',
    url: `posts/${editedPost.id}`,
    data: editedPost
  })
}

export const newsFeedServices = {
  getAll,
  getById,
  createNewPost,
  deleteById,
  editById,
}