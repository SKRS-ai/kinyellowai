"use client";

import React, { useMemo } from "react";
import { PostsProvider, usePosts } from "@/integrations/wordpress/WordPressPostsProvider";
import { WP_Query } from "@/integrations/wordpress/wp_query";
import { Link } from "@/components/common/Link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, User, Clock, ArrowRight, Share2, Tag, MessageSquare } from "lucide-react";



function RelatedPostsList() {
  const { posts, loading, error } = usePosts();

  if (loading) {
    return (
      <div data-section-id="23860" className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-80 w-full animate-pulse rounded-2xl bg-muted/60" data-index={i} />
        ))}
      </div>
    );
  }

  if (error || posts.length === 0) {
    return null; 
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {posts.map((post, i) => (
        <Card key={post.id} className="group overflow-hidden border-border/60 bg-card transition-all hover:border-primary hover:shadow-lg" data-index={i}>
          {post.featuredImage && (
            <div className="aspect-video w-full overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          )}
          <CardHeader className="p-5">
            <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <Calendar className="h-3 w-3" />
              <span>{post.date ? new Date(post.date).toLocaleDateString("en-US") : "Recently"}</span>
            </div>
            <CardTitle className="line-clamp-2 text-lg font-bold leading-tight tracking-tight group-hover:text-primary transition-colors">
              <Link to={post.link || "#"}>{post.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardFooter className="p-5 pt-0">
            <Link to={post.link || "#"} className="w-full">
              <Button variant="ghost" className="w-full justify-between hover:bg-primary/10 hover:text-secondary font-semibold">
                Explore Listing <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function RelatedPostsWrapper({ currentPostId, categories }: { currentPostId: string; categories?: any[] }) {
  
  const relatedQuery = useMemo(() => {
    const categoryIds = categories?.map((c) => c.id) || [];
    const args: any = {
      post_type: "post",
      posts_per_page: 3,
      post__not_in: [currentPostId],
    };

    if (categoryIds.length > 0) {
      args.category__in = categoryIds;
    }

    return new WP_Query(args);
  }, [currentPostId, categories]);

  return (
    <div className="mt-16 border-t border-border pt-12">
      <h3 className="mb-8 font-serif text-3xl font-bold tracking-tight text-secondary">Recommended Business Insights</h3>
      <PostsProvider wp_query={relatedQuery}>
        <RelatedPostsList />
      </PostsProvider>
    </div>
  );
}



function SinglePostConsumer() {
  const { posts, loading, error, refetch } = usePosts();

  if (loading) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8 h-12 w-3/4 animate-pulse rounded-lg bg-muted/60" />
        <div className="mb-8 h-96 w-full animate-pulse rounded-2xl bg-muted/60" />
        <div className="space-y-4">
          <div className="h-4 w-full animate-pulse rounded bg-muted/60" />
          <div className="h-4 w-full animate-pulse rounded bg-muted/60" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-muted/60" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold text-secondary">Connection Error</h2>
        <p className="mb-6 text-muted-foreground">We couldn't retrieve this business profile. Please refresh or check back later.</p>
        <Button onClick={() => refetch()} className="bg-primary text-secondary hover:bg-primary/90">Try Again</Button>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[50vh] flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold text-secondary">Listing Not Found</h2>
        <Link to="/HomePage">
          <Button className="bg-primary text-secondary hover:bg-primary/90">Return to Directory</Button>
        </Link>
      </div>
    );
  }

  const post = posts[0];
  const authorName = post.author?.name || "kinyellow Editorial";
  const authorAvatar = post.author?.avatar?.["96"] || "";

  return (
    <article className="container mx-auto max-w-4xl px-4 py-12 md:py-20">
      {}
      <header className="mb-10 text-center">
        <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          {post.categories && post.categories.length > 0 && (
            <span className="flex items-center gap-1 rounded-full bg-primary/10 px-4 py-1.5 text-secondary border border-primary/20">
              <Tag className="h-3.5 w-3.5" />
              {post.categories[0].name}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {post.date ? new Date(post.date).toLocaleDateString("en-US", { day: 'numeric', month: 'long', year: 'numeric' }) : ""}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            Verified Profile
          </span>
        </div>

        <h1 className="mb-6 font-serif text-4xl font-black leading-tight tracking-tighter text-secondary md:text-5xl lg:text-7xl">
          {post.title}
        </h1>

        <div className="flex items-center justify-center gap-3">
          <Avatar className="h-12 w-12 border-2 border-primary shadow-sm">
            <AvatarImage src={authorAvatar} alt={authorName} />
            <AvatarFallback className="bg-muted text-secondary"><User className="h-6 w-6" /></AvatarFallback>
          </Avatar>
          <div className="text-left">
            <p className="text-sm font-bold text-secondary">{authorName}</p>
            <p className="text-xs font-medium text-muted-foreground uppercase">Directory Guide</p>
          </div>
        </div>
      </header>

      {}
      {post.featuredImage && (
        <div className="mb-12 overflow-hidden rounded-2xl border border-border bg-muted shadow-xl">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="h-auto w-full object-cover"
          />
        </div>
      )}

      {}
      <div className="prose prose-lg prose-neutral dark:prose-invert mx-auto max-w-none text-secondary/90 leading-relaxed font-sans">
        {}
        <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
      </div>

      {}
      <div className="mt-12 flex flex-col items-center justify-between gap-6 border-y border-border py-8 md:flex-row">
        <div className="flex flex-wrap gap-2">
          {post.tags?.map((tag, i) => (
            <span key={tag.id} className="rounded-lg bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:bg-primary hover:text-secondary cursor-default" data-index={i}>
              #{tag.name}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Share Profile:</span>
          <Button variant="outline" size="icon" className="rounded-full border-primary/40 hover:bg-primary hover:text-secondary transition-all">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {}
      <div className="mt-12 rounded-2xl bg-primary/5 p-8 border border-primary/10">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
            <AvatarImage src={authorAvatar} alt={authorName} />
            <AvatarFallback className="bg-primary/20 text-secondary"><User className="h-10 w-10" /></AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <h3 className="text-2xl font-bold text-secondary">{authorName}</h3>
            <p className="text-muted-foreground font-medium">
              {}
              Specializing in community-driven business insights and local economic development across the United States. Helping you find the best local services in kinyellow.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold px-6">
            View All Insights
          </Button>
        </div>
      </div>

      {}
      <RelatedPostsWrapper currentPostId={post.id} categories={post.categories} />
    </article>
  );
}

export default function SinglePostTemplate() {
  
  
  const currentWPQueryParams = typeof window !== 'undefined' && (window as any).wvcClient 
    ? (window as any).wvcClient.getCurrentWPQueryParams() 
    : { post_type: "post", p: 1 }; 

  const wp_query = new WP_Query(currentWPQueryParams);

  return (
    <section id="single-post-template-section" className="bg-background text-foreground selection:bg-primary/30">
      <PostsProvider wp_query={wp_query}>
        <SinglePostConsumer />
      </PostsProvider>
    </section>
  );
}