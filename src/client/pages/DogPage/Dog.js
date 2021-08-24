import React from "react"
import {Video} from "../../components"
import Model from "./assets/dogModel"


export default class CVD extends React.Component{
    
    constructor(props){
        super(props)
        this.photo = null
        this.model = new Model()
        this.mediaStream = React.createRef()
        this.state = {
            isDog: ''
        }
    }
    
    takePicture = () => {
        var media = this.mediaStream.current;
        var mediaStream = media.srcObject;
        if (mediaStream) {
            var imageCapture = new ImageCapture(mediaStream.getVideoTracks()[0]);
            this.setState({isDog: "Thinking ...."})
            imageCapture.grabFrame().then(photo =>{
                this.photo = photo || null;
                this.model
                    .makeInference(this.photo)
                    .then(out => {
                        console.log(out)
                        this.setState(prevState => {
                            return {isDog: this.model.dogNames[out[0]]}})
                    })
                
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
                    Dog Breed Classifier
                </div>
            <Video videoRef={this.mediaStream} height={256} width={256} myFunction={this.takePicture}/>
            <p className="text-4xl">{this.state.isDog}</p>
        </div>
        )
    }
}