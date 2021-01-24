import React from "react"
import {Button, Form, FormControl, Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

export default class MyNav extends React.Component {
    render(){
        const routes = [
            {
                route: "/",
                name: "Home"
            },
            {
                route:"/projects",
                name:"Projects"
            },
            {
                route: "/about",
                name: "About"
            },
        ]
        return (
            <div className="default">
                <Navbar bg="dark" variant="dark" className="nav-item">
                    <Navbar.Brand> Matthew Reda </Navbar.Brand>
                    <Nav className='mr-auto'>
                    {routes.map(routeItem =>(
                    <Nav.Item key={routeItem.route}>
                        <Nav.Link href={routeItem.route} >{routeItem.name}</Nav.Link>
                    </Nav.Item>
                    ))
                    }   
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}