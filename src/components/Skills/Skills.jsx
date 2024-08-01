import { CpuChipIcon , CheckBadgeIcon } from "@heroicons/react/16/solid";

const Skills = () => {
    const kills = [
        "HTML",
        "CSS",
        "C/C++",
      
        "JavaScript",
        "React",
        "Node.js",
        "TailwindCSS",
        "Firebase",
        "MongoDB",
        "MySQL",
        "Express",
       
        "Git/GitHub",
        
      ];
    return (
        <section id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-10">
            <CpuChipIcon className="w-10 inline-block mb-4 text-white" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
              Skills &amp; Technologies
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-slate-400 mx-auto">
            Familiar with core programming concepts and popular languages. Hands-on experience from college projects in web development
             and basic database management. Quick learner, adaptable, with strong problem-solving skills and a passion for emerging technologies.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5  sm:mx-auto sm:mb-2 -mx-2">
            {kills.map((skill) => (
              <div key={skill} className="p-2 car2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Skills;