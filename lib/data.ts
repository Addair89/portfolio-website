import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import WholeDealImage from "@/public/wholedealimage.png";
import BattleShipImage from "@/public/BattleShip.png";
import techTutorImage from "@/public/QuizPort.png";

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
    title: "Graduated Certificate Program",
    location: "Colorado State University",
    description:
      "I graduated after 3 months of studying. This began my journey into programming. Learning HTML, CSS, JS, Python, and PHP.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "San Diego, CA",
    description:
      "Sole developer for 3 years at an e-commerce consulting company, specializing primarily in Shopify development while also working with platforms like BigCommerce and HubSpot. Responsible for all development tasks for multiple clients; front end, back end, SEO, speed, and applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Full Stack Developer",
    location: "Tucson, AZ",
    description:
      "Took time to care for my family while simultainously improving my skills and learning through GA's intensive 12 week software engineering bootcamp.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "WholeDeal",
    description:
      "WholeDeal is a web platform that connects wholesale buyers with local sellers, streamlining the ordering and delivery process. Buyers can browse sellers based on location, view available products, and place orders, while sellers manage inventory, confirm orders, and track deliveries.",
    tags: ["React", " Node.js", "PostgreSQL", "Render", "Tailwind CSS", "Neon"],
    imageUrl: WholeDealImage,
    liveLink: "https://whole-deal.vercel.app/",
    gitHubLink: "https://github.com/Addair89/whole-deal",
  },
  {
    title: "BattleShip",
    description:
      "The Classic Battleship game is implemented with JS, CSS, and HTML. Players can place ships, target computer ships, and hopefully kill the evil A.I.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: BattleShipImage,
    liveLink: "https://addair89.github.io/Battleship/",
    gitHubLink: "https://github.com/Addair89/Battleship",
  },
  {
    title: "{techTutor}",
    description:
      "A custom quiz and flash-card app that allows users to create, edit, and delete quizzes and flash-cards. Users can also take quizzes and view their scores. Built with React, Tailwind, and MongoDB.",
    tags: ["React", "Tailwind", "MongoDB", "Express", "Node.js"],
    imageUrl: techTutorImage,
    liveLink: "https://techtutor-3f12bdf80413.herokuapp.com/",
    gitHubLink: "https://github.com/Addair89/techTutor-v2",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
] as const;
