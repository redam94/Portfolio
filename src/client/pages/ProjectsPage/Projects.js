import React from "react"
import { projects } from "../../assets/projects.json"
import Project from "./components/Project"

export default class Projects extends React.Component{

    render(){
        return (
            <div 
                className='
                    w-full 
                    flex
                    flex-column 
                    box'>
                {
                    projects.map(project=>(
                        <Project project={project} key={project.key}/>
                    ))
                }
            </div>
        )
    }
}