"use client";
import { useState, useEffect } from "react";

const CommentsList = ({ pid, triggerReFetch, onCommentsUpdated }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/getcomments?pid=${pid}`);
        const data = await res.json();

        if (res.ok) {
          setComments(data.data);
        } else {
          setError(data.message);
        }
      } catch (error) {
        setError("Error fetching comments");
      } finally {
        setLoading(false);
      }
    };

    if (pid) {
      fetchComments();
    }

    if (triggerReFetch) {
      onCommentsUpdated();
    }
  }, [pid, triggerReFetch, onCommentsUpdated]);

  if (loading) {
    return (
      <p className="text-gray-400 text-center mt-8 animate-pulse">
        Loading comments...
      </p>
    );
  }

  if (error) {
    return <p className="text-red-400 text-center mt-8">{error}</p>;
  }

  if (!comments || comments.length === 0) {
    return (
      <p className="text-gray-400 text-center mt-8">
        No comments yet. Be the first to leave one!
      </p>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 space-y-5">
      <h3 className="text-xl text-white font-bold text-center mb-4">
        What people are saying
      </h3>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-xl p-5 shadow-md"
        >
          <h4 className="text-white font-semibold text-lg">
            {comment.name}
          </h4>
          <p className="text-gray-300 mt-2 leading-relaxed">
            {comment.review}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
