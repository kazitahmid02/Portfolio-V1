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
    tesla,
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
      title: "Project Manager",
      icon: mobile,
    },
    {
      title: "QA Tester",
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
      title: "React.js Developer",
      company_name: "Freelance",
      icon: starbucks,
      iconBg: "#383E56",
      date: "July 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "IT Project Manager",
      company_name: "Texties",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2022 - Present",
      points: [
        "Leading and managing a diverse portfolio of IT projects, including website development, in-house computer systems, and other technology initiatives.",
        "Streamlining project workflows to ensure maximum efficiency.",
        "Responsible for navigating the complexities of IT operations with proficiency, overseeing all aspects of project planning, execution, and delivery.",
        "Producing branding assets that maintained a consistent visual identity across different platforms.",
        "Collaborating closely with cross-functional teams to coordinate project activities, foster collaboration, and ensure seamless project implementation.",
        "Communicating effectively with stakeholders at all levels, translating technical concepts into clear and concise language to facilitate understanding and alignment.",
        "Ensuring projects are delivered on time, within budget, and in accordance with quality standards, maintaining a relentless focus on excellence and continuous improvement.",
        
      ],
    },
    {
      title: "QA Engineer",
      company_name: "Saldo Apps",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Dec 2023",
      points: [
        "Tested current products and identifying deficiencies to provide timely and meaningful feeback",
        "Designed test cases in TestRail and provide test execution based on the analysis of business requirements and technical specifications",
        "Tested Mobile (iOS, Android) and Web (Windows, macOS) applications",
        "Performed smoke, functional, UI, and regression testing for a mobile app",
        "Utilized Chrome DevTools for Web testing, UI testing, discovering network errors, JavaScript errors, etc",
        "Executed tests and reported defects in Jira, following until resolved",
        "Collaborated with the development team to triage defects and findings",
      ],
    },
    
    {
      title: "QA Analyst",
      company_name: "Equities Lab",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "July 2023 - Sep 2023",
      points: [
        "Testing current products and identify deficiencies to provide timely and meaningful feedback.",
        "Designing test cases and provide test execution based on the analysis of business requirements and technical specifications.",
        "Testing native (Windows, macOS) applications.",
        "Performing smoke, functional, UI, and regression testing for a mobile app.",
        "Executing tests and report defects in Jira, following up until resolved.",
        "Collaborating with the development team to triage defects and findings, providing valuable insights for resolution.",
        "Attending weekly Scrum meetings regularly"
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as amazing as our services, but Kazi proved me wrong.",
      name: "Justin DiGiulio",
      designation: "CEO",
      company: "DiGiulio Group",
      image: "https://www.renthop.com/im/photos/account/2002433_nyc_5a75e813276b9.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kazi does.",
      name: "John Brian",
      designation: "Sales Lead",
      company: "Real New York",
      image: "https://media.licdn.com/dms/image/C4E03AQEFGY-jl0ga1Q/profile-displayphoto-shrink_100_100/0/1650928373974?e=1718841600&v=beta&t=Bi-XOd_om8RKQvRzpRiubcfRiff1sV6wHIJgvtCMask"
    },
    {
      testimonial:
        "After Kazi optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Shabab Mostafa",
      designation: "Manager",
      company: "NewYork-Presbyterian Hospital",
      image: "https://media.licdn.com/dms/image/C5603AQEV2UFo9SWMQA/profile-displayphoto-shrink_100_100/0/1652281183830?e=1718841600&v=beta&t=hFOmT6Ry_9jy8o5_mdPeAoM8vm_FB6vMmf9fn9fwmRA",
    },
  ];
  
  const projects = [
    {
      name: "Nexus Car Central",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers and manufacturers, providing a convenient and efficient solution for transportation needs.",
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
      source_code_link: "https://github.com/kazitahmid02/NexusCarCentral",
    },
    {
      name: "E-Commerce",
      description:
        "Full Stack E-Commerce App with an Admin Dashboard & CMS repository! This project is a comprehensive e-commerce solution built using Next.js, Stripe for payment processing, and various other technologies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "Next.js",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/kazitahmid02/e-commerce",
    },
    {
      name: "Texties",
      description:
        "Project showcasing a landing page for a wholesaling garments company. Texties is in the fashion sourcing industry, and this landing page highlights some of the key features of the platform",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://texties.net/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };