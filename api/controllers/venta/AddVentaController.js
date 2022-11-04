/**
 * AddVentaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const joi = require('joi');

module.exports = {

  addVenta: async function (req, res) {
    try{
      const schema = joi.object().keys({
        pago : joi.number().required(),
        id_usuario : joi.number().required(),
      })
      const { pago, id_usuario } = await schema.validateAsync(req.body);
      const venta = await Venta.create({ pago, id_usuario }).fetch();
      return res.ok(venta);
    } catch (error) {
      if (error.code === 'E_UNIQUE') {
        return res.badRequest('Venta existente');
      }
      return res.badRequest(error);
    }
  }

};

