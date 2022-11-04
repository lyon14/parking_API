/**
 * Venta.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    pago:{
      type: 'number',
    },
    patente:{
      type: 'string',
    },
    id_usuario:{
      type: 'number',
    }

  },

};

