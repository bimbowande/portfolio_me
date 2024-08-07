
 import { ManifestType, pageLink } from "./interface";



export const Manifest : ManifestType = {

    personalInfo:{
        name:'Abimbola',
        surname: 'Oluwagbuyi',
        summary:"A seasoned Frontend Engineer with over 5 years of experience, I am proficient in ReactJs, Angular, GraphQL, and SASS. With a passion for creating exceptional user experiences, I thrive in collaborative environments where I can apply my expertise in building dynamic and responsive interfaces. Whether working on complex web applications or implementing elegant UI designs, I am committed to delivering high-quality solutions that exceed expectations",
        title:'Senior Software Engineer',
        resumeSummary:'With eight years of experience, I am a dedicated Software Engineer specializing in NextJs, React, Angular, and VueJs. I have a deep understanding of key concepts such as components, services, modules, and routing. My career has been marked by a strong reputation for designing and developing sophisticated web and mobile applications and solutions, optimizing code efficiency, and ensuring top performance. I am well-versed in cutting-edge technologies and development tools, staying at the forefront of industry advancements. Known for my problem-solving skills and attention to detail, I consistently achieve outstanding results. Additionally, my collaborative nature allows me to seamlessly integrate with cross-functional teams, working harmoniously with designers and backend developers to create cohesive and visually compelling user interfaces.'
    },

    
    projects:[
        {
            name:'Weather Wizard',
            description:'Monitor the weather of most Capital Cities in the world.',
            skills:['react-query', 'NodeJs','React','TypeScript','github'],
            link:'https://bimbowande.github.io/weather_wizard/'
        },
        {
            name:'GIGX',
            description:'The secure and simple way to send and receive money across borders.',
            skills:['NextJs', 'React','TypeScript','NodeJs','Redux','GraphQl'],
            link:'https://gigxpad.com'

        },
        {
            name:'PAKT',
            description:'Creating a collaborative platform for community engagements.',
            skills:['NextJs', 'React','TypeScript','NodeJs','Redux','GraphQl','Tailwind'],
            link:'https://pakt.world'

        },
        {
            name:'GIGO',
            description:"Nigeria's fastest delivery app.",
            skills:['NextJs', 'React','TypeScript','NodeJs','Redux','GraphQl','Tailwind','Angular'],
            link:'https://giglogistics.com'

        },
        {
            name:'Memmour',
            description:"Shared gallery for event's pictures.",
            skills:['PHP', 'React','TypeScript','MYSQL','Jquery','Javascript','Tailwind','Angular'],
            link:''

        },
        {
            name:'Now.ng',
            description:'Visibility for brands ',
            skills:['PHP', 'React','TypeScript','MYSQL','Jquery','Javascript','Tailwind','Angular'],
            link:'https://now.ng/'
        }
    ],

    frameworks:[
        'React',
        'Angular',
        'VueJs'
    ],
    coreTechnologies: [
        'TypeScript',
        'JavaScript',
        'CSS',
        'SASS',
        'HTML',
        'Python',
        'SQL',
        'MongoDB',
        'GraphQL',
        'PostgresQL'
    ],

    otherTechnologies: [
        'GIT',
        'Enzyme',
        'React Storybook',
        'Bootstrap',
        'TailwindCSS',
        'GitHub'
    ],

    experiences:[
        {
            company:'Boohoo',
            title:' Senior Frontend Engineer',
            startDate:'Aug 2023 ',
            endDate:'Feb 2024',
            accomplishment:'Optimizing the performance of the web platform by improving page load times and minimizing the number of HTTP requests. Designed a modern, responsive, and visually appealing user interface that provides an intuitive and easy-to-use experience for users'
        }
        ,
        {
            company:'Pakt',
            title:' Senior Frontend Engineer',
            startDate:'Mar 2022 ',
            endDate:'Dec 2022',
            accomplishment:'Optimizing the performance of the web platform by improving page load times and minimizing the number of HTTP requests. Designed a modern, responsive, and visually appealing user interface that provides an intuitive and easy-to-use experience for users'
        },
        {
            company:'GIGX',
            title:' Lead Frontend Engineer',
            startDate:'June 2021',
            endDate:'Mar 2022',
            accomplishment:'Integrated the web application with blockchain APIs, such as Ethereum or Bitcoin, enables users to interact with the blockchain intuitively and user-friendly , Improved Data Analytics and visualization dashboard for stakeholders to measure progress and growth and company turnover'
        },
        {
            company:'GIGL',
            title:' Software Engineer',
            startDate:'Feb 2019',
            endDate:'Jun 2021',
            accomplishment:' Participated in optimizing applications to ensure timely and high-quality delivery of functionality for GIG Logistics eCommerce solutions, which increased user engagement by 25%. Enhanced front-end performance through image optimization and clean coding practices, accelerating load times'
        },
        {
            company:'Planet Nest',
            title:' Full-stack Engineer',
            startDate:'May 2017',
            endDate:'Oct 2019 ',
            accomplishment:'I excellently translated UI/UX design wireframes to actual code that will produce visual elements of the application, Executed and introduced the use of version control tools like GitLab and GitHub, Functioned as a Facilitator in a Bootcamp with 100+ undergraduates in attendance, Ensured that security and quality assurance best practices are followed throughout the entire software development cycle'
        }

    ],

    resume:[],

    socialLinks:[
        {
            name:'twitter',
            link:'https://twitter.com/bimbowande',
            class:'fa-twitter '
        },
        {   
            name:'github',
            link:'https://github.com/bimbowande/',
            class:'fa-github '
        },
        {
            name:'Linkedin',
            link:"https://www.linkedin.com/in/bimbowande/",
            class:'fa-linkedin-in '
        },
        {
            name:'Medium',
            link:'https://medium.com/@bimbowande',
            class:'fa-medium' 
        }
    ]
        
}




export const pageLinks : pageLink[] = [
    {
        linkName:'home',
        linkAddress:''
    },
    {
        linkName:'projects',
        linkAddress:'projects'
    },
    {
        linkName:'resume',
        linkAddress:'resume'
    },
    {
        linkName:'Contact Me',
        linkAddress:'contact'
    }

]