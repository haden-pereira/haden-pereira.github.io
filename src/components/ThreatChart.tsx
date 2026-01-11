import { useEffect, useState } from 'react';
import { Card } from './ui/card';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const generateChartData = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map(day => ({
    name: day,
    threats: Math.floor(Math.random() * 500) + 200,
    blocked: Math.floor(Math.random() * 400) + 150,
    malware: Math.floor(Math.random() * 100) + 50,
  }));
};

const pieData = [
  { name: 'Phishing', value: 35 },
  { name: 'Malware', value: 25 },
  { name: 'DDoS', value: 20 },
  { name: 'Ransomware', value: 12 },
  { name: 'Other', value: 8 },
];

const COLORS = [
  'hsl(142, 76%, 45%)',
  'hsl(180, 100%, 40%)',
  'hsl(280, 80%, 60%)',
  'hsl(45, 100%, 50%)',
  'hsl(0, 84%, 60%)',
];

export function ThreatChart() {
  const [data, setData] = useState(generateChartData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateChartData());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
        <h3 className="font-mono text-lg font-semibold text-foreground mb-4">
          Weekly Threat Analysis
        </h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="threatGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(142, 76%, 45%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(142, 76%, 45%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="blockedGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(180, 100%, 40%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(180, 100%, 40%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="hsl(220, 10%, 60%)" fontSize={12} />
              <YAxis stroke="hsl(220, 10%, 60%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(220, 25%, 10%)',
                  border: '1px solid hsl(142, 76%, 45%)',
                  borderRadius: '8px',
                }}
              />
              <Area
                type="monotone"
                dataKey="threats"
                stroke="hsl(142, 76%, 45%)"
                fill="url(#threatGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="blocked"
                stroke="hsl(180, 100%, 40%)"
                fill="url(#blockedGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
        <h3 className="font-mono text-lg font-semibold text-foreground mb-4">
          Threat Distribution
        </h3>
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {pieData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(220, 25%, 10%)',
                  border: '1px solid hsl(142, 76%, 45%)',
                  borderRadius: '8px',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {pieData.map((entry, index) => (
            <div key={entry.name} className="flex items-center gap-2 text-sm">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-muted-foreground">{entry.name}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-6 bg-card/50 backdrop-blur-sm border-border lg:col-span-2">
        <h3 className="font-mono text-lg font-semibold text-foreground mb-4">
          Malware Detection by Day
        </h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="hsl(220, 10%, 60%)" fontSize={12} />
              <YAxis stroke="hsl(220, 10%, 60%)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(220, 25%, 10%)',
                  border: '1px solid hsl(142, 76%, 45%)',
                  borderRadius: '8px',
                }}
              />
              <Bar dataKey="malware" fill="hsl(0, 84%, 60%)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
