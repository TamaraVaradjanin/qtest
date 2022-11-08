import { ReactElement, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/input/Input';
import ListItem from '../../components/list/ListItem';
import ListView from '../../components/list/ListView';
import Base from '../../components/page/Base';
import { GREETING } from '../../constants/helloConstant';
import { usePosts } from '../../hooks/usePosts';
import { Post } from '../../types/post.types';

import { postsContainerWrapperStyle } from './styles';

interface PostsProps {
  message: string;
}

function Posts({ message }: PostsProps): ReactElement {
  console.log(`${message}Posts`);
  const { posts, setSelectedPost, fetchData } = usePosts();
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
    if (!posts.length) fetchData();
  }, []);

  return (
    <Base message={GREETING}>
      <div style={postsContainerWrapperStyle}>
        <Input message={GREETING} onChange={handleOnChange} />
        {posts.length > 0 && (
          <ListView
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
                    <span>by {post.username}</span>
                  </>
                }
                description={
                  <ul>
                    {post.comments?.map((comment) => (
                      <li key={comment.id}>{comment.body}</li>
                    ))}
                  </ul>
                }
                title={post.title}
                onClick={() => onClick(post)}
              />
            )}
            searchBy={(post: Post) => post.username.toLowerCase().includes(searchTerm)}
          />
        )}
      </div>
    </Base>
  );
}

export default Posts;
