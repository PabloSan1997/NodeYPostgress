const {  Products, ProductSchema } = require('./products.model.js');
const { User, UserSchema } = require('./user.model.js');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Products.init(ProductSchema, Products.config(sequelize));
}

module.exports = setupModels;

