
 import { ManifestType, pageLink } from "./interface";


export const Manifest : ManifestType = {

    personalInfo:{
        name:'Abimbola',
        surname: 'Oluwagbuyi',
        summary:"Software Engineer with a demonstrated history of working in complex teams and on large web development projects. Skilled in software requirement analysis, design, development, deployment, and testing. I use ReactJs, TypeScript ,Angular, MongoDB and GraphQL",
        title:'Frontend Engineer'
    },
    
    projects:[
        {
            name:'AltoStream Media'
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
        'GraphQL'
    ],

    otherTechnologies: [
        'GIT',
        'Enzyme',
        'React Storybook',
        'Bootstrap',
        'TailwindCSS'
    ],

    experiences:[
        {
            company:'AltoStream',
            title:' Lead Frontend Engineer',
            startDate:'Mar 2022 ',
            endDate:'Present',
            accomplishment:'The striped hyena (Hyaena hyaena) is a species of hyena native to North and East Africa, the Middle East, the Caucasus, Central Asia and the Indian subcontinent. It is listed by the IUCN as near-threatened, as the global population is estimated to be under 10,000 mature individuals which continues to experience deliberate and incidental persecution along with a decrease in its'
        },
        {
            company:'GIGX',
            title:' Lead Frontend Engineer',
            startDate:'June 2021',
            endDate:'Mar 2022',
            accomplishment:'The striped hyena (Hyaena hyaena) is a species of hyena native to North and East Africa, the Middle East, the Caucasus, Central Asia and the Indian subcontinent. It is listed by the IUCN as near-threatened, as the global population is estimated to be under 10,000 mature individuals which continues to experience deliberate and incidental persecution along with a decrease in its'
        },
        {
            company:'GIGL',
            title:' Software Engineer',
            startDate:'Feb 2019',
            endDate:'Jun 2021',
            accomplishment:'The striped hyena (Hyaena hyaena) is a species of hyena native to North and East Africa, the Middle East, the Caucasus, Central Asia and the Indian subcontinent. It is listed by the IUCN as near-threatened, as the global population is estimated to be under 10,000 mature individuals which continues to experience deliberate and incidental persecution along with a decrease in its'
        },
        {
            company:'Planet Nest',
            title:' Full-stack Engineer',
            startDate:'May 2017',
            endDate:'Oct 2019 ',
            accomplishment:'The striped hyena (Hyaena hyaena) is a species of hyena native to North and East Africa, the Middle East, the Caucasus, Central Asia and the Indian subcontinent. It is listed by the IUCN as near-threatened, as the global population is estimated to be under 10,000 mature individuals which continues to experience deliberate and incidental persecution along with a decrease in its'
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