/**
	Generated by sails-inverse-model
	Date:Wed Mar 21 2018 22:46:59 GMT+0530 (India Standard Time)
*/

module.exports = {
    attributes: {
        id: {
            type: "integer"
        },
        ip_address: {
            type: "string"
        },
        username: {
            type: "string"
        },
        password: {
            type: "string"
        },
        profile_edited: {
            type: "integer"
        },
        salt: {
            type: "string"
        },
        email: {
            type: "string"
        },
        activation_code: {
            type: "string"
        },
        forgotten_password_code: {
            type: "string"
        },
        forgotten_password_time: {
            type: "integer"
        },
        remember_code: {
            type: "string"
        },
        created_on: {
            type: "integer"
        },
        last_login: {
            type: "integer"
        },
        active: {
            type: "integer"
        },
        first_name: {
            type: "string"
        },
        middle_name: {
            type: "string"
        },
        last_name: {
            type: "string"
        },
        company: {
            type: "string"
        },
        phone: {
            type: "string"
        }
    },

  //   attemptLogin: function (inputs, cb) {
  //   // Create a user
  //   var bcrypt = require('bcrypt');
  //   const saltRounds = 10;
  //   var hash1;
    
  //   bcrypt.hash(inputs.password, saltRounds, function(err, hash) { 
        
  //       hash1 = hash;
  //       sails.log.debug(hash1);
  //   });

  //   Users.findOne({
  //     username: inputs.username,
  //     // TODO: But encrypt the password first
      
  //     password: hash1 
  //   })
  //   .exec(cb);
  // }

};