"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { BlogCategory, BlogPost, blogCategories } from "@/lib/blog";

function isBlogCategory(value: string | null): value is BlogCategory {
  return !!value && (blogCategories as readonly string[]).includes(value);
}

function BlogExplorerInner({ posts }: { posts: BlogPost[] }) {
  const searchParams = useSearchParams();
  const preset = searchParams.get("category");
  const [active, setActive] = useState<BlogCategory | "All">(
    isBlogCategory(preset) ? preset : "All"
  );
  const [prevPreset, setPrevPreset] = useState(preset);

  if (preset !== prevPreset) {
    setPrevPreset(preset);
    setActive(isBlogCategory(preset) ? preset : "All");
  }

  const filtered = useMemo(() => {
    if (active === "All") return posts;
    return posts.filter((p) => p.category === active);
  }, [active, posts]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {(["All", ...blogCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`eyebrow border px-4 py-2.5 transition-colors ${
              active === cat
                ? "border-forest-900 bg-forest-900 text-offwhite"
                : "border-charcoal-900/20 text-charcoal-700 hover:border-forest-900 hover:text-forest-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900">
                <Image
                  src={post.cover.src}
                  alt={post.cover.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </Link>
            <button
              onClick={() => setActive(post.category)}
              className="eyebrow mt-4 text-forest-700 hover:text-forest-900"
            >
              {post.category}
            </button>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="mt-2 font-serif-display text-xl text-charcoal-900 transition-colors group-hover:text-forest-800">
                {post.title}
              </h2>
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function BlogExplorer({ posts }: { posts: BlogPost[] }) {
  return (
    <Suspense fallback={null}>
      <BlogExplorerInner posts={posts} />
    </Suspense>
  );
}
