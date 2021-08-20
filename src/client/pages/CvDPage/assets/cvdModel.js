import * as tf from '@tensorflow/tfjs'

class Model {

    constructor(){
      
      this.URL = process.env.REACT_APP_BASE_MODEL + 'cvd/model.json';
    
    }
  
    bmp_to_img = (bmp) => {
        try {
            var img = tf.browser.fromPixels(bmp);
            console.log(img.shape)
            return img;
        }catch (error){
            console.log(error);
        }
        return tf.zeros([512, 512, 3]);
    }
  
    async getModel(){
        
    } 
  
    async  makeInference(photo){
      
  }
  
  }
 
  export default Model