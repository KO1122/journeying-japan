import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Main() {
  const [posts, setPosts] = useState(useLoaderData());

  return (
    <div className="h-screen bg-zinc-200">
      <Navbar posts={posts} setPosts={setPosts} />
      <div className="mt-8 px-64">
        <Outlet context={[posts, setPosts]} />
      </div>
    </div>
  );
}

export default Main;
