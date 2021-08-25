import React from 'react'
import { Button } from 'react-bootstrap'

export default class Video extends React.Component{
    constructor(props){
        super(props)
        this.constraints = {
            video: { width:this.props.width, height: this.props.height, facingMode: "environment"}
        }
        this.state = {
            isLive: true,
            facingMode: "environment"
        }
        this.activateWebcam=this.activateWebcam.bind(this)
        this.deactivateWebcam= this.deactivateWebcam.bind(this)
    }
    activateWebcam(){
        if(!this.state.isLive){
            return
        }
        this.setState(prev=>{
            return {isLive: !prev.isLive}
        })
        navigator
            .mediaDevices
            .getUserMedia({video: {...this.constraints.video}})
            .then( stream => {
                var video = this.props.videoRef.current;
                video.srcObject = stream;
                video.onloadedmetadata = e => video.play();
            })
            .catch(err=>{
                console.log(err.name+': '+err.message);
            })
    }
    deactivateWebcam(){
        if(this.state.isLive){
            return
        }
        var video = this.props.videoRef.current;
        if(video.srcObject){
            video.srcObject.getTracks().forEach(track=>track.stop());
        }
        video.srcObject = undefined;
        this.setState(prev=>{
            return {isLive: !prev.isLive}
        });
    }
    rotateWebcam = () => {
        if (this.state.facingMode === "environment"){
            this.setState(state => {
                return {...state, facingMode: "user"}
            })
        } else{
            this.setState(state => {
                return {...state, facingMode:"environment"}
            })
        }
        var video = this.props.videoRef.current;
        if(video.srcObject){
            video.srcObject.getTracks().forEach(track=>track.stop());
        }
        video.srcObject = undefined;
        navigator
            .mediaDevices
            .getUserMedia({video: {...this.constraints.video, facingMode: this.state.facingMode}})
            .then( stream => {
                var video = this.props.videoRef.current;
                video.srcObject = stream;
                video.onloadedmetadata = e => video.play();
            })
            .catch(err=>{
                console.log(err.name+': '+err.message);
            })
    }

    render(){
        return (
            <div className='flex w-full justify-center py-12'> 
                <video 
                    className='
                        justify-center rounded-lg 
                        shadow-md h-auto w-auto' 
                    autoPlay 
                    ref={this.props.videoRef} 
                    width={this.props.width} 
                    height={this.props.height}
                    hidden={this.state.isLive}>    
                </video>
                <div className='flex flex-col'>
                    <Button 
                        className='h-12 w-48 
                               justify-center rounded-lg 
                               my-2 mx-2
                               shadow-md' 
                        variant='secondary'
                        hidden={!this.state.isLive}
                        onClick={this.activateWebcam}>
                        Start Webcam
                    </Button>
                    <Button 
                        className='h-12 w-18 
                               justify-center rounded-lg 
                               my-2 mx-2
                               shadow-md'
                        variant='secondary'
                        hidden={this.state.isLive}
                        onClick={this.props.myFunction}>
                        Run
                    </Button>
                    <Button
                        className='h-12 w-18 
                        justify-center rounded-lg 
                        my-2 mx-2
                        shadow-md'
                        variant='secondary'
                        hidden={this.state.isLive}
                        onClick={this.rotateWebcam}>
                            Rotate
                    </Button>
                    <Button
                        className='h-12 w-18 
                        justify-center rounded-lg 
                        my-2 mx-2
                        shadow-md'
                        variant='secondary'
                        hidden={this.state.isLive}
                        onClick={this.deactivateWebcam}>
                        Stop
                    </Button>
                </div>
            </div>
        )
    }

}