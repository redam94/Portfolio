import React from 'react'
import { Button } from 'react-bootstrap';
import Model from '../assets/disasterModel'


export default class IMDB extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            current: '',
            review: '', 
            text: "Enter a tweet to determine what classes it belongs to"}
        this.handleChange = this.handleChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.makeText = this.makeText.bind(this)
        this.model = new Model()
    }
    
    handleChange(event){
        this.setState({text: 'Press send to learn content of tweet', current: event.target.value})
        
    }
    
    makeText(val, index){
        var feature = this.model.features[index]
        if(val>parseFloat(this.model.thresholds[feature])){
            return feature.split('_').join(' ')+', '
        }else{
            return ''
        }
    }

    onClick(event){
        const my_text = this.state.current
        if(my_text===''){
            return
        }
        this.setState(prevState=>{
            return {
                current: prevState.current,
                review: prevState.current,
                text: 'Processing Tweet'
            }
        })
        const model = this.model
        console.log(model.features)
        model.makeInference(my_text)
        .then(val=>this.setState({
            current: '',
            review: my_text,
            text: val[0].map((val, index) => this.makeText(val, index)).join('')
        }))
        event.preventDefault()
    }
    
    render(){
        return (
            <div className='text-center w-full flex flex-column box'>
                <div className='
                    text-gray-700 
                    text-3xl 
                    font-bold
                    m-4'>
                        Disaster Response Project
                </div>
                <form 
                    className='flex justify-center 
                        p-2 text-gray-700'
                        onSubmit={this.onClick}>
                    <textarea 
                        id='drp-text-input' 
                        className='
                            justify-center 
                            mx-2 
                            rounded-lg
                            shadow-md' 
                        cols='50' rows='5' type='text'
                        value={this.state.current}
                        onChange={this.handleChange}>       
                    </textarea>
                    <Button 
                        className='
                            h-12
                            w-16
                            shadow-md'
                        variant='secondary'
                        type='submit' 
                        value='Send'> 
                        Send              
                    </Button>
                </form>
                <div>
                    <p 
                        className='text-xl font-bold mx-24 text-justify-center'>
                        {this.state.review}
                    </p>
                    <p
                        className='text-gray-700 text-xl'>
                        {this.state.text}
                    </p>
                </div>
            </div>
        )
    }
}