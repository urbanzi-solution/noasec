export default function WhyLearningMatters() {
  return (
    <section className="bg-[#06182B] py-12">
      <div className="max-w-7xl mx-auto">

        {/* Image */}
        <div className="overflow-hidden">
          <img
            src="/why learning.webp"
            alt="Why Learning From Industry Experts Matters"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="bg-[#071C31] px-6 md:px-8 py-8">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-5">
            Why Learning From Industry Experts Matters
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-8">
            Many beginners make the mistake of only focusing on theoretical
            concepts. Today's employers want candidates who can apply knowledge
            to real-world situations. By learning from experienced
            professionals, you accelerate growth through real security
            challenges and industry tools.
          </p>

          {/* Quote Box */}
          <div className="border border-white/10 bg-[#0A2138] px-6 py-5">
            <p className="text-slate-400 italic text-sm md:text-base leading-relaxed">
              “At Noasec, students bridge the gap between academic learning and
              professional requirements through practical labs designed to build
              skills that employers actively seek.”
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}