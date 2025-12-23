const PublicBlogSkeleton = () => {
  return (
    <div className="max-w-[1040px] mx-auto px-6 lg:px-0 py-16 space-y-16 animate-pulse">
      
      {/* Featured skeleton */}
      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <div className="h-[360px] bg-gray-200" />
        <div className="p-8 space-y-4">
          <div className="h-6 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-2/3" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="grid md:grid-cols-2 gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="h-56 bg-gray-200" />
            <div className="p-6 space-y-3">
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default PublicBlogSkeleton;
