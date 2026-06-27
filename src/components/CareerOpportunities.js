import {
  Shield,
  Users,
  ShieldCheck,
  Cloud,
} from "lucide-react";

const careers = [
  {
    icon: Shield,
    title: "Penetration Testing",
    description:
      "Ethical hacking and vulnerability assessment.",
  },
  {
    icon: Users,
    title: "Security Engineering",
    description:
      "Building robust defensive architectures.",
  },
  {
    icon: ShieldCheck,
    title: "GRC Specialist",
    description:
      "Governance, Risk, and Compliance management.",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Securing modern cloud infrastructures.",
  },
];

export default function CareerOpportunities() {
  return (
    <section className="relative bg-[#0D1723] py-20 overflow-hidden">

      {/* Left Gradient Line */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#6D5CFF] via-[#3B82F6] to-[#6D5CFF]" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <h2 className="text-[#70879B] text-3xl md:text-4xl font-bold leading-tight mb-10">
          Career Opportunities and Future
          <br />
          Scope
        </h2>

        {/* Image */}
        <div className="overflow-hidden rounded-[26px] mb-12">
          <img
            src="/career.jpg"
            alt="Career Opportunities"
            className="w-full h-[230px] sm:h-[320px] md:h-[420px] lg:h-[470px] object-cover"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">

          {careers.map((career, index) => {
            const Icon = career.icon;

            return (
              <div
                key={index}
                className="
                  bg-[#132131]
                  border
                  border-[#26394A]
                  rounded-[24px]
                  px-8
                  pt-8
                  pb-8
                  min-h-[255px]
                  flex
                  flex-col
                  transition-all
                  duration-300
                  hover:border-[#4D8DFF]
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                {/* Icon */}
                <div className="mb-8">
                  <Icon
                    size={34}
                    strokeWidth={2}
                    className="text-[#D9F5FF]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-[24px] font-semibold leading-[1.3] mb-5">
                  {career.title}
                </h3>

                {/* Description */}
                <p className="text-[#8EA4B5] text-[15px] leading-7">
                  {career.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}