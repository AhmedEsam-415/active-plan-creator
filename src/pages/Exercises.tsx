import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

type Exercise = {
  name: string;
  muscle: string;
  equipment: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
};

const exercises: Exercise[] = [
  { name: "Bench Press", muscle: "Chest", equipment: "Barbell", difficulty: "Intermediate" },
  { name: "Push Ups", muscle: "Chest", equipment: "Bodyweight", difficulty: "Beginner" },
  { name: "Incline Dumbbell Press", muscle: "Chest", equipment: "Dumbbell", difficulty: "Intermediate" },
  { name: "Cable Fly", muscle: "Chest", equipment: "Cable", difficulty: "Intermediate" },
  { name: "Deadlift", muscle: "Back", equipment: "Barbell", difficulty: "Advanced" },
  { name: "Pull Ups", muscle: "Back", equipment: "Bodyweight", difficulty: "Intermediate" },
  { name: "Bent Over Row", muscle: "Back", equipment: "Barbell", difficulty: "Intermediate" },
  { name: "Lat Pulldown", muscle: "Back", equipment: "Cable", difficulty: "Beginner" },
  { name: "Squat", muscle: "Legs", equipment: "Barbell", difficulty: "Advanced" },
  { name: "Leg Press", muscle: "Legs", equipment: "Machine", difficulty: "Beginner" },
  { name: "Romanian Deadlift", muscle: "Legs", equipment: "Barbell", difficulty: "Intermediate" },
  { name: "Lunges", muscle: "Legs", equipment: "Dumbbell", difficulty: "Beginner" },
  { name: "Overhead Press", muscle: "Shoulders", equipment: "Barbell", difficulty: "Intermediate" },
  { name: "Lateral Raise", muscle: "Shoulders", equipment: "Dumbbell", difficulty: "Beginner" },
  { name: "Barbell Curl", muscle: "Arms", equipment: "Barbell", difficulty: "Beginner" },
  { name: "Tricep Pushdown", muscle: "Arms", equipment: "Cable", difficulty: "Beginner" },
  { name: "Plank", muscle: "Core", equipment: "Bodyweight", difficulty: "Beginner" },
  { name: "Cable Crunch", muscle: "Core", equipment: "Cable", difficulty: "Intermediate" },
];

const muscles = ["All", "Chest", "Back", "Legs", "Shoulders", "Arms", "Core"];

const difficultyColor: Record<string, string> = {
  Beginner: "bg-primary/20 text-primary",
  Intermediate: "bg-yellow-500/20 text-yellow-400",
  Advanced: "bg-destructive/20 text-destructive",
};

const Exercises = () => {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = exercises.filter(
    (e) =>
      (filter === "All" || e.muscle === filter) &&
      e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container">
        <h1 className="text-4xl md:text-5xl font-display">
          Exercise <span className="text-gradient">Library</span>
        </h1>
        <p className="mt-3 text-muted-foreground">اختار العضلة وابدأ تمرينك</p>

        {/* Filters */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search exercises..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {muscles.map((m) => (
              <button
                key={m}
                onClick={() => setFilter(m)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  filter === m
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-surface-hover"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03 }}
              className="rounded-xl border border-border bg-card p-5 card-hover"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{e.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {e.muscle} • {e.equipment}
                  </p>
                </div>
                <span className={`rounded-md px-2.5 py-1 text-xs font-medium ${difficultyColor[e.difficulty]}`}>
                  {e.difficulty}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-muted-foreground">No exercises found.</p>
        )}
      </div>
    </div>
  );
};

export default Exercises;
