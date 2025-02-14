"use client"
import { useState, useEffect } from "react";
 const CommentSection = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<{ username: string; comment: string }[]>([]);

  // Load comments from local storage on component mount
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(savedComments);
  }, []);

  // Save comments to local storage whenever comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!username || !comment) return;

    const newComment = { username, comment };
    setComments([...comments, newComment]);
    setUsername("");
    setComment("");
  };

  return (
    <div className="p-4 max-w-md mx-auto border rounded shadow-lg">
      <h2 className="text-lg font-bold mb-2">Comment Section</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <textarea
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border p-2 rounded"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
      <div className="mt-4">
        <h3 className="font-bold mb-2">Comments</h3>
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div key={index} className="border-b py-2">
              <p className="font-semibold">{c.username}</p>
              <p>{c.comment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
}
export default CommentSection
