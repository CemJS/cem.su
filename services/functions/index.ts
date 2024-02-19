import { Cemjsx, Fn, front } from "cemjs-all";
import { v4 as uuidv4 } from "uuid";
import { editText, searchLink } from "./editText";
import moment from "moment";
import "moment/min/locales";

export * from "./validForms";
export * from "./sendApi";

export const strToJson = function (data: string) {
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("strToJson Error", error);
    return null;
  }
};

export const makeUrlEvent = function (url: string, params: any = {}) {
  url = `/api/events/${url}?uuid=${localStorage.uuid}&suuid=${localStorage.suuid}`;
  for (let key in params) {
    url += `&${key}=${params[key]}`;
  }
  return url;
};

export const timeStampToDate = function (d: number, separator: string, momentLib: boolean) {
  let dateObj = new Date(d);
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();
  let date = dateObj.getDate();

  if (momentLib) {
    moment.locale("ru");
    // dateObj.setMonth(1);
    // dateObj.setDate(16);
    let time = moment(dateObj);
    let between = new Date().getTime() - dateObj.getTime() < 86400000;
    if (between) {
      return time.fromNow();
    }
    return time.format("DD MMMM YYYY");
  }

  let result = `${String(date).length == 1 ? `0${date}` : date}${separator}${String(month).length == 1 ? `0${month}` : month}${separator}${year}`;
  return result;
};

export const loader = async function (Variable: any, Fn: any) {
  if (!localStorage.uuid) {
    localStorage.uuid = uuidv4();
  }
  let eventSource = new EventSource(`/api/events/MyInfo?uuid=${localStorage.uuid}`)
  eventSource.addEventListener('update', ({ data }) => {
    let json = strToJson(data)
    if (!json) { return }
    console.log('=MyInfo=', json)
    localStorage.suuid = json.suuid
    Variable.Auth = json.auth
    Variable.myInfo = json.info
    Variable.Lang = "Русский"
    Fn.initAll()
    // if (!answ.data || answ.data == "null") {
    //   return
    // }
    // let myInfo = JSON.parse(answ.data)
    // Variable.myInfo = Object.assign(Variable.myInfo, myInfo)
  });
  // Variable.Auth = false
  return;
};

export { uuidv4, editText, searchLink };
