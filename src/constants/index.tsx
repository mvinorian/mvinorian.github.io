export const navLinks = [
  {
    id: "home",
    title: "Home",
    link: "/",
  },
  {
    id: "projects",
    title: "Projects",
    link: "/projects",
  },
  {
    id: "experiences",
    title: "Experiences",
    link: "/experiences",
  },
  {
    id: "about",
    title: "About",
    link: "/about",
  },
];

export const projects = [
  {
    id: "project-gpt3",
    image: "/image/project-gpt3.png",
    title: "GPT-3",
    techs: ["/icons/react.svg", "/icons/css.svg"],
    content:
      "Static website created using react native as my training project.",
    repository: "https://github.com/mvinorian/gpt3",
    live: "https://mvinorian.github.io/gpt3/",
  },
  {
    id: "project-hoobank",
    image: "/image/project-hoobank.png",
    title: "HooBank",
    techs: ["/icons/react.svg", "/icons/tailwind.svg"],
    content:
      "Static website created using react and tailwindcss as my training project.",
    repository: "https://github.com/mvinorian/hoobank",
    live: "https://mvinorian.github.io/hoobank/",
  },
  {
    id: "project-hellscape",
    image: "/image/project-hellscape.png",
    title: "Hellscape",
    techs: ["/icons/java.svg"],
    content: "Pixel art styled action game created using java.",
    repository: "https://github.com/mvinorian/hellscape",
    live: null,
  },
];

export const experiences = [
  {
    id: "experience-bayucaraka",
    image: "/image/experience-bayucaraka.png",
    title: "Programming Staff Bayucaraka",
    date: "March 2022 - Present",
    content: "Responsible for setting up UAV control and object detection.",
    techs: ["/icons/python.svg", "/icons/raspi.svg", "/icons/opencv.svg"],
  },
  {
    id: "experience-schematics",
    image: "/image/experience-schematics.png",
    title: "Scientific Staff Schematics NPC",
    date: "June 2022 - December 2022",
    content:
      "Get a role as problem setter. Responsible for setting up competitive programming problem.",
    techs: ["/icons/cpp.svg"],
  },
  {
    id: "experience-lbe-ajk",
    image: "/image/experience-lbe-ajk.png",
    title: "LBE AJK Informatics ITS Participant",
    date: "October 3 - 23, 2022",
    content: "Learn to deploy laravel app using linux and nginx.",
    techs: ["/icons/ubuntu.svg", "/icons/nginx.svg"],
  },
];
