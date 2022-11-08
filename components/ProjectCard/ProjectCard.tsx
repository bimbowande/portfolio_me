import React from 'react'

export interface ProjectcardI {
    ProjectName?: string,
    stacks: Array<string>,
    description?: string
    link: string
} 

export const ProjectCard:React.FC<ProjectcardI> = (ProjectcardI) => {
  return (
    <div>
        <h2>{ProjectcardI?.ProjectName}</h2>
        <div>
            {ProjectcardI?.stacks.map((data:string,index:number)=> 
                <div><h3>{data}</h3></div>
            )}
        </div>
        <div>
            <p>{ProjectcardI?.description}</p>
        </div>
        <div>
            <h4><a href={ProjectcardI?.link}>{ProjectcardI?.link} </a></h4>
        </div>
    </div>
  )
}
