import React from "react"
import {Carousel} from "react-bootstrap"
import {projects} from "../assets/projects.json"
import FeaturedItem from "./FeaturedItem"

export default class Featured extends React.Component{
    render(){
        return (
        <Carousel className="mr-auto w-full">
            {console.log(projects)}
            {   
                projects
                    .filter(project => project.key < 4)
                    .map(
                    project =>  (
                        <Carousel.Item>
                        <FeaturedItem className="featured-item" project={project} key={project.key}/>
                        </Carousel.Item>
                    )
                )
            }
        </Carousel>
        )
    }
}