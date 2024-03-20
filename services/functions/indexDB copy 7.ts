import { front, Static } from "cemjs-all";
import { openDB } from "idb";
import { sendApi } from "./sendApi";
export { sendApi };

let db: any;

async function indexDB({ json }) {
  db = await openDB("CryptoEmergency", 1, {
    upgrade(db) {
      db.createObjectStore("dateUpdate");
      db.createObjectStore("counts");
    },
  });

  let transaction = db.transaction(["dateUpdate"], "readwrite");
  let store = transaction.objectStore("dateUpdate");
  let reqCountry = await store.get("country");
  let reqLang = await store.get("lang");
  let reqTranslations = await store.get("translations");

  if (!reqCountry || reqCountry < json?.versions?.countriesLastUpdateDate) {
    transaction = db.transaction(["dateUpdate"], "readwrite");
    store = transaction.objectStore("dateUpdate");
    store.put(json?.versions?.countriesLastUpdateDate, "country");
    console.log("country value from fetch set!");
  }
  if (!reqLang || reqLang < json?.versions?.languagesLastUpdateDate) {
    transaction = db.transaction(["dateUpdate"], "readwrite");
    store = transaction.objectStore("dateUpdate");
    store.put(json?.versions?.languagesLastUpdateDate, "lang");
    console.log("country value from fetch set!");
  }
  if (!reqTranslations || reqTranslations < json?.versions?.translationsLastUpdateDate) {
    transaction = db.transaction(["dateUpdate"], "readwrite");
    store = transaction.objectStore("dateUpdate");
    store.put(json?.versions?.translationsLastUpdateDate, "translations");
    console.log("country value from fetch set!");
  }

  
  transaction = db.transaction(["counts"], "readwrite");
  store = transaction.objectStore("counts");
  let counts = await store.get("counts");

  if (!counts || reqCountry < json?.versions?.countriesLastUpdateDate) {
    let response = await sendApi("/api/countries", {});
    let data = await response?.result;
    console.log("data", data);
    transaction = db.transaction(["counts"], "readwrite");
    store = transaction.objectStore("counts");
    store.put([data], "counts");
    console.log("initialized counts with empty array!");
  }
}
const IndexDBgetByOne = function (item: any) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(item?.base, "readonly");
    const store = transaction.objectStore(item?.base);
    const request = store.get(item?.key);

    request.onsuccess = function () {
      let value = request.result;
      resolve(value); // resolve the value
    };

    request.onerror = function (event) {
      reject(event.target.error); // reject on error
    };
  });
};
export { indexDB, IndexDBgetByOne };
