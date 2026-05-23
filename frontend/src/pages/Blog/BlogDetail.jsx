import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchPostBySlug, fetchPosts } from "../../lib/wp";
import { updatePageSEO, cleanPageSEO, generateBlogPostingSchema } from "../../lib/seo";
import { MdArrowBack, MdCalendarToday, MdAccessTime, MdKeyboardArrowRight } from "react-icons/md";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch single post and related posts
  useEffect(() => {
    let active = true;
    const loadPostData = async () => {
      setLoading(true);
      try {
        const singlePost = await fetchPostBySlug(slug);
        if (active) {
          setPost(singlePost);
          
          if (singlePost) {
            // Fetch all posts to select related items
            const allPosts = await fetchPosts();
            const filtered = allPosts
              .filter((p) => p.id !== singlePost.id)
              .slice(0, 2);
            setRelatedPosts(filtered);
          }
        }
      } catch (err) {
        console.error("Error loading blog details:", err);
      } finally {
        if (active) setLoading(false);
      }
    };
    loadPostData();
    return () => {
      active = false;
    };
  }, [slug]);

  // Bind SEO metadata and structured JSON-LD Schema dynamically
  useEffect(() => {
    if (post) {
      const pageUrl = window.location.href;
      const schemaMarkup = post.yoast_head_json?.schema || generateBlogPostingSchema(post, pageUrl);

      updatePageSEO({
        title: post.yoast_head_json?.title || `${post.title?.rendered} | Urbanland Journal`,
        description: post.yoast_head_json?.description || post.excerpt?.rendered?.replace(/<[^>]*>/g, ""),
        og_title: post.yoast_head_json?.og_title || post.title?.rendered,
        og_description: post.yoast_head_json?.og_description || post.excerpt?.rendered?.replace(/<[^>]*>/g, ""),
        og_image: post.yoast_head_json?.og_image || post.featured_image,
        og_type: "article",
        schema: schemaMarkup
      });
    }
    return () => {
      cleanPageSEO();
    };
  }, [post]);

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#F7F4EF] flex flex-col justify-center items-center text-center p-8">
        <svg className="animate-spin h-10 w-10 text-[#2C5F2E] mb-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
        <p className="text-[#2D2D2D]/60 text-xs font-bold uppercase tracking-widest">Loading Article Content...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="w-full min-h-screen bg-[#F7F4EF] flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-3xl font-bold text-[#2D2D2D] mb-4">Article Not Found</h2>
        <p className="text-[#2D2D2D]/70 mb-8">The requested article could not be resolved from WordPress.</p>
        <Link 
          to="/blog" 
          className="px-6 py-3 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-colors"
        >
          Back to Journal
        </Link>
      </div>
    );
  }

  // Format Date
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="w-full bg-[#F7F4EF] text-[#1A1A1A] font-sans pb-24 overflow-x-hidden pt-32">
      {/* Breadcrumbs & Navigation Header Row */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-1 text-[10px] md:text-xs text-[#2D2D2D]/50 uppercase tracking-widest font-bold select-none">
          <Link to="/Urbanland" className="hover:text-[#2C5F2E] transition-colors">Catalog</Link>
          <MdKeyboardArrowRight className="text-sm" />
          <Link to="/blog" className="hover:text-[#2C5F2E] transition-colors">Journal</Link>
          <MdKeyboardArrowRight className="text-sm" />
          <span className="text-[#2D2D2D] font-black truncate max-w-[200px] sm:max-w-xs">{post.title?.rendered}</span>
        </div>
        <button 
          onClick={() => navigate("/blog")}
          className="flex items-center gap-1.5 text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#2C5F2E] hover:text-[#C9A84C] transition-colors cursor-pointer"
        >
          <MdArrowBack className="text-base" /> Back to Journal
        </button>
      </div>

      {/* Hero Banner Section */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 mt-6">
        <div className="w-full aspect-[21/9] md:aspect-[24/9] rounded-[2.5rem] overflow-hidden bg-black/5 relative shadow-lg">
          <img
            src={post.featured_image}
            alt={post.title?.rendered}
            className="w-full h-full object-cover"
          />
          {/* Overlay details */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 flex flex-col justify-end p-8 md:p-12 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {post.category_names?.map((cat) => (
                <span key={cat} className="text-[9px] font-black uppercase tracking-wider bg-[#C9A84C] text-[#232120] px-3 py-1 rounded-full">
                  {cat}
                </span>
              ))}
            </div>
            <h1 
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-none max-w-4xl"
              dangerouslySetInnerHTML={{ __html: post.title?.rendered }}
            />
            
            {/* Meta tags */}
            <div className="flex items-center gap-6 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/70 mt-6 select-none border-t border-white/10 pt-4 w-fit">
              <span className="flex items-center gap-1.5">
                <MdCalendarToday className="text-sm text-[#C9A84C]" />
                {formattedDate}
              </span>
              <span>By {post.author_name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content Layout */}
      <section className="max-w-[850px] mx-auto px-6 mt-16">
        {/* Render HTML content securely parsed from WordPress REST API */}
        <div 
          className="prose prose-lg prose-[#2D2D2D] max-w-none text-sm sm:text-base leading-relaxed text-[#2D2D2D]/90 space-y-6 blog-content-area"
          dangerouslySetInnerHTML={{ __html: post.content?.rendered }}
        />

        {/* Back to list & CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-black/[0.08] pt-12 mt-16">
          <Link
            to="/blog"
            className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#2D2D2D] hover:text-[#2C5F2E] transition-all cursor-pointer"
          >
            ← Back to Journal list
          </Link>

          <Link
            to="/Urbanland"
            className="px-6 py-3.5 bg-[#2C5F2E] text-white rounded-full font-bold uppercase tracking-wider text-xs hover:bg-[#2D2D2D] transition-colors"
          >
            Explore Street Furniture Collection
          </Link>
        </div>
      </section>

      {/* Related Insights Carousel */}
      {relatedPosts.length > 0 && (
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mt-20 pt-16 border-t border-black/[0.08]">
          <p className="text-[10px] font-bold uppercase tracking-widest text-[#2C5F2E] mb-2">— Keep Reading</p>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-black mb-8">Related Journal Insights</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rPost) => (
              <Link
                key={rPost.id}
                to={`/blog/${rPost.slug}`}
                className="bg-white rounded-[2rem] border border-black/[0.03] p-5 shadow-[0_5px_20px_rgba(0,0,0,0.01)] hover:shadow-[0_15px_45px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 flex flex-col sm:flex-row gap-6 cursor-pointer no-underline group"
              >
                <div className="w-full sm:w-[40%] aspect-[16/10] sm:aspect-square rounded-xl overflow-hidden bg-black/5 shrink-0">
                  <img
                    src={rPost.featured_image}
                    alt={rPost.title?.rendered}
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-between py-1 flex-1">
                  <div>
                    <span className="text-[8px] font-black uppercase tracking-wider text-[#C9A84C] bg-[#C9A84C]/10 px-2 py-0.5 rounded-md mb-2 inline-block">
                      {rPost.category_names?.[0] || "Architecture"}
                    </span>
                    <h4 
                      className="text-base font-bold tracking-tight text-[#1A1A1A] leading-snug group-hover:text-[#2C5F2E] transition-colors line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: rPost.title?.rendered }}
                    />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#2C5F2E] group-hover:underline mt-4">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;
