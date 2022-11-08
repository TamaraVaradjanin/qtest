import { ReactElement, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { DetailCard } from '../../components/detailsCard/DetailCard';
import baseWrapper from '../../components/wrapper/BaseWrapper';
import { GREETING } from '../../constants/helloConstant';
import { usePosts } from '../../hooks/usePosts';
import { Comment } from '../../types/post.types';

import { commentContainerStyle } from './styles';

function PostsDetailsView(): ReactElement {
  const { selectedPost, fetchPost, hasError } = usePosts();
  const { id } = useParams();

  function renderComments(comments: Comment[]) {
    return comments.map((comment: Comment) => (
      <div key={comment.id} style={commentContainerStyle} data-testid={`body_wrapper${comment.id}`}>
        <p>
          {comment.email}: <b>{comment.name}</b>
        </p>
        <span>{comment.body}</span>
      </div>
    ));
  }

  useEffect(() => {
    if (!selectedPost.id && !hasError && id) fetchPost(id);
  }, []);

  if (hasError) return <div data-testid="not_found">Not found</div>;

  return selectedPost.id ? (
    <DetailCard
      greet={GREETING}
      title={selectedPost.title}
      description={`by ${selectedPost.user.name}`}
      body={
        <>
          <p>{selectedPost.body}</p>
          <h3>Comments:</h3>
          {selectedPost.comments && renderComments(selectedPost.comments)}
        </>
      }
    />
  ) : (
    <div>loading</div>
  );
}

export const PostDetails = baseWrapper(PostsDetailsView);
