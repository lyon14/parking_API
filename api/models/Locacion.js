/**
 * Locacion.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    title: {
      type: 'string',
      unique: true,
    },
    tarifa: {
      type: 'number',
    },
    total:{
      type: 'number',
    },
    used: {
      type: 'number',
    }
  },

};

