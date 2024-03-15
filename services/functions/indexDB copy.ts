import { front } from "cemjs-all";
import { sendApi } from "./sendApi";
export { sendApi };

function getValueFromOpenDB(db: IDBDatabase, key: string) {
  const transaction = db.transaction('dataUpdate');
  const store = transaction.objectStore('dataUpdate');
  const request = store.get(key);
  return new Promise((resolve, reject) => {
      request.onsuccess = function() {
          resolve(request.result?.value);
      };
      request.onerror = function() {
          reject(request.error);
      };
  });
}

const currentVersion = localStorage.getItem("dbVersion");
const nextVersion = currentVersion ? Number(currentVersion) + 1 : 1;
localStorage.setItem("dbVersion", nextVersion.toString());
let openDB = indexedDB.open("CryptoEmergency", nextVersion);
openDB.onupgradeneeded = async function () {
  let db = openDB.result;
  if (!db.objectStoreNames.contains("dataUpdate")) {
    db.createObjectStore("dataUpdate", { keyPath: "key" });
  }
};

const indexDB = async function (json: any) {
  // получаем текущую версию базы
  const currentVersion = localStorage.getItem("dbVersion");
  const nextVersion = currentVersion ? Number(currentVersion) + 1 : 1;
  localStorage.setItem("dbVersion", nextVersion.toString());
  let openDB = indexedDB.open("CryptoEmergency", nextVersion);
  openDB.onupgradeneeded = async function () {
    let db = openDB.result;
    if (!db.objectStoreNames.contains("dataUpdate")) {
      db.createObjectStore("dataUpdate", { keyPath: "key" });
    }
  };
  // проверка/создание/обновление языка-страны-перевода
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
      } else if (getCountry.result?.value === json?.countriesLastUpdateDate) {
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
  };
  openDB.onsuccess = function () {
    const db = openDB.result;
    getValueFromOpenDB(db, "country").then(countryValue => {
        console.log("country value", countryValue);
    });
    // ... остальной код ...
};
};
export { indexDB, getValueFromOpenDB };
