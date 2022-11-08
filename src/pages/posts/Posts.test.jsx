import { fireEvent, render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { initialPostState, PostsContext } from '../../context/PostsContext';
import Post from '../../services/posts';
import { posts as mockedPosts } from '../../__mocks__/posts.json';
import { Posts } from './Posts';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}));

describe('<Posts>', () => {
  const renderComponent = (postsState = initialPostState) =>
    render(
      <PostsContext.Provider value={postsState}>
        <Posts />
      </PostsContext.Provider>,
      { wrapper: BrowserRouter }
    );

  test('renders expected component', () => {
    const { getByTestId } = renderComponent();
    const getSpyOn = jest.spyOn(Post, 'getPosts');
    expect(getByTestId('input_field')).toBeInTheDocument();
    waitFor(() => {
      expect(getSpyOn).toHaveBeenCalled();
    });
  });

  test('renders mocked posts and search by username that is not existing', () => {
    const { getByTestId } = renderComponent({ posts: mockedPosts });
    expect(getByTestId('list_wrapper')).toBeInTheDocument();
    fireEvent.change(getByTestId('input_field')), { target: { value: 'nothing' } };
    waitFor(() => {
      expect(getByTestId('item_title')).not.toBeInTheDocument();
    });
  });

  test('renders mocked posts and clicks on the first list item', () => {
    const { getByTestId } = renderComponent({ posts: mockedPosts });
    expect(getByTestId('list_wrapper')).toBeInTheDocument();
    fireEvent.click(getByTestId('item_wrapper1'));
    waitFor(() => {
      expect(mockedUsedNavigate.toHaveBeenCalledWith('/post/1'));
    });
  });
});
