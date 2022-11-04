/**
 * ListLocacionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  listLocacion: async function (req, res) {
    try {

      const locaciones = await Locacion.find();
      return res.ok(locaciones);

    }catch (err) {
      return res.serverError(err);
    }
  }

};

