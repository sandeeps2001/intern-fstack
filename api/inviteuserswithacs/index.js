const {inviteuserswithacs} = require('../mongodb') 
module.exports = async function (context, req) {
    try {
      let mainobj = {};
      let { email, arr, obj } = req.body;
      if (!email || !arr || !obj) {
        context.res = {
          status: 400,
          body: "Missing required values"
        };
        return;
      }
      let mainarr = [];
      arr.forEach((elm) => {
        let str = "";
        let count = 0;
        if (obj.channel[elm].read === true) {
          str = str + "read ";
          count++;
        }
        if (obj.channel[elm].write === true) {
          str = str + "write ";
          count++;
        }
        if (obj.channel[elm].del === true) {
          str = str + "delete";
          count++;
        }
  
        if (count === 0) {
          mainarr.push("none");
        } else {
          mainarr.push(str);
        }
      });
      context.log(mainarr);
  
      mainarr.forEach((elm, index) => {
        const cc = arr[index];
        let j = elm.toString();
        if (j != "none") {
          mainobj[cc] = j;
        }
      });
      mainobj['email'] = email;
      mainobj['key'] = Date.now();
      const s = await inviteuserswithacs(mainobj);
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
  