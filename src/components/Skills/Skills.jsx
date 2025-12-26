import { CpuChipIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Express",
    "TailwindCSS", "Firebase", "MongoDB", "MySQL",
    "Java", "Selenium",
    "C/C++", "SQL", "PL/SQL", "Oracle SQL",
    "Oracle D2k", "D2k Forms", "D2k Reports",
    "Git/GitHub",
  ];

  return (
    <section id="skills" className="relative py-5">
      <div className="container px-5 mx-auto">
  
        <div className="text-center mb-14">
          <CpuChipIcon className="w-10 h-10 mx-auto text-slate-300 mb-3" />
          <h1 className="text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I’ve worked with while building web applications
            and automation solutions.
          </p>
        </div>

        {/* Skills */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group relative rounded-lg border border-white/10 
                         bg-white/5 backdrop-blur-md
                         hover:border-green-400/40
                         transition-all duration-300"
            >
              <div className="flex items-center gap-3 px-5 py-4">
                <CheckBadgeIcon className="w-5 h-5 text-green-400 
                                          opacity-80 group-hover:opacity-100" />
                <span className="text-white font-medium tracking-wide">
                  {skill}
                </span>
              </div>

              {/* subtle glow */}
              <div className="absolute inset-0 rounded-lg opacity-0 
                              group-hover:opacity-100 
                              shadow-[0_0_20px_rgba(74,222,128,0.15)]
                              transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
