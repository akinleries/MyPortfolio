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
    angular,
    onhova,
    semicolon,
    onhovaShot,
    resturant,
    whatsapp,
    nikeSnickers,
    onhovaMobile
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
        title: "ReactJS Developer",
        icon: creator,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Angular Developer",
        icon: mobile,
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
        name: "Angular",
        icon: angular,
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
];

const experiences = [
    {
        title: "React.js & React-native Developer",
        company_name: "Onhova Limted",
        icon: onhova,
        iconBg: "#383E56",
        date: "Oct 2021 - present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Engineer(Trainee)",
        company_name: "Semicolon Africa",
        icon: semicolon,
        iconBg: "#383E56",
        date: "Jan 2021 - Jan 2022",
        points: [
            //"Work on web applications using React.js and other related technologies.",
            //"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            //"Implementing responsive design and ensuring cross-browser compatibility.",
            //"Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
   
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },

    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        name: "Create an online store",
        description:
            "Web-based platform that allows online vendors create a free e-commerce site on their moblie phones in one minute",
        tags: [
            {
                name: "reactJS",
                color: "blue-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "green-text-gradient",
            },
            {
                name: "Redux-Toolkit",
                color: "pink-text-gradient",
            },
        ],
        image: onhovaShot,
        source_code_link: "https://github.com/akinleries",
        link: "https://onhova.com/"
    },
    {
        name: "Create an online store",
        description:
            "Mobile application that allows online vendors create a free e-commerce store on their moblie phones",
        tags: [
            {
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "Expo",
                color: "green-text-gradient",
            },
            {
                name: "Redux-Toolkit",
                color: "pink-text-gradient",
            },
        ],
        image: onhovaMobile,
        source_code_link: "https://github.com/akinleries",
        link: "https://play.google.com/store/apps/details?id=ttcp.storeman.app"
    },
    {
        name: "Resturant",
        description:
            "A web based react application for a resturant landing page.",
        tags: [
            {
                name: "ReactJS",
                color: "blue-text-gradient",
            },
            {
                name: "css BEM",
                color: "green-text-gradient",
            },
            {
                name: "ChakraUI",
                color: "pink-text-gradient",
            },
        ],
        image: resturant,
        source_code_link: "https://github.com/akinleries/easylydia-resturant",
        link: "https://easylydia-resturant.netlify.app"
    },
    {
        name: "Whatsapp Clone",
        description:
            "Whatsapp clone that has virtually all the features and functionality of Whatsapp, used AWS-AMPLIFY for the backend",
        tags: [
            {
                name: "React-Native",
                color: "blue-text-gradient",
            },
            {
                name: "Aws-Amplify",
                color: "green-text-gradient",
            },
            {
                name: "Expo-cli",
                color: "pink-text-gradient",
            },
        ],
        image: whatsapp,
        source_code_link: "https://github.com/akinleries/whatsapp",
        link: ""
    },
    {
        name: "Nike Snikers E-commerce",
        description:
            "A moblie application for nike snikers e-commerce",
        tags: [
            {
                name: "React-Native",
                color: "blue-text-gradient",
            },
            {
                name: "Redux toolkit",
                color: "green-text-gradient",
            },
            {
                name: "Expo-cli",
                color: "pink-text-gradient",
            },
        ],
        image: nikeSnickers,
        source_code_link: "https://github.com/akinleries/Nike-E-commerce-App",
        link: ""
    },
];

export { services, technologies, experiences, testimonials, projects };