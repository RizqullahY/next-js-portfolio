"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Portfolio Website",
    description: "A responsive portfolio to showcase personal projects.",
    stack: [{ name: "React" }, { name: "TailwindCSS" }],
    image: "/assets/work/thumb1.png",
    live: "https://portfolio-example.com",
    github: "https://github.com/user/portfolio",
  },
  {
    num: "02",
    category: "Backend",
    title: "Task Manager API",
    description: "A REST API for task management with JWT authentication.",
    stack: [{ name: "Node.js" }, { name: "Express" }, { name: "MongoDB" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/user/task-api",
  },
  {
    num: "03",
    category: "Fullstack",
    title: "E-commerce Platform",
    description:
      "E-commerce website with admin dashboard and user authentication.",
    stack: [{ name: "Next.js" }, { name: "PostgreSQL" }],
    image: "/assets/work/thumb1.png",
    live: "https://ecommerce.com",
    github: "https://github.com/user/ecommerce",
  },
  {
    num: "04",
    category: "Mobile",
    title: "Weather App",
    description: "A mobile weather application with real-time API integration.",
    stack: [{ name: "React Native" }, { name: "Firebase" }],
    image: "/assets/work/thumb1.png",
    live: "https://play.google.com/weather-app",
    github: "https://github.com/user/weather-app",
  },
  {
    num: "05",
    category: "Frontend",
    title: "Landing Page",
    description: "Landing page for a SaaS company with interactive sections.",
    stack: [{ name: "Vue.js" }, { name: "SCSS" }],
    image: "/assets/work/thumb1.png",
    live: "https://saas-landing.com",
    github: "",
  },
  {
    num: "06",
    category: "AI/ML",
    title: "Face Recognition",
    description: "An AI model to recognize faces in images.",
    stack: [{ name: "Python" }, { name: "TensorFlow" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/user/face-recognition",
  },
  {
    num: "07",
    category: "DevOps",
    title: "CI/CD Pipeline",
    description: "Automated CI/CD pipeline for deploying Node.js apps.",
    stack: [{ name: "Docker" }, { name: "Kubernetes" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/user/cicd-pipeline",
  },
  {
    num: "08",
    category: "Frontend",
    title: "Admin Dashboard",
    description: "Admin dashboard to manage users and products.",
    stack: [{ name: "Angular" }, { name: "TailwindCSS" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/user/admin-dashboard",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    // get current slide
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent">
                {project.num}
              </div>

              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} Project
              </h2>

              {/* project description */}
              <p className="text-white/60">{project.description}</p>

              {/* stack */}
              <ul className="flex gap-4 ">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma*/}
                      {item !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full  xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={project.title}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider button */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
