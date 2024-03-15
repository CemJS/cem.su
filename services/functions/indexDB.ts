import { front } from "cemjs-all";
import { sendApi } from "./sendApi";
export { sendApi };

let db: any;

const indexDB = async function () {
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
  };
};

const getIndexDB = function (params1:string, params2:string) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(params1, "readonly");
    const store = transaction.objectStore(params1);
    const request = store.get(params2);

    request.onsuccess = function () {
      let value = request.result;
      resolve(value); // resolve the value
    };

    request.onerror = function (event) {
      reject(event.target.error); // reject on error
    };
  });
};
export { indexDB, getIndexDB };
