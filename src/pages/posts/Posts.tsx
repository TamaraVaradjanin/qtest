import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../components/input/Input';
import { ListItem } from '../../components/list/ListItem';
import { ListItems } from '../../components/list/ListItems';
import baseWrapper from '../../components/wrapper/BaseWrapper';
import { GREETING } from '../../constants/helloConstant';
import { usePosts } from '../../hooks/usePosts';
import { Post } from '../../types/post.types';

import { postsContainerWrapperStyle } from './styles';

function PostsView(): ReactElement {
  const { posts, setSelectedPost, fetchPosts } = usePosts();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const onClick = (post: Post) => {
    setSelectedPost(post);
    navigate(`/post/${post.id}`);
  };

  const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  useEffect(() => {
    if (!posts.length) fetchPosts();
  }, []);

  return (
    <div style={postsContainerWrapperStyle}>
      <Input message={GREETING} onChange={handleOnChange} />
      {posts.length > 0 && (
        <ListItems
          message={GREETING}
          items={posts.map((post) => {
            return { ...post, key: post.id.toString() };
          })}
          renderer={(post: Post) => (
            <ListItem
              message={GREETING}
              key={post.id}
              footer={
                <>
                  <span>#{post.id}</span>
                  <span>by {post.user.name}</span>
                </>
              }
              description={
                <>
                  <span>{post.body}</span>
                  <ul>
                    {post.comments?.map((comment) => (
                      <li key={comment.id}>{comment.body}</li>
                    ))}
                  </ul>
                </>
              }
              title={post.title}
              onClick={() => onClick(post)}
            />
          )}
          searchBy={(post: Post) => post.user.name.toLowerCase().includes(searchTerm)}
        />
      )}
    </div>
  );
}

export const Posts = baseWrapper(PostsView);
