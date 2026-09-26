export default function BlogHeader() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
  

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#07182c]/85" />

      {/* Navbar */}
      <header className="relative z-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 py-5 flex justify-between items-center">
          <h1 className="text-white font-bold text-2xl tracking-wide">
            NOASEC CAREER HUB
          </h1>

          <button className="text-white text-3xl">
            ☰
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          
          {/* THIS CONTROLS THE SPACE BELOW NAVBAR */}
          <div className="pt-32 lg:pt-40">

            {/* Badge */}
            <div className="inline-flex items-center px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 mb-8">
              <span className="text-cyan-300 text-sm md:text-base font-semibold tracking-wider uppercase">
                Industry Roadmap 2026
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 max-w-5xl">
              How to Start a Career in
              <br />
              Cybersecurity in 2026:
              <span className="block text-cyan-400 mt-2">
                Complete Beginner's Roadmap
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
              Cybersecurity is one of the fastest growing and most in-demand
              career fields in the world. As businesses, governments and
              individuals become increasingly dependent on digital
              technologies, the demand for skilled cybersecurity
              professionals continues to grow.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-cyan-400 hover:bg-cyan-300 transition px-10 py-4 rounded-md text-black font-semibold text-lg">
                Explore Career Roadmap ↗
              </button>

              <button className="border border-cyan-400/50 text-white hover:bg-white/10 transition px-10 py-4 rounded-md font-medium text-lg">
                Learn With Noasec
              </button>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}