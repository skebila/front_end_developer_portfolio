import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  upwork,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Flutter Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Flutter Developer & Co-founder",
    company_name: "Numio (Start-up)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2025 - Present",
    points: [
      "Lead the technical development and growth of Numio, overseeing architecture, platform implementation, and performance optimization.",
      "Build and maintain the core tech stack using Expo (React Native), Express, Firebase, Stripe, TypeScript, and JavaScript for seamless mobile and web experiences.",
      "Design and implement a scalable system, integrating secure payment processing (Stripe) and real-time order tracking.",
      "Manage cloud infrastructure, DevOps, and security measures to ensure platform reliability and scalability.",
      "Establish partnerships with licensed chefs, handling onboarding, compliance, and user acquisition strategies.",
      ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "March 2024 - Dec 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer (ASP.NET/React)",
    company_name: "Richards Wilcox Canada",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2023 - March 2024",
    points: [
      "Developed and maintained APIs to manage data from a large database containing client, order, discount, and payment information, resulting in a 30% increase in departmental productivity.",
      "Designed and implemented a seamless, responsive front-end interface for secure internal use, allowing efficient creation, editing, and management of clients and discounts.",
      "Led 5+ projects, overseeing their full development cycle, from requirements gathering to testing and deployment.",
      "Assisted in multiple development projects, collaborating with cross-functional teams to meet business objectives and technical requirements.",
      "Applied strong knowledge of AngularJS, ASP.NET, .NET/C#, SQL Server, and web technologies to ensure system functionality and reliability.",
    ],
  },
  {
    title: "Full Stack Web Developer (Freelance Contractor)",
    company_name: "Lumose Marketplace Inc.",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2022 - Feb 2023",
    points: [
      "Developed and maintained a web application using React, Node.js, and MongoDB, resulting in a 40% increase in user engagement and a 20% increase in user retention.",
      "Worked closely with clients in person and through calls to bring website requirements to fruition, ensuring high-quality, user-friendly, and responsive designs.",
      "Optimized the website for SEO, resulting in a 60% increase in organic search traffic and a 50% increase in user engagement.",
      "Developed an API that connected the web application with 3rd party services and enabled the exchange of data in real-time.",
      "Implemented an automated testing suite using Selenium and Jasmine that reduced manual testing time by 20%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/skebila",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/skebila",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/skebila",
  },
];

export { services, technologies, experiences, testimonials, projects };
