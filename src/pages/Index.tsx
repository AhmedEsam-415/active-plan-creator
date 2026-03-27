import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Dumbbell, Brain, BarChart3, Utensils, ChevronRight, Zap } from "lucide-react";
import heroImage from "@/assets/hero-fitness.jpg";

const features = [
  {
    icon: Dumbbell,
    title: "Smart Workouts",
    desc: "تمارين مصنفة حسب العضلة مع فيديوهات توضيحية",
  },
  {
    icon: Brain,
    title: "AI-Powered Plans",
    desc: "خطة تمرين وأكل مخصصة بناءً على بياناتك",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    desc: "تتبع الوزن والسعرات والتقدم بشكل مرئي",
  },
  {
    icon: Utensils,
    title: "Nutrition Guide",
    desc: "حساب السعرات والبروتين والكاربز والدهون",
  },
];

const muscleGroups = [
  { name: "Chest", count: 12, emoji: "💪" },
  { name: "Back", count: 15, emoji: "🔙" },
  { name: "Legs", count: 18, emoji: "🦵" },
  { name: "Shoulders", count: 10, emoji: "🏋️" },
  { name: "Arms", count: 14, emoji: "💪" },
  { name: "Core", count: 8, emoji: "🎯" },
];

const fade = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Index = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Fitness hero"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Zap className="h-4 w-4" />
            Smart Fitness Platform
          </div>
          <h1 className="text-5xl md:text-7xl font-display leading-tight">
            Transform Your
            <span className="text-gradient block">Body & Mind</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
            منصة ذكية تولد خطة تمرين وأكل مخصصة ليك. تتبع تقدمك وحقق أهدافك
            بشكل أسرع مع تقنية AI.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/exercises"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-primary-foreground transition-all hover:opacity-90 glow-border"
            >
              Start Training <ChevronRight className="h-4 w-4" />
            </Link>
            <Link
              to="/plans"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-8 py-3.5 font-semibold text-secondary-foreground transition-all hover:bg-surface-hover"
            >
              View Plans
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Features */}
    <section className="py-24">
      <div className="container">
        <h2 className="text-center text-4xl md:text-5xl font-display">
          Why <span className="text-gradient">JEFIT</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground">
          كل اللي محتاجه في مكان واحد — تمارين، تغذية، وتتبع التقدم.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
              className="group rounded-xl border border-border bg-card p-6 card-hover"
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Muscle Groups */}
    <section className="border-t border-border py-24 bg-card/50">
      <div className="container">
        <h2 className="text-center text-4xl md:text-5xl font-display">
          Explore <span className="text-gradient">Exercises</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted-foreground">
          تمارين مصنفة حسب العضلة — اختار العضلة وابدأ تمرينك.
        </p>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {muscleGroups.map((g, i) => (
            <motion.div
              key={g.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fade}
            >
              <Link
                to="/exercises"
                className="flex flex-col items-center rounded-xl border border-border bg-card p-6 card-hover text-center"
              >
                <span className="text-4xl">{g.emoji}</span>
                <h3 className="mt-3 font-display text-xl text-foreground">{g.name}</h3>
                <span className="mt-1 text-sm text-muted-foreground">{g.count} exercises</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24">
      <div className="container">
        <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card p-12 text-center glow-border">
          <h2 className="text-4xl md:text-5xl font-display">
            Ready to <span className="text-gradient">Transform</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            ابدأ رحلتك النهاردة — خطة مخصصة، تتبع ذكي، ونتائج حقيقية.
          </p>
          <Link
            to="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Get Started Free <ChevronRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Index;
