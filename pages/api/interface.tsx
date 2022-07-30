export interface personalInterfaceI {
    name?: string,
    summary?: string,
    title?: string
}

export interface socialLinkInterfaceI {
    tw: string,
    in: string,
    medium: string,
    github: string
}

export interface coreTechnologiesI{

}


export  interface socialLinksI{
    tw:string,
    in:string,
    medium:string,
    github:string,

}

export type ManifestType = {
    personalInfo: personalInterfaceI,
    projects : [],
    coreTechnologies: coreTechnologiesI
    otherTechnologies: [string],
    experiences: [],
    resume:[],
    socialLinks: socialLinksI
}