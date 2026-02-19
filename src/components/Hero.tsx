import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import gradient01 from '../assets/images/gradient01.svg';
import gradient02 from '../assets/images/gradient 02.svg';
import heroImg01 from '../assets/images/heroImg01.svg';
import heroImg02 from '../assets/images/heroImg02.png';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-[132px]  overflow-hidden flex flex-col items-center justify-start text-center px-4">
      {/* Dynamic Background Lighting */}
      <img src={gradient01} className="absolute top-0 left-0  z-0 pointer-events-none" alt="" />
      <img src={gradient02} className="absolute bottom-0 right-0 z-0 pointer-events-none" alt="" />

      {/* Hero Content */}
      <div className="max-w-5xl mx-auto  z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
            <div className="inline-flex items-start gap-2 rounded-[4px] px-4 py-1" style={{ background: 'linear-gradient(90deg, rgba(4, 5, 11, 0.10) 0%, rgba(211, 102, 69, 0.10) 100%)', borderBottom: '1px solid rgba(209, 101, 68, 0.20)' }}>
              <div className="text-center text-[12px] font-medium italic leading-6 tracking-[0.08px]" style={{ color: '#DB704F', fontFamily: 'Inter' }}>Trusted by high stake Finance Teams</div>
            </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-medium tracking-tight leading-[1.1] py-4"
        >
          <div className="self-stretch text-center text-[60px] italic font-medium leading-[72px] break-words" style={{ color: '#FCFAF7', fontFamily: 'Test Tiempos Text' }}> faster</div>
          <div className="self-stretch text-center text-[60px] font-medium leading-[76px] break-words" style={{ color: '#FCFAF7', fontFamily: 'Inter' }}>
            Report confidently
          </div>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="self-stretch text-center text-[18px] font-normal leading-[30px] break-words opacity-90 max-w-2xl mx-auto"
          style={{ color: '#FCFAF7', fontFamily: 'Inter' }}
        >
          Rivane is the Digital AI employee for FinOps teams. Continuous reconciliation. Daily close readiness. Audit-grade controls. Built for modern finance teams.
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
            <div
              className="inline-flex items-center justify-center gap-4 rounded-[4px] overflow-hidden cursor-pointer"
              style={{
                paddingTop: 6, paddingBottom: 6, paddingLeft: 20, paddingRight: 6,
                background: '#412237',
                boxShadow: '0px 0px 0px 1px #884C30, 0px 1px 2px rgba(14, 18, 27, 0.24)',
                outline: '1px rgba(255, 255, 255, 0.12) solid',
                outlineOffset: '-1px',
              }}
            >
              {/* Label */}
              <div className="flex flex-col items-start">
                <span className="text-white text-[20px] font-medium leading-[28px] font-['Inter']">Request a demo</span>
              </div>
              {/* Icon box */}
              <div
                className="flex items-center justify-center w-14 h-10 rounded-[4px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 100%), radial-gradient(ellipse 77.39% 104.71% at 68% 50%, rgba(250,165,125,0.60) 0%, rgba(250,165,125,0) 50%), radial-gradient(ellipse 88.02% 119.08% at 50% 98%, rgba(255,51,102,0.60) 0%, rgba(255,51,102,0) 50%), radial-gradient(ellipse 100.07% 135.39% at 93% 50%, rgba(227,123,75,0.50) 0%, rgba(75,105,227,0) 50%), radial-gradient(ellipse 74.65% 101% at 50% 75%, rgba(255,174,104,0.50) 0%, rgba(255,174,104,0) 50%), linear-gradient(180deg, #CB754D 0%, #B06643 100%)',
                  boxShadow: '0px 1px 2px rgba(14, 18, 27, 0.08)',
                }}
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </div>
        </motion.div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full max-w-[1344px] mx-auto mt-[84px] px-4 z-10 relative ">
        <img
          src={heroImg01}
          alt="Rivane dashboard preview"
          className="w-full rounded-2xl relative z-10 "
        />
        <img
          src={heroImg02}
          alt="Rivane dashboard detail"
          className="w-[31%]  absolute z-0 top-0 left-[51.7%] -translate-x-1/2"
        />
      </div>
    </section>
  );
}
