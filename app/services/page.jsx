"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description:
      "I build full-stack web applications using modern technologies like React, Node.js, .NET, and more, with secure deployment in cloud platforms like AWS and Azure.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "I create high-performance mobile applications using React Native, Flutter, or Native iOS, tailored for both iOS and Android, with a smooth user experience.",
    href: "",
  },
  {
    num: "03",
    title: "AI-Powered Solutions",
    description:
      "I develop AI-powered solutions including chatbots, recommendation engines, and predictive analytics, integrating machine learning models to enhance user experience.",
    href: "",
  },
  {
    num: "04",
    title: "DevOps & Cloud Automation",
    description:
      "I streamline deployment processes and infrastructure management using CI/CD tools, Docker, and Kubernetes, ensuring scalable and reliable cloud solutions.",
    href: "",
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.dev
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.dev>
      </div>
    </section>
  );
};

export default Services;
