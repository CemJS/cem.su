import { front, Static } from "cemjs-all";
import { openDB } from "idb";
import { sendApi } from "./sendApi";
export { sendApi };

let db: any;

async function indexDB({ json }) {
  db = await openDB("CryptoEmergency", 1, {
    upgrade(db) {
      db.createObjectStore("dateUpdate");
      db.createObjectStore("countries");
    },
  });

  let transaction = db.transaction(["dateUpdate"], "readwrite");
  let store = transaction.objectStore("dateUpdate");
  let reqCountry = await store.get("country");
  let reqLang = await store.get("lang");
  let reqTranslations = await store.get("translations");

  if (!reqCountry || reqCountry < json?.countriesLastUpdateDate) {
    store.put(json?.countriesLastUpdateDate, "country");
  }
  if (!reqLang || reqLang < json?.languagesLastUpdateDate) {
    store.put(json?.languagesLastUpdateDate, "lang");
  }
  if (!reqTranslations || reqTranslations < json?.translationsLastUpdateDate) {
    store.put(json?.translationsLastUpdateDate, "translations");
  }

  transaction = db.transaction(["countries"], "readwrite");
  store = transaction.objectStore("countries");
  let countries = await store.get("countries");

  if (!countries || reqCountry < json?.countriesLastUpdateDate) {
    let response = await sendApi("/api/countries", {});
    let data = await response?.result;
    console.log("data", data);
    transaction = db.transaction(["countries"], "readwrite");
    store = transaction.objectStore("countries");
    store.put([data], "countries");
    console.log("initialized countries with empty array!");
  }
}

interface Object {
  base: string;
  key: string;
}
const IndexDBgetByOne = async function (item: Object) {
  return new Promise(async (resolve, reject) => {
    let transaction = db.transaction([item?.base], "readonly");
    let store = transaction.objectStore(item?.base);
    let req = store.get(item?.key);
    let value = await req;
    resolve(value); // resolve the value
    req.onerror = function (event: any) {
      reject(event.target.error); // reject on error
    };
  });
};
export { indexDB, IndexDBgetByOne };
