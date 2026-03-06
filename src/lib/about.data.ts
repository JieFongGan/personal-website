import type { AboutType } from "@lib/types";
import {
  siGithub,
  siGmail,
} from "simple-icons";

export const aboutData: AboutType = {
  firstName: "Gan",
  lastName: "Jie Fong",
  title: "Web Developer",
  aliases: [
    "Gan Jie Fong",
    "GanJieFong",
    "Jie Fong Gan",
    "jiefonggan",
  ],
  location: {
    city: "Johor Bahru",
    region: "Johor",
    country: "Malaysia",
    countryCode: "MY",
  },
  summary: "Building things on the web",
  bio: `My fascination with software began at the intersection of a PC and a PlayStation—wondering how complex systems were built, layered, and brought to life. That curiosity eventually led me through TARUMT and into the world of software development.

I built this site to serve as my personal headquarters. It is a dedicated space to bridge the gap between conceptual ideas and working software. Beyond just a portfolio, it exists to document my technical evolution and to act as a permanent record of the logic, tools, and frameworks I master along the way.`,
  social: [
    {
      name: "GitHub",
      icon: siGithub.path,
      style: "text-black dark:text-white",
      link: "https://github.com/jiefonggan",
    },
    {
      name: "LinkedIn",
      // microslop doesn't allow simple-icons to include their icons, so include a the path data directly here
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      style: "text-blue-700 hover:text-blue-800",
      link: "https://www.linkedin.com/in/ganjiefong",
    },
    {
      name: "Email",
      icon: siGmail.path,
      style: "text-blue-600 hover:text-blue-700",
      link: "mailto:jiefonggan@outlook.com",
    },
  ],
};
