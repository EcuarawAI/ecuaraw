import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { tours } from "@/lib/tours";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/tours", "/gallery", "/contact", "/blog", "/wildlife"].map(
    (path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
    })
  );

  const tourRoutes = tours.map((t) => ({
    url: `${siteConfig.url}/tours/${t.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: p.date,
  }));

  return [...staticRoutes, ...tourRoutes, ...blogRoutes];
}
