import { front } from "cemjs-all";
import { sendApi } from "./sendApi";
export { sendApi };

const indexDB = async function ({ json }) {
  const openDB = indexedDB.open("CryptoEmergency", 1);
  openDB.onupgradeneeded = async function () {
    const db = openDB.result;
    if (!db.objectStoreNames.contains("dataUpdate")) {
      db.createObjectStore("dataUpdate", { keyPath: "key" });
    }
  };
  openDB.onsuccess = function () {
    const db = openDB.result;
    const transaction = db.transaction("dataUpdate", "readwrite");
    const store = transaction.objectStore("dataUpdate");
    const getCountry = store.get("country");
    const getLang = store.get("lang");
    const getTranslations = store.get("translations");
    getCountry.onsuccess = async function () {
      if (!getCountry.result) {
        store.add({
          key: "country",
          value: json?.countriesLastUpdateDate,
        });
        let res = await sendApi("/api/countries", {});
      } else if (getCountry.result?.value < json?.countriesLastUpdateDate) {
        store.put({
          key: "country",
          value: json?.countriesLastUpdateDate,
        });
        let res = await sendApi("/api/countries", {});
      } else {
        return;
      }
    };
    getLang.onsuccess = async function () {
      if (!getLang.result) {
        store.add({
          key: "lang",
          value: json?.languagesLastUpdateDate,
        });
        let res = await sendApi("/api/languages", {});
      } else if (getLang.result?.value < json?.languagesLastUpdateDate) {
        store.put({
          key: "lang",
          value: json?.languagesLastUpdateDate,
        });
        let res = await sendApi("/api/languages", {});
      }
    };
    getTranslations.onsuccess = async function () {
      if (!getTranslations.result) {
        store.add({
          key: "translations",
          value: json?.translationsLastUpdateDate,
        });
        let res = sendApi("/api/translations", {});
      } else if (
        getTranslations.result?.value < json?.translationsLastUpdateDate
      ) {
        store.put({
          key: "translations",
          value: json?.translationsLastUpdateDate,
        });
        let res = await sendApi("/api/translations", {});
      }
    };
  }
  openDB.onsuccess = function (lang) {
    getLang = lang;
  };
};

let getLang: any;
const indexDBGetLang = function (): Promise<any> {
  //   console.log("=8ad7e3=", tmpI.target);
  return new Promise((resolve, reject) => {
    const db = getLang.target.result;
    const transaction = db.transaction("dataUpdate", "readonly");
    const store = transaction.objectStore("dataUpdate");
    const getCountry = store.get("lang");
    getCountry.onsuccess = function () {
    //   console.log("=ded903=", getCountry.result);
    //   front.Variable.item = getCountry.result;
      resolve(getCountry.result);
    };
    getCountry.onerror = function (e: any) {
      console.log("=ded903= errr", e);
    };
  });
};

const indexDBGetCountry = function (): Promise<any> {
  return new Promise((resolve, reject) => {
    const openDB = indexedDB.open("CryptoEmergency", 1);

    openDB.onupgradeneeded = function () {
      const db = openDB.result;
      if (!db.objectStoreNames.contains("dataUpdate")) {
        db.createObjectStore("dataUpdate", { keyPath: "key" });
      }
    };

    openDB.onsuccess = function (db2) {
      //   tmpI = db2;
      resolve(false);
      // const db = openDB.result;
      // const transaction = db.transaction("dataUpdate","readonly");
      // const store = transaction.objectStore("dataUpdate");
      // const getCountry = store.get("country");
      // getCountry.onsuccess = function () {
      //   resolve(getCountry.result);
      // };
      // getCountry.onerror = function (e) {
      //   reject(e);
      // }
    };

    openDB.onerror = function (e) {
      reject(e);
    };
  });
};
export { indexDB, indexDBGetCountry, indexDBGetLang };
