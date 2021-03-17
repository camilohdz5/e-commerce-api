import { Schema, model } from 'mongoose' 

const countrySchema = new Schema({
  countryName: {
    type: String,
    required: true,
    trim: true
  },
  language : {
    type: String, 
    required: true,
    trim: true
  }, 
  flag : {
    type: String,
    required : true,
    trim: true
  }, 
  currencies : {
    type: String,
    required: true,
    trim: true
  }
}, {
  versionKey: false,
  timestamps: true
})

export default model('country', countrySchema)