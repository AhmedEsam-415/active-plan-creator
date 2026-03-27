import { motion } from "framer-motion";
import { Check, Crown, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    desc: "ابدأ رحلتك مع الأساسيات",
    icon: Zap,
    features: ["تمارين أساسية", "تتبع الوزن", "3 تمارين يومية", "مقالات تغذية"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$9.99/mo",
    desc: "كل اللي محتاجه للتطور الحقيقي",
    icon: Crown,
    features: [
      "كل تمارين Starter",
      "AI Smart Plan",
      "تتبع كامل للسعرات",
      "Progress Charts",
      "Custom Workouts",
      "Priority Support",
    ],
    popular: true,
  },
];

const Plans = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="container">
      <h1 className="text-center text-4xl md:text-5xl font-display">
        Choose Your <span className="text-gradient">Plan</span>
      </h1>
      <p className="mx-auto mt-3 max-w-md text-center text-muted-foreground">
        اختار الخطة المناسبة ليك وابدأ التحول
      </p>

      <div className="mx-auto mt-16 grid max-w-3xl gap-8 md:grid-cols-2">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`relative rounded-2xl border p-8 ${
              p.popular
                ? "border-primary/50 bg-gradient-to-b from-primary/5 to-card glow-border"
                : "border-border bg-card"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                MOST POPULAR
              </span>
            )}
            <p.icon className={`h-8 w-8 ${p.popular ? "text-primary" : "text-muted-foreground"}`} />
            <h3 className="mt-4 font-display text-3xl text-foreground">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-6">
              <span className="font-display text-4xl text-foreground">{p.price}</span>
            </div>
            <ul className="mt-8 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-secondary-foreground">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full rounded-lg py-3 font-semibold transition-all ${
                p.popular
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "border border-border bg-secondary text-secondary-foreground hover:bg-surface-hover"
              }`}
            >
              {p.popular ? "Get Pro" : "Start Free"}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Plans;
