/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  'POST /user/signup': 'user/SignUpController.signup',
  'POST /user/login': 'user/LoginController.login',
  'POST /locacion/create': 'locacion/AddLocacionController.addLocacion',
  'POST /venta/create': 'venta/AddVentaController.addVenta',
  'POST /ventaxlocacion/create': 'venta/AddVentaxLocacionController.addVentaxLocacion',
  'GET /venta/list/:id': 'venta/ListVentasController.listVentas',
  'POST /locacion/list': 'locacion/ListLocacionController.listLocacion',
  'POST /activo/create': 'activo/AddActivoController.addActivo',
  'POST /activo/findPatente': 'activo/FindPatenteController.findPatente',
  'POST /activo/pagoRealizado': 'activo/PagoRealizadoController.pagoRealizado',

};
