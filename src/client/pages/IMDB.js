import React from 'react'
import { Button } from 'react-bootstrap';
import Model from '../assets/transformerModel'


export default class IMDB extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            current: '',
            review: '', 
            text: "Enter a review to determine its sentiment"}
        this.handleChange = this.handleChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    
    handleChange(event){
        this.setState({text: 'Press send to learn the sentiment of the review', current: event.target.value})
        
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
                text: 'Processing sentiment'
            }
        })
        const model = new Model()
        model.makeInference(my_text)
        .then(val=>this.setState({
            current: '',
            review: my_text,
            text: (val[0]===0)?'Negative':'Positive'
        }))
        event.preventDefault()
    }
    
    render(){
        return (
            <div className='text-center w-full box'>
                <div className='text-gray-700 
                    text-4xl font-bold m-4'>
                        IMDB Review Sentiment
                </div>
                <form 
                    className='flex justify-center 
                        p-2 text-gray-700'
                        onSubmit={this.onClick}>
                    <textarea 
                        id='drp-text-input' 
                        className='justify-center mx-2 rounded-lg' 
                        cols='50' rows='5' type='text'
                        value={this.state.current}
                        onChange={this.handleChange}>       
                    </textarea>
                    <Button 
                        className='h-12 w-16'
                        type='submit'
                        variant='secondary'
                        >
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