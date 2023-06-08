const {fetchchannelmessage} = require('../mongodb') 
module.exports = async function (context, req) {
    try {
      const { cname, email } = req.body;
      
      if (!cname) {
        console.log("Channel not parsed");
        context.res = { status: 400, body: 'Invalid channel' };
        return;
      }
      const s = await fetchchannelmessage(cname, email);
      context.res = { status: 200, body: s };
    } catch (error) {
      console.log(error);
      context.res = { status: 500, body: 'Internal server error' };
    }
  };
  