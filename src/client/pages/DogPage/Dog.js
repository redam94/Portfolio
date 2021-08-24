import React from "react"
import {Video} from "../../components"
import Model from "./assets/dogModel"


export default class Dog extends React.Component{
    
    constructor(props){
        super(props)
        this.photo = null
        this.model = new Model()
        this.mediaStream = React.createRef()
        this.out = [];
        this.state = {
            isDog: [],
        }
    }
    
    takePicture = () => {
        var media = this.mediaStream.current;
        var mediaStream = media.srcObject;
        if (mediaStream) {
            var imageCapture = new ImageCapture(mediaStream.getVideoTracks()[0]);
            this.setState({isDog: "Thinking ...."})
            imageCapture.grabFrame().then(async (photo) =>{
                this.photo = photo || null;
                var out = await this.model
                            .makeInference(this.photo)
                
                this.setState(state => {
                    return {isDog: out}
                })
                
                
            })
        }else{
            alert("No active Camera")
        }
    }
    
    printTopDogs = (value, index) => {
        return <div key={value+index}>{String(index+1)+". "+this.model.dogNames[value]}</div>
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
            {typeof(this.state.isDog)==typeof('String')?this.state.isDog:this.state.isDog.map(this.printTopDogs)}
        </div>
        )
    }
}