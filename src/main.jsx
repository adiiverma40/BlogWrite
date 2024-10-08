import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { store } from "./store/store.js";
import {Provider} from "react-redux"
import App from "./App.jsx";
import "./index.css";
import { Home, About, AllPost, AddPost, Login, SignUp,Post, EditPost } from "./pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/allPost" element={<AllPost />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/editpost" element={<EditPost/>}/>
      <Route path="/post" element={<Post />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(

    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
 
);
