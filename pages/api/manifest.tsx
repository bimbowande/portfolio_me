
 import { ManifestType, pageLink } from "./interface";


export const Manifest : ManifestType = {

    personalInfo:{
        name:'Abimbola',
        summary:"Software Engineer with a demonstrated history of working in complex teams and on large web development projects. Skilled in software requirement analysis, design, development, deployment, and testing. I use ReactJs, TypeScript ,Angular, MongoDB and GraphQL",
        title:'Front-end Engineer'
    },
    
    projects:[],
    coreTechnologies: [],

    otherTechnologies: [''],

    experiences:[],

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
        linkAddress:'home'
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