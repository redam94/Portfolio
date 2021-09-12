import React from "react"
import './styles/About.css';

export default class About extends React.Component{
    render(){
        return (
            <div className="column-2 text-justify">
                <h1 className="text-4xl m-3">About Me</h1>
                <p>
                    &emsp; {"My data science journey started well before I'd come to know the term \"data science\" with a book on mathematical physics I began reading early in high school. The book highlighted the importance of reframing problems. In physics, for example, one of the first problems you learn to tackle deals with incline planes. At first, the problem looks 2-dimensional; the block moves laterally and down due to gravity. In this frame, you would have to deal with a system of 2 equations: when you realize that the inclined plane constrains the motion to 1-dimension you halve the problem difficulty. The forces acting perpendicularly to the plane vanish; you only have to solve a single equation! This seems trivial now: at the time I was astonished. I apply a similar methodology when approaching data science problems. I always ask myself if there is a better way to look at this problem."} 
                </p>
                <p>
                    &emsp; {"I have always been an analytical person; I prefer data and information before making decisions. This preference for the analytical drives my passion for data science."}
                </p>
            </div>
        )
    }
}