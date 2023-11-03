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
  flowerstore,
  highpark,
  login,
  metaverse,
  ramesushi,
  responsive,
  art1,
  art2,
  art3,
  art4,
  art5,
  art6,
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
    title: "Graphic Designer",
    icon: mobile,
  },
  {
    title: "Artist/Creator",
    icon: backend,
  },
  {
    title: "Aspiring Full Stack Dev",
    icon: creator,
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
    title: "Webmaster Grade 6-8",
    company_name: "Holy Rosary CSS | Hobbyist",
    icon: starbucks,
    iconBg: "#383E56",
    date: "1997-1999",
    points: [
      "Started learning HTML code to build websites",
      "Practiced building webpages with free hosting sites such as Geocities for artist fan pages and favourite tv shows",
      "Started learning graphic design to edit pictures and layout for the sites",
      "Built an online yearbook for my grade 8 class for graduation",
    ],
  },
  {
    title: "Graphic and Web Design",
    company_name: "Marshall MccLuhan | Hobbyist",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2000-2004",
    points: [
      "Learned more about graphic design and technology at highschool",
      "Created projects for digital and print for art classes",
      "Maintained an Asian Avenue website where I learned more HTML coding ",
      
    ],
  },
  {
    title: "Advertising Technology Student",
    company_name: "Int'l Academy of Design and Technology",
    icon: shopify,
    iconBg: "#383E56",
    date: "2005 - 2007",
    points: [
      "Honed skills in graphic design and web design",
      "Focused on creating and executing adverts for print and web",
      "Learned marketing for effective communication through ads",
      "Learned colour theory and how colour affects human response ",
    ],
  },
  {
    title: "Aspiring Full stack Developer",
    company_name: "Freelancer",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Learning different frameworks such as React, Node.js and Three.js",
      "Learning more about Tailwind CSS, Next13 and Vite to optimize websites and web apps",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Continuously creating different types of projects using HTML, CSS and Javascript",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sunrise",
    designation: "CFO",
    company: "Acme Co",
    image: art1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Blossom",
    designation: "COO",
    company: "DEF Corp",
    image: art2,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Neighbour",
    designation: "CTO",
    company: "456 Enterprises",
    image: art3,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "In the jungle",
    designation: "CTO",
    company: "456 Enterprises",
    image: art4,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Ancient Sculpture",
    designation: "CTO",
    company: "456 Enterprises",
    image: art5,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Purple Rain",
    designation: "CTO",
    company: "456 Enterprises",
    image: art6,
  },
 
];

const projects = [
  {
    name: "Flower Store",
    description:
      "Web-based e-commerce storefront of a flower shop. Sections includes latest products, review and contact section. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
     
    ],
    image: flowerstore,
    source_code_link: "https://katesgo.github.io/flowerstore/",
  },
  {
    name: "Green Tara",
    description:
      "Responsive landing page using CSS and javascript to add motion on different elements of the page. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: responsive,
    source_code_link: "https://katesgo.github.io/responsive/",
  },
  {
    name: "High Park",
    description:
      "A landing page of a photographer's series on HighPark, uncluding resposive elements and highlighting a beautifully shot video of a yellow bird.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
   
    ],
    image: highpark,
    source_code_link: "https://katesgo.github.io/highpark/",
  },
  {
    name: "Login Page",
    description:
      "An example of a login page with moving elements using CSS and a beautifully designed transparent effect giving a dreamy feel.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
     
    ],
    image: login,
    source_code_link: "https://katesgo.github.io/login/",
  },
  {
    name: "Metaversus",
    description:
      "A modern website about the metaverse utilizing tailwind and making most elements move while scrolling down. ",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://katesgo.github.io/meta/",
  },
  {
    name: "Ramesushi",
    description:
      "A sushi restaurant online ecommerce website with lots of motion effects while scrolling down",
    tags: [
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Vite",
        color: "pink-text-gradient",
      },
    ],
    image: ramesushi,
    source_code_link: "https://katesgo.github.io/ramesushi/",
  },
];

export { services, technologies, experiences, testimonials, projects };
