import React, { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";

const PublicBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Topics", icon: "🌟" },
    { id: "ui", name: "UI Design", icon: "🎨" },
    { id: "ux", name: "UX Research", icon: "🔍" },
    { id: "frontend", name: "Frontend", icon: "💻" },
    { id: "tools", name: "Design Tools", icon: "🛠️" },
    { id: "career", name: "Career Tips", icon: "🚀" }
  ];

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError("");
      const { data } = await API.get("/posts");
      setPosts(data);
    } catch (err) {
      console.error("FETCH POSTS ERROR ===>", err);
      setError("Failed to load articles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = activeCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  // Enhanced Skeleton Card for design blog
  const SkeletonCard = () => (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden animate-pulse">
      <div className="h-48 bg-gradient-to-r from-gray-700 to-gray-600" />
      <div className="p-6 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-20 h-5 bg-gray-600 rounded-full" />
          <div className="w-4 h-4 bg-gray-600 rounded-full ml-auto" />
        </div>
        <div className="h-6 bg-gray-600 rounded-lg w-3/4" />
        <div className="h-4 bg-gray-600 rounded-lg w-full" />
        <div className="h-4 bg-gray-600 rounded-lg w-5/6" />
        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-600 rounded-full" />
            <div className="w-20 h-3 bg-gray-600 rounded-lg" />
          </div>
          <div className="w-16 h-6 bg-gray-600 rounded-lg" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900/20 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm">Learn Design & Development</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              DesignMaster
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Master UI/UX design, frontend development, and design tools with practical tutorials, 
              case studies, and industry insights from experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="#articles"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Start Learning</span>
                <span className="group-hover:translate-y-1 transition-transform">↓</span>
              </Link>
              <button className="px-8 py-4 border border-gray-600 rounded-2xl font-semibold hover:bg-white/5 backdrop-blur-sm transition-all duration-300">
                Browse Tutorials
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-20 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-pink-400 rounded-full animate-bounce delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-2xl mb-2">📚</div>
            <div className="text-2xl font-bold text-white">50+</div>
            <div className="text-gray-400 text-sm">Tutorials</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-2xl mb-2">⏱️</div>
            <div className="text-2xl font-bold text-white">15min</div>
            <div className="text-gray-400 text-sm">Avg. Read Time</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-white">Expert</div>
            <div className="text-gray-400 text-sm">Level Content</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="text-2xl mb-2">🆓</div>
            <div className="text-2xl font-bold text-white">Free</div>
            <div className="text-gray-400 text-sm">Forever</div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section id="articles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Latest Design Guides
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Practical tutorials and insights to level up your design skills
          </p>
        </div>

        {/* Error message */}
        {error && !loading && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-6 py-4 rounded-2xl">
              <span className="text-red-400">⚠️</span>
              <p className="text-red-400">{error}</p>
              <button
                onClick={fetchPosts}
                className="px-4 py-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}

        {/* Loading state */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-white/10">
              <span className="text-4xl">📝</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-3">No articles found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              {activeCategory === "all" 
                ? "We're creating amazing design content. Check back soon!"
                : `No ${categories.find(c => c.id === activeCategory)?.name} articles yet.`}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link
                to={`/post/${post._id}`}
                key={post._id}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs text-white border border-white/20">
                      {post.category || "Design"}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors">
                      <span className="text-sm">🔖</span>
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                      {post.readTime || "5 min read"}
                    </span>
                    <span className="text-xs text-gray-400">
                      {new Date(post.createdAt || Date.now()).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h2 className="font-bold text-xl mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xs">
                        👤
                      </div>
                      <span className="text-xs text-gray-400">By Author</span>
                    </div>
                    <span className="text-blue-400 text-sm font-medium group-hover:text-blue-300 transition-colors flex items-center gap-1">
                      Read Guide <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Master Design?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of designers and developers learning together. Get weekly design tips, 
            free resources, and exclusive tutorials delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-500"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              Join Community
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PublicBlog;