const {createchannel} = require('../mongodb') 
module.exports = async function (context, req) {
    try {
      let { c, d, e } = await req.body
      if (!c || !d || !e) {
        context.log("enter all required values");
        context.res = {
          status: 400,
          body: "Enter all required values"
        };
        return;
      }
      const s = await createchannel(c, d, e);
      context.log(s, "fromchannelapicall");
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
  