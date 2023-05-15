import { inviteuserswithacs } from "~~/task-manager/mongodb.js";
export default defineEventHandler(async (credentials) => {
  try {
    let mainobj = {};
    let { e, arr, obj } = await readBody(credentials);

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
    console.log(mainarr);

    mainarr.forEach((elm, index) => {
      const cc = arr[index];
      let j = elm.toString();
      if (j != "none") {
        mainobj[cc] = j;
      }
    });
    mainobj['email'] = e
    console.log(mainobj)
    const s = await inviteuserswithacs(mainobj);
    if (s === true) {
      console.log("channel access inserted");
      return true;
    }
    console.log("false");
    return false;
  } catch (error) {
    console.log(error);
  }
});

console.log();
