interface INewsFeed {
  id: number;
  title: string;
  message: string;
  author: string;
  read: boolean | string;
  createdAt: string;
  updatedAt: string;
}

export default INewsFeed;