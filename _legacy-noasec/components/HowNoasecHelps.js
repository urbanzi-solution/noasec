import {
  GraduationCap,
  MonitorPlay,
  BadgeCheck,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Industry-led Training",
    description:
      "Learn from experts currently working in the field.",
  },
  {
    icon: MonitorPlay,
    title: "Hands-on Learning",
    description:
      "Real-world labs and incident response simulations.",
  },
  {
    icon: BadgeCheck,
    title: "Career-directed Guidance",
    description:
      "Resume building and interview prep for security roles.",
  },
];

export default function HowNoasecHelps() {
  return (
    <section className="relative bg-[#0d1723] py-20 overflow-hidden">

      {/* Left Gradient Line */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-[#6d5cff] via-[#3b82f6] to-[#6d5cff]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Image */}
        <div className="overflow-hidden rounded-[26px] mb-12">
          <img
            src="/help.avif"
            alt="How Noasec Helps"
            className="w-full h-[230px] sm:h-[320px] md:h-[420px] lg:h-[470px] object-cover"
          />
        </div>

        {/* Heading */}
        <h2 className="text-[#8EE7FF] text-3xl md:text-4xl font-bold mb-6">
          How Noasec Helps
        </h2>

        {/* Description */}
        <p className="text-[#9EB1C1] text-lg leading-8 max-w-5xl mb-10">
          We bridge the gap between theory and practice. Our curriculum
          is designed by active industry professionals to ensure you
          learn the exact skills employers are hiring for today.
        </p>

        {/* Feature Cards */}
        <div className="space-y-5">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  flex
                  items-start
                  gap-5
                  bg-[#132131]
                  border
                  border-[#243647]
                  rounded-xl
                  px-6
                  py-5
                  transition-all
                  duration-300
                  hover:border-[#4d8dff]
                  hover:bg-[#16283c]
                "
              >
                <div className="flex-shrink-0 mt-1">
                  <Icon
                    size={24}
                    strokeWidth={2}
                    className="text-[#CFEFFF]"
                  />
                </div>

                <div>
                  <h3 className="text-white text-lg font-semibold mb-1">
                    {item.title}
                  </h3>

                  <p className="text-[#94A8B7] text-sm leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}