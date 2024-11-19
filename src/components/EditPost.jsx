import { useState } from "react";
import { supabase } from "../client";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function EditPost() {
  const posts = useLoaderData();
  const { id } = useParams();
  const curPost = posts.find((post) => post.id === Number(id));
  const [post, setPost] = useState({
    title: curPost.title,
    content: curPost.content,
    imgUrl: curPost.image_url,
    videoUrl: curPost.video_url,
  });
  const navigate = useNavigate();

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
        video_url: post.videoUrl,
      })
      .eq("id", id);

    toast.success("Post edited successfully");
    return navigate("/");
  }

  return (
    <main className="flex w-full justify-center">
      <form className="w-full flex-col rounded bg-white p-5 lg:w-10/12">
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
        <input
          className="input-base"
          type="url"
          placeholder="Video URL (Optional)"
          name="videoUrl"
          value={post.videoUrl}
          onChange={handleChange}
        />
        <button className="btn bg-red-500 hover:bg-red-600" onClick={editPost}>
          Edit Post
        </button>
      </form>
    </main>
  );
}

export default EditPost;
