const faker = require('faker');
const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class ProductsService {

  constructor(){
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const cre = await models.products.create(data);
    return cre;
  }

  async find() {
   const elemento = await models.products.findAll();
    return elemento;
  }

  async findOne(id) {
    const product = await models.products.findByPk(id);
    return product;
  }

  async update(id, changes) {
    const act = await models.products.findByPk(id);
    const res = await act.update(changes);
    return res;
  }

  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }

}

module.exports = ProductsService;
