import React from 'react'
import { Button } from 'react-bootstrap'

export default class Video extends React.Component{
    constructor(props){
        super(props)
        this.constraints = {
            video: { width:this.props.width, height: this.props.height}
        }
        this.state = {
            isLive: true
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
            .getUserMedia(this.constraints)
            .then(stream=>{
                var video = document.getElementById(this.props.myId)
                video.srcObject = stream;
                video.onloadedmetadata = e => video.play()
            })
            .catch(err=>{
                console.log(err.name+': '+err.message)
            })
    }
    deactivateWebcam(){
        if(this.state.isLive){
            return
        }
        var video = document.getElementById(this.props.myId)
        if(video.srcObject){
            video.srcObject.getTracks().forEach(track=>track.stop())
        }
        video.srcObject = undefined
        this.setState(prev=>{
            return {isLive: !prev.isLive}
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
                    id={this.props.myId} 
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
                        className='h-12 w-16 
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