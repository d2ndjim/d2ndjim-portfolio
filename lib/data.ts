import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import kwisellImg from "@/public/kwiksell.png";
// import storeImg from "@/public/ecomm-store.png";
import refineImg from "@/public/refine-dashboard.png";
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
      "As a software emgineer at Payslice, I Collaborate closely with the admin team to identify software needs and translate them into functional requirements.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Software Developer",
    location: "SOFTCOM LIMITED",
    description:
      "At Softcom, I Played a key role in rebuilding the administrative system, streamlining customer and staff management processes on the Sterling Bank app, a core banking system using React, NextJs, Redux toolkit and TailwindCSS on the server side.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Technical Mentor (Volunteer)",
    location: "MICROVERSE",
    description:
      "As a technical mentor at Microverse, I help developers by providing technical support and propose improvements to code organization, quality and overall performance through code reviews.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  // {
  //   title: "Kwiksell",
  //   description:
  //     "Kwiksell helps retail businesses run and scale with a powerful point of sale, inventory, payment, online store, customer, and team management solutions",
  //   tags: ["React", "Next.js", "TypeScript", "ReduxToolkit", "TailwindCSS"],
  //   repo: "https://github.com/d2ndjim?tab=repositories",
  //   live: "https://www.kwiksell.com/",
  //   imageUrl: kwisellImg,
  // },
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
    title: "Refine Dashboard",
    description: "A fully functional dashboard application built with Refine JS.",
    tags: ["React", "Refine JS", "TypeScript", "GraphQL", "TailwindCSS"],
    repo: "https://github.com/d2ndjim/dirty-numbers-punch",
    live: "https://dirty-numbers-punch.vercel.app/",
    imageUrl: refineImg,
  },
  // {
  //   title: "Ecommerce Store",
  //   description:
  //     "This is an Ecommerce store where users can view and order items of choice, with a fully functional shopping cart and checkout system.",
  //   tags: [
  //     "React",
  //     "Next.js",
  //     "TypeScript",
  //     "TailwindCSS",
  //     "Stripe",
  //     "Cloudinary",
  //   ],
  //   repo: "https://github.com/d2ndjim/ecommerce-store",
  //   live: "https://ecommerce-store-mu-jade.vercel.app/",
  //   imageUrl: storeImg,
  // },
  {
    title: "AES Service",
    description:
      "This is an application that helps users to make electrical engineering or repair appointments.",
    tags: ["React", "TailwindCSS", "Redux Toolkit", "EmailJS"],
    repo: "https://github.com/d2ndjim/aes-service",
    live: "https://aes-service.vercel.app/",
    imageUrl: aesImg,
  },
  // {
  //   title: "Ecommerce Dahboard",
  //   description:
  //     "This is an Ecommerce Dashboard + CMS application that can be connected to multiple Ecommerce Store applications.",
  //   tags: [
  //     "React",
  //     "Next.js",
  //     "TypeScript",
  //     "TailwindCSS",
  //     "Prisma",
  //     "MySQL",
  //     "Clerk",
  //   ],
  //   repo: "https://github.com/d2ndjim/ecommerce-dashboard",
  //   live: "https://ecommerce-dashboard-bice.vercel.app/",
  //   imageUrl: dashboardImg,
  // },
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
  "Material UI",
  "Prisma",
  "MongoDB",
  "Redux Toolkit",
  "PostgreSQL",
  "Ruby",
  "Ruby on Rails",
  "Framer Motion",
  "Jest",
  "Rspec",
] as const;
