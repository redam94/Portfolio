import * as tf from '@tensorflow/tfjs'

class Model {

    constructor(){
      
      this.URL =  process.env.REACT_APP_BASE_MODEL + 'dogs/model.json'; //'http://localhost:3999/models/dogs/model.json'
      console.log(this.URL);
      this.dogNames = [
          'Affenpinscher',
          'Afghan_hound',
          'Airedale_terrier',
          'Akita',
          'Alaskan_malamute',
          'American_eskimo_dog',
          'American_foxhound',
          'American_staffordshire_terrier',
          'American_water_spaniel',
          'Anatolian_shepherd_dog',
          'Australian_cattle_dog',
          'Australian_shepherd',
          'Australian_terrier',
          'Basenji',
          'Basset_hound',
          'Beagle',
          'Bearded_collie',
          'Beauceron',
      'Bedlington_terrier',
      'Belgian_malinois',
      'Belgian_sheepdog',
      'Belgian_tervuren',
      'Bernese_mountain_dog',
      'Bichon_frise',
      'Black_and_tan_coonhound',
      'Black_russian_terrier',
      'Bloodhound',
      'Bluetick_coonhound',
      'Border_collie',
      'Border_terrier',
      'Borzoi',
      'Boston_terrier',
      'Bouvier_des_flandres',
      'Boxer',
      'Boykin_spaniel',
      'Briard',
      'Brittany',
      'Brussels_griffon',
      'Bull_terrier',
      'Bulldog',
      'Bullmastiff',
      'Cairn_terrier',
      'Canaan_dog',
      'Cane_corso',
      'Cardigan_welsh_corgi',
      'Cavalier_king_charles_spaniel',
      'Chesapeake_bay_retriever',
      'Chihuahua',
      'Chinese_crested',
      'Chinese_shar-pei',
      'Chow_chow',
      'Clumber_spaniel',
      'Cocker_spaniel',
      'Collie',
      'Curly-coated_retriever',
      'Dachshund',
      'Dalmatian',
      'Dandie_dinmont_terrier',
      'Doberman_pinscher',
      'Dogue_de_bordeaux',
      'English_cocker_spaniel',
      'English_setter',
      'English_springer_spaniel',
      'English_toy_spaniel',
      'Entlebucher_mountain_dog',
      'Field_spaniel',
      'Finnish_spitz',
      'Flat-coated_retriever',
      'French_bulldog',
      'German_pinscher',
      'German_shepherd_dog',
      'German_shorthaired_pointer',
      'German_wirehaired_pointer',
      'Giant_schnauzer',
      'Glen_of_imaal_terrier',
      'Golden_retriever',
      'Gordon_setter',
      'Great_dane',
      'Great_pyrenees',
      'Greater_swiss_mountain_dog',
      'Greyhound',
      'Havanese',
      'Ibizan_hound',
      'Icelandic_sheepdog',
      'Irish_red_and_white_setter',
      'Irish_setter',
      'Irish_terrier',
      'Irish_water_spaniel',
      'Irish_wolfhound',
      'Italian_greyhound',
      'Japanese_chin',
      'Keeshond',
      'Kerry_blue_terrier',
      'Komondor',
      'Kuvasz',
      'Labrador_retriever',
      'Lakeland_terrier',
      'Leonberger',
      'Lhasa_apso',
      'Lowchen',
      'Maltese',
      'Manchester_terrier',
      'Mastiff',
      'Miniature_schnauzer',
      'Neapolitan_mastiff',
      'Newfoundland',
      'Norfolk_terrier',
      'Norwegian_buhund',
      'Norwegian_elkhound',
      'Norwegian_lundehund',
      'Norwich_terrier',
      'Nova_scotia_duck_tolling_retriever',
      'Old_english_sheepdog',
      'Otterhound',
      'Papillon',
      'Parson_russell_terrier',
      'Pekingese',
      'Pembroke_welsh_corgi',
      'Petit_basset_griffon_vendeen',
      'Pharaoh_hound',
      'Plott',
      'Pointer',
      'Pomeranian',
      'Poodle',
      'Portuguese_water_dog',
      'Saint_bernard',
      'Silky_terrier',
      'Smooth_fox_terrier',
      'Tibetan_mastiff',
      'Welsh_springer_spaniel',
      'Wirehaired_pointing_griffon',
      'Xoloitzcuintli',
      'Yorkshire_terrier'];
    }
  
    bmp_to_img = (bmp) => {
        try {
            const img = tf.browser.fromPixels(bmp);
            return img;
        }catch (error){
            console.log(error);
        }
        return tf.zeros([224, 224, 3]);
    }
    
    preprocess_photo = (img) => {
        const resize_img = tf.image.resizeNearestNeighbor(img, [224, 224]);
        return tf.mul(resize_img, tf.scalar(1/255.));
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
        
        img = img.expandDims(0);
        const model = await tf.loadGraphModel(this.URL);
        
        var output = await model
            .predict(img)
            .array();
        
        var {indices} = await tf.topk(output, 5)
        indices = indices.array()
        model.dispose()
        return indices
    }
  
  }
 
  export default Model