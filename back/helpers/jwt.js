'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret ='jamestorres';

exports.createToken = function(user){
    var payload = {
        sub: user._id,
        nombres: user.nombres,
        apellidos: user.apellidos,
        email: user.email,
        iat: moment().unix(),//iat fecha de creacion del token
        exp: moment().add(7,'days').unix()//fecha de expiracion del token

    }

    return jwt.encode(payload,secret);
}
