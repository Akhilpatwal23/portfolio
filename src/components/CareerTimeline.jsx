import { motion } from "framer-motion";
import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

const timeline = [
  {
    title: "Graduation",
    org: "Dronacharya Group of Institutions",
    period: "Academic Phase: 2020-2024",
    icon: AcademicCapIcon,
  },
  {
    title: "Software Trainee",
    org: "Eastern Software Solution",
    period: "6 Months", 
    icon: BriefcaseIcon,
    description: "Worked on Oracle D2K technologies, developing multiple forms and reports, solving POS-related issues, and contributing to production-ready applications."
  },
  {
    title: "Graduate Trainee",
    org: "Sopra Steria",
    period: "Role Progression & Skill Development",
    icon: BriefcaseIcon,
  },
  {
    title: "Engineer – Testing (Automation)",
    org: "Sopra Steria",
    period: "Current Role | Java & Selenium",
    icon: BriefcaseIcon,
    current: true,
  },
];

const CareerTimeline = () => {
  return (
    <section className="relative py-20">
      <div className="container px-5 mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-3">
            My Journey
          </h2>
          <p className="text-slate-400">
            From graduation to currently working as an Automation Test Engineer
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute left-5 top-0 h-full w-[2px] bg-white/10"
          />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const fromLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative flex items-start gap-6"
                >
                  {/* Node */}
                  <motion.div
                    className={`relative z-10 flex items-center justify-center 
                      w-10 h-10 rounded-full border
                      ${item.current
                        ? "bg-green-400/20 border-green-400"
                        : "bg-white/5 border-white/20"}`}
                    animate={
                      item.current
                        ? { scale: [1, 1.15, 1] }
                        : undefined
                    }
                    transition={
                      item.current
                        ? { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
                        : undefined
                    }
                  >
                    <Icon
                      className={`w-5 h-5
                        ${item.current ? "text-green-400" : "text-slate-300"}`}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={`rounded-lg px-6 py-4 w-full
                      bg-white/5 backdrop-blur-md border
                      ${item.current
                        ? "border-green-400/30 shadow-[0_0_20px_rgba(74,222,128,0.15)]"
                        : "border-white/10"}`}
                  >
                    <h3 className="text-white text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-slate-400">{item.org}</p>
                    <span className="text-sm text-slate-500">
                      {item.period}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CareerTimeline;
