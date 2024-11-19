import { useState } from "react";
import { supabase } from "../client";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    content: "",
    imgUrl: "",
  });
  const navigate = useNavigate();

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

    toast.success("Post created successfully");
    return navigate("/");
  }

  return (
    <main className="flex w-full justify-center">
      <form className="w-full flex-col rounded bg-white p-5 lg:w-10/12">
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
        <button
          className="btn bg-red-500 hover:bg-red-600"
          onClick={createPost}
        >
          Create Post
        </button>
      </form>
    </main>
  );
}

export default CreatePost;
