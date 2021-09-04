import React from "react"
import { Button, Col, Container, Image, Jumbotron, Row } from "react-bootstrap"

export default class Banner extends React.Component{
    
    render(){
        return (
            <Jumbotron fluid className="banner">
                
                <Container fluid className='flex flex-wrap justify-center'>
                    <Row className='auto-cols-auto self-center'>
                        <Col sm={4} className='flex justify-center'>
                            {/*<img className='banner-img' src="profile.png"/>*/}
                            <Image className='banner-img justify-center' src="profile.png" alt='Matthew Profile' rounded/>
                        </Col>
                        <Col sm={8}>
                    <h1 className="text-6xl justify-center">{this.props.title}</h1>
                    <p className="text-lg max-w-lg">
                        {this.props.text}
                    </p>
                    <p>
                    <Button variant="primary" href='/about'>Learn more</Button>
                    </p>
                    </Col>
                    </Row>
                </Container>
        </Jumbotron>
        )
    }
}