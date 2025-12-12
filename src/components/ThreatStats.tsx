import { useEffect, useState } from 'react';
import { Shield, Bug, AlertTriangle, Lock, Wifi, Server } from 'lucide-react';
import { Card } from './ui/card';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  color: string;
}

export function ThreatStats() {
  const [stats, setStats] = useState<Stat[]>([
    { label: 'Threats Blocked', value: 0, suffix: 'M', icon: <Shield className="h-6 w-6" />, color: 'text-primary' },
    { label: 'Malware Detected', value: 0, suffix: 'K', icon: <Bug className="h-6 w-6" />, color: 'text-[hsl(var(--cyber-danger))]' },
    { label: 'Vulnerabilities', value: 0, suffix: '', icon: <AlertTriangle className="h-6 w-6" />, color: 'text-[hsl(var(--cyber-warning))]' },
    { label: 'Systems Secured', value: 0, suffix: 'K', icon: <Lock className="h-6 w-6" />, color: 'text-[hsl(var(--cyber-accent))]' },
    { label: 'Network Scans', value: 0, suffix: 'M', icon: <Wifi className="h-6 w-6" />, color: 'text-[hsl(var(--cyber-purple))]' },
    { label: 'Active Monitors', value: 0, suffix: '', icon: <Server className="h-6 w-6" />, color: 'text-primary' },
  ]);

  const targetValues = [127, 845, 2847, 156, 89, 1247];

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setStats(prev =>
        prev.map((stat, i) => ({
          ...stat,
          value: Math.floor(targetValues[i] * easeOut),
        }))
      );

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {stats.map((stat, index) => (
        <Card
          key={stat.label}
          className="p-4 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:cyber-glow group"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className={`${stat.color} mb-2 group-hover:animate-pulse-glow`}>
            {stat.icon}
          </div>
          <div className="font-mono text-2xl font-bold text-foreground">
            {stat.value.toLocaleString()}{stat.suffix}
          </div>
          <div className="text-xs text-muted-foreground mt-1">
            {stat.label}
          </div>
        </Card>
      ))}
    </div>
  );
}
