import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { initialPostState, PostsContext } from '../../context/PostsContext';
import { selectedPost as mockedPost } from '../../__mocks__/posts.json';
import PostDetails from './PostDetails';

describe('<Post details>', () => {
  const renderComponent = (postsState = initialPostState) =>
    render(
      <PostsContext.Provider value={postsState}>
        <PostDetails message={'Test post details'} />
      </PostsContext.Provider>,
      { wrapper: BrowserRouter }
    );

  test('renders mocked posts and search by username that is not existing', () => {
    const { getByTestId } = renderComponent({ selectedPost: mockedPost });
    expect(getByTestId('card_title')).toHaveTextContent('Post 3');
    expect(getByTestId('card_description')).toHaveTextContent('by Yet Another Test');
    expect(getByTestId('body_wrapper1')).toBeInTheDocument();
  });
});
