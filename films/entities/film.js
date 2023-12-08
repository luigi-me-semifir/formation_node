import mongoose from "mongoose";
import Joi from "joi";

const filmSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
    lowercase: true
  },
  annee: {
    type: Number
  }
})

const Film = mongoose.model('Film', filmSchema)

// Schema de validation Joi pour le modèle de film
const filmValidationSchema = Joi.object({
  titre: Joi.string()
    .required()
    .messages({
      'string.empty': 'Le titre ne peut pas être vide',
      'any.required': 'Le titre est requis',

    }),
  annee: Joi.number()
    .min(1921)
    .required()
    .messages({
      'number.base': 'L\'année doit être un nombre',
      'number.min': 'L\'année doit être supérieure à 1920',
      'any.required': 'L\'année est requise',

    }),
});

export { Film, filmValidationSchema };