import React from "react"
import {Carousel, Button, Container} from "react-bootstrap"


export default class FeaturedItem extends React.Component{
    

    
    render(){

        const project = this.props.project
        const ref = "\\projects\\" + project.name.toLowerCase().split(" ").join("_")
        return (
            <div className='d-block'>
                <img 
                    className="w-100 featured-item"
                    src={project.pic}
                    alt="First Project"
                />
                <Carousel.Caption className='feature-caption'>
                    <h3 className='featured-item'>{project.name}</h3>
                    <p className='featured-item'>{project.description}</p>
                    <Container flex="true" className='justify-content-center'>
                        <Button variant="secondary" className='mx-2' href={ref}>Demo</Button>
                        <Button variant="secondary" className='mx-2'>Source Code</Button>
                    </Container>
                
                </Carousel.Caption>
            </div>
        )
    }
}