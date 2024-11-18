import { useRef } from "react";
import { Link } from "react-router-dom";

function Navbar({ posts, setPosts }) {
  const { current: defaultPosts } = useRef(posts);

  function handleSearchChange(e) {
    if (!e.target.value) return setPosts(defaultPosts);
    const newPosts = defaultPosts.filter((post) =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setPosts(newPosts);
  }

  return (
    <nav className="flex h-20 items-center justify-around bg-red-500">
      <h1 className="font-oleo text-3xl text-gray-200">Journeying Japan</h1>

      <input
        type="text"
        placeholder="Search"
        className="w-1/4 rounded-xl px-2 py-1"
        onChange={handleSearchChange}
      />

      <div className="flex">
        <Link className="flex items-center" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Home
        </Link>

        <Link className="flex items-center" to="/create">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Create Post
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
