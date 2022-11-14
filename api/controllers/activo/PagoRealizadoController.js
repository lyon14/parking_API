/**
 * PagoRealizadoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const joi = require('joi');

module.exports = {

  pagoRealizado: async function (req, res) {
    try {
      const schema = joi.object().keys({
        id_activo : joi.number().required(),
        pago : joi.number().required(),
        patente: joi.string().required(),
        id_usuario: joi.number().required(),
        id_locacion: joi.number().required(),
      })
      const { id_activo, pago, patente, id_usuario, id_locacion } = await schema.validateAsync(req.body);
      const addVenta = await Venta.create({ pago, patente, id_usuario }).fetch();
      const id_venta = addVenta.id;
      const addLocacion = await Ventaxlocacion.create({ id_venta, id_locacion }).fetch();
      const LocacionId = await Locacion.findOne({id:id_locacion});
      const used = LocacionId.used - 1;
      const usedUpdate = await Locacion.update({id:id_locacion}).set({used:used});
      const borrarActivo = await  Activo.destroyOne({id:id_activo});
      return res.ok(addVenta,addLocacion,usedUpdate,borrarActivo);

    } catch (error) {
      return res.badRequest(error);
    }
  }

};

