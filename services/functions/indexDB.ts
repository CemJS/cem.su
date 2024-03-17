import { front } from "cemjs-all";
import { sendApi } from "./sendApi";
export { sendApi };

let db: any;

const indexDB = async function ({ json }) {
  const openDB = indexedDB.open("CryptoEmergency", 1);
  openDB.onerror = function (event) {
    alert(
      "Почему вы не позволяете моему веб-приложению использовать IndexedDB?!",
    );
  };
  openDB.onupgradeneeded = async function () {
    db = openDB.result;
    if (!db.objectStoreNames.contains("dataUpdate")) {
      db.createObjectStore("dataUpdate", { keyPath: "key" });
    }
  };
  console.log("БАЗА ОТКРЫТА");

  openDB.onsuccess = function () {
    db = openDB.result;
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
