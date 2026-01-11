import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import type { BlogPost } from '@/lib/blogStore';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <Card className="group p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:cyber-glow cursor-pointer h-full">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs font-mono bg-primary/10 text-primary border-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
