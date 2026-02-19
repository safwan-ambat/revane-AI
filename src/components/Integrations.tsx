import { motion } from 'framer-motion';

const logos = [
  "Stripe", "QuickBooks", "Xero", "Netsuite", 
  "Slack", "Gusto", "Rippling", "Brex", 
  "Mercury", "Chase", "Wells Fargo", "Expensify"
];

export function Integrations() {
  return (
    <section id="customers" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">
            Instant integration <br />
            with the <span className="text-brand-accent">whole stack</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Connect Revane with your existing tools in seconds. No engineering required.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow grayscale hover:grayscale-0"
            >
              <span className="font-semibold text-gray-400 group-hover:text-brand-dark transition-colors">{logo}</span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16">
            <button className="text-brand-accent font-medium hover:underline">View all 50+ integrations &rarr;</button>
        </div>
      </div>
    </section>
  );
}
