import { useEffect, useRef, useState } from "react";
import { useLoaderData, useLocation } from "react-router";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { supabase } from "../client";

function Main() {
  const [posts, setPosts] = useState(useLoaderData());
  const [loading, setLoading] = useState(true);
  const postsRef = useRef(useLoaderData());
  const location = useLocation();

  useEffect(() => {
    async function getPosts() {
      try {
        const { data } = await supabase
          .from("Posts")
          .select()
          .order("id", { ascending: true });
        postsRef.current = data;
        setPosts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getPosts();
  }, [location.key]);

  return (
    <div className="h-full min-h-screen bg-gray-50">
      <ToastContainer />
      <Navbar
        posts={posts}
        setPosts={setPosts}
        defaultPosts={postsRef.current}
      />
      <div className="mt-4 px-[15%] lg:mt-8">
        <Outlet context={[posts, setPosts, loading]} />
      </div>
    </div>
  );
}

export default Main;
