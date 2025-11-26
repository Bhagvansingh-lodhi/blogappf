import React, { useEffect, useState } from "react";
import API from "../api";
import { useParams, Link } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState([]);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/posts");
      const found = data.find((p) => p._id === id);
      setPost(found || null);
      
      // Get related posts (excluding current post)
      const related = data
        .filter(p => p._id !== id)
        .slice(0, 3);
      setRelatedPosts(related);
    } catch (error) {
      console.error("Error fetching post:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  // Reading time calculator
  const calculateReadingTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900/20 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">
            <div className="h-4 bg-slate-700 rounded w-24 mb-8"></div>
            <div className="h-8 bg-slate-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-slate-700 rounded w-48 mb-12"></div>
            <div className="h-96 bg-slate-700 rounded-xl mb-8"></div>
            <div className="space-y-3">
              <div className="h-4 bg-slate-700 rounded w-full"></div>
              <div className="h-4 bg-slate-700 rounded w-full"></div>
              <div className="h-4 bg-slate-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900/20 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/10">
            <span className="text-4xl">📝</span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Post Not Found</h2>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <span>Back to Articles</span>
            <span>←</span>
          </Link>
        </div>
      </div>
    );
  }

  const readingTime = calculateReadingTime(post.description);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900/20 pt-20">
      {/* Back Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group mb-8"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Back to all articles</span>
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">
              {post.category || "Design Tutorial"}
            </span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-400 text-sm">{readingTime} min read</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs">
                👤
              </div>
              <span className="text-sm">DesignMaster Team</span>
            </div>
            <span>•</span>
            <span className="text-sm">
              {new Date(post.createdAt || Date.now()).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl border border-white/10">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-auto max-h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg prose-invert max-w-none mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="text-lg leading-relaxed text-gray-200 whitespace-pre-line">
              {post.description.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-6 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-200 group">
            <span>👍</span>
            <span>Helpful</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-200 group">
            <span>🔖</span>
            <span>Bookmark</span>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-200 group">
            <span>🔄</span>
            <span>Share</span>
          </button>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Continue Learning
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost._id}
                  to={`/post/${relatedPost._id}`}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="h-32 overflow-hidden">
                    <img
                      src={relatedPost.imageUrl}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{calculateReadingTime(relatedPost.description)} min read</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/10">
          <h3 className="text-2xl font-bold mb-3">Want more design insights?</h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Get weekly UI/UX tips, frontend tutorials, and design resources delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;