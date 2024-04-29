"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a certificate in{" "}
        <span className="font-medium">Web Application Development</span>, I
        worked for three years at Do What Works, an e-commerce consultancy firm.
        As the sole developer for Do What Works I handled all development
        request from multiple clients. Customizing the store front, increasing
        site speed, integrating third-party apps, improving SEO, maintaing an
        organized product and customer database were all part of my day to day.{" "}
      </p>
      <p className="mb-3">
        After Do What Works, I decided to delve deeper into my passion for
        programming. This led me to enroll in a comprehensive coding bootcamp
        where I immersed myself in the world of{" "}
        <span className="font-medium">full-stack web development</span>. General
        Assembly's immersive software engineering bootcamp has given me the
        skills to build any application, from the front end to the back end. I
        learned a solid foundation in HTML, CSS, JavaScript, Mongoose, Mongo,
        Python, Django, PostgreSQL, and React. I found myself gravitating
        torwards the MERN stack and plan to continue my education in that
        direction. TypeScript is my next objective!
      </p>
      <p className="mb-3">
        <span className="font-medium">Beyond the code</span>, I'm a devoted
        family person, blessed with a loving wife and three amazing adopted boys
        who bring joy to every moment.{" "}
        <span className="font-medium">When I'm not crafting sites</span>, you'll
        likely find me immersed in the world of video games, exploring the great
        outdoors through hiking and camping adventures, or spending quality time
        with our furry friends—dogs hold a special place in my heart.
      </p>
    </motion.section>
  );
}
