import { useOutletContext } from "react-router-dom";
import PostCard from "./PostCard";
import { getTimeInMilliSecs } from "../utility";
import Spinner from "./Spinner";

function Home() {
  const [posts, setPosts, loading] = useOutletContext();

  function sortByNewest() {
    const newPosts = posts.slice().sort((a, b) => {
      return (
        getTimeInMilliSecs(b.created_at) - getTimeInMilliSecs(a.created_at)
      );
    });
    setPosts(newPosts);
  }

  function sortByUpvote() {
    const newPosts = posts.slice().sort((a, b) => b.upvotes - a.upvotes);
    setPosts(newPosts);
  }

  return (
    <main>
      <div className="flex-col text-center lg:text-start">
        <span className="block lg:inline">Sort by:</span>
        <button
          className="btn mt-1 bg-red-500 hover:bg-red-600 lg:ms-2"
          onClick={sortByNewest}
        >
          Newest
        </button>
        <button
          className="btn ml-2 bg-red-500 hover:bg-red-600 lg:ms-2"
          onClick={sortByUpvote}
        >
          Most Upvotes
        </button>
      </div>

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <>
          {posts?.length > 0 &&
            posts.map((post) => {
              return (
                <PostCard
                  key={post.id}
                  id={post.id}
                  createdAt={post.created_at}
                  title={post.title}
                  upvotes={post.upvotes}
                />
              );
            })}
        </>
      )}
    </main>
  );
}

export default Home;
