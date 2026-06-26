const WP_BASE_URL = import.meta.env.VITE_WP_API_URL || "https://backend.urbanlandproducts.com";

/**
 * Image CDN Optimization Helper: Uses Cloudflare Image Resizing (/cdn-cgi/image/)
 * to optimize, cache, resize and convert both WP and local images to modern web formats (WebP/AVIF).
 */
export const getOptimizedImageUrl = (url) => {
  if (!url) return url;

  // Skip optimization for base64 data URIs
  if (url.startsWith("data:")) return url;

  // If it's already optimized or external CDN, return as is
  if (
    url.includes("images.unsplash.com") ||
    url.includes("images.weserv.nl") ||
    url.includes("/cdn-cgi/image/") ||
    url.includes("googleusercontent.com") ||
    url.includes("youtube.com") ||
    url.includes("ytimg.com")
  ) {
    return url;
  }

  // Dynamically check if the domain is proxied by Cloudflare (non-localhost and non-vercel.app)
  const isCloudflareActive = typeof window !== 'undefined' &&
    !window.location.hostname.includes('localhost') &&
    !window.location.hostname.includes('127.0.0.1') &&
    !window.location.hostname.includes('192.168.') &&
    !window.location.hostname.includes('vercel.app');

  // 1. WordPress dynamic images (external absolute URLs)
  if (url.startsWith("http://") || url.startsWith("https://")) {
    const isWordPressImage = url.includes("urbanlandproducts.com") || url.includes(WP_BASE_URL.replace(/^https?:\/\//, ""));
    if (isWordPressImage) {
      if (!isCloudflareActive) {
        // If not on the live custom domain (e.g. localhost or vercel.app), load directly from WP backend to avoid 404s
        return url;
      }
      // Production live domain: Route through relative Cloudflare Image Resizing zone
      return `/cdn-cgi/image/width=800,quality=85,format=auto/${url}`;
    }
    // Fallback for other external domains to use weserv (which runs on Cloudflare)
    const cleanUrl = url.replace(/^https?:\/\//, "");
    return `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}&w=800&output=webp&q=80`;
  }

  // 2. Relative URLs / local site assets (e.g. /assets/..., /products/..., /src/assets/...)
  if (!isCloudflareActive) {
    return url;
  }

  // Ensure path starts with a slash for production relative Cloudflare Image Resizing
  const cleanPath = url.startsWith("/") ? url : `/${url}`;
  return `/cdn-cgi/image/width=800,quality=85,format=auto${cleanPath}`;
};

