import { useState } from "react";
import { supabase } from "../client";

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    imgUrl: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setPost((prev) => {
      return { ...prev, [name]: value };
    });
  }

  async function createPost(e) {
    e.preventDefault();

    await supabase
      .from("Posts")
      .insert({
        title: post.title,
        content: post.content,
        image_url: post.imgUrl,
      })
      .select();

    window.location = "/";
  }

  return (
    <form className="w-1/2 flex-col rounded bg-white px-4 py-6">
      <input
        className="input-base"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <textarea
        className="input-base block resize-none"
        placeholder="Content (Optional)"
        rows="7"
        name="content"
        onChange={handleChange}
      />
      <input
        className="input-base"
        type="url"
        placeholder="Image URL (Optional)"
        name="imgUrl"
        onChange={handleChange}
      />
      <button className="btn" onClick={createPost}>
        Create Post
      </button>
    </form>
  );
}

export default CreatePost;
