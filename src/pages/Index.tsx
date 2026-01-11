import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Code, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MatrixRain } from '@/components/MatrixRain';
import { ThreatStats } from '@/components/ThreatStats';
import { ThreatMap } from '@/components/ThreatMap';
import { ThreatChart } from '@/components/ThreatChart';
import { TerminalAnimation } from '@/components/TerminalAnimation';
import { BlogCard } from '@/components/BlogCard';
import { getPosts } from '@/lib/blogStore';

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Threat Intelligence',
    description: 'Stay updated with the latest security threats and vulnerabilities affecting the digital landscape.',
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Technical Tutorials',
    description: 'Hands-on guides for penetration testing, malware analysis, and security tool development.',
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: 'Best Practices',
    description: 'Industry-standard security practices and frameworks for building resilient systems.',
  },
];

export default function Index() {
  const posts = getPosts().slice(0, 3);

  return (
    <div className="min-h-screen bg-background dark">
      <MatrixRain />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-mono text-primary">Security Research & Analysis</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Securing the </span>
              <span className="text-primary cyber-glow-text">Digital Frontier</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Deep dives into cybersecurity, threat analysis, and defense strategies.
              Empowering security professionals with knowledge and insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="font-semibold">
                <Link to="/blog">
                  Explore Articles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-border hover:bg-muted">
                <Link to="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <ThreatStats />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all group"
              >
                <div className="text-primary mb-4 group-hover:cyber-glow-text transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal & Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TerminalAnimation />
            <ThreatMap />
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Real-Time <span className="text-primary">Threat Analytics</span>
          </h2>
          <ThreatChart />
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">
              Latest <span className="text-primary">Articles</span>
            </h2>
            <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
              <Link to="/blog">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
