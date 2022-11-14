/**
 * FindPatenteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const joi = require('joi');

module.exports = {

  findPatente: async function (req, res) {
    try {
      const schema = joi.object().keys({
        patente : joi.string().required(),
      })
      const { patente } = await schema.validateAsync(req.body);
      const activo = await Activo.findOne({patente});
      const locacion = await Locacion.findOne({id:activo.id_locacion});
      return res.ok({activo,locacion});

    } catch (error) {
      return res.badRequest(error);
    }
  }
};

