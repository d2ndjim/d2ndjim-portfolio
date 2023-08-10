"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a Software Developer from Lagos, Nigeria.{" "}
        <span className="font-medium">With a degree in Computer Science</span>,
        and over 3 years of experience,{" "}
        <span className="font-medium">
          I have a passion for building accessible and dynamic web applications
          that contribute to great user experiences.
        </span>
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Typescript, TailwindCSS, Redux, Ruby, Ruby on Rails,
          and PostgreSQL.
        </span>
        I am also familiar with Node.js and Prisma. I am always looking to learn
        new technologies. With the goal of creating special, niche corners of
        the web, I have been able to collaborate with talented developers from
        across Africa and Europe while building some unique projects.{" "}
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}
