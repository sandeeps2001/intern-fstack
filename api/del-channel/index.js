const {deletechannel} = require('../mongodb')
module.exports = async function (context, req) {
    try {
      const { id } = req.query; // Assuming the credentials are passed as query parameters
      if (!id) {
        context.res = {
          status: 400,
          body: "Channel ID is missing"
        };
        return;
      }
      const s = await deletechannel(id);
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
  