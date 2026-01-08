import React, { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import heroImg from "../assets/hero.png";
import PublicBlogSkeleton from "../components/PublicBlogSkeleton";

const PublicBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    API.get(`/posts?page=${page}`)
      .then(res => setPosts(Array.isArray(res.data.posts) ? res.data.posts : []))
      .catch(() => setError("Failed to load articles."))
      .finally(() => setLoading(false));
  }, [page]);

  useEffect(() => {
    if (typeof posts[0]?.imageUrl === "string") {
      const img = new Image();
      img.src = posts[0].imageUrl;
    }
  }, [posts]);

  const safePosts = Array.isArray(posts) ? posts.filter(Boolean) : [];
  const featuredPost = safePosts[0];
  const remainingPosts = safePosts.slice(1);

  const featuredImg =
    typeof featuredPost?.imageUrl === "string"
      ? featuredPost.imageUrl.replace("/upload/", "/upload/f_auto,q_auto,w_700/")
      : "/fallback.jpg";

  return (
    <div className="min-h-screen bg-white font-lato">

{/* HERO */}
<section className="pt-20 pb-8 border-b border-gray-100">
  <div className="w-full">
    <div className="px-6 md:px-[120px] flex justify-center md:justify-start">
      <img
        src={heroImg}
        loading="lazy"
        decoding="async"
        width="420"
        height="240"
        alt="Hero"
        className="w-full max-w-[420px] md:max-w-none h-auto object-contain"
      />
    </div>
  </div>
</section>

{loading && <PublicBlogSkeleton />}

{error && (
  <div className="py-20">
    <p className="text-center text-red-500 text-lg font-lato">{error}</p>
  </div>
)}

{/* FEATURED POST */}
{!loading && !error && featuredPost && (
<section className="bg-white border-b border-gray-100">
  <div className="max-w-[1040px] mx-auto px-6 lg:px-0 py-16">
    <Link to={`/post/${featuredPost._id}`} className="group block border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">

      <div className="relative overflow-hidden">
        <img
          src={featuredImg}
          width="1040"
          height="360"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          alt={featuredPost.title}
          className="w-full h-[320px] md:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white text-[#1028CD] px-8 py-3 rounded-lg font-medium shadow-lg flex items-center gap-2 font-lato">
            Read Article <span>→</span>
          </span>
        </div>
      </div>

      <div className="p-8 bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#071477] mb-4 leading-tight font-lato">{featuredPost.title}</h2>
        <p className="text-gray-600 text-base mb-6 leading-relaxed font-lato font-normal">
          {featuredPost.lead || featuredPost.description}
        </p>

        <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-lato">
          <span className="bg-blue-50 text-[#071477] px-3 py-1 rounded-md">{featuredPost.category || "Design"}</span>
          <span>6 min read</span>
          <span>{new Date(featuredPost.createdAt).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })}</span>
        </div>
      </div>
    </Link>
  </div>
</section>
)}

{/* REST POSTS */}
{!loading && !error && remainingPosts.length > 0 && (
<section className="bg-white">
  <div className="max-w-[1040px] mx-auto px-6 lg:px-0 py-16">
    <div className="grid md:grid-cols-2 gap-8">
      {remainingPosts.map((post) => {
        const cardImg =
          typeof post?.imageUrl === "string"
            ? post.imageUrl.replace("/upload/", "/upload/f_auto,q_auto,w_360/")
            : "/fallback.jpg";

        return (
          <Link key={post._id} to={`/post/${post._id}`} className="group border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">

            <div className="relative overflow-hidden">
              <img
                src={cardImg}
                loading="lazy"
                decoding="async"
                width="360"
                height="220"
                alt={post.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white text-[#1028CD] px-6 py-2 rounded-lg font-medium shadow-md flex items-center gap-2 font-lato">
                  Read <span>→</span>
                </span>
              </div>
            </div>

            <div className="p-6 bg-white">
              <h3 className="font-semibold text-lg text-[#071477] mb-3 line-clamp-2 font-lato">{post.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed font-lato font-normal">{post.description}</p>

              <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-lato">
                <span className="bg-blue-50 text-[#071477] px-2 py-1 rounded">{post.category || "Design"}</span>
                <span>6 min read</span>
                <span>{new Date(post.createdAt).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  </div>
</section>
)}

<div className="flex justify-center gap-8 mt-16 pt-8 border-t border-gray-100 font-lato">
  <button
    disabled={page === 1}
    onClick={() => setPage(p => Math.max(1, p - 1))}
    className="text-[#071477] font-medium hover:text-[#1028CD] transition-colors duration-200 disabled:opacity-40"
  >
    ← Newer
  </button>

  <button
    onClick={() => setPage(p => p + 1)}
    className="text-[#071477] font-medium hover:text-[#1028CD] transition-colors duration-200"
  >
    Older →
  </button>
</div>

<Footer />
</div>
);
};

export default PublicBlog;
