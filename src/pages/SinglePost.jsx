import React, { useEffect, useState } from "react";
import API from "../api";
import { useParams, Link } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
       const { data } = await API.get(`/posts/${id}`);

        setPost(data);
      } catch {
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const calculateReadingTime = (text = "") => {
    const words = text.split(/\s+/).length;
    return Math.ceil(words / 200);
  };

  if (loading) {
    return <div className="pt-28 text-center text-[#8A90B2]">Loading article…</div>;
  }

  if (!post) {
    return (
      <div className="pt-28 text-center">
        <p className="text-[#8A90B2] mb-6">Article not found.</p>
        <Link to="/" className="text-[#1028CD] hover:underline">
          Back to articles
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-lato">
      <section className="pt-28 pb-32">
        <div className="px-6 md:px-[120px] max-w-[760px]">

          <Link to="/" className="text-[14px] text-[#8A90B2] hover:text-[#1028CD] inline-flex items-center gap-1 mb-8">
            ← Back to articles
          </Link>

          <div className="flex items-center gap-3 text-[13px] text-[#8A90B2] mb-4">
            <span className="uppercase tracking-wide">{post.category || "UI/UX"}</span>
            <span>•</span>
            <span>{calculateReadingTime(post.description)} min</span>
            <span>•</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>

          <h1 className="font-raleway font-bold text-[28px] md:text-[32px] text-[#071477] mb-6">
            {post.title}
          </h1>

          {post.imageUrl && (
            <img
              src={post.imageUrl}
              loading="lazy"
              className="w-full rounded-2xl mb-10 blur-sm transition"
              onLoad={(e) => e.target.classList.remove("blur-sm")}
              alt={post.title}
            />
          )}

          <article className="space-y-6 text-[16px] leading-[28px] text-[#3D4367]">
            {post.description
              .split("\n")
              .filter(Boolean)
              .map((p, i) => <p key={i}>{p}</p>)}
          </article>

        </div>
      </section>
    </div>
  );
};

export default SinglePost;
