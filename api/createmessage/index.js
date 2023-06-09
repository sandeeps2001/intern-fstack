const {messagecreatembd} = require('../mongodb') 
module.exports = async function (context, req) {
    try {
      let { messagedata, collection, gmail } = await req.body
      if (!messagedata || !collection) {
        context.log("message and collection are not parsed");
        context.res = {
          status: 400,
          body: "Message and collection are not parsed"
        };
        return;
      }
      let s = await messagecreatembd(messagedata, collection, gmail);
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
  