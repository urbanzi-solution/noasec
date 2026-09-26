export default function WhyLearningMatters() {
  return (
    <section className="bg-[#06182B] py-10 md:py-12">
      <div className="max-w-7xl mx-auto">

        {/* Image */}
        <div className="px-4 sm:px-0">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/why learning.webp"
              alt="Why Learning From Industry Experts Matters"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#071C31] px-5 sm:px-6 md:px-8 py-6 sm:py-8">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-5">
            Why Learning From Industry Experts Matters
          </h2>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-7 md:leading-relaxed mb-6 md:mb-8">
            Many beginners make the mistake of only focusing on theoretical
            concepts. Today's employers want candidates who can apply knowledge
            to real-world situations. By learning from experienced
            professionals, you accelerate growth through real security
            challenges and industry tools.
          </p>

          {/* Quote Box */}
          <div className="border border-white/10 bg-[#0A2138] rounded-lg px-5 sm:px-6 py-4 sm:py-5">
            <p className="text-slate-400 italic text-sm md:text-base leading-7">
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