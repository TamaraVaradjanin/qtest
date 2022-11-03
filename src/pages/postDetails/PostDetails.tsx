import { ReactElement } from 'react';

import DetailsCard from '../../components/detailsCard/DetailCard';
import Base from '../../components/page/Base';
import { GREETING } from '../../constants/helloConstant';
import { usePosts } from '../../hooks/usePosts';
import { Comment } from '../../types/post.types';

import { commentContainerStyle } from './styles';

interface PostDetailsProps {
  message: string;
}

function PostDetails({ message }: PostDetailsProps): ReactElement {
  console.log(`${message}PostDetails`);
  const { selectedPost } = usePosts();

  function renderComments(comments: Comment[]) {
    return (
      <>
        {comments.map((comment: Comment) => (
          <div key={comment.id} style={commentContainerStyle} data-testid={`body_wrapper${comment.id}`}>
            {comment.body}
          </div>
        ))}
      </>
    );
  }
  return selectedPost.id ? (
    <Base message={GREETING}>
      <DetailsCard
        message={GREETING}
        title={selectedPost.title}
        description={`by ${selectedPost.username}`}
        body={
          <>
            <b>Comments:</b>
            {selectedPost.comments && renderComments(selectedPost.comments)}
          </>
        }
      />
    </Base>
  ) : (
    <div>Not found</div>
  );
}

export default PostDetails;
