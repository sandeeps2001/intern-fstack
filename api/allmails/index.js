const{allmails}= require('../mongodb')
module.exports = async function (context, req) {
    try {
      const s = await allmails();
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
  