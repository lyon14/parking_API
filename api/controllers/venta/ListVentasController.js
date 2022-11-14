/**
 * ListVentasController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  listVentas: async function (req, res) {

    try {
      var test = `SELECT venta."createdAt",venta.patente,venta.pago,locacion.title FROM usuario
      JOIN venta ON venta.id_usuario = usuario.id
      JOIN ventaxlocacion ON ventaxlocacion.id_venta=venta.id
      JOIN locacion ON locacion.id=ventaxlocacion.id_locacion WHERE usuario.id=${req.params.id} ORDER BY venta."createdAt" DESC`;
      var result = await sails.sendNativeQuery(test);
      return res.ok(result.rows);
    }catch (err) {
      return res.serverError(err);
    }

  }

};

