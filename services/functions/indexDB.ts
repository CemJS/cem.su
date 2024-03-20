import { front, Static } from "cemjs-all";
import { openDB } from "idb";
import { sendApi } from "./sendApi";
export { sendApi };

let db: any;

async function indexDB({ json }) {
  /*autoChangeVersion */
  //   const currentVersion = localStorage.getItem("dbVersion") ? Number(localStorage.getItem("dbVersion")) : 0;
  //  let nextVersion = currentVersion;

  //  let newStores = [];

  //   if (json?.versions?.countriesLastUpdateDate) {
  //     newStores.push("dateUpdateNew");
  //   }

  //   if (newStores.length) {
  //     nextVersion += 1;
  //     db = await openDB("CryptoEmergency", nextVersion, {
  //       upgrade(db) {
  //         newStores.forEach(store => {
  //           if (!db.objectStoreNames.contains(store)) {
  //             db.createObjectStore(store);
  //           }
  //         })
  //       },
  //     });
  //     localStorage.setItem("dbVersion", nextVersion.toString());
  //   }

  /**************************************************************************** */
  db = await openDB("CryptoEmergency", 2, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("dateUpdate")) {
        db.createObjectStore("dateUpdate");
      }
      if (!db.objectStoreNames.contains("linguaData")) {
        db.createObjectStore("linguaData");
      }
    },
  });

  let transaction = db.transaction(["dateUpdate"], "readwrite");
  let store = transaction.objectStore("dateUpdate");
  let reqCountry = await store.get("country");
  let reqLang = await store.get("lang");
  let reqTranslations = await store.get("translations");

  if (!reqCountry || reqCountry < json?.versions?.countriesLastUpdateDate) {
    store.put(json?.versions?.countriesLastUpdateDate, "country");
  }
  if (!reqLang || reqLang < json?.versions?.languagesLastUpdateDate) {
    store.put(json?.versions?.languagesLastUpdateDate, "lang");
  }
  if (!reqTranslations || reqTranslations < json?.versions?.translationsLastUpdateDate) {
    store.put(json?.versions?.translationsLastUpdateDate, "translations");
  }

  transaction = db.transaction(["linguaData"], "readwrite");
  store = transaction.objectStore("linguaData");
  let countriesData = await store.get("countries");
  let languagesData = await store.get("languages");
  let translationsData = await store.get("translations");

  if (!countriesData || reqCountry < json?.versions?.countriesLastUpdateDate) {
    let response = await sendApi("/api/countries", {});
    let data = await response?.result;
    // console.log("data", data);
    transaction = db.transaction(["linguaData"], "readwrite");
    store = transaction.objectStore("linguaData");
    store.put([data], "countries");
    // console.log("initialized linguaData with empty array!");
  }

  if (!languagesData || reqLang < json?.versions?.languagesLastUpdateDate) {
    let response = await sendApi("/api/languages", {});
    let data = await response?.result;
    transaction = db.transaction(["linguaData"], "readwrite");
    store = transaction.objectStore("linguaData");
    store.put([data], "languages"); 
  }

  if (!translationsData || reqTranslations < json?.versions?.translationsLastUpdateDate) {
    let response = await sendApi("/api/translations", {});
    let data = await response?.result;
    transaction = db.transaction(["linguaData"], "readwrite");
    store = transaction.objectStore("linguaData");
    store.put([data], "translations");
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
