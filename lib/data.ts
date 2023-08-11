import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    title: "Software Engineer",
    location: "PAYSLICE",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Software Developer",
    location: "SOFTCOM LIMITED",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Technical Mentor (Volunteer)",
    location: "MICROVERSE",
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
    repo: "https://github.com/d2ndjim?tab=repositories",
    live: "https://www.kwiksell.com/",
    imageUrl: kwisellImg,
  },
  {
    title: "Ecommerce Store",
    description:
      "This is an Ecommerce store where users can view and order items of choice, with a fully functional shopping cart and checkout system.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Stripe",
      "Cloudinary",
    ],
    repo: "https://github.com/d2ndjim/ecommerce-store",
    live: "https://ecommerce-store-mu-jade.vercel.app/",
    imageUrl: storeImg,
  },
  {
    title: "Genie AI",
    description:
      "This is a full-stack AI SAAS application that uses OpenAI and Replicate to perform a host of AI generated actions",
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
    repo: "https://github.com/d2ndjim/ai-saas",
    live: "https://genie-ai-eight.vercel.app/",
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
    repo: "https://github.com/d2ndjim/airbnb",
    live: "https://rent-project-gold.vercel.app/",
    imageUrl: airbnbImg,
  },
  {
    title: "AES Service",
    description:
      "This is an application that helps users to make electrical engineering or repair appointments.",
    tags: ["React", "TailwindCSS", "Redux Toolkit", "EmailJS"],
    repo: "https://github.com/d2ndjim/aes-service",
    live: "https://aes-service.vercel.app/",
    imageUrl: aesImg,
  },
  {
    title: "Ecommerce Dahboard",
    description:
      "This is an Ecommerce Dashboard + CMS application that can be connected to multiple Ecommerce Store applications.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Prisma",
      "MySQL",
      "Clerk",
    ],
    repo: "https://github.com/d2ndjim/ecommerce-dashboard",
    live: "https://ecommerce-dashboard-bice.vercel.app/",
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
