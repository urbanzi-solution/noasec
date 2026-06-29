export default function WhyConsiderCybersecurity() {
  const benefits = [
    "High demand for skilled professionals",
    "Competitive salaries and career growth",
    "Opportunities across multiple industries",
    "Remote roles and flexible work environments",
    "Continuous learning and skill development",
    "Strong job security for the future",
  ];

  return (
    <section className="bg-[#07182c] py-10 md:py-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="px-4 sm:px-0">
          <h2 className="text-center text-white text-2xl md:text-4xl font-bold mb-8">
            Why Consider a Career in Cybersecurity?
          </h2>
        </div>

        {/* Image */}
        <div className="px-4 sm:px-0">
          <div className="overflow-hidden rounded-md border border-white/10">
            <img
              src="/consider a carrier.jpg"
              alt="Cybersecurity Career"
              className="w-full h-[220px] sm:h-[300px] md:h-[450px] object-cover"
            />
          </div>
        </div>

        {/* Description */}
        <div className="px-4 sm:px-0">
          <p className="text-slate-300 text-base md:text-lg leading-7 md:leading-relaxed mt-8 mb-10">
            Cybersecurity is not just for large corporations anymore. Today,
            every business that depends on digital systems requires protection
            from cyberattacks, data breaches, and ransomware.
          </p>
        </div>

        {/* Benefits List */}
        <div className="space-y-5 mb-10 px-4 sm:px-0">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-cyan-400 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#07182c] text-sm font-bold">✓</span>
              </div>

              <p className="text-white text-base md:text-lg">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Highlight Box */}
        <div className="px-4 sm:px-0">
          <div className="bg-[#24364d] border border-white/10 rounded-md px-6 md:px-8 py-6">
            <p className="text-center text-white font-semibold text-base md:text-lg leading-7">
              With cyber threats becoming more sophisticated each year,
              professionals are expected to remain in high demand.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}