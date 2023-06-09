const {fetchchannelmessage} = require('../mongodb')
module.exports = async function (context, req) {
    try {
      const credentials = req.body; // Assuming the credentials are passed in the request body
      let { cname, email } = credentials;
      if (!cname) {
        context.log("channel not parsed");
        context.res = {
          status: 400,
          body: "Channel not parsed"
        };
        return;
      }
      let s = await fetchchannelmessage(cname, email);
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
  