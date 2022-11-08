import { useContext } from 'react';

import { PostsContext } from '../context/PostsContext';
import Posts from '../services/posts';

export function usePosts() {
  const { posts, setPosts, selectedPost, setSelectedPost } = useContext(PostsContext);

  async function fetchData() {
    const data = await Posts.getPosts();
    setPosts(data);
  }

  return { posts, selectedPost, setSelectedPost, fetchData, setPosts };
}
