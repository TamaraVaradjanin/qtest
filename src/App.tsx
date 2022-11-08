import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { GREETING } from './constants/helloConstant';
import { POST_DETAILS, POSTS } from './constants/routeConstants';
import { PostsCtxProvider } from './context/PostsContext';
import { PostDetails } from './pages/postDetails/PostDetails';
import { Posts } from './pages/posts/Posts';

function App() {
  return (
    <BrowserRouter>
      <PostsCtxProvider>
        <Routes>
          <Route path="/" element={<Navigate to={POSTS} />} />
          <Route path={POSTS} element={<Posts greet={GREETING} />} />
          <Route path={POST_DETAILS} element={<PostDetails greet={GREETING} />} />
          <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found</h2>
              </div>
            }
          />
        </Routes>
      </PostsCtxProvider>
    </BrowserRouter>
  );
}

export default App;
