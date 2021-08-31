import React, {lazy, Suspense} from "react"
import { Image } from "react-bootstrap"
import { projects } from "../../assets/projects.json"
const Project = lazy( () => import("./components/Project"))

export default class Projects extends React.Component{

    render(){
        return (
            <Suspense 
                className='w-full flex flex-column box' fallback={<Image className='banner-img align-self-center' src="profile.png" alt='Matthew Profile' rounded/>}>
                {
                    projects.map(project=>(
                        <Project project={project} key={project.key}/>
                    ))
                }
            </Suspense>
        )
    }
}