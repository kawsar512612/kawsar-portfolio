import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function SkillCard({ name, level, desc, index = 0 }) {
  return (
    <Reveal delay={index * 0.07}>
      <div className="glow-card p-6">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold">{name}</h3>
          <span className="text-sm font-bold text-success">{level}%</span>
        </div>
        <p className="mb-4 text-sm text-muted">{desc}</p>

        <div className="h-2.5 w-full overflow-hidden rounded-full bg-line">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-primary to-salmon shadow-[0_0_12px_rgb(var(--primary)/0.6)]"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.2 + index * 0.07, ease: "easeOut" }}
          />
        </div>
      </div>
    </Reveal>
  );
}