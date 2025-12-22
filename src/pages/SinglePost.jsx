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
        setLoading(true);
        const { data } = await API.get("/posts");
        const foundPost = data.find((p) => p._id === id);
        setPost(foundPost || null);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const calculateReadingTime = (text = "") => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white pt-28 text-center text-[#8A90B2]">
        Loading article…
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white pt-28 text-center">
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

          {/* BACK */}
          <Link
            to="/"
            className="text-[14px] text-[#8A90B2] hover:text-[#1028CD] inline-flex items-center gap-1 mb-8"
          >
            ← Back to articles
          </Link>

          {/* META */}
          <div className="flex items-center gap-3 text-[13px] text-[#8A90B2] mb-4">
            <span className="uppercase tracking-wide">
              {post.category || "UI/UX"}
            </span>
            <span>•</span>
            <span>{calculateReadingTime(post.description)} min</span>
            <span>•</span>
            <span>
              {new Date(post.createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="font-raleway font-bold text-[28px] md:text-[32px] leading-[38px] text-[#071477] mb-6">
            {post.title}
          </h1>

          {/* FEATURED IMAGE */}
          {post.imageUrl && (
            <div className="mb-10">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full rounded-2xl object-cover"
              />
            </div>
          )}

          {/* CONTENT (REAL DATA ONLY) */}
          <article className="space-y-6 text-[16px] leading-[28px] text-[#3D4367]">
            {post.description
              .split("\n")
              .filter(Boolean)
              .map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
          </article>

        </div>
      </section>
    </div>
  );
};

export default SinglePost;
