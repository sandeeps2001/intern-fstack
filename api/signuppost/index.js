const bcrypt = require('bcrypt');

module.exports = async function (context, req) {
  try {
    const { e, p } = req.body;
    if (!e || !p) {
      context.res = {
        status: 400,
        body: false
      };
      return;
    }
    
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(p, salt);
    
    if (hash) {
      context.res = {
        status: 200,
        body: true
      };
    } else {
      context.res = {
        status: 500,
        body: false
      };
    }
  } catch (error) {
    context.log(error);
    context.res = {
      status: 500,
      body: false
    };
  }
};
