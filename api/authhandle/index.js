const bcrypt = require('bcrypt');
module.exports = async function (context, req) {
    const password = "$2b$10$mxtU2nERZUcSvRb9273zueKWOK4e384BSJxVbvXgPkQz/4nLPQ2tG";
    const email = 'sandy4adhi@gmail.com';
    
    if (!req.body || !req.body.e || !req.body.p) {
      context.res = { status: 400, body: 'Invalid request' };
      return;
    }
    
    const { e, p } = req.body;
    const hashedCheck = bcrypt.compareSync(p, password);
    
    if (hashedCheck && email === e) {
      context.res = { status: 200, body: true };
    } else {
      context.res = { status: 200, body: false };
    }
  };