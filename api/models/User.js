/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
    },
    email: {
      type: 'string',
      isEmail: true,
      unique: true,
      required: true,
    },
    telefono: {
      type: 'string',
    },
    password: {
      type: 'string',
    }

  },

};

