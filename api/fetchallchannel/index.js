const {allchannel} = require('../mongodb')
module.exports = async function (context, req) {
    try {
      const s = await allchannel();
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
  