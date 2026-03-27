import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";
import { Flame, Dumbbell, TrendingUp, Target } from "lucide-react";

const weeklyData = [
  { day: "Sat", calories: 2100 },
  { day: "Sun", calories: 2400 },
  { day: "Mon", calories: 1900 },
  { day: "Tue", calories: 2200 },
  { day: "Wed", calories: 2600 },
  { day: "Thu", calories: 2000 },
  { day: "Fri", calories: 2300 },
];

const weightData = [
  { week: "W1", weight: 85 },
  { week: "W2", weight: 84.2 },
  { week: "W3", weight: 83.5 },
  { week: "W4", weight: 83.1 },
  { week: "W5", weight: 82.4 },
  { week: "W6", weight: 81.8 },
];

const stats = [
  { label: "Calories Today", value: "2,340", icon: Flame, change: "+12%" },
  { label: "Workouts This Week", value: "5", icon: Dumbbell, change: "+2" },
  { label: "Weight Progress", value: "-3.2 kg", icon: TrendingUp, change: "On track" },
  { label: "Goal", value: "78 kg", icon: Target, change: "4 kg left" },
];

const Dashboard = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="container">
      <h1 className="text-4xl md:text-5xl font-display">
        Your <span className="text-gradient">Dashboard</span>
      </h1>
      <p className="mt-3 text-muted-foreground">تتبع تقدمك يوم بيوم 📊</p>

      {/* Stats */}
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-5 card-hover"
          >
            <div className="flex items-center justify-between">
              <s.icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium text-primary">{s.change}</span>
            </div>
            <p className="mt-3 font-display text-3xl text-foreground">{s.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-display text-xl text-foreground">Weekly Calories</h3>
          <p className="text-sm text-muted-foreground">السعرات اليومية</p>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyData}>
                <XAxis dataKey="day" stroke="hsl(220,10%,40%)" fontSize={12} />
                <YAxis stroke="hsl(220,10%,40%)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(220,18%,10%)",
                    border: "1px solid hsl(220,15%,18%)",
                    borderRadius: "8px",
                    color: "hsl(0,0%,95%)",
                  }}
                />
                <Bar dataKey="calories" fill="hsl(82,85%,50%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-display text-xl text-foreground">Weight Progress</h3>
          <p className="text-sm text-muted-foreground">تتبع الوزن الأسبوعي</p>
          <div className="mt-6 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weightData}>
                <XAxis dataKey="week" stroke="hsl(220,10%,40%)" fontSize={12} />
                <YAxis stroke="hsl(220,10%,40%)" fontSize={12} domain={["dataMin - 1", "dataMax + 1"]} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(220,18%,10%)",
                    border: "1px solid hsl(220,15%,18%)",
                    borderRadius: "8px",
                    color: "hsl(0,0%,95%)",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="weight"
                  stroke="hsl(82,85%,50%)"
                  strokeWidth={3}
                  dot={{ fill: "hsl(82,85%,50%)", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
