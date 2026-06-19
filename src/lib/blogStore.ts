export interface BlogPostMetadata {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  readTime: number;
  coverImage?: string;
}

export interface BlogPost extends BlogPostMetadata {
  content: string;
}

const STORAGE_KEY = 'cybersec-blog-posts';

// Blog metadata only - content loaded from markdown files
const blogMetadata: BlogPostMetadata[] = [
  {
    id: '1',
    title: 'Understanding Zero-Day Vulnerabilities',
    slug: 'understanding-zero-day-vulnerabilities',
    excerpt: 'A deep dive into zero-day exploits, how they work, and strategies for protection against unknown threats.',
    author: 'Security Analyst',
    date: '2024-12-10',
    tags: ['vulnerabilities', 'security', 'zero-day'],
    readTime: 5,
  },
  {
    id: '2',
    title: 'Introduction to Penetration Testing',
    slug: 'introduction-to-penetration-testing',
    excerpt: 'Learn the fundamentals of ethical hacking and penetration testing methodologies.',
    author: 'Security Analyst',
    date: '2024-12-08',
    tags: ['pentesting', 'ethical-hacking', 'security'],
    readTime: 7,
  },
  {
    id: '3',
    title: 'Ransomware Defense Strategies',
    slug: 'ransomware-defense-strategies',
    excerpt: 'Comprehensive guide to protecting your organization from ransomware attacks.',
    author: 'Security Analyst',
    date: '2024-12-05',
    tags: ['ransomware', 'defense', 'backup'],
    readTime: 6,
  },
  {
    id: '4',
    title: 'How to Create Strong Passwords (and Manage Them Easily)',
    slug: 'how-to-create-strong-passwords-and-manage-them-easily',
    excerpt: 'Strong passwords are easier to build and manage than most people think. This guide shows a simple system to create high-entropy passwords, store them safely, and protect your accounts with minimal effort.',
    author: 'Haden Pereira',
    date: '2026-04-04',
    tags: ['cybersecurity', 'passwords', 'password manager', 'online safety', 'authentication', 'digital security'],
    readTime: 8,
  },
  {
    id: '5',
    title: 'Reduce Your Digital Footprint: Every Click Counts',
    slug: 'reducing-digital-footprint',
    excerpt: 'Every online action leaves a trace. Learn how to reduce your digital footprint and protect yourself from fraud.',
    author: 'Haden Pereira',
    date: '2026-01-24',
    tags: ['cybersecurity', 'digital footprint', 'online safety', 'fraud prevention'],
    readTime: 5,
  },
  {
    id: '6',
    title: 'DPRK Attacks Uses AI-Inserted npm Malware, Fake Firms, and RATs',
    slug: 'dprk-attacks-ai-npm-malware',
    excerpt: 'North Korean threat actors are leveraging artificial intelligence to inject sophisticated malware into the npm ecosystem, using elaborate fake companies as cover. This unprecedented supply chain attack campaign deploys Remote Access Trojans to compromise developer systems and corporate networks at scale.',
    author: 'Haden Pereira',
    date: '2026-04-29',
    tags: ['cybersecurity', 'supply chain attacks', 'npm security', 'malware', 'DPRK', 'RAT', 'AI threats', 'DevSecOps', 'threat intelligence'],
    readTime: 8,
  },
  {
    id: '7',
    title: 'The Psychology of Phishing: How to Spot Manipulation Before It Works',
    slug: 'psychology-of-phishing-spot-manipulation',
    excerpt: 'Phishing is psychological warfare. Learn how attackers exploit human psychology through urgency, authority, and fear—and discover 7 practical defense strategies to recognize and resist manipulation.',
    author: 'Haden Pereira',
    date: '2026-05-11',
    tags: ['cybersecurity', 'phishing', 'psychology', 'social engineering', 'threat awareness', 'email security'],
    readTime: 7,
  },
  {
    id: '8',
    title: 'AI Hallucinations Are Creating Real Security Risks',
    slug: 'ai-hallucinations-security-risks',
    excerpt: 'Confident but false outputs from AI models—hallucinations—are creating tangible security risks; simple verification and gating practices reduce that risk quickly.',
    author: 'Haden Pereira',
    date: '2026-05-16',
    tags: ['AI-security', 'hallucinations', 'model-risk', 'defenses'],
    readTime: 5,
  },
  {
    id: '9',
    title: "HTTP/2 'Bomb' Vulnerability Allows Remote DoS",
    slug: 'http2-bomb-vulnerability',
    excerpt: 'A clear, practical explanation of an HTTP/2 "bomb" that can cause remote denial-of-service, how to spot it, and simple steps to reduce risk.',
    author: 'Haden Pereira',
    date: '2026-06-07',
    tags: ['HTTP/2', 'denial-of-service', 'cybersecurity', 'mitigation'],
    readTime: 4,
  },
  {
    id: '10',
    title: 'AI vs Hackers: How Artificial Intelligence Is Changing Cybersecurity',
    slug: 'ai-vs-hackers-how-artificial-intelligence-is-changing-cybersecurity',
    excerpt: 'Artificial intelligence is accelerating both cyber attacks and defenses. Learn where AI helps attackers, where it strengthens defenders, and which controls matter most right now.',
    author: 'Haden Pereira',
    date: '2026-06-19',
    tags: ['cybersecurity', 'artificial intelligence', 'phishing', 'malware', 'log analysis', 'threat intelligence', 'detection'],
    readTime: 8,
  },
];

// Helper function to load blog content from markdown files
async function loadBlogContent(id: string): Promise<string> {
  try {
    const response = await fetch(`/${id}.md`);
    if (!response.ok) throw new Error(`Failed to load blog ${id}`);
    return await response.text();
  } catch (error) {
    console.error(`Error loading blog content for id ${id}:`, error);
    return '';
  }
}

// Create default posts with lazy-loaded content
const defaultPosts: BlogPost[] = blogMetadata.map((metadata) => ({
  ...metadata,
  content: '', // Content will be loaded on demand
}));

export async function getPosts(): Promise<BlogPost[]> {
  const posts: BlogPost[] = [];
  
  for (const metadata of blogMetadata) {
    const content = await loadBlogContent(metadata.id);
    posts.push({
      ...metadata,
      content,
    });
  }
  
  return posts;
}

export async function getPost(slug: string): Promise<BlogPost | undefined> {
  const metadata = blogMetadata.find(p => p.slug === slug);
  if (!metadata) return undefined;
  
  const content = await loadBlogContent(metadata.id);
  return {
    ...metadata,
    content,
  };
}

export function getPostMetadata(slug: string): BlogPostMetadata | undefined {
  return blogMetadata.find(p => p.slug === slug);
}

export function getAllPostMetadata(): BlogPostMetadata[] {
  return blogMetadata;
}

export async function addPost(post: Omit<BlogPost, 'id'>): Promise<BlogPost> {
  // This is now handled by the markdown file system
  // Implement as needed for your use case
  const newPost: BlogPost = {
    ...post,
    id: Date.now().toString(),
  };
  return newPost;
}

export function deletePost(id: string): void {
  // This would require file system access
  // Implement as needed for your use case
  console.warn('deletePost: Deletion requires backend implementation');
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
