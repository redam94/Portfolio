import * as tf from '@tensorflow/tfjs'
import {loadGraphModel} from '@tensorflow/tfjs-converter'
import myDict from './dict.json'
//console.log(myDict)
//const MOBILENET_MODEL_PATH =
//    tslint:disable-next-line:max-line-length
//    'https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json';

class Model {

  constructor(){
    
    this.URL = process.env.REACT_APP_TRANSFORMER_MODEL
    
  }

  textToSequence(text){
    var lower_text = text.toLowerCase()
    var tokens = lower_text.match(/\w+/g)
  
    var sequence = Array(200).fill(0)
    if(tokens.length > 199){
      tokens.map((val, index)=>{
        sequence[index] = val
        return 1
      })
    } else {
      tokens.map((val, index)=>{
        sequence[200-tokens.length+index] = (val in myDict)?myDict[val]:2
        return 1
      })
      sequence[200-tokens.length-1]=1
    }

    return tf.tensor([sequence])
  }




  async getModel(){

    const model = await loadGraphModel(this.URL)
    console.log(model)
    const test = tf.tensor([[    0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     0,     0,     0,
        0,     0,     0,     0,     0,     0,     1,   591,   202,
       14,    31,     6,   717,    10,    10, 18142, 10698,     5,
        4,   360,     7,     4,   177,  5760,   394,   354,     4,
      123,     9,  1035,  1035,  1035,    10,    10,    13,    92,
      124,    89,   488,  7944,   100,    28,  1668,    14,    31,
       23,    27,  7479,    29,   220,   468,     8,   124,    14,
      286,   170,     8,   157,    46,     5,    27,   239,    16,
      179, 15387,    38,    32,    25,  7944,   451,   202,    14,
        6,   717],
   [ 1987, 17975,    45,    55,   221,    15,   670,  5304,   526,
       14,  1069,     4,   405,     5,  2438,     7,    27,    85,
      108,   131,     4,  5045,  5304,  3884,   405,     9,  3523,
      133,     5,    50,    13,   104,    51,    66,   166,    14,
       22,   157,     9,     4,   530,   239,    34,  8463,  2801,
       45,   407,    31,     7,    41,  3778,   105,    21,    59,
      299,    12,    38,   950,     5,  4521,    15,    45,   629,
      488,  2733,   127,     6,    52,   292,    17,     4,  6936,
      185,   132,  1988,  5304,  1799,   488,  2693,    47,     6,
      392,   173,     4,     2,  4378,   270,  2352,     4,  1500,
        7,     4,    65,    55,    73,    11,   346,    14,    20,
        9,     6,   976,  2078,     7,  5293,   861, 12746,     5,
     4182,    30,  3127,     2,    56,     4,   841,     5,   990,
      692,     8,     4,  1669,   398,   229,    10,    10,    13,
     2822,   670,  5304,    14,     9,    31,     7,    27,   111,
      108,    15,  2033,    19,  7836,  1429,   875,   551,    14,
       22,     9,  1193,    21,    45,  4829,     5,    45,   252,
        8, 12508,     6,   565,   921,  3639,    39,     4,   529,
       48,    25,   181,     8,    67,    35,  1732,    22,    49,
      238,    60,   135,  1162,    14,     9,   290,     4,    58,
       10,    10,   472,    45,    55,   878,     8,   169,    11,
      374,  5687,    25,   203,    28,     8,   818,    12,   125,
        4,  3077],
   [ 4468,   189,     4,     2,  6287,  5774,     4,  4770,     5,
       95,   271,    23,     6,  7742,  6063,     2,  5437,    33,
     1526,     6,   425,  3155,     2,  4535,  1636,     7,     4,
     4669, 11966,   469,     4,  4552,    54,     4,   150,  5664,
    17345,   280,    53,     2,     2,    18,   339,    29,  1978,
       27,  7885,     5, 17303,    68,  1830,    19,  6571, 14605,
        4,  1515,     7,   263,    65,  2132,    34,     6,  5680,
     7489,    43,   159,    29,     9,  4706,     9,   387,    73,
      195,   584,    10,    10,  1069,     4,    58,   810,    54,
       14,  6078,   117,    22,    16,    93,     5,  1069,     4,
      192,    15,    12,    16,    93,    34,     6,  1766,     2,
       33,     4,  5673,     7,    15, 18760,  9252,  3286,   325,
       12,    62,    30,   776,     8,    67,    14,    17,     6,
    12214,    44,   148,   687,     2,   203,    42,   203,    24,
       28,    69,     2,  6676,    11,   330,    54,    29,    93,
        2,    21,   845, 14148,    27,  1099,     7,   819,     4,
       22,  1407,    17,     6, 14967,   787,     7,  2460, 19569,
        2,   100,    30,     4,  3737,  3617,  3169,  2321,    42,
     1898,    11,     4,  3814,    42,   101,   704,     7,   101,
      999,    15,  1625,    94,  2926,   180,     5,     9,  9101,
       34, 15205,    45,     6,  1429,    22,    60,     6,  1220,
       31,    11,    94,  6408,    96,    21,    94,   749,     9,
       57,   975]])
    model
    .predict(test)
    .argMax(1)
    .print()
    
    return 'Done'

  } 

  async  makeInference(text){
    const myTensor = this.textToSequence(text)
    const model = await tf.loadGraphModel(this.URL)

    const output = model
      .predict(myTensor)
      .argMax(1)
      .array()
    return output
}

}
//tf.io.browserFiles(
//    [uploadJ.files[0], uploadWeights.files[0], uploadWeight3.files[0]]
//    )
export default Model