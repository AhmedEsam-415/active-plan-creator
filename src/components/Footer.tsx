import { Dumbbell } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <Dumbbell className="h-5 w-5 text-primary" />
        <span className="font-display text-lg tracking-widest">JEFIT</span>
      </div>
      <p className="text-sm text-muted-foreground">
        © 2026 JEFIT. Smart Fitness Platform. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
