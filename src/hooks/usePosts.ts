import { useContext } from 'react';

import { PostsContext } from '../context/PostsContext';
import Posts from '../services/posts';
import { Post } from '../types/post.types';

export function usePosts() {
  const { posts, setPosts, selectedPost, setSelectedPost, hasError, setHasError } = useContext(PostsContext);

  async function fetchPosts() {
    const data = await Posts.getPosts();
    setPosts(data);
  }

  async function fetchPost(id: string) {
    try {
      const data = await Posts.getPost(id);
      setSelectedPost(data);
      setHasError(false);
    } catch (error) {
      setSelectedPost({} as Post);
      setHasError(true);
    }
  }

  return { posts, selectedPost, hasError, setSelectedPost, fetchPosts, fetchPost, setPosts };
}
