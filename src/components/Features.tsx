import { ArrowUpRight, Check, AlertCircle, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-brand-light text-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            General ledger + <br />
            close in one system
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            A complete platform for accounting teams. Automate your daily work and close comfortably.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]"
        >
          {/* Feature 1: Close Management (Large) */}
          <motion.div variants={item} className="md:col-span-2 row-span-1 bg-[#f5f5f4] rounded-3xl p-8 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-sm font-medium text-brand-accent mb-4">
                <Layers className="w-4 h-4" />
                <span>Close management</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Automate your checklist</h3>
              <p className="text-gray-600 max-w-sm">Collaborate on your close tasks in real-time with your team.</p>
            </div>
            
            {/* UI Mockup for Close Management */}
            <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-white rounded-tl-2xl shadow-xl border border-gray-100 p-6 flex flex-col gap-4 transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2 duration-500">
               <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">JD</div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">Review Q3 Expenses</span>
                        <span className="text-xs text-brand-accent">Due Today</span>
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">In Progress</div>
               </div>
               <div className="space-y-3">
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-4 h-4 rounded border border-gray-300"></div>
                      <span className="text-sm text-gray-600">Reconcile Bank Accounts</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-4 h-4 rounded border border-gray-300"></div>
                      <span className="text-sm text-gray-600">Check Accruals</span>
                  </div>
                   <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-4 h-4 rounded border-brand-accent bg-brand-accent flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-900 line-through">Confirm Payroll</span>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Feature 2: Automated Rules */}
          <motion.div variants={item} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-brand-accent mb-6">
                <ArrowUpRight className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold mb-2">Automated Rules</h3>
             <p className="text-gray-500 text-sm mb-8">Set up "If this, then that" rules for your transactions.</p>
             
             <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <div className="text-xs text-gray-600">
                        If <span className="font-semibold text-gray-900">Amount &gt; $500</span>
                    </div>
                </div>
                 <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <div className="text-xs text-gray-600">
                        Then <span className="font-semibold text-gray-900">Auto-approve</span>
                    </div>
                </div>
             </div>
          </motion.div>

          {/* Feature 3: Currency Management */}
          <motion.div variants={item} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
             <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                <span className="text-xl font-bold">$</span>
             </div>
             <h3 className="text-xl font-bold mb-2">Multi-Currency</h3>
             <p className="text-gray-500 text-sm mb-6">Real-time exchange rates and consolidation.</p>
             
             <div className="flex items-center justify-between text-sm text-gray-600 border-b border-gray-100 pb-2 mb-2">
                 <span>USD</span>
                 <span className="font-mono">1.00</span>
             </div>
             <div className="flex items-center justify-between text-sm text-gray-600 border-b border-gray-100 pb-2 mb-2">
                 <span>EUR</span>
                 <span className="font-mono">0.92</span>
             </div>
             <div className="flex items-center justify-between text-sm text-gray-600">
                 <span>GBP</span>
                 <span className="font-mono">0.79</span>
             </div>
          </motion.div>

          {/* Feature 4: Report Errors (Mockup focused) */}
          <motion.div variants={item} className="md:col-span-2 bg-[#1c1c1c] text-white rounded-3xl p-8 relative overflow-hidden">
             <div className="relative z-10 max-w-sm">
                 <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-500 mb-6">
                    <AlertCircle className="w-6 h-6" />
                 </div>
                 <h3 className="text-2xl font-bold mb-2">Detect Anomalies</h3>
                 <p className="text-gray-400">AI automatically flags suspicious transactions before you close.</p>
             </div>

             <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-4/5 bg-[#2a2a2a] rounded-l-2xl border-l border-y border-white/10 p-4 translate-x-12 opacity-80 md:opacity-100">
                <div className="flex items-center gap-3 mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <div>
                        <div className="text-sm font-medium text-red-200">Duplicate Detected</div>
                        <div className="text-xs text-red-400">Transaction ID #88291</div>
                    </div>
                </div>
                 <div className="space-y-2 opacity-50">
                     <div className="h-2 bg-white/20 rounded w-full"></div>
                     <div className="h-2 bg-white/20 rounded w-2/3"></div>
                 </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
