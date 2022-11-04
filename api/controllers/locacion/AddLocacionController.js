/**
 * AddLocacionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const joi = require('joi');

module.exports = {

  addLocacion: async function (req, res) {
    try {
      const schema = joi.object().keys({
        title : joi.string().required(),
        tarifa : joi.number().required(),
        total : joi.number().required(),
        used : joi.number().required(),
      })
      const { title, tarifa, total, used } = await schema.validateAsync(req.body);
      const locacion = await Locacion.create({ title, tarifa, total, used }).fetch();
      return res.ok(locacion);
    } catch (error) {
      if (error.code === 'E_UNIQUE') {
        return res.badRequest('Locacion existente');
      }
      return res.badRequest(error);
    }
  }

};

