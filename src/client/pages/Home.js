import React from "react"
import {Banner, Featured} from "../components"

export default class Home extends React.Component{
    render(){
        return (
        <div className="w-full h-full box flex flex-column flex-wrap">
            
            <Banner 
                title="Matthew Reda" 
                text={
                    "I am an aspiring data scientist and machine learning practitioner. \
                    I graduated the Massachusetts Institute of Technology with \
                    a bachelor of science degree in physics. I have continued my studies \
                    in statistics and computer science. Developing novel machine learning models \
                    to solve a variety of problems."}/>
            <Featured/>
        </div>
        )
    }
}