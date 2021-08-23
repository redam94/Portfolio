import * as tf from '@tensorflow/tfjs'

class Model {

    constructor(){
      
      this.URL = process.env.REACT_APP_BASE_MODEL + 'cvd/model.json';
    
    }
  
    bmp_to_img = (bmp) => {
        try {
            const img = tf.browser.fromPixels(bmp);
            return img;
        }catch (error){
            console.log(error);
        }
        return tf.zeros([128, 128, 3]);
    }
    
    preprocess_photo = (img) => {
        const resize_img = tf.image.resizeBilinear(img, [128, 128]);
        return resize_img;
    }

    getModel = async () => {
        const model = tf.loadGraphModel(this.URL);
        return model;
    } 
    
    post_process = (output) => {
        return output
    }

    makeInference = async (bmp) => {
        var img = this.bmp_to_img(bmp);
        img = this.preprocess_photo(img);
        const model = await tf.loadGraphModel(this.URL);
        
        var output = await model
            .predict(img.expandDims(0))
            .array();
        
        output = (output[0][0]<.5)?"Cat":"Dog"
        return output
    }
  
  }
 
  export default Model