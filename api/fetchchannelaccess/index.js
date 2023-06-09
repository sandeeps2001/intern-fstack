const{fetchchannelacs} = require('../mongodb')
module.exports = async function (context, req) {
    try {
      const { cname, gmail } = req.body;
      if (!gmail) {
        context.res = {
          status: 400,
          body: "Email not parsed"
        };
        return;
      }
  
      const s = await fetchchannelacs(cname, gmail);
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
  