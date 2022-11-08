import { createContext, PropsWithChildren, useMemo, useState } from 'react';

import { Post } from '../types/post.types';

export interface PostsState {
  posts: Post[];
  selectedPost: Post;
}

export const initialPostState: PostsState = {
  posts: [],
  selectedPost: {} as Post
};

export interface PostsContextType extends PostsState {
  setPosts: (arg: Post[]) => void;
  setSelectedPost: (arg: Post) => void;
}

export const PostsContext = createContext<PostsContextType>({
  ...initialPostState,
  setPosts: () => [],
  setSelectedPost: () => null
});

export function PostsCtxProvider({ children }: PropsWithChildren) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post>({} as Post);

  const value = useMemo(
    () => ({
      posts,
      selectedPost,
      setPosts,
      setSelectedPost
    }),
    [posts, selectedPost]
  );

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}
