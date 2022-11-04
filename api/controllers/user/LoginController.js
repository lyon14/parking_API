/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const joi = require('joi');
const bcrypt = require('bcrypt');

module.exports = {

  login: async function (req, res) {
    try {
      const schema = joi.object().keys({
        email: joi.string().required().email(),
        password: joi.string().required(),
      });

      const {email, password} = await schema.validateAsync(req.allParams());
      const user = await Usuario.findOne({email});
      if (!user) {
        return res.badRequest({err: 'User not found'}).json();
      }
      const comparedPassword = await bcrypt.compare(password, user.password);

      return comparedPassword ? res.ok({user}) : res.badRequest({err: 'Wrong password'}).json();
    } catch (error) {
      return res.badRequest(error);
    }
  }

};

