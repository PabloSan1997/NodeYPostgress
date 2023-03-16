const { Model, DataTypes, Sequelize } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name:{
    allowNull:false,
    type:DataTypes.STRING,
  },
  price: {
    allowNull:false,
    type:DataTypes.FLOAT,
  },
  image: {
    allowNull:false,
    type:DataTypes.STRING
  },
  exist:{
    allowNull:false,
    type:DataTypes.BOOLEAN,
    defaultValue:false
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Products extends Model {
  static associate(models) {

  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'products',
      timestamps: false
    }
  }
}


module.exports = {ProductSchema, PRODUCT_TABLE, Products }
