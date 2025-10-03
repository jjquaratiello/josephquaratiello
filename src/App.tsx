import BackgroundCanvas from './components/BackgroundCanvas'

function App() {

  // (Blog feed fetch disabled for now)

  

  return (
    <div className="min-h-screen relative z-10">
      <BackgroundCanvas />
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto max-w-6xl px-8 py-6 flex items-center justify-between">
          <a href="#top" className="text-sm font-light tracking-wider">JQ</a>
          <nav className="flex gap-8 text-xs font-light tracking-wide">
            <a href="#about" className="text-white/50 hover:text-white transition-colors">About</a>
            <a href="#education" className="text-white/50 hover:text-white transition-colors">Education</a>
            <a href="#experience" className="text-white/50 hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="text-white/50 hover:text-white transition-colors">Projects</a>
            <a href="#blog" className="text-white/50 hover:text-white transition-colors">Writing</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero / About */}
        <section id="about" className="min-h-screen flex items-center px-8 lg:px-16 relative">
          <div className="max-w-7xl mx-auto w-full py-32">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
              <div className="space-y-8 order-2 lg:order-1">
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[0.95]">
                  Joseph<br />Quaratiello
                </h1>
                <div className="w-12 h-px bg-white/20"></div>
                <p className="text-lg lg:text-xl font-light text-white/60 leading-relaxed max-w-xl">
                  Electrical Engineering and Physics student at Dartmouth College. Conducting
                  research in the{' '}
                  <a href="https://sites.dartmouth.edu/rizzo/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white underline underline-offset-4">
                    Rizzo Integrated Photonic Systems Lab
                  </a>
                  , exploring photonic integrated circuits for AI applications.
                </p>
                <nav className="pt-6 grid grid-cols-2 sm:inline-flex gap-3 text-xs font-light">
                  <a href="#about" className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 shadow-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_18px_rgba(255,255,255,0.12)] transition-colors transition-shadow">About</a>
                  <a href="#education" className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 shadow-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_18px_rgba(255,255,255,0.12)] transition-colors transition-shadow">Education</a>
                  <a href="#experience" className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 shadow-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_18px_rgba(255,255,255,0.12)] transition-colors transition-shadow">Experience</a>
                  <a href="#projects" className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 shadow-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_18px_rgba(255,255,255,0.12)] transition-colors transition-shadow">Projects</a>
                  <a href="#blog" className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 shadow-none hover:shadow-[0_0_0_1px_rgba(255,255,255,0.25),0_0_18px_rgba(255,255,255,0.12)] transition-colors transition-shadow">Writing</a>
                </nav>
              </div>
              <div className="flex justify-center lg:justify-end order-1 lg:order-2 self-start">
                <div className="w-64 lg:w-80 xl:w-96 aspect-square rounded-sm overflow-hidden border border-white/10">
                  <img 
                    src="/profile.jpeg" 
                    alt="Joseph Quaratiello" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <a href="#education" className="group absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-2 text-xs text-white/60">
            <span className="tracking-wide">Scroll</span>
            <svg className="w-4 h-4 animate-bounce group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </a>
        </section>

        {/* Education */}
        <section id="education" className="min-h-screen flex items-center px-8 lg:px-16 border-t border-white/5">
          <div className="max-w-5xl mx-auto w-full py-32">
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-16">Education</h2>
            <div className="space-y-12">
              <div className="pb-8 border-b border-white/5">
                <div className="flex items-start justify-between gap-8">
                  <div className="flex items-start gap-4">
                    <img src="/dartmouth.jpg" alt="Dartmouth College" className="w-12 h-12 rounded-sm object-cover border border-white/10" />
                    <div className="space-y-2">
                      <h3 className="text-2xl font-light">Dartmouth College</h3>
                      <p className="text-white/50 font-light">Bachelor of Engineering in Electrical Engineering, Bachelor of Arts in Physics</p>
                    </div>
                  </div>
                  <span className="text-white/40 text-sm font-light whitespace-nowrap">2023 – 2027</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-light text-white/70">Coursework</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border border-white/10 rounded-lg p-4 bg-black">
                    <div className="text-xs text-white/50 mb-2">Fall 2025 (Current)</div>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li>ENGS 26 — Control Theory</li>
                      <li>ENGS 61 — Intermediate Electrical Circuits</li>
                      <li>COSC 69.23 — Parallel Optimization for Robotics</li>
                      <li>ITAL 14 — Introduction to Italian Culture</li>
                    </ul>
                  </div>
                  <div className="border border-white/10 rounded-lg p-4 bg-black">
                    <div className="text-xs text-white/50 mb-2">Summer 2025</div>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li>ENGS 21 — Introduction to Engineering</li>
                      <li>ENGS 24 — Science of Materials</li>
                      <li>ENGS 96 — Math for Machine Learning</li>
                      <li>ENGS 11 — Visual Introduction to Engineering</li>
                    </ul>
                  </div>
                  <div className="border border-white/10 rounded-lg p-4 bg-black">
                    <div className="text-xs text-white/50 mb-2">Spring 2025</div>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li>ENGS 23 — Distributed Systems and Fields</li>
                      <li>ENGS 31 — Digital Electronics</li>
                      <li>PHYS 48 — Linear and Digital Circuits</li>
                    </ul>
                  </div>
                  <div className="border border-white/10 rounded-lg p-4 bg-black">
                    <div className="text-xs text-white/50 mb-2">Winter 2025</div>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li>ENGS 22 — Systems</li>
                      <li>ENGS 62 — Microprocessors in Engineered Systems</li>
                      <li>MATH 22 — Linear Algebra</li>
                    </ul>
                  </div>
                  <div className="border border-white/10 rounded-lg p-4 bg-black">
                    <div className="text-xs text-white/50 mb-2">Fall 2024</div>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li>COSC 50 — Software Design and Implementation</li>
                      <li>MES 1 — Middle Eastern Studies</li>
                    </ul>
                  </div>
                  <div className="border border-white/10 rounded-lg p-4 bg-black">
                    <div className="text-xs text-white/50 mb-2">Spring 2024</div>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li>PHYS 40 — Quantum Physics of Matter</li>
                      <li>MATH 20 — Probability</li>
                      <li>CHEM 07 — Writing</li>
                    </ul>
                  </div>
                  <div className="border border-white/10 rounded-lg p-4 bg-black">
                    <div className="text-xs text-white/50 mb-2">Winter 2024</div>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li>COSC 10 — Object Oriented Programming</li>
                      <li>PHYS 16 — Honors Physics II</li>
                      <li>WRIT 5 — Writing</li>
                    </ul>
                  </div>
                  <div className="border border-white/10 rounded-lg p-4 bg-black">
                    <div className="text-xs text-white/50 mb-2">Fall 2023</div>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li>PHYS 15 — Honors Physics I</li>
                      <li>MATH 11 — Accelerated Multivariable Calculus</li>
                      <li>PBPL 53 — Entrepreneurship</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="min-h-screen flex items-center px-8 lg:px-16 border-t border-white/5">
          <div className="max-w-5xl mx-auto w-full py-32">
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-16">Experience</h2>

            <div className="space-y-10">
              <article className="border-b border-white/5 pb-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-light">Photonic Computing Researcher</h3>
                    <div className="text-white/60 text-sm">Rizzo Integrated Photonic Systems Lab @ Dartmouth · Hanover, NH</div>
                    <ul className="mt-3 space-y-2 text-sm text-white/70 leading-relaxed">
                      <li>Designing nonlinear optical activations (softmax numerator, tanh/ReLU) with thermo‑optic bias/feedback; drafting a first‑author paper on a softmax module.</li>
                      <li>Characterizing silicon microrings with tunable‑laser sweeps and automated Python analysis.</li>
                      <li>Engineering high‑Q resonators for low‑crosstalk Kerr combs; flattening dispersion and equalizing per‑line power for dense C‑band WDM.</li>
                      <li>Integrating Kerr combs and activation modules with WDM MVM engines (microring weights); co‑simulating in Lumerical FDTD & INTERCONNECT.</li>
                    </ul>
                  </div>
                  <div className="text-xs text-white/40 whitespace-nowrap">Mar 2025 – Present</div>
                </div>
              </article>

              <article className="border-b border-white/5 pb-8">
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-light">ENGS 23: Distributed Systems and Fields · Teaching Assistant</h3>
                    <div className="text-white/60 text-sm">Thayer School of Engineering · Hanover, NH</div>
                    <p className="mt-3 text-sm text-white/70 leading-relaxed">Weekly office hours and lab support; reinforced state‑space modeling, lumped vs. continuous systems, and applications of vector fields and conservation laws across EM, heat transfer, fluid, and quantum systems.</p>
                  </div>
                  <div className="text-xs text-white/40 whitespace-nowrap">Sep 2025 – Present</div>
                </div>
              </article>

              <article>
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-light">ENGS 31: Digital Electronics · Teaching Assistant</h3>
                    <div className="text-white/60 text-sm">Thayer School of Engineering · Hanover, NH</div>
                    <ul className="mt-3 space-y-2 text-sm text-white/70 leading-relaxed">
                      <li>Hosted office hours on combinational/sequential logic, RTL design, FSMs, and verification with simulation/VHDL testbenches.</li>
                      <li>Supported capstone teams building synthesizers, VGA games, Morse encoders, and networked/multiplayer systems.</li>
                    </ul>
                  </div>
                  <div className="text-xs text-white/40 whitespace-nowrap">Jun 2025 – Sep 2025</div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="min-h-screen flex items-center px-8 lg:px-16 border-t border-white/5">
          <div className="max-w-5xl mx-auto w-full py-32">
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-16">Projects</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Optical Self‑Heating Softmax",
                  desc:
                    "Microring thermo‑optic shifts produce a sharp, saturating transfer curve — no gain media or exotic materials. A compact, low‑power softmax primitive for integrated photonic inference with simple electronic normalization. Lab work includes chip characterization of microring resonators, photodetectors, VOAs, and measurement tooling.",
                  time: "Sep 2025 – Present",
                  tags: ["Integrated Photonics", "Microring", "Softmax", "Thermo‑optic"],
                  sort: 202509,
                },
                {
                  title: "Automatic Fastener Sorter",
                  desc:
                    "A computer‑vision sorter that classifies arbitrary fasteners into 8 bins to speed machine‑shop workflows and reduce waste. Built around a Raspberry Pi with a camera multiplexer (Pi cams), custom PWM control for mechanical diverters, and hand‑soldered I/O. Real‑time inference routes parts to the correct bin with minimal footprint.",
                  time: "Jul 2025 – Aug 2025",
                  tags: ["Computer Vision", "Raspberry Pi", "Camera Multiplexer", "PWM", "Mechanisms"],
                  video: "https://www.youtube.com/embed/WEloTFnia3g",
                  sort: 202507,
                },
                {
                  title: "FPGA Blackjack",
                  desc:
                    "Full Blackjack game in VHDL on a Basys 3 FPGA. Modular FSMs and RTL drive gameplay, wagering, and dealer logic. Pseudo‑random cards via a 16‑bit LFSR with rejection sampling for uniformity. Graphics and sprites rendered over VGA; verified with VHDL test benches and Vivado ILA.",
                  time: "May – Jun 2025",
                  tags: ["VHDL", "Vivado", "RTL", "FSM", "UART", "VGA", "LFSR"],
                  img: "/blackjack.jpeg",
                  sort: 202505,
                },
                {
                  title: "Learnbase — AI Notes & Tutor",
                  time: "March 2025",
                  desc:
                    "A study platform with inline LaTeX rendering, graphs, and executable code cells. Each class/project has its own RAG pipeline — upload files and ask targeted questions, with AI‑generated notes grounded in your materials.",
                  tags: ["RAG", "LaTeX", "Graphs", "Executable Code", "AI Notes"],
                  video: "https://www.youtube.com/embed/j51L8hkL4eA",
                  sort: 202503,
                },
                {
                  title: "Thrust‑Vectoring Model Rocket",
                  time: "Summer 2023",
                  desc:
                    "A closed‑loop thrust‑vectoring rocket demonstrator leveraging PID control on an STM32 Nucleo stack. Implemented flight controller in C, designed gimbal and airframe in SolidWorks, and applied rocketry dynamics for stabilization.",
                  tags: ["PID Control", "STM32 Nucleo", "C", "SolidWorks", "Rocketry"],
                  video: "https://www.youtube.com/embed/FI0W-sb8auE",
                  sort: 202307,
                },
              ]
                .sort((a, b) => (b.sort ?? 0) - (a.sort ?? 0))
                .map((project) => (
                <article key={project.title} className="border-b border-white/5 pb-8 hover:border-white/10 transition-colors group">
                  <div className="flex items-start gap-6">
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-light group-hover:text-white text-white/90 transition-colors">{project.title}</h3>
                      {project.time && (
                        <div className="text-xs text-white/40 font-light">{project.time}</div>
                      )}
                      <p className="text-white/50 text-sm font-light leading-relaxed">{project.desc}</p>
                      
                    </div>
                    {project.img && (
                      <div className="hidden md:block shrink-0 self-start max-w-[45%] lg:max-w-[40%]">
                        <img
                          src={project.img}
                          alt={project.title}
                          className="h-48 lg:h-56 w-auto max-w-full object-contain rounded-sm border border-white/10 bg-white/0"
                        />
                      </div>
                    )}
                    {project.video && (
                      <div className="hidden md:block shrink-0 self-start w-full max-w-xl aspect-video rounded-sm overflow-hidden border border-white/10">
                        <iframe
                          className="w-full h-full"
                          src={project.video}
                          title={project.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
      </div>
        </section>

        {/* Blog */}
        <section id="blog" className="min-h-screen flex items-center px-8 lg:px-16 border-t border-white/5">
          <div className="max-w-5xl mx-auto w-full py-32">
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-16">Writing</h2>
            <p className="text-white/60 text-sm leading-relaxed">
              For now, this will be a space where I document what I'm working on, give updates,
              and share my thoughts about stuff.
            </p>
          </div>
        </section>

        
      </main>
      </div>
  )
}

export default App
