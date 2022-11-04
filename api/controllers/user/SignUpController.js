/**
 * SignUpController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const joi = require('joi');
const bcrypt = require('bcrypt');


module.exports = {

 signup: async function (req, res) {

  try {
    const schema = joi.object().keys({
      name: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().required(),
      telefono: joi.string().required(),
    });

    const { name, email, telefono, password } = await schema.validateAsync(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Usuario.create({ name, email, telefono, password: hashedPassword }).fetch();
    return res.ok(user);

  } catch (error) {
    if (error.code === 'E_UNIQUE') {
      return res.badRequest('Email already registered');
    }
    return res.badRequest(error);
  }

 }

};

