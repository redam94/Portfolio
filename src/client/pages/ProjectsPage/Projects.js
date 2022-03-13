import React, {lazy, Suspense} from "react"
import { Image } from "react-bootstrap"
import { projects } from "../../assets/projects.json"
const Project = lazy( () => import("./components/Project"))

const covid_dashboard = {
        "name": "Covid-19 Dashboard",
        "description": "",
        "key": 20,
        "pic": "",
        "keywords": [
            "CNN",
            "Tensorflow",
            "MachineLearning",
            "TransferLearning"
        ]
};

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
                <Project project={covid_dashboard} link={"http://covid-19-us-dashboard.herokuapp.com/"}/>
            </Suspense>
        )
    }
}