const Joi = require('joi');

const id = Joi.string();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const exist = Joi.boolean();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  exist:exist
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
  exist:exist
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
