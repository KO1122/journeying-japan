import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import { postsLoader } from "./postsLoader";
import PostPage from "./components/PostPage";
import EditPost from "./components/EditPost";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Main />} loader={postsLoader}>
      <Route index element={<Home />} />
      <Route path="create" element={<CreatePost />} />
      <Route path="post">
        <Route path=":id" element={<PostPage />} loader={postsLoader} />
        <Route path=":id/edit" element={<EditPost />} loader={postsLoader} />
      </Route>
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
