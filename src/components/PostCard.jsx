import { Link } from "react-router-dom";
import { getTimeDifference } from "../utility";

function PostCard({ id, createdAt, title, upvotes }) {
  return (
    <div className="mt-4 rounded bg-white p-4 shadow-md hover:bg-gray-200">
      <Link to={`/post/${id}`}>
        <div className="text-sm">Posted {getTimeDifference(createdAt)}</div>
        <h2 className="mt-2 text-2xl font-bold">{title}</h2>
        <div className="mt-2">
          {upvotes} {upvotes > 1 ? "upvotes" : "upvote"}
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
