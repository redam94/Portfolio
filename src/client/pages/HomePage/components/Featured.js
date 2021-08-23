import React from "react"
import {Carousel} from "react-bootstrap"
import {projects} from "../../../assets/projects.json"
import FeaturedItem from "./FeaturedItem"

export default class Featured extends React.Component{
    render(){
        return (
        <Carousel className="mr-auto w-full">
            {   
                projects
                    .filter(project => project.key < 4)
                    .map(
                    project =>  (
                        <Carousel.Item key={project.key+'featured-item'}>
                        <FeaturedItem className="featured-item" project={project}/>
                        </Carousel.Item>
                    )
                )
            }
        </Carousel>
        )
    }
}