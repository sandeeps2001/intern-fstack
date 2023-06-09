const{messageupdate} = require('../mongodb')
module.exports = async function (context, req) {
    try {
      let { id, newvalue } = req.body
      if (!id || !newvalue) {
        context.log("messages are not parsed");
        context.res = {
          status: 400,
          body: "Messages are not parsed"
        };
        return;
      }
      let s = await messageupdate(id, newvalue);
      context.res = {
        status: 200,
        body: s
      };
    } catch (error) {
      context.log(error);
      context.res = {
        status: 500,
        body: error.message
      };
    }
  };
  