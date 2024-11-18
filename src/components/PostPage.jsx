import { Link, useLoaderData, useParams } from "react-router-dom";
import { getTimeDifference } from "../utility.js";
import { BiUpvote } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { supabase } from "../client.js";
import { useState } from "react";

function PostPage() {
  const posts = useLoaderData();
  const { id } = useParams();
  const curPost = posts.find((post) => post.id === Number(id));
  const { created_at, title, image_url } = curPost;
  const [upvotes, setUpvotes] = useState(curPost.upvotes);
  const [comments, setComments] = useState(curPost.comments || []);

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
    window.location = "/";
  }

  async function addComment(e) {
    if (!e.target.value.trim()) return;
    if (e.key === "Enter") {
      const newComments = [...comments, e.target.value];

      await supabase
        .from("Posts")
        .update([{ comments: newComments }])
        .eq("id", id);

      e.target.value = "";
      setComments(newComments);
    }
  }

  return (
    <main className="rounded bg-white">
      {/* Post */}
      <div className="text-sm">Posted {getTimeDifference(created_at)}</div>
      <h2>{title}</h2>
      <div></div>
      <img src={image_url} />

      {/* Features */}
      <button onClick={increaseUpvotes}>
        <BiUpvote />
      </button>
      <span>{upvotes} upvotes</span>
      <Link to="edit">
        <MdEdit />
      </Link>
      <button onClick={deletePost}>
        <MdDelete />
      </button>

      {/* Comments */}
      <input placeholder="Leave a comment..." onKeyDown={addComment} />
      {comments &&
        comments.map((comment, i) => {
          return <div key={i}>{comment}</div>;
        })}
    </main>
  );
}

export default PostPage;
