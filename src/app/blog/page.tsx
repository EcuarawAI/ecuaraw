import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { BlogExplorer } from "@/components/BlogExplorer";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Field notes on Ecuador wildlife, bird photography, conservation and travel planning from the ECUARAW guiding team.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <div className="pt-28">
      <Container className="py-16 md:py-20">
        <h1 className="max-w-xl font-serif-display text-5xl leading-tight text-charcoal-900 md:text-6xl">
          Notes from the field
        </h1>

        <div className="mt-16">
          <BlogExplorer posts={blogPosts} />
        </div>
      </Container>
    </div>
  );
}
