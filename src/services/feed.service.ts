import axios from "axios";
import environment from "@/environments/environment";
import INewsFeed from "@/interface/news-feed.interface";
import client from "./client.service";
const getNewsFeedAll = async () => {

  return client({
    method: 'GET',
    url: 'posts'
  }).then(response => {
    const allNewsFeed: INewsFeed[] = response.data;
    return allNewsFeed;
  })
}

const getNewsFeedById = async (id: number) => {
  return client({
    method: 'GET',
    url: `posts/${id}`
  }).then(response => {
    const newsFeed: INewsFeed = response.data;
    return newsFeed;
  })
}

const createNewPost = async (newPost: INewsFeed) => {
  return client({
    method: 'POST',
    url: 'posts',
    data: newPost
  }).then(() => {
    return true
  })
}

const deletePostById = async (id: number) => {
  return client({
    method: 'DELETE',
    url: `posts/${id}`
  }).then(() => {
    return true
  })
}

const editNewsFeedById = async (editedPost: INewsFeed, id: number) => {
  return client({
    method: 'PATCH',
    url: `posts/${id}`,
    data: editedPost
  }).then(() => {
    return true
  })
}

export const newsFeedServices = {
  getNewsFeedAll,
  getNewsFeedById,
  createNewPost,
  deletePostById,
  editNewsFeedById
}