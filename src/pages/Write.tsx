import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Eye, Edit3, Save, Tag } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { addPost, generateSlug, calculateReadTime } from '@/lib/blogStore';

export default function Write() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Security Analyst');
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleAddTag = () => {
    const tag = tagInput.trim().toLowerCase();
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      toast({
        title: 'Missing fields',
        description: 'Please provide a title and content for your post.',
        variant: 'destructive',
      });
      return;
    }

    const newPost = addPost({
      title: title.trim(),
      slug: generateSlug(title),
      excerpt: excerpt.trim() || content.slice(0, 150) + '...',
      content: content.trim(),
      author: author.trim() || 'Anonymous',
      date: new Date().toISOString().split('T')[0],
      tags: tags.length > 0 ? tags : ['uncategorized'],
      readTime: calculateReadTime(content),
    });

    toast({
      title: 'Post published!',
      description: 'Your article has been added to the blog.',
    });

    navigate(`/blog/${newPost.slug}`);
  };

  const sampleMarkdown = `# Welcome to the Markdown Editor

You can write your blog posts using **Markdown** syntax.

## Features

- **Bold text** and *italic text*
- Lists and numbered lists
- Code blocks with syntax highlighting

\`\`\`bash
# Example command
nmap -sV target.com
\`\`\`

### Links and Images

[Visit our blog](/blog)

> Blockquotes look great for important notes!

Happy writing! 🔒`;

  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Write a <span className="text-primary">New Post</span>
            </h1>
            <p className="text-muted-foreground">
              Create your blog post using Markdown. Preview your content in real-time.
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  placeholder="Enter your post title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2 bg-card border-border"
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt (optional)</Label>
                <Textarea
                  id="excerpt"
                  placeholder="Brief description of your post..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="mt-2 bg-card border-border min-h-[80px]"
                />
              </div>

              <div>
                <Label htmlFor="author">Author</Label>
                <Input
                  id="author"
                  placeholder="Your name..."
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="mt-2 bg-card border-border"
                />
              </div>

              <div>
                <Label>Tags</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    placeholder="Add a tag..."
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                    className="bg-card border-border"
                  />
                  <Button type="button" variant="secondary" onClick={handleAddTag}>
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="cursor-pointer bg-primary/10 text-primary hover:bg-destructive/20 hover:text-destructive"
                        onClick={() => handleRemoveTag(tag)}
                      >
                        {tag} ×
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <Card className="p-4 bg-card/50 border-border">
              <p className="text-sm text-muted-foreground mb-3">
                Quick reference: Use <code className="bg-muted px-1 rounded"># Heading</code>,{' '}
                <code className="bg-muted px-1 rounded">**bold**</code>,{' '}
                <code className="bg-muted px-1 rounded">*italic*</code>,{' '}
                <code className="bg-muted px-1 rounded">```code```</code>
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setContent(sampleMarkdown)}
                className="border-border"
              >
                Load Sample Content
              </Button>
            </Card>
          </div>

          {/* Editor with Tabs */}
          <Tabs defaultValue="edit" className="w-full">
            <TabsList className="mb-4 bg-card border border-border">
              <TabsTrigger value="edit" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Edit3 className="h-4 w-4 mr-2" />
                Edit
              </TabsTrigger>
              <TabsTrigger value="preview" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </TabsTrigger>
            </TabsList>

            <TabsContent value="edit">
              <Textarea
                placeholder="Write your content in Markdown..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[500px] font-mono text-sm bg-card border-border"
              />
            </TabsContent>

            <TabsContent value="preview">
              <Card className="min-h-[500px] p-6 bg-card border-border">
                {content ? (
                  <div className="prose-cyber">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-20">
                    Your preview will appear here...
                  </p>
                )}
              </Card>
            </TabsContent>
          </Tabs>

          {/* Submit */}
          <div className="mt-8 flex justify-end">
            <Button onClick={handleSubmit} size="lg" className="font-semibold">
              <Save className="mr-2 h-4 w-4" />
              Publish Post
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
