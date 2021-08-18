import * as tf from '@tensorflow/tfjs'
//import {loadGraphModel} from '@tensorflow/tfjs-converter'
import myDict from './tokenizer.json'
import thresholds from './thresholds.json'
//console.log(myDict)
//const MOBILENET_MODEL_PATH =
//    tslint:disable-next-line:max-line-length
//    'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json';

class Model {

  constructor(){
    
    this.URL = process.env.REACT_APP_DISASTER_MODEL
    this.thresholds = thresholds
    this.features = Object.keys(this.thresholds)
  }

  textToSequence(text){
    var lower_text = text.toLowerCase()
    var tokens = lower_text.match(/\w+/g)
  
    var sequence = Array(100).fill(0)
    if(tokens.length > 100){
      tokens.map((val, index)=>{
        sequence[index] = val
        return 1
      })
    } else {
      tokens.map((val, index)=>{
        sequence[100-tokens.length+index] = (val in myDict)?myDict[val]:1
        return 1
      })
      
    }

    return tf.tensor([sequence])
  }




  async getModel(){

    const model = await tf.loadGraphModel(this.URL)

    return model

  } 

  async  makeInference(text){
    const myTensor = this.textToSequence(text)
    const model = await tf.loadGraphModel(this.URL)

    const output = model
      .predict(myTensor)
      .array()
    return output
}

}
//tf.io.browserFiles(
//    [uploadJ.files[0], uploadWeights.files[0], uploadWeight3.files[0]]
//    )
export default Model