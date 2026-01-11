import { useEffect, useState } from 'react';
import { Card } from './ui/card';

const commands = [
  { prompt: '$ ', text: 'nmap -sV target.system', delay: 100 },
  { prompt: '', text: 'Starting Nmap 7.94 ( https://nmap.org )', delay: 50 },
  { prompt: '', text: 'Discovered open port 22/tcp', delay: 30 },
  { prompt: '', text: 'Discovered open port 80/tcp', delay: 30 },
  { prompt: '', text: 'Discovered open port 443/tcp', delay: 30 },
  { prompt: '$ ', text: 'analyzing vulnerabilities...', delay: 80 },
  { prompt: '', text: '[+] CVE-2024-1234 detected', delay: 50 },
  { prompt: '', text: '[!] Patching recommended', delay: 50 },
  { prompt: '$ ', text: 'security audit complete', delay: 100 },
];

export function TerminalAnimation() {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= commands.length) {
      // Reset after completion
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const command = commands[currentLine];
    const fullText = command.prompt + command.text;

    if (currentChar < fullText.length) {
      const timeout = setTimeout(() => {
        setLines(prev => {
          const newLines = [...prev];
          newLines[currentLine] = fullText.substring(0, currentChar + 1);
          return newLines;
        });
        setCurrentChar(prev => prev + 1);
      }, command.delay);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  return (
    <Card className="terminal-window p-4 font-mono text-sm">
      <div className="flex items-center gap-2 mb-3 pb-3 border-b border-border/50">
        <div className="h-3 w-3 rounded-full bg-[hsl(var(--cyber-danger))]" />
        <div className="h-3 w-3 rounded-full bg-[hsl(var(--cyber-warning))]" />
        <div className="h-3 w-3 rounded-full bg-primary" />
        <span className="ml-2 text-muted-foreground text-xs">terminal@cybersec</span>
      </div>
      <div className="min-h-[200px] text-[hsl(var(--terminal-text))]">
        {lines.map((line, index) => (
          <div key={index} className="leading-relaxed">
            {line}
            {index === currentLine && (
              <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5" />
            )}
          </div>
        ))}
        {currentLine < commands.length && lines.length <= currentLine && (
          <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
        )}
      </div>
    </Card>
  );
}
