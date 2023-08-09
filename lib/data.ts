import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import kwisellImg from "@/public/kwiksell.png";
import storeImg from "@/public/ecomm-store.png";
import genieImg from "@/public/genie.png";
import airbnbImg from "@/public/airbnb-clone.png";
import aesImg from "@/public/aes.png";
import dashboardImg from "@/public/dashboard.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Kwiksell",
    description:
      "Kwiksell is digital marketplace helps to connect business owners and consumers.",
    tags: ["React", "Next.js", "TypeScript", "ReduxToolkit", "TailwindCSS"],
    imageUrl: kwisellImg,
  },
  {
    title: "Ecommerce Store",
    description:
      "This is an Ecommerce store where users can view and order items of choice. It has a fully functional shopping cart and checkout system.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Stripe",
      "Cloudinary",
    ],
    imageUrl: storeImg,
  },
  {
    title: "Genie AI",
    description:
      "This is a full-stack AI SAAS application. The application allows a user to use AI to do a host of activities such as a chatbot, Image generation for design, Video generation, and Music generation.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "MySQL",
      "TailwindCSS",
      "OpenAI",
      "Clerk",
      "Stripe",
      "Prisma",
      "Crisp",
    ],
    imageUrl: genieImg,
  },
  {
    title: "Airbnb NextJs",
    description:
      "An Imitation of the Airbnb website built using the new NextJS 13 app router, Typescript, TailwindCSS, MongoDB and Prisma.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "TailwindCSS",
      "NextAuth",
      "Prisma",
    ],
    imageUrl: airbnbImg,
  },
  {
    title: "AES Service",
    description:
      "This is an application that helps users to make electrical engineering or repair appointments.",
    tags: ["React", "TailwindCSS", "Redu x Toolkit", "EmailJS"],
    imageUrl: aesImg,
  },
  {
    title: "Ecommerce Dahboard",
    description:
      "This is an Ecommerce Dashboard + CMS application that can be connected to multiple Ecommerce Store applications.",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS", "Prisma", "MySQL", "Clerk"],
    imageUrl: dashboardImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Prisma",
  "MongoDB",
  "Redux Toolkit",
  "PostgreSQL",
  "Ruby",
  "Ruby on Rails",
  "Framer Motion",
] as const;
