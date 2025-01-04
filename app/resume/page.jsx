"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About Me",
  description:
    "I am a passionate software engineer with over 5 years of experience in full-stack development. I enjoy solving complex problems and building scalable applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "John Doe",
    },
    {
      fieldName: "Email",
      fieldValue: "john.doe@example.com",
    },
    {
      fieldName: "Location",
      fieldValue: "New York, USA",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 (555) 123-4567",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Professional Experience",
  description:
    "Over the years, I have worked with several leading tech companies and contributed to various successful projects.",
  items: [
    {
      company: "Google",
      position: "Senior Software Engineer",
      duration: "2021 - Present",
    },
    {
      company: "Facebook",
      position: "Frontend Developer",
      duration: "2019 - 2021",
    },
    {
      company: "Amazon",
      position: "Backend Developer",
      duration: "2017 - 2019",
    },
    {
      company: "Netflix",
      position: "UI/UX Designer",
      duration: "2015 - 2017",
    },
    {
      company: "Spotify",
      position: "Intern - Web Development",
      duration: "2014 - 2015",
    },
    {
      company: "Freelance",
      position: "Full Stack Developer",
      duration: "2013 - 2014",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "Education",
  description:
    "I have pursued education from prestigious institutions that have helped me build a strong foundation in computer science.",
  items: [
    {
      intitution: "Massachusetts Institute of Technology (MIT)",
      degree: "Master of Computer Science",
      duration: "2019 - 2021",
    },
    {
      intitution: "Stanford University",
      degree: "Bachelor of Computer Science",
      duration: "2015 - 2019",
    },
    {
      intitution: "XYZ High School",
      degree: "High School Diploma",
      duration: "2011 - 2015",
    },
  ],
};

// skill data
const skills = {
  title: "Skill",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae illo voluptatem unde",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaHtml5 />,
      name: "Html",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
  ],
};

import { motion } from "framer-motion";
const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          className="flex flex-col xl:flex-row gap-[60px]"
          defaultValue="experience"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 group">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2323] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#2323] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.intitution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={75}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-white/60 capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center">
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
