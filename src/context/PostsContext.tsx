import { createContext, PropsWithChildren, useMemo, useState } from 'react';

import { Post } from '../types/post.types';

export interface PostsState {
  posts: Post[];
  selectedPost: Post;
  hasError: boolean;
}

export const initialPostState: PostsState = {
  posts: [],
  selectedPost: {} as Post,
  hasError: false
};

export interface PostsContextType extends PostsState {
  setPosts: (arg: Post[]) => void;
  setSelectedPost: (arg: Post) => void;
  setHasError: (arg: boolean) => void;
}

export const PostsContext = createContext<PostsContextType>({
  ...initialPostState,
  setPosts: () => [],
  setSelectedPost: () => null,
  setHasError: () => false
});

export function PostsCtxProvider({ children }: PropsWithChildren) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post>({} as Post);
  const [hasError, setHasError] = useState<boolean>(false);

  const value = useMemo(
    () => ({
      posts,
      selectedPost,
      hasError,
      setPosts,
      setSelectedPost,
      setHasError
    }),
    [posts, selectedPost, hasError]
  );

  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
}
