import { useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { getTimeDifference } from "../utility.js";
import { BiUpvote } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { supabase } from "../client.js";
import { toast } from "react-toastify";

function PostPage() {
  const posts = useLoaderData();
  const { id } = useParams();
  const curPost = posts.find((post) => post.id === Number(id));
  const { created_at, title, content, image_url, video_url } = curPost;
  const [upvotes, setUpvotes] = useState(curPost.upvotes);
  const [comments, setComments] = useState(curPost.comments || []);
  const navigate = useNavigate();

  async function increaseUpvotes(e) {
    e.preventDefault();

    await supabase
      .from("Posts")
      .update({ upvotes: upvotes + 1 })
      .eq("id", id);

    setUpvotes((upvotes) => upvotes + 1);
  }

  async function deletePost(e) {
    e.preventDefault();
    await supabase.from("Posts").delete().eq("id", id);
    toast.success("Post deleted successfully");
    return navigate("/");
  }

  async function addComment(e) {
    if (!e.target.value.trim()) return;
    if (e.key === "Enter") {
      const newComments = [e.target.value, ...comments];

      await supabase
        .from("Posts")
        .update([{ comments: newComments }])
        .eq("id", id);

      e.target.value = "";
      setComments(newComments);
    }
  }

  return (
    <main className="rounded bg-white p-6">
      {/* Post */}
      <div className="text-sm">Posted {getTimeDifference(created_at)}</div>
      <h1 className="my-2 text-2xl font-bold">{title}</h1>
      <div className="whitespace-pre-wrap">{content.trim()}</div>
      <img className="mt-1.5 w-80" src={image_url} />
      {video_url && (
        <iframe
          className="mt-1.5 aspect-video w-full sm:w-80"
          src={video_url}
          allow="fullscreen"
        ></iframe>
      )}

      {/* Features */}
      <div className="mt-3 flex items-center">
        <div className="flex items-center gap-x-1 rounded-2xl bg-gray-100 px-2 py-1">
          <button onClick={increaseUpvotes}>
            <BiUpvote className="hover:fill-red-500" />
          </button>
          <span>
            {upvotes} {upvotes > 1 ? "upvotes" : "upvote"}
          </span>
        </div>
        <Link to="edit">
          <MdEdit size={27} className="icon-btn ml-1" />
        </Link>
        <button onClick={deletePost}>
          <MdDelete size={27} className="icon-btn ml-1" />
        </button>
      </div>

      {/* Comments */}
      <ul className="mt-3 rounded bg-gray-100 p-4">
        <input
          className="input-base mb-0"
          placeholder="Leave a comment..."
          onKeyDown={addComment}
        />
        {comments &&
          comments.map((comment, i) => {
            return (
              <li className="ml-1 mt-2 list-inside list-['-_']" key={i}>
                {comment}
              </li>
            );
          })}
      </ul>
    </main>
  );
}

export default PostPage;
