"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  Fa,
  FaAws,
} from "react-icons/fa";
import {
  DiPostgresql,
  DiMongodb,
  DiDotnet,
  DiDjango,
  DiDocker,
  DiJira,
} from "react-icons/di";
import { SiTailwindcss, SiNextdotjs, SiMicrosoftazure } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const about = {
  title: "About Me",
  description:
    "I am a full-stack web developer with a passion for building high-quality web applications that provide value to users. I specialize in creating modern, responsive web applications using React, Django, Node.js, and .NET, with secure deployment in cloud platforms like AWS and Azure. I have experience working with a variety of databases including PostgreSQL and MongoDB, and I am proficient in DevOps tools like Docker and Kubernetes. I am also skilled in project management tools like Jira, and I am always eager to learn new technologies to improve my skills and deliver the best solutions.",
  info: [
    { fieldName: "Name", value: "Aaradhanah Appalo Eleven" },
    { fieldName: "Email", value: "aaradhanaha@gmail.com" },
    { fieldName: "Phone", value: "+61 0434047716" },
    { fieldName: "Location", value: "Brisbane, QLD" },
    { fieldName: "Languages", value: "English, Hindi, Tamil" },
  ],
};

const experience = {
  icon: "/profile.png",
  title: "My Experience",
  description:
    "I have worked with a variety of companies in different roles, gaining valuable experience in web development, data analysis, and system engineering. Here are some of the companies I have worked with:",
  items: [
    {
      company: "Australian Mobile Food Vendors Group",
      position: "Web Developer and Data Analyst",
      duration: "Nov 2022 - Jun 2024",
    },
    {
      company: "Infosys Limited",
      position: "System Engineer",
      duration: "Aug 2021 - Jun 2022",
    },
    {
      company: "Infosys Limited",
      position: "System Engineer Trainee",
      duration: "Mar 2021 - Aug 2021",
    },
  ],
};

const education = {
  icon: "/profile.png",
  title: "My Education",
  description:
    "I have a strong educational background in information technology and engineering, with a focus on OOP, Java, .NET, ML, DL, AI, AWS. Here are some of the degrees I have completed:",
  items: [
    {
      institution: "RMIT University",
      degree: "Master of Information Technology",
      duration: "Jul 2022 - Jul 2024",
    },
    {
      institution: "Anna University",
      degree: "Bachelor of Engineering in EIE",
      duration: "Aug 2016 - May 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have a wide range of skills in web development, data analysis, and system engineering. Here are some of the technologies and tools I am proficient in:",
  items: [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3 /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <FaNodeJs /> },
    { name: ".NET", icon: <DiDotnet /> },
    { name: "Django", icon: <DiDjango /> },
    { name: "PostgreSQL", icon: <DiPostgresql /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "Docker", icon: <DiDocker /> },
    { name: "Kubernetes", icon: <DiDocker /> },
    { name: "AWS", icon: <FaAws /> },
    { name: "Azure", icon: <SiMicrosoftazure /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Jira", icon: <DiJira /> },
  ],
};

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
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="capitalize">
                              <p>{skill.name}</p>
                            </TooltipContent>{" "}
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div>
                <h3>{about.title}</h3>
                <p>{about.description}</p>
                <ul>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.value}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
