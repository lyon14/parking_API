/**
 * Activo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    token:{
      type: 'string',
      unique: true,
    },
    patente:{
      type: 'string',
      unique: true,
    },
    id_usuario:{
      type: 'number',
    },
    id_locacion:{
      type: 'number',
    }

  },

};

