import React from "react"
import {Video} from "../components"

export default class CVD extends React.Component{
    render(){
        return (
        <div className="w-full hide-overlap h-full bg-gray-100 flex text-center flex-column box" style={{height: 'auto'}}>
            <div className="
                text-4xl
                m-4">
                    Cat vs Dog Classifier
                </div>
            <Video myId="myvideo" height="512" width="512"/>
        </div>
        )
    }
}