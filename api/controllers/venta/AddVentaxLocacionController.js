/**
 * AddVentaxLocacionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const joi = require('joi');

module.exports = {

  addVentaxLocacion: async function (req, res) {
    try {
      const schema = joi.object().keys({
        id_locacion : joi.number().required(),
        id_venta : joi.number().required(),
      })
      const { id_locacion, id_venta } = await schema.validateAsync(req.body);
      const ventaxlocacion = await Ventaxlocacion.create({ id_locacion, id_venta }).fetch();
      return res.ok(ventaxlocacion);
    } catch (error) {
      if (error.code === 'E_UNIQUE') {
        return res.badRequest('Venta existente');
      }
      return res.badRequest(error);
    }
  }

};

