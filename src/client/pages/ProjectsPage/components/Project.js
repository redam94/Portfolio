import React from 'react'
import { Jumbotron,  Button } from 'react-bootstrap'

export default class Project extends React.Component{
    render(){
        const project = this.props.project
        const ref = "\\projects\\" + project.name.toLowerCase().split(" ").join("_")
        return (
            <Jumbotron 
                fluid 
                className="
                    flex 
                    flex-column  
                    m-4 
                    p-2
                    shadow-md
                    max-w-sm
                    sm:max-w-xl
                    md:max-w-2xl
                    lg:max-w-3xld
                    mx-auto">
                <h3 className="text-3xl m-2" style={{alignSelf: 'center'}}>{project.name}</h3>
                <p className='m-4'>{project.description}</p>
                <div 
                    className="
                        flex
                        mx-0
                        self-center
                        items-center
                        " 
                        >
                        <Button 
                            variant="secondary" 
                            className='mx-2 hover:shadow-md'
                            href={ref}>Demo</Button>
                        <Button 
                            variant="secondary" 
                            className='mx-2 hover:shadow-md'>Source Code</Button>
                </div>
            </Jumbotron>
        )
    }
}

