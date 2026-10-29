import { useState } from "react";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      onClick={() => setClicked(true)}
      className={`${
        clicked ? "bg-blue-100" : "bg-white"
      } cursor-pointer rounded-xl p-4 shadow-md transition-colors`}
    >
      <h2 className="text-sm font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-xs text-gray-600">{body}</p>
    </div>
  );
}

export default PostCard;
