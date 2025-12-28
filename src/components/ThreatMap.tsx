import { useEffect, useState } from 'react';
import { Card } from './ui/card';

interface ThreatPoint {
  id: number;
  x: number;
  y: number;
  type: 'attack' | 'blocked' | 'warning';
  label: string;
}

const threatTypes = {
  attack: { color: 'bg-[hsl(var(--cyber-danger))]', pulse: 'animate-ping' },
  blocked: { color: 'bg-primary', pulse: '' },
  warning: { color: 'bg-[hsl(var(--cyber-warning))]', pulse: 'animate-pulse' },
};

const locations = [
  { city: 'New York', x: 25, y: 35 },
  { city: 'London', x: 48, y: 28 },
  { city: 'Tokyo', x: 85, y: 35 },
  { city: 'Sydney', x: 88, y: 72 },
  { city: 'Moscow', x: 58, y: 25 },
  { city: 'São Paulo', x: 32, y: 65 },
  { city: 'Dubai', x: 60, y: 42 },
  { city: 'Singapore', x: 78, y: 52 },
  { city: 'Berlin', x: 52, y: 28 },
  { city: 'Mumbai', x: 68, y: 45 },
];

export function ThreatMap() {
  const [threats, setThreats] = useState<ThreatPoint[]>([]);
  const [attackCount, setAttackCount] = useState(0);

  useEffect(() => {
    // Initialize with some threats
    const initialThreats = locations.slice(0, 5).map((loc, i) => ({
      id: i,
      x: loc.x,
      y: loc.y,
      type: ['attack', 'blocked', 'warning'][Math.floor(Math.random() * 3)] as ThreatPoint['type'],
      label: loc.city,
    }));
    setThreats(initialThreats);

    // Add new threats periodically
    const interval = setInterval(() => {
      const randomLoc = locations[Math.floor(Math.random() * locations.length)];
      const types: ThreatPoint['type'][] = ['attack', 'blocked', 'warning'];
      const newThreat: ThreatPoint = {
        id: Date.now(),
        x: randomLoc.x + (Math.random() - 0.5) * 5,
        y: randomLoc.y + (Math.random() - 0.5) * 5,
        type: types[Math.floor(Math.random() * types.length)],
        label: randomLoc.city,
      };

      setThreats(prev => [...prev.slice(-15), newThreat]);
      setAttackCount(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-mono text-lg font-semibold text-foreground">
          Live Threat Map
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono">{attackCount} events</span>
        </div>
      </div>

      <div className="relative aspect-[2/1] bg-muted/30 rounded-lg overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6">
          {Array(72).fill(0).map((_, i) => (
            <div key={i} className="border border-border/20" />
          ))}
        </div>

        {/* Simplified world map outline */}
        <svg
          viewBox="0 0 100 50"
          className="absolute inset-0 w-full h-full opacity-30"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Simplified continent outlines */}
          <path
            d="M15,20 Q20,15 30,18 L35,20 Q32,25 28,30 L20,35 Q15,30 15,20"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-primary"
          />
          <path
            d="M45,15 Q55,12 60,20 L58,30 Q50,28 45,25 L45,15"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-primary"
          />
          <path
            d="M65,25 Q75,20 85,28 L90,40 Q80,45 70,40 L65,25"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-primary"
          />
        </svg>

        {/* Threat points */}
        {threats.map((threat) => (
          <div
            key={threat.id}
            className="absolute transition-all duration-500"
            style={{
              left: `${threat.x}%`,
              top: `${threat.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="relative">
              <div
                className={`absolute inset-0 h-4 w-4 rounded-full ${threatTypes[threat.type].color} opacity-30 ${threatTypes[threat.type].pulse}`}
              />
              <div
                className={`h-3 w-3 rounded-full ${threatTypes[threat.type].color}`}
              />
            </div>
          </div>
        ))}

        {/* Legend */}
        <div className="absolute bottom-2 left-2 flex gap-4 text-xs">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--cyber-danger))]" />
            <span className="text-muted-foreground">Attack</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">Blocked</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[hsl(var(--cyber-warning))]" />
            <span className="text-muted-foreground">Warning</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
