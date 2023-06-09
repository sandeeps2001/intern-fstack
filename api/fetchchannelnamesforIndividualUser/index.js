const{fetchchannel} = require('../mongodb')
module.exports = async function (context, req) {
    try {
      const {Usergmail} = req.query;
      if (!Usergmail) {
        context.res = {
          status: 400,
          body: "Email not sent"
        };
        return;
      }
      const s = await fetchchannel(Usergmail);
      context.res = {
        status: 200,
        body: s
      };
    } catch (error) {
      context.log(error);
      context.res = {
        status: 500,
        body: false
      };
    }
  };
  