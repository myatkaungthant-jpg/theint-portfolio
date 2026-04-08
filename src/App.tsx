import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Download, 
  Wallet, 
  Building2, 
  Terminal, 
  TrendingUp, 
  CheckCircle2, 
  GraduationCap, 
  BadgeCheck, 
  Mail, 
  MapPin, 
  Linkedin, 
  ExternalLink,
  ChevronRight,
  Loader2,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useForm, ValidationError } from '@formspree/react';
import profileImg from './assets/profile.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // FormSpree Hook - Replace 'YOUR_FORM_ID' with your actual FormSpree ID
  const [state, handleSubmit] = useForm("YOUR_FORM_ID");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Contact', href: '#contact' },
  ];

  const experiences = [
    {
      period: "2025 — Present",
      role: "Chief Accountant",
      company: "Fortune Group of Companies (Han Yoma Energy Co., Ltd.)",
      location: "Yangon, Myanmar",
      description: "Energy and infrastructure sector leadership.",
      responsibilities: [
        "Oversee all accounting operations, including billing, AR/AP, general ledger, and cost accounting.",
        "Prepare and analyze financial statements, ensuring compliance with accounting standards and regulations.",
        "Manage budgeting, forecasting, and cash flow planning processes.",
        "Supervise and mentor the accounting team, ensuring high performance and professional development.",
        "Ensure compliance with government reporting requirements and coordinate with external auditors.",
        "Provide financial insights and recommendations to senior management to support decision-making.",
        "Oversee the implementation and maintenance of accounting systems and software."
      ]
    },
    {
      period: "2019 — 2025",
      role: "Chief Accountant",
      company: "Aung Gyi Group of Companies",
      location: "Yangon, Myanmar",
      description: "Import and distribute Heavy machinery, Truck, Generators, Lift, Aircon, Lubricant.",
      responsibilities: [
        "Prepare and submit monthly, quarterly, and year-end closing financial statements to CFO and Finance Director.",
        "Maintain accurate records of all financial transactions, journal entries, general ledger, and fixed assets register.",
        "Reconciliation of all bank statements and review of aging reports for AR accuracy.",
        "Review supplier and trade payables to banks, coordinating with overseas FM for balance accuracy.",
        "Ensure staff advance payments comply with internal controls and provide taxation department data."
      ]
    },
    {
      period: "2014 — 2018",
      role: "Finance Manager",
      company: "Indeco art plus interior Co., Ltd.",
      location: "Yangon, Myanmar",
      description: "Interior decoration and design firm.",
      responsibilities: [
        "Managed full-spectrum financial operations and reporting for interior decoration projects.",
        "Overseeing budget allocation and cost control for large-scale interior design contracts."
      ]
    },
    {
      period: "2011 — 2014",
      role: "Chief Accountant",
      company: "High Tone Co., Ltd.",
      location: "Yangon, Myanmar",
      description: "Mobile Handset and Sim Card retail sale.",
      responsibilities: [
        "Directed accounting for high-volume retail operations across multiple branches.",
        "Managed inventory valuation and financial reporting for mobile handset distribution."
      ]
    },
    {
      period: "2011 — 2011",
      role: "General Admin & Finance Supervisor",
      company: "AB Food & Beverage Ltd.",
      location: "Yangon, Myanmar",
      description: "Import and distribute medicine, consumer goods (Ovaltine Brand).",
      responsibilities: [
        "Controlled daily expenses and month-end reports for Myanmar expenditures.",
        "Handled filing, documentation, and preparation for internal and external auditing.",
        "Managed payroll for all Myanmar staff and valuation for FOC samples."
      ]
    },
    {
      period: "2009 — 2010",
      role: "Accountant",
      company: "VIMPEX Ltd.",
      location: "Yangon, Myanmar",
      description: "Import/distribute medicine and consumer goods; export beans and handicrafts.",
      responsibilities: [
        "Processed income and expense transactions using UBS Software.",
        "Prepared month-end reports and maintained stock statements and financial records.",
        "Coordinated documentation for internal and external audit processes."
      ]
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-extrabold tracking-tight text-slate-900"
          >
            THEINT THEINT HTAY
          </motion.span>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-slate-600 font-medium text-sm hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/photo/Theint_Theint_Htay_CV.pdf"
              download="Theint_Theint_Htay_CV.pdf"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="luminous-gradient text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all text-center"
            >
              Download CV
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-600 font-medium text-lg"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="/photo/Theint_Theint_Htay_CV.pdf" 
                  download="Theint_Theint_Htay_CV.pdf"
                  className="luminous-gradient text-white px-6 py-3 rounded-full font-semibold text-center"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 soft-mesh-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 z-10 text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-primary/10 mb-8 shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-xs font-bold text-primary tracking-widest uppercase">Senior Financial Leader</span>
              </div>
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-8">
                Theint Theint Htay <br /><span className="luminous-text">Chief Accountant.</span>
              </h1>
              <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
                Strategic financial expert with over 15 years of experience in high-level accounting, taxation, and ERP implementation across diverse industries in Myanmar.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.a 
                  href="/photo/Theint_Theint_Htay_CV.pdf"
                  download="Theint_Theint_Htay_CV.pdf"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="luminous-gradient text-white px-10 py-4 rounded-full font-bold tracking-wide shadow-xl shadow-primary/30 hover:shadow-primary/40 transition-all text-center"
                >
                  Download CV
                </motion.a>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/80 backdrop-blur-md border border-slate-200 text-slate-700 px-10 py-4 rounded-full font-bold tracking-wide hover:bg-white transition-all"
                >
                  Executive Bio
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex-1 w-full max-w-lg md:max-w-none"
            >
              <div className="relative group">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl opacity-60"></div>
                <div className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                  <img 
                    alt="Theint Theint Htay Professional Headshot" 
                    className="w-full aspect-[4/5] object-cover" 
                    src={profileImg}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-24 bg-slate-50/50" id="expertise">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-3">Capabilities</span>
              <h2 className="text-4xl font-extrabold tracking-tight text-on-surface">Core Competencies</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-on-surface-variant max-w-md text-sm leading-relaxed"
            >
              Expertise in modern accounting software including MYOB, UBS, and QNE Business Solutions, combined with deep industry knowledge.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: <Wallet size={28} />, title: 'Financial Reporting', desc: 'Preparation of monthly, quarterly, and annual closing statements for executive review.', span: 'md:col-span-2', gradient: true },
              { icon: <Building2 size={28} />, title: 'Taxation & Compliance', desc: 'Ensuring all financial operations comply with Myanmar taxation laws and internal controls.', span: 'col-span-1', gradient: false },
              { icon: <Terminal size={28} />, title: 'Accounting Software', desc: 'Proficient in MYOB, UBS (v9.2), and QNE Business Solution for streamlined reporting.', span: 'col-span-1', gradient: false }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${item.span} bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all border border-slate-100`}
              >
                <div className={`w-14 h-14 ${item.gradient ? 'luminous-gradient text-white shadow-lg shadow-primary/20' : 'bg-blue-50 text-primary'} rounded-2xl flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 luminous-gradient text-white p-12 rounded-[3rem] md:rounded-[3.5rem] flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl shadow-primary/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="relative z-10 max-w-2xl text-center md:text-left">
                <h3 className="text-3xl font-extrabold mb-4">Strategic Financial Management</h3>
                <p className="text-blue-50 leading-relaxed text-lg">Managing complex financial ecosystems for multi-sector groups, from heavy machinery distribution to food and beverage retail.</p>
              </div>
              <TrendingUp size={96} className="opacity-20 relative z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 bg-white overflow-hidden" id="experience">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-20 text-center">Professional Trajectory</h2>
          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-48">
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-20 relative pl-12 group"
              >
                <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full ${i === 0 ? 'luminous-gradient border-4 border-white shadow-lg' : 'bg-slate-200 border-4 border-white'} group-hover:scale-150 transition-transform`}></div>
                <div className="absolute -left-48 top-0 hidden md:block w-40 text-right">
                  <span className={`text-sm font-bold ${i === 0 ? 'text-primary' : 'text-slate-400'} tracking-widest uppercase`}>{exp.period}</span>
                </div>
                <div className={`p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 ${i === 0 ? 'bg-slate-50/50 group-hover:bg-white' : 'bg-white'} group-hover:shadow-xl group-hover:shadow-slate-100 transition-all`}>
                  <span className={`md:hidden text-xs font-bold ${i === 0 ? 'text-primary' : 'text-slate-400'} block mb-3`}>{exp.period.toUpperCase()}</span>
                  <h4 className="text-2xl font-extrabold text-on-surface mb-2">{exp.role}</h4>
                  <p className="text-primary font-semibold mb-2">{exp.company}</p>
                  <p className="text-slate-400 text-sm mb-6 flex items-center gap-1"><MapPin size={14} /> {exp.location}</p>
                  <p className="text-on-surface-variant text-base mb-6 italic">{exp.description}</p>
                  {exp.responsibilities && (
                    <ul className="text-on-surface-variant text-base space-y-4 list-none leading-relaxed">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2 size={20} className="text-primary mt-1 shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials & Education */}
      <section className="py-24 bg-slate-50/50" id="credentials">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-4xl font-extrabold tracking-tight text-on-surface mb-6">Credentials & Education</h2>
              <p className="text-on-surface-variant leading-relaxed text-lg">Advanced academic background in Engineering Physics combined with professional accounting diplomas.</p>
            </motion.div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Education */}
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1.5 h-full luminous-gradient"></div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] block mb-3 flex items-center gap-2">
                    <GraduationCap size={14} /> Degrees
                  </span>
                  <h5 className="font-extrabold text-xl mb-1">M.Sc. & B.Sc. (Honours)</h5>
                  <p className="text-primary font-semibold text-sm mb-1">Engineering Physics</p>
                  <p className="text-on-surface-variant text-sm">Regional College (Hlaing Campus), Yangon University</p>
                </motion.div>
              </div>
              {/* Certifications */}
              <div className="space-y-4">
                {[
                  { title: 'ACCA (Part 1) & Dip IFR', subtitle: 'Professional Accounting Credentials' },
                  { title: 'LCCI Level III', subtitle: 'Diploma in Accounting' },
                  { title: 'LCCI Level II', subtitle: 'Certificate of Accounting' }
                ].map((cert, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-5 bg-white p-5 rounded-[2rem] border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-primary rounded-xl shrink-0">
                      <BadgeCheck size={24} />
                    </div>
                    <div>
                      <h6 className="font-bold text-base">{cert.title}</h6>
                      <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">{cert.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-white rounded-[3rem] md:rounded-[4rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col md:flex-row"
          >
            <div className="flex-1 p-10 md:p-16 luminous-gradient text-white">
              <h2 className="text-4xl font-extrabold mb-8">Contact Leadership</h2>
              <p className="text-blue-50 mb-12 text-lg leading-relaxed">For executive consultation, partnership inquiries, or financial strategy discussions.</p>
              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <span className="font-semibold text-base">theint2htay@gmail.com</span>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <span className="font-semibold text-base text-sm">59/C, U Lunn Maung St, Yangon</span>
                </div>
              </div>
            </div>
            <div className="flex-1 p-10 md:p-16 bg-white">
              {state.succeeded ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={40} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Message Sent!</h3>
                    <p className="text-slate-500">Thank you for reaching out. I will get back to you as soon as possible.</p>
                  </div>
                  <button 
                    onClick={() => window.location.reload()}
                    className="text-primary font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Send another message <ArrowRight size={16} />
                  </button>
                </motion.div>
              ) : (
                <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="full-name" className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">Full Name</label>
                    <input 
                      id="full-name"
                      name="name"
                      required
                      className="w-full bg-slate-50 border-0 rounded-full focus:ring-2 focus:ring-primary/20 px-6 py-4 transition-all outline-none" 
                      placeholder="John Doe" 
                      type="text"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">Corporate Email</label>
                    <input 
                      id="email"
                      name="email"
                      required
                      className="w-full bg-slate-50 border-0 rounded-full focus:ring-2 focus:ring-primary/20 px-6 py-4 transition-all outline-none" 
                      placeholder="john@company.com" 
                      type="email"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[11px] font-extrabold text-slate-400 uppercase tracking-widest mb-3">Message</label>
                    <textarea 
                      id="message"
                      name="message"
                      required
                      className="w-full bg-slate-50 border-0 rounded-[2rem] focus:ring-2 focus:ring-primary/20 px-6 py-4 transition-all outline-none resize-none" 
                      placeholder="How can I help you?" 
                      rows={4}
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>
                  <motion.button 
                    type="submit" 
                    disabled={state.submitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full luminous-gradient text-white py-5 rounded-full font-bold tracking-widest uppercase hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ChevronRight size={20} />
                      </>
                    )}
                  </motion.button>
                  {state.errors && (
                    <p className="text-red-500 text-xs font-medium text-center">
                      Something went wrong. Please try again later.
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-20 bg-slate-900 text-slate-300">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            <div className="col-span-1">
              <span className="text-2xl font-extrabold tracking-tighter text-white mb-8 block uppercase">THEINT THEINT HTAY</span>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">Senior Financial Leader specializing in strategic growth and operational excellence for multi-national corporate groups.</p>
              <div className="flex gap-4">
                <a 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" 
                  href="https://www.linkedin.com/in/theint-theint-htay-4b185b5a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                </a>
                <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors" href="mailto:theint2htay@gmail.com">
                  <Mail size={18} />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-extrabold text-white uppercase tracking-[0.2em] mb-8">Office Location</h4>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1" />
                <p className="text-slate-400 text-sm leading-relaxed">
                  59/C, U Lunn Maung Street<br />
                  7 - Ward, Mayangone<br />
                  Yangon, Myanmar
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-[11px] font-extrabold text-white uppercase tracking-[0.2em] mb-8">Quick Links</h4>
              <ul className="space-y-4">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-2 group" href={link.href}>
                      <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-extrabold text-white uppercase tracking-[0.2em] mb-8">Connect</h4>
              <div className="flex flex-col gap-5">
                <a 
                  className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors" 
                  href="https://www.linkedin.com/in/theint-theint-htay-4b185b5a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                  LinkedIn Professional
                </a>
                <a className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors" href="#">
                  <BadgeCheck size={18} />
                  ACCA Directory
                </a>
                <a className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors" href="mailto:theint2htay@gmail.com">
                  <ExternalLink size={18} />
                  Direct Correspondence
                </a>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-[10px] tracking-[0.2em] uppercase text-center md:text-left">
              © 2024 THEINT THEINT HTAY. ALL RIGHTS RESERVED. PRECISION FINANCE.
            </p>
            <div className="flex gap-8">
              <a className="text-slate-500 text-[10px] tracking-[0.2em] uppercase hover:text-white" href="#">Privacy Policy</a>
              <a className="text-slate-500 text-[10px] tracking-[0.2em] uppercase hover:text-white" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
