export default function ConclusionSection() {
  return (
    <section className="relative bg-[#0d1723] py-20 overflow-hidden">

      {/* Left Gradient Line */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#6D5CFF] via-[#3B82F6] to-[#6D5CFF]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Image */}
        <div className="overflow-hidden rounded-[26px] mb-10 shadow-lg">
          <img
            src="/conclusion.jpg"
            alt="Cybersecurity Career"
            className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[430px] object-cover"
          />
        </div>

        {/* Heading */}
        <h2 className="text-center text-white text-3xl md:text-4xl font-bold mb-8">
          Conclusion
        </h2>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-[#B6C7D6] text-base md:text-lg leading-8">
            Choosing a career in cybersecurity in <span className="text-white font-semibold">2026</span> is one of the smartest
            decisions for those looking for a profession that is future-proof.
            This will lay a good foundation for success down the road. So learn
            the basics of IT, build your cybersecurity skill set, get some
            certifications and experience.
          </p>

          <p className="mt-6 text-center text-[#B6C7D6] text-base md:text-lg leading-8">
            If you are a student, fresher, career changer, or an IT professional
            looking to specialize, cybersecurity presents exciting opportunities
            with substantial growth potential. Through hard work, continuous
            learning, and practical experience, you can launch a successful
            career in cybersecurity and become an invaluable asset in today's
            digital landscape.
          </p>
        </div>

      </div>
    </section>
  );
}