/**
 * AddActivoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const joi = require('joi');

module.exports = {

  addActivo: async function (req, res) {
    try{
      const schema = joi.object().keys({
        token : joi.string().required(),
        patente : joi.string().required(),
        id_usuario : joi.number().required(),
        id_locacion : joi.number().required(),
      })
      const { token, patente, id_usuario, id_locacion } = await schema.validateAsync(req.body);
      const activo = await Activo.create({ token, patente, id_usuario, id_locacion }).fetch();
      const activoCreado = await Locacion.findOne({id:id_locacion});
      const used = activoCreado.used + 1;
      const usedUpdate = await Locacion.update({id:id_locacion}).set({used:used});
      return res.ok(activo,usedUpdate);

    } catch (error) {
      return res.badRequest(error);
    }
  }

};

