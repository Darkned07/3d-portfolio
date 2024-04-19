import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  react,
  redux,
  sass,
  snapgram,
  tailwindcss,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },

  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Darkned07",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/muhammadyusufmadaminov/",
  },
];

export const projects = [
  {
    iconUrl: car,
    theme: "btn-back-red",
    name: "Github users search",
    description:
      "githubdagi user nomini yozsangiz o;sha user xaqidagi malumotlarni olib keladi.",
    link: "https://github.com/Darkned07/github-users-search",
  },
  {
    iconUrl: estate,
    theme: "btn-back-red",
    name: "age calculator",
    description: "yoshingizni hisoblab beradi.",
    link: "https://github.com/Darkned07/age-calculator",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-red",
    name: "chicken recipies",
    description:
      "chisken recipies saytida ovqatlar ro'yxatini korishingiz mumkun va qo'shishingiz mumkun.",
    link: "https://github.com/Darkned07/imtihon6",
  },
];
