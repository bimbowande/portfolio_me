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




export  interface socialLinksI{
    name:string,
    link:string,
    class:string,

}

export type ManifestType = {
    personalInfo: personalInterfaceI,
    projects : [],
    frameworks:Array<string>,
    coreTechnologies: Array<string>,
    otherTechnologies: Array<string>,
    experiences: [],
    resume:[],
    socialLinks: Array<socialLinksI>,
}


export interface pageLink{
    linkName: string,
    linkAddress:string
}