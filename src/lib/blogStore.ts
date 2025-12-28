export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  readTime: number;
  coverImage?: string;
}

const STORAGE_KEY = 'cybersec-blog-posts';

const defaultPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Zero-Day Vulnerabilities',
    slug: 'understanding-zero-day-vulnerabilities',
    excerpt: 'A deep dive into zero-day exploits, how they work, and strategies for protection against unknown threats.',
    content: `# Understanding Zero-Day Vulnerabilities

A zero-day vulnerability is a security flaw in software that is unknown to the vendor. These vulnerabilities are particularly dangerous because there's no patch available when they're discovered by attackers.

## How Zero-Day Attacks Work

1. **Discovery**: An attacker finds an unknown vulnerability
2. **Exploitation**: They create an exploit before the vendor knows
3. **Attack**: The exploit is deployed against targets
4. **Detection**: Eventually the attack is discovered
5. **Patch**: The vendor releases a fix

## Protection Strategies

- Keep all software updated
- Use behavior-based detection systems
- Implement network segmentation
- Regular security audits
- Employee security training

\`\`\`bash
# Example: Check for CVEs
nmap --script vuln target.com
\`\`\`

Stay vigilant and always assume your systems could be targeted.`,
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
    content: `# Introduction to Penetration Testing

Penetration testing, or pentesting, is a simulated cyber attack against your computer system to check for exploitable vulnerabilities.

## The Penetration Testing Phases

### 1. Reconnaissance
Gathering information about the target system.

\`\`\`bash
# DNS enumeration
dig target.com ANY
\`\`\`

### 2. Scanning
Identifying open ports and services.

\`\`\`bash
# Port scanning with nmap
nmap -sV -sC target.com
\`\`\`

### 3. Gaining Access
Exploiting discovered vulnerabilities.

### 4. Maintaining Access
Establishing persistent access for future testing.

### 5. Analysis & Reporting
Documenting findings and recommendations.

## Essential Tools

- **Nmap**: Network scanning
- **Burp Suite**: Web application testing
- **Metasploit**: Exploitation framework
- **Wireshark**: Network analysis

Remember: Only perform penetration testing with proper authorization!`,
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
    content: `# Ransomware Defense Strategies

Ransomware attacks continue to rise, causing billions in damages annually. Here's how to protect your organization.

## Prevention Measures

### Email Security
- Implement email filtering
- Train employees on phishing
- Use DMARC, DKIM, and SPF

### Backup Strategy
Follow the 3-2-1 rule:
- **3** copies of data
- **2** different media types
- **1** offsite backup

\`\`\`bash
# Example backup verification
sha256sum backup.tar.gz > backup.sha256
\`\`\`

## Response Plan

1. Isolate affected systems
2. Identify the ransomware variant
3. Report to authorities
4. Restore from clean backups
5. Conduct post-incident analysis

Never pay the ransom - it funds criminal activity and doesn't guarantee recovery.`,
    author: 'Security Analyst',
    date: '2024-12-05',
    tags: ['ransomware', 'defense', 'backup'],
    readTime: 6,
  },
];

export function getPosts(): BlogPost[] {
  if (typeof window === 'undefined') return defaultPosts;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultPosts));
    return defaultPosts;
  }
  return JSON.parse(stored);
}

export function getPost(slug: string): BlogPost | undefined {
  const posts = getPosts();
  return posts.find(p => p.slug === slug);
}

export function addPost(post: Omit<BlogPost, 'id'>): BlogPost {
  const posts = getPosts();
  const newPost: BlogPost = {
    ...post,
    id: Date.now().toString(),
  };
  posts.unshift(newPost);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  return newPost;
}

export function deletePost(id: string): void {
  const posts = getPosts();
  const filtered = posts.filter(p => p.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
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
