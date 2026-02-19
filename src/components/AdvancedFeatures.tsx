import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Scan, Banknote, FileText, Sparkles, Settings, ShieldAlert } from 'lucide-react';

const features = [
  {
    title: "OCR scanning",
    description: "Automatically extract data from receipts and invoices with 99% accuracy.",
    icon: Scan,
    color: "bg-blue-500"
  },
  {
    title: "Bank matching",
    description: "Match transactions to bank feed lines automatically using ML.",
    icon: Banknote,
    color: "bg-green-500"
  },
  {
    title: "Report builder",
    description: "Drag and drop to create custom financial reports in seconds.",
    icon: FileText,
    color: "bg-purple-500"
  },
  {
    title: "AI suggestions",
    description: "Get smart categorization tips based on your historical data.",
    icon: Sparkles,
    color: "bg-brand-accent"
  },
  {
    title: "Smart rules",
    description: "Create complex automation logic without writing code.",
    icon: Settings,
    color: "bg-yellow-500"
  },
  {
    title: "Detect spam",
    description: "Identify and block duplicate or fraudulent recurring charges.",
    icon: ShieldAlert,
    color: "bg-red-500"
  }
];

export function AdvancedFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} className="py-32 bg-brand-dark text-white relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Meet your new <br />
            <span className="text-gray-500">accounting ally</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
            >
              <div className={`w-12 h-12 ${feature.color}/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color.replace('bg-', 'text-')}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Parallax Background Element */}
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none -z-10" 
      />
    </section>
  );
}
