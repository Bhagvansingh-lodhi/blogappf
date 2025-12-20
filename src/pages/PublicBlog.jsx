import React, { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const PublicBlog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await API.get("/posts");

        // 🔹 sort posts by newest first
        const sortedPosts = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setPosts(sortedPosts);
      } catch (err) {
        setError("Failed to load articles.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // 🔹 real featured post (latest)
  const featuredPost = posts[0];
  // 🔹 rest of posts
  const remainingPosts = posts.slice(1);

  return (
    <div className="min-h-screen bg-white font-lato">
      {/* HERO SECTION - REDUCED PADDING */}
      <section className="pt-20 pb-8 border-b border-gray-100">
        <div className="w-full">
          <div className="px-[120px]">
            <img
              src="/src/assets/hero.png"
              alt="Hero"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* LOADING / ERROR STATES */}
      {loading && (
        <div className="py-20">
          <p className="text-center text-gray-500 text-lg font-lato">
            Loading articles…
          </p>
        </div>
      )}

      {error && (
        <div className="py-20">
          <p className="text-center text-red-500 text-lg font-lato">
            {error}
          </p>
        </div>
      )}

      {/* FEATURED POST */}
      {!loading && !error && featuredPost && (
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-[1040px] mx-auto px-6 lg:px-0 py-16">
            <Link
              to={`/post/${featuredPost._id}`}
              className="group block border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE SECTION */}
              <div className="relative overflow-hidden">
                <img
                  src={featuredPost.imageUrl || "/fallback.jpg"}
                  alt={featuredPost.title}
                  className="w-full h-[320px] md:h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-[#1028CD] px-8 py-3 rounded-lg font-medium shadow-lg flex items-center gap-2 font-lato">
                    Read Article <span>→</span>
                  </span>
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-8 bg-white">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#071477] mb-4 leading-tight font-lato">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-600 text-base mb-6 leading-relaxed font-lato font-normal">
                  {featuredPost.description}
                </p>

                <div className="flex flex-wrap gap-6 text-sm text-gray-500 font-lato">
                  <span className="bg-blue-50 text-[#071477] px-3 py-1 rounded-md">
                    {featuredPost.category || "Design"}
                  </span>
                  <span>6 min read</span>
                  <span>
                    {new Date(featuredPost.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* REST OF POSTS */}
      {!loading && !error && remainingPosts.length > 0 && (
        <section className="bg-white">
          <div className="max-w-[1040px] mx-auto px-6 lg:px-0 py-16">
            <div className="grid md:grid-cols-2 gap-8">
              {remainingPosts.map((post) => (
                <Link
                  to={`/post/${post._id}`}
                  key={post._id}
                  className="group border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                >
                  {/* IMAGE SECTION */}
                  <div className="relative overflow-hidden">
                    <img
                      src={post.imageUrl || "/fallback.jpg"}
                      alt={post.title}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white text-[#1028CD] px-6 py-2 rounded-lg font-medium shadow-md flex items-center gap-2 font-lato">
                        Read <span>→</span>
                      </span>
                    </div>
                  </div>

                  {/* CONTENT SECTION */}
                  <div className="p-6 bg-white">
                    <h3 className="font-semibold text-lg text-[#071477] mb-3 line-clamp-2 font-lato">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed font-lato font-normal">
                      {post.description}
                    </p>

                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 font-lato">
                      <span className="bg-blue-50 text-[#071477] px-2 py-1 rounded">
                        {post.category || "Design"}
                      </span>
                      <span>6 min read</span>
                      <span>
                        {new Date(post.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* PAGINATION - VISUALLY IMPROVED */}
            <div className="flex justify-center gap-8 mt-16 pt-8 border-t border-gray-100 font-lato">
              <button className="text-[#071477] font-medium hover:text-[#1028CD] transition-colors duration-200">
                ← Newer
              </button>
              <button className="text-[#071477] font-medium hover:text-[#1028CD] transition-colors duration-200">
                Older →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* NO POSTS STATE */}
      {!loading && !error && posts.length === 0 && (
        <div className="py-20">
          <p className="text-center text-gray-500 text-lg font-lato">
            No articles published yet.
          </p>
        </div>
      )}

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default PublicBlog;