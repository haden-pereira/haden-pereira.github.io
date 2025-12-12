import { Shield, Award, BookOpen, Target, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const skills = [
  'Penetration Testing',
  'Malware Analysis',
  'Network Security',
  'Incident Response',
  'Security Auditing',
  'Threat Intelligence',
  'Cloud Security',
  'SIEM/SOC Operations',
];

const certifications = [
  { name: 'OSCP', description: 'Offensive Security Certified Professional' },
  { name: 'CEH', description: 'Certified Ethical Hacker' },
  { name: 'CISSP', description: 'Certified Information Systems Security Professional' },
  { name: 'AWS Security', description: 'AWS Certified Security Specialty' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background dark">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-[hsl(var(--cyber-accent))] p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <Shield className="h-16 w-16 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Haden <span className="text-primary">Pereira</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about securing digital infrastructure and sharing knowledge
              with the cybersecurity community. Specializing in offensive security
              and threat research.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
              <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary" asChild>
                <a href="https://github.com/haden-pereira" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary" asChild>
                <a href="https://www.linkedin.com/in/haden-pereira/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-border hover:border-primary hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mission */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border mb-12">
            <div className="flex items-start gap-4">
              <Target className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To advance the field of cybersecurity through continuous research,
                  education, and community engagement. I believe in responsible disclosure,
                  ethical hacking practices, and making security knowledge accessible to everyone.
                  This blog serves as a platform to share insights, tutorials, and analysis
                  that help organizations and individuals strengthen their security posture.
                </p>
              </div>
            </div>
          </Card>

          {/* Skills */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-primary" />
              Skills & Expertise
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <Card
                  key={cert.name}
                  className="p-4 bg-card/50 border-border hover:border-primary/50 transition-all"
                >
                  <h3 className="font-mono font-bold text-primary text-lg">{cert.name}</h3>
                  <p className="text-muted-foreground text-sm">{cert.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-[hsl(var(--cyber-accent))]/10 border-primary/20 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Let's Connect
            </h2>
            <p className="text-muted-foreground mb-6">
              Interested in collaboration, speaking engagements, or security consulting?
              Feel free to reach out!
            </p>
            <Button size="lg" className="font-semibold">
              <Mail className="mr-2 h-4 w-4" />
              Get in Touch
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
