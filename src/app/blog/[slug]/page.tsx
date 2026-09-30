import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PhotoCredit } from "@/components/PhotoCredit";
import { blogPosts } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="pt-28">
      <Container className="max-w-3xl py-16 md:py-20">
        <Link href={`/blog?category=${encodeURIComponent(post.category)}`} className="eyebrow text-forest-700 hover:text-forest-900">
          {post.category}
        </Link>
        <h1 className="mt-6 font-serif-display text-4xl leading-tight text-charcoal-900 md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-charcoal-500">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.author}
        </p>

        <div className="relative mt-10 aspect-[16/9] overflow-hidden bg-charcoal-900">
          <Image src={post.cover.src} alt={post.cover.alt} fill className="object-cover" />
          <PhotoCredit photo={post.cover} light />
        </div>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-charcoal-700">
          {post.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-14 border-t border-charcoal-900/10 pt-8">
          <Link href="/blog" className="eyebrow text-forest-800">
            ← Back to Journal
          </Link>
        </div>
      </Container>
    </div>
  );
}
