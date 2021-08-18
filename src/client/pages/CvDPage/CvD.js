import React from "react"
import { Button } from "react-bootstrap"
import {Video} from "../../components"
import Model from "./assets/cvdModel"


export default class CVD extends React.Component{
    constructor(props){
        super(props)
        this.photo = null
        this.model = new Model()
        this.mediaStream = React.createRef()
    }
    
    takePicture = () => {
        var media = this.mediaStream.current;
        var mediaStream = media.srcObject;
        if (mediaStream) {
            var imageCapture = new ImageCapture(mediaStream.getVideoTracks()[0]);
            imageCapture.grabFrame().then(photo =>{
                this.photo = photo || null;
                this.model.bmp_to_img(this.photo)
            })
        }else{
            alert("No active Camera")
        }
    }
    

    render(){
        return (
        <div className="w-full hide-overlap h-full bg-gray-100 flex text-center flex-column box" style={{height: 'auto'}}>
            <div className="
                text-4xl
                m-4">
                    Cat vs Dog Classifier
                </div>
            <Video videoRef={this.mediaStream} height="512" width="512"/>
            <Button
                className='h-12 w-48 
                align-self-center rounded-lg 
                my-2 mx-2
                shadow-md' 
                variant='secondary'
                onClick={() => this.takePicture("myvideo")} 
                >
                    Take Picture
                </Button>
        </div>
        )
    }
}