import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Main() {
  const [posts, setPosts] = useState(useLoaderData());

  return (
    <div className="h-screen bg-gray-50">
      <Navbar posts={posts} setPosts={setPosts} />
      <div className="mt-8 px-[15%]">
        <Outlet context={[posts, setPosts]} />
      </div>
    </div>
  );
}

export default Main;
