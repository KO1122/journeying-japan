import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";

function Navbar({ posts, setPosts, defaultPosts }) {
  function handleSearchChange(e) {
    if (!e.target.value) return setPosts(defaultPosts);
    const newPosts = defaultPosts.filter((post) =>
      post.title.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setPosts(newPosts);
  }

  return (
    <nav className="bg-red-500 px-4 py-6 text-center text-white lg:flex lg:h-20 lg:items-center lg:justify-around">
      <h1 className="font-oleo text-center text-4xl">Journeying Japan</h1>

      <input
        type="search"
        placeholder="Search"
        className="mt-2 w-56 rounded-xl px-2 py-1 text-black lg:w-1/4"
        onChange={handleSearchChange}
      />

      <div className="mt-2 flex justify-center gap-3">
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
