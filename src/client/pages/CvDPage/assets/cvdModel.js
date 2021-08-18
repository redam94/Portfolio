import * as tf from '@tensorflow/tfjs'

class Model {

    constructor(){
      
      this.URL = process.env.REACT_APP_DISASTER_MODEL
    
    }
  
    bmp_to_img = (bmp) => {
        try {
            var img = tf.browser.fromPixels(bmp);
            img.print();
        }catch (error){
            console.log(error)
        }
    }
  
    async getModel(){
  
    } 
  
    async  makeInference(photo){
      
  }
  
  }
  //tf.io.browserFiles(
  //    [uploadJ.files[0], uploadWeights.files[0], uploadWeight3.files[0]]
  //    )
  export default Model