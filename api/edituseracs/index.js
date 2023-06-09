const {edituseracs} =  require('../mongodb')
module.exports = async function (context, req) {
    try {
      const { e, arr, obj } = req.body;
      let mainobj = {};
  
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
  
      mainarr.forEach((elm, index) => {
        const cc = arr[index];
        let j = elm.toString();
        if (j !== "none") {
          mainobj[cc] = j;
        }
      });
  
      mainobj['email'] = e;
      console.log(mainobj, 'fromeditapicall');
      const s = await edituseracs(e, mainobj);
  
      if (s === true) {
        console.log("channel access inserted");
        context.res = {
          status: 200,
          body: "Channel access inserted"
        };
        return;
      }
      
      console.log("false");
      context.res = {
        status: 400,
        body: "Channel access insertion failed"
      };
    } catch (error) {
      console.log(error);
      context.res = {
        status: 500,
        body: error.message
      };
    }
  };
  