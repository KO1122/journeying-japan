import { useState } from "react";
import { supabase } from "../client";
import { useLoaderData, useParams } from "react-router-dom";

function EditPost() {
  const posts = useLoaderData();
  const { id } = useParams();
  const curPost = posts.find((post) => post.id === Number(id));
  const [post, setPost] = useState({
    title: curPost.title,
    content: curPost.content,
    imgUrl: curPost.image_url,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPost((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function editPost(e) {
    e.preventDefault();

    await supabase
      .from("Posts")
      .update({
        title: post.title,
        content: post.content,
        image_url: post.imgUrl,
      })
      .eq("id", id);

    window.location = "/";
  }

  return (
    <form className="w-1/2 flex-col rounded bg-white px-4 py-6">
      <input
        className="input-base"
        placeholder="Title"
        name="title"
        value={post.title}
        onChange={handleChange}
      />
      <textarea
        className="input-base block resize-none"
        placeholder="Content (Optional)"
        rows="7"
        name="content"
        value={post.content}
        onChange={handleChange}
      />
      <input
        className="input-base"
        type="url"
        placeholder="Image URL (Optional)"
        name="imgUrl"
        value={post.imgUrl}
        onChange={handleChange}
      />
      <button className="btn" onClick={editPost}>
        Edit Post
      </button>
    </form>
  );
}

export default EditPost;
