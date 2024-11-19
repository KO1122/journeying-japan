import { useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";

function Navbar({ posts, setPosts }) {
  const { current: defaultPosts } = useRef(posts);
  console.log(posts, setPosts);

  function handleSearchChange(e) {
    if (!e.target.value) return setPosts(defaultPosts);
    const newPosts = defaultPosts.filter((post) =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setPosts(newPosts);
  }

  return (
    <nav className="flex h-20 items-center justify-around bg-red-500 text-white">
      <h1 className="font-oleo text-3xl">Journeying Japan</h1>

      <input
        type="text"
        placeholder="Search"
        className="w-1/4 rounded-xl px-2 py-1 text-black"
        onChange={handleSearchChange}
      />

      <div className="flex gap-3">
        <Link className="flex items-center" to="/">
          <IoMdHome />
          Home
        </Link>

        <Link className="flex items-center" to="/create">
          <IoIosAdd />
          Create Post
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
