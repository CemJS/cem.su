import { Cemjsx, Fn, front } from "cemjs-all";
import { v4 as uuidv4 } from "uuid";
import { editText, searchLink } from "./editText";
import moment from "moment";
import { sendApi } from "./sendApi";
import { indexDB, IndexDBGetByOne } from "./indexDB";
import "moment/min/locales";

export * from "./validForms";
export * from "./indexDB";
export { sendApi };

export const strToJson = function (data: string) {
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error("strToJson Error", error);
    return null;
  }
};

export const makeUrlEvent = function (url: string, params: any = {}) {
  url = `/api/events/${url}?uuid=${localStorage.uuid}`;
  for (let key in params) {
    url += `&${key}=${params[key]}`;
  }
  return url;
};

export const timeStampToDate = function (
  d: number,
  separator: string,
  momentLib: boolean,
) {
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
  // window.onbeforeunload = async function () {
  //   console.log('=07afdb=', 123)
  //   return true
  //   await Fn.clearDataAll()
  //   console.log('=07afdb=', 1234)

  // }

  window.onunload = async function () {
    await Fn.clearDataAll();
  };

  if (!localStorage.uuid) {
    localStorage.uuid = uuidv4();
  }

  let eventSource = new EventSource(
    `/api/events/web-clients/me?uuid=${localStorage.uuid}`,
  );

  eventSource.addEventListener("get", async ({ data }) => {
    let json = strToJson(data);
    console.log("=022338=", json);
    if (json) {
      let inx = await indexDB({ json });
    } else {
      return;
    }

    !localStorage.lang ? localStorage.setItem("lang", "ru") : null;
    localStorage.suuid = json.suuid;
    localStorage.suuid = json.suuid;
    localStorage.countriesLastUpdateDate = json.countriesLastUpdateDate;
    localStorage.languagesLastUpdateDate = json.languagesLastUpdateDate;
    localStorage.translationsLastUpdateDate = json.translationsLastUpdateDate;
    Variable.Auth = json.auth;
    Variable.myInfo = json;
    Variable.Lang = "Русский";
    Variable.notifies = { awards: [], questions: [], system: [] };

    const lang = localStorage.lang;
    // console.log("=7d2281=", lang);
    Variable.words = await IndexDBGetByOne({
      base: "linguaData",
      key: "translations",
    });

    Variable.words = Variable?.words[0];
    // console.log("=b7bda2=", Variable?.words);
    Array.isArray(Variable.words)
      ? (Variable.words = Variable?.words?.find((item) => item?.code == lang))
      : null;
    // console.log("=b7bda2=", Variable.words);

    Variable.words = Variable.words?.notify;
    // console.log("=02c186=", Variable.words);

    if (
      !localStorage.countries_update ||
      localStorage.countries_update < json.countries_update
    ) {
      // console.log("No countries_update or less");
      let res = await sendApi("/api/countries", {
        action: "get",
      });
      // console.log("res", res);

      if (!res.error) {
        localStorage.countriesLastUpdateDate = json.countriesLastUpdateDate;
        localStorage.countries = JSON.stringify(res.result);
      }
    }

    Fn.initAll();
    // if (!answ.data || answ.data == "null") {
    //   return
    // }
    // let myInfo = JSON.parse(answ.data)
    // Variable.myInfo = Object.assign(Variable.myInfo, myInfo)
  });
  eventSource.addEventListener("notifyQuestion", async ({ data }) => {
    let res = strToJson(data);
    Fn.initOne("alert", {
      title: Variable.words[res.name],
      text: Variable.words[res.description],
    });
    Variable.notifies[res?.type].push(res);
    console.log("=348e1f=", Variable.notifies);
    Fn.initAll();
  });

  // Variable.Auth = false
  return;
};

export { uuidv4, editText, searchLink, indexDB, IndexDBGetByOne };
