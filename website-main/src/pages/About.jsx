import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Code2, Award, Zap, TrendingUp, Lightbulb, Rocket, Shield, ArrowRight, Sparkles } from "lucide-react";
import womanImg from "../assets/woman.png"; // Ensure this matches actual file name
import CountUp from "../components/CountUp"; // Ensure this matches actual file name
import ParticlesBackground from "../components/ParticlesBackground";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

export default function About() {
  return (
    <div className="min-h-screen text-white relative font-sans overflow-x-hidden">

      {/* --- SECTION 1: HERO (Image 2 Layout) --- */}
      <section className="relative pt-4 pb-20 px-6 md:px-12 lg:px-20 min-h-screen flex items-center">
        {/* Background glow behind hero */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-[radial-gradient(circle_at_center,rgba(60,9,108,0.4)_0%,rgba(60,9,108,0)_70%)] rounded-full -z-10" />

        <div className="w-full max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_2fr] gap-8 items-center relative z-10">

          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-start text-left relative z-30"
          >
            <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mb-4">
              <span className="text-white font-semibold text-[0.7em] mr-4">IEEE</span><br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c77dff] to-[#7b2cbf]">
                Women in Engineering
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[#e0aaff] mb-6">Manipal University Jaipur</h2>

            <p className="text-[#c77dff] md:text-lg leading-relaxed mb-10 max-w-md font-light">
              Empowering women in technology through innovation, leadership, collaboration, and a shared passion for engineering.
            </p>

            <a
              href="#join"
              className="group flex items-center gap-3 bg-gradient-to-r from-[#5a189a] to-[#7b2cbf] hover:from-[#7b2cbf] hover:to-[#9d4edd] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(123,44,191,0.5)] hover:shadow-[0_0_30px_rgba(157,78,221,0.7)]"
            >
              <span>Join Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </motion.div>

          {/* Right Column: Image & Large Background Text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center items-end mt-12 lg:mt-0"
          >
            {/* Massive Background Text with Purple Gradient Glow */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none flex flex-col items-center justify-center">
              <h1
                className="text-[clamp(4.5rem,12vw,15rem)] font-black leading-none tracking-tighter whitespace-nowrap flex gap-12 md:gap-32 justify-center"
                style={{
                  background: 'linear-gradient(to bottom, #f0abfc 0%, #c77dff 40%, #7b2cbf 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 30px rgba(240,171,252,0.6)) drop-shadow(0 0 60px rgba(157,78,221,0.4))',
                  opacity: 0.95
                }}
              >
                <span>IEEE</span>
                <span>WIE</span>
              </h1>
              {/* Tagline */}
              <div className="absolute right-[0%] md:right-[5%] -top-4 md:-top-6 rotate-6 z-20">
                <span className="text-xl md:text-2xl text-[#ff1f8f] font-dancing-script drop-shadow-[0_0_8px_rgba(0,0,0,1)]">The Future</span><br />
                <span className="text-lg md:text-xl text-[#ff1f8f] font-dancing-script drop-shadow-[0_0_8px_rgba(0,0,0,1)] ml-4">is Inclusive</span>
              </div>
            </div>
            {/* Main Hero Image */}
            <div className="relative z-20 w-[100%] md:w-[90%] max-w-[900px] flex justify-center items-end">
              <img
                src={womanImg}
                alt="Woman in Tech"
                className="w-full h-auto object-contain scale-150 origin-bottom translate-y-30 md:translate-y-45 -translate-x-20 md:-translate-x-35"
                style={{
                  maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
                }}
              />

              {/* Glowing Globe Overlay */}
              <div className="absolute bottom-[5%] md:bottom-[2.5%] left-[52%] md:left-[53%] -translate-x-1/2 w-[55%] aspect-square z-30 opacity-90 pointer-events-none mix-blend-screen scale-[1.15] md:scale-[1.25] origin-center">
                {/* Outer Orbit Rings using inset for perfect centering without translate conflicts */}
                <div className="absolute inset-0 rounded-full border border-[#c77dff]/30 border-t-[#c77dff] animate-[spin_10s_linear_infinite]" style={{ transform: 'rotateX(70deg)' }}></div>

                {/* Core Glowing Sphere */}
                <div className="absolute inset-[15%] rounded-full bg-gradient-to-tr from-[#3c096c] to-[#c77dff] opacity-20 blur-[8px] animate-pulse"></div>

                {/* Dotted Network SVG */}
                <svg className="absolute inset-0 w-full h-full text-[#e0aaff] drop-shadow-[0_0_15px_#e0aaff]" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 3" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 4" />
                  <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 5" />
                  {/* Nodes */}
                  <circle cx="50" cy="10" r="1.5" /><circle cx="50" cy="90" r="1.5" />
                  <circle cx="10" cy="50" r="1.5" /><circle cx="90" cy="50" r="1.5" />
                  <circle cx="22" cy="22" r="1" /><circle cx="78" cy="78" r="1" />
                  <circle cx="22" cy="78" r="1" /><circle cx="78" cy="22" r="1" />
                </svg>

                <div className="absolute inset-0 bg-[#e0aaff]/20 rounded-full blur-[40px] mix-blend-screen"></div>
              </div>

              {/* Flanking Tech Icons */}
              <div className="absolute top-[45%] left-[5%] w-[90%] h-[50%] pointer-events-none z-10 hidden md:flex justify-between items-center">

                {/* Left Side Nodes */}
                <div className="flex flex-col justify-between h-full w-[40%]">
                  <div className="flex items-center gap-3 relative left-12">
                    <div className="flex flex-col items-center bg-[#240046]/80 border border-[#7b2cbf] rounded-xl p-3 shadow-[0_0_15px_rgba(123,44,191,0.4)] backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0aaff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" /><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" /><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" /><path d="M17.599 6.5a3 3 0 0 0 .399-1.375" /></svg>
                    </div>
                    <span className="text-[#c77dff] text-sm font-semibold whitespace-nowrap">AI & ML</span>
                    <div className="w-8 h-px bg-gradient-to-r from-[#7b2cbf] to-transparent"></div>
                  </div>

                  <div className="flex items-center gap-3 relative left-4">
                    <div className="flex flex-col items-center bg-[#240046]/80 border border-[#7b2cbf] rounded-xl p-3 shadow-[0_0_15px_rgba(123,44,191,0.4)] backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0aaff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z" /></svg>
                    </div>
                    <span className="text-[#c77dff] text-sm font-semibold whitespace-nowrap">IoT</span>
                    <div className="w-10 h-px bg-gradient-to-r from-[#7b2cbf] to-transparent"></div>
                  </div>

                  <div className="flex items-center gap-3 relative left-8">
                    <div className="flex flex-col items-center bg-[#240046]/80 border border-[#7b2cbf] rounded-xl p-3 shadow-[0_0_15px_rgba(123,44,191,0.4)] backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0aaff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
                    </div>
                    <span className="text-[#c77dff] text-sm font-semibold whitespace-nowrap">Cybersecurity</span>
                    <div className="w-6 h-px bg-gradient-to-r from-[#7b2cbf] to-transparent"></div>
                  </div>

                  <div className="flex items-center gap-3 relative left-16">
                    <div className="flex flex-col items-center bg-[#240046]/80 border border-[#7b2cbf] rounded-xl p-3 shadow-[0_0_15px_rgba(123,44,191,0.4)] backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0aaff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" /></svg>
                    </div>
                    <span className="text-[#c77dff] text-sm font-semibold whitespace-nowrap">Cloud Computing</span>
                    <div className="w-4 h-px bg-gradient-to-r from-[#7b2cbf] to-transparent"></div>
                  </div>
                </div>

                {/* Right Side Nodes */}
                <div className="flex flex-col justify-between h-full w-[40%] items-end translate-x-8 md:translate-x-16">
                  <div className="flex items-center gap-3 flex-row-reverse relative right-16">
                    <div className="flex flex-col items-center bg-[#240046]/80 border border-[#7b2cbf] rounded-xl p-3 shadow-[0_0_15px_rgba(123,44,191,0.4)] backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0aaff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" /></svg>
                    </div>
                    <span className="text-[#c77dff] text-sm font-semibold whitespace-nowrap">Robotics</span>
                    <div className="w-8 h-px bg-gradient-to-l from-[#7b2cbf] to-transparent"></div>
                  </div>

                  <div className="flex items-center gap-3 flex-row-reverse relative right-8">
                    <div className="flex flex-col items-center bg-[#240046]/80 border border-[#7b2cbf] rounded-xl p-3 shadow-[0_0_15px_rgba(123,44,191,0.4)] backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0aaff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2" /><rect width="6" height="6" x="9" y="9" rx="1" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="M2 12h2" /><path d="M20 12h2" /></svg>
                    </div>
                    <span className="text-[#c77dff] text-sm font-semibold whitespace-nowrap">Electronics</span>
                    <div className="w-10 h-px bg-gradient-to-l from-[#7b2cbf] to-transparent"></div>
                  </div>

                  <div className="flex items-center gap-3 flex-row-reverse relative right-12">
                    <div className="flex flex-col items-center bg-[#240046]/80 border border-[#7b2cbf] rounded-xl p-3 shadow-[0_0_15px_rgba(123,44,191,0.4)] backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0aaff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>
                    </div>
                    <span className="text-[#c77dff] text-sm font-semibold whitespace-nowrap">Data Science</span>
                    <div className="w-6 h-px bg-gradient-to-l from-[#7b2cbf] to-transparent"></div>
                  </div>

                  <div className="flex items-center gap-3 flex-row-reverse relative right-20">
                    <div className="flex flex-col items-center bg-[#240046]/80 border border-[#7b2cbf] rounded-xl p-3 shadow-[0_0_15px_rgba(123,44,191,0.4)] backdrop-blur-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#e0aaff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                    </div>
                    <span className="text-[#c77dff] text-sm font-semibold whitespace-nowrap">Leadership</span>
                    <div className="w-4 h-px bg-gradient-to-l from-[#7b2cbf] to-transparent"></div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Hero Bottom SVG Divider */}
        <svg
          className="absolute -bottom-10 left-0 w-full"
          viewBox="0 0 1920 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,50 Q480,20 960,50 T1920,50"
            stroke="url(#dividerGradient)"
            strokeWidth="2"
            fill="none"
          />
          <defs>
            <linearGradient id="dividerGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c77dff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9d4edd" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </section>

      {/* --- CONTENT BELOW HERO --- */}
      <div className="relative w-full">
        <ParticlesBackground />

        {/* --- SECTION 2: Empowering Women --- */}
        <section className="py-20 px-6 md:px-20 max-w-6xl mx-auto relative z-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-[#e0aaff] mb-6 leading-tight">Empowering Women.<br />Inspiring Innovation.</h2>
            <p className="text-[#c77dff] text-lg leading-relaxed mb-8 font-light">
              IEEE Women in Engineering (WIE) is one of IEEE's largest global affinity groups, dedicated to advancing women in engineering and technology. By connecting students, professionals, researchers, and mentors across the world, WIE creates opportunities for learning, leadership, networking, and professional growth while fostering an inclusive engineering community.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={2}
            className="space-y-4"
          >
            {[
              { icon: TrendingUp, text: "Leadership Development" },
              { icon: Globe, text: "Global Networking" },
              { icon: Award, text: "Technical Excellence" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#240046]/40 border border-[#5a189a] p-5 rounded-xl shadow-lg hover:bg-[#3c096c]/40 transition-colors">
                <div className="bg-[#7b2cbf] p-3 rounded-lg text-white">
                  <item.icon size={24} />
                </div>
                <span className="text-xl font-semibold text-[#e0aaff]">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: Building Engineers --- */}
      <section className="py-20 px-6 md:px-20 max-w-6xl mx-auto relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#e0aaff] mb-6 leading-tight">Building Engineers.<br />Creating Leaders.</h2>
          <p className="text-[#c77dff] text-lg leading-relaxed font-light">
            At IEEE WIE MUJ, every initiative is designed to inspire innovation, encourage collaboration, and empower future leaders. Through impactful events, technical workshops, industry interactions, international collaborations, and knowledge-sharing platforms, we create experiences that extend far beyond the classroom.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={2}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { num: 20, suffix: "+", label: "Technical Events" },
            { num: 25, suffix: "+", label: "Published Blogs" },
            { num: 1000, suffix: "+", label: "Participants Engaged" },
            { num: 7, suffix: "+", label: "International Collaborations" }
          ].map((stat, i) => (
            <div key={i} className="text-center bg-[#10002b]/60 border border-[#3c096c] p-8 rounded-2xl shadow-[0_0_20px_rgba(60,9,108,0.3)] hover:-translate-y-2 transition-transform duration-300">
              <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#e0aaff] to-[#9d4edd] mb-3 flex justify-center items-center">
                <CountUp to={stat.num} duration={1} separator="" />{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-[#c77dff] font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* --- SECTION 4: Innovation Meets Opportunity --- */}
      <section className="py-20 px-6 md:px-20 max-w-6xl mx-auto relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-16 md:w-2/3"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#e0aaff] mb-6 leading-tight">Innovation Meets Opportunity</h2>
          <p className="text-[#c77dff] text-lg leading-relaxed font-light">
            At Manipal University Jaipur, IEEE WIE serves as a platform where innovation meets opportunity. From hands-on workshops and hackathons to research initiatives, speaker sessions, technical competitions, and community outreach, we encourage students—especially young women in engineering—to explore emerging technologies while developing the confidence to lead meaningful change.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={2}
          className="grid md:grid-cols-2 gap-8"
        >
          {[
            {
              icon: Sparkles,
              title: "Innovation & Research",
              desc: "Creating solutions through technology, creativity, and collaboration."
            },
            {
              icon: Users,
              title: "Leadership & Community",
              desc: "Building confident leaders through mentorship, teamwork, and impactful initiatives."
            }
          ].map((card, i) => (
            <div key={i} className="bg-[#10002b]/80 border border-[#7b2cbf] p-8 rounded-2xl shadow-[0_0_30px_rgba(123,44,191,0.2)] hover:shadow-[0_0_40px_rgba(199,125,255,0.4)] transition-shadow duration-300">
              <div className="bg-[#3c096c] inline-block p-4 rounded-xl text-[#e0aaff] mb-6">
                <card.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#e0aaff] mb-3">{card.title}</h3>
              <p className="text-[#c77dff] text-lg font-light">{card.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* --- SECTION 5: More Than A Chapter --- */}
      <section className="py-24 px-6 md:px-20 max-w-4xl mx-auto text-center relative z-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e0aaff] to-[#c77dff] mb-8 leading-tight">More Than A Chapter</h2>
          <p className="text-xl md:text-2xl text-[#c77dff] leading-relaxed font-light">
            We believe engineering thrives when diverse perspectives come together. IEEE WIE MUJ is more than a technical chapter—it is a supportive community where curiosity is encouraged, ideas are celebrated, and leadership is nurtured. We welcome everyone who shares our vision of empowering women in engineering while building technology that creates meaningful change.
          </p>
        </motion.div>
      </section>

      {/* --- SECTION 6: CTA --- */}
      <section className="py-20 px-6 md:px-20 max-w-3xl mx-auto text-center relative z-20 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="bg-gradient-to-b from-[#3c096c]/40 to-[#10002b]/80 border border-[#7b2cbf] rounded-3xl p-10 md:p-16 shadow-[0_0_50px_rgba(90,24,154,0.3)] relative overflow-hidden"
        >
          {/* Subtle background glow for CTA */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#9d4edd]/10 blur-[80px] -z-10" />

          <h2 className="text-3xl md:text-4xl font-bold text-[#e0aaff] mb-6">Ready to Innovate With Us?</h2>
          <p className="text-[#c77dff] text-lg mb-10 font-light">
            Join a community that's empowering women in engineering, nurturing innovation, and shaping the future of technology! One idea, one project, and one leader at a time.
          </p>
          <a
            href="#join"
            className="inline-block bg-[#7b2cbf] hover:bg-[#9d4edd] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(157,78,221,0.5)] hover:shadow-[0_0_30px_rgba(199,125,255,0.7)] hover:-translate-y-1"
          >
            Join IEEE WIE MUJ
          </a>
        </motion.div>
      </section>
      
      </div>
    </div>
  );
}
