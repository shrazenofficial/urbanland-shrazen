import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { fetchPosts } from "../../lib/wp";
import { updatePageSEO, cleanPageSEO } from "../../lib/seo";
import { MdSearch, MdChevronRight, MdAccessTime, MdCalendarToday } from "react-icons/md";

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef(null);

  // Fetch blogs on mount
  useEffect(() => {
    let active = true;
    const loadBlogs = async () => {
      setLoading(true);
      try {
        const data = await fetchPosts();
        if (active) setPosts(data);
      } catch (err) {
        console.error("Failed to load blog posts:", err);
      } finally {
        if (active) setLoading(false);
      }
    };
    loadBlogs();
    return () => {
      active = false;
    };
  }, []);

  // Update SEO settings for the Blog page
  useEffect(() => {
    updatePageSEO({
      title: "Journal | Insights on Urban Architecture & Sustainable Cities",
      description: "Explore the Urbanland Journal for insights, case studies, and modern perspectives on public space architecture, modular parklets, and smart city infrastructure.",
      og_title: "Urbanland Journal - Sustainable Urban Architecture",
      og_description: "Explore articles, trends, and engineering details on public space design and smart street furniture.",
      og_type: "blog"
    });
    return () => {
      cleanPageSEO();
    };
  }, []);

  // Get all unique categories for filtering
  const allCategories = ["All", ...new Set(posts.flatMap((p) => p.category_names || []))];

  // Filter posts based on search query and category pill selection
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = 
      post.title?.rendered?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.rendered?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content?.rendered?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = 
      activeCategory === "All" || 
      post.category_names?.includes(activeCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full min-h-screen bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Blog List Header */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 border-b border-black/[0.04]">
        <p className="text-[10px] font-black uppercase tracking-widest text-[#2C5F2E] mb-2">— Urbanland Journal</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase leading-none text-black">
          Insights & Ideas
        </h1>
        <p className="text-sm md:text-base text-[#2D2D2D]/70 max-w-xl mt-4 leading-relaxed">
          Read details on tactical urban interventions, sustainable timber engineering, smart cities technology, and case studies transforming parking spaces into parks.
        </p>
      </section>

      {/* Filter and Search Bar Row */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        {/* Category Pills */}
        <div className="flex-1 overflow-x-auto scrollbar-none flex items-center gap-2.5 pb-2 md:pb-0">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-10 w-24 bg-black/5 rounded-full animate-pulse" />
            ))
          ) : (
            allCategories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                    isActive
                      ? "bg-[#2C5F2E] text-[#F7F4EF] border-[#2C5F2E] shadow-sm"
                      : "bg-white text-[#2D2D2D]/70 border-black/[0.06] hover:bg-black/5"
                  }`}
                >
                  {cat}
                </button>
              );
            })
          )}
        </div>

        {/* Live Search Bar Input */}
        <div className="relative w-full md:w-80 shrink-0">
          <input
            type="text"
            placeholder="Search journal..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-black/[0.08] focus:border-[#2C5F2E] px-5 py-3 rounded-full text-xs focus:outline-none transition-all pr-10"
          />
          <MdSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#2D2D2D]/40 text-lg" />
        </div>
      </section>

      {/* Journal Cards Grid */}
      <section ref={containerRef} className="max-w-[1400px] mx-auto px-6 md:px-12 py-4">
        {loading ? (
          // Grid loading skeletons
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] p-6 border border-black/[0.03] flex flex-col justify-between aspect-[4/5] animate-pulse">
                <div className="w-full aspect-[16/10] bg-black/[0.04] rounded-2xl mb-4" />
                <div className="flex-1 flex flex-col gap-3">
                  <div className="h-4 w-24 bg-black/10 rounded" />
                  <div className="h-6 w-full bg-black/10 rounded" />
                  <div className="h-4 w-[85%] bg-black/5 rounded" />
                </div>
                <div className="flex justify-between items-center mt-6">
                  <div className="h-4 w-20 bg-black/10 rounded" />
                  <div className="h-4 w-12 bg-black/10 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => {
                // Formatting Date
                const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                });

                return (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="bg-white rounded-[2.5rem] border border-black/[0.03] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between group cursor-pointer no-underline aspect-[4/5] p-6"
                  >
                    {/* Featured Image */}
                    <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/5 mb-4 relative">
                      <img
                        src={post.featured_image}
                        alt={post.title?.rendered || "Featured post"}
                        className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      {/* Floating Category Badge */}
                      {post.category_names?.[0] && (
                        <span className="absolute top-3 left-3 text-[8px] font-black uppercase tracking-wider bg-black/85 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                          {post.category_names[0]}
                        </span>
                      )}
                    </div>

                    {/* Metadata (Date & Author) */}
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-[#2D2D2D]/40 mb-2">
                      <span className="flex items-center gap-1">
                        <MdCalendarToday className="text-sm shrink-0" />
                        {formattedDate}
                      </span>
                      <span>•</span>
                      <span>By {post.author_name}</span>
                    </div>

                    {/* Title */}
                    <h3 
                      className="text-lg md:text-xl font-bold tracking-tight text-[#1A1A1A] leading-snug group-hover:text-[#2C5F2E] transition-colors mb-3"
                      dangerouslySetInnerHTML={{ __html: post.title?.rendered || "" }}
                    />

                    {/* Excerpt */}
                    <p 
                      className="text-xs text-[#2D2D2D]/65 leading-relaxed flex-1 line-clamp-3 mb-4"
                      dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || "" }}
                    />

                    {/* Read More button */}
                    <div className="flex justify-between items-center pt-2 border-t border-black/[0.03]">
                      <span className="text-[9px] font-black uppercase tracking-wider text-[#2C5F2E] flex items-center gap-0.5 group-hover:underline">
                        Read Article <MdChevronRight className="text-base" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {filteredPosts.length === 0 && (
              <div className="w-full py-20 flex flex-col justify-center items-center text-center">
                <svg className="w-16 h-16 text-[#2D2D2D]/20 mb-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">No Matching Insights Found</h3>
                <p className="text-xs text-[#2D2D2D]/60 max-w-sm leading-relaxed">
                  Try refining your search keyword or selecting a different category tab.
                </p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
};

export default BlogList;
