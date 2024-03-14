import { front } from "cemjs-all";
import { sendApi } from "./sendApi";
export { sendApi };

const indexDB = async function ({ json }) {
  //   console.log("123", json?.countriesLastUpdateDate);

  const openDB = indexedDB.open("CryptoEmergency", 1);
  openDB.onupgradeneeded = async function () {
    const db = openDB.result;
    // console.log("openDB", openDB);

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
  };
};

const indexDBGetCountry = async function (item:{}) {
    const openDB = indexedDB.open("CryptoEmergency", 1);
    openDB.onupgradeneeded = async function () {
      const db = openDB.result;
      if (!db.objectStoreNames.contains("dataUpdate")) {
        db.createObjectStore("dataUpdate", { keyPath: "key" });
      }
    };
    openDB.onsuccess = function () {
      const db = openDB.result;
      const transaction = db.transaction("dataUpdate","readonly");
      const store = transaction.objectStore("dataUpdate");
      const getCountry = store.get("country");
      getCountry.onsuccess = function () {
          item = getCountry.result
        console.log("item", item);
      };
    };
};
export { indexDB, indexDBGetCountry };
