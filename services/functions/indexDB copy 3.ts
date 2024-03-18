import { front } from "cemjs-all";
import { sendApi } from "./sendApi";
export { sendApi };

let db: any;

const indexDB = async ({ json }) => {
    const openDB = indexedDB.open("CryptoEmergency", 1);

    openDB.onerror = function (event) {
        // Обработка ошибок
    };

    openDB.onupgradeneeded = function () {
        db = openDB.result;
        if (!db.objectStoreNames.contains("dataUpdate")) {
            db.createObjectStore("dataUpdate", { keyPath: "key" });
        }
    };

    db = await new Promise((resolve, reject) => {
        openDB.onsuccess = () => resolve(openDB.result);
        openDB.onerror = () => reject(openDB.error);
    });

    // Получение данных перед началом транзакции
    const dataFromDB = await fetchDataFromDB();

    const transaction = db.transaction("dataUpdate", "readwrite");
    const store = transaction.objectStore("dataUpdate");

    try {
        let getCountry = await new Promise((resolve, reject) => {
            let getCountryRequest = store.get("country");
            getCountryRequest.onsuccess = () => resolve(getCountryRequest.result);
            getCountryRequest.onerror = () => reject(getCountryRequest.error);
        });

        // Выполняете операцию добавления только если его нет в хранилище
        if (!getCountry) {
            let addRequest = store.add({
                key: "country",
                date: json?.countriesLastUpdateDate,
                countrys: dataFromDB ? dataFromDB?.result : null,
            });
            await new Promise<void>((resolve, reject) => {
                addRequest.onsuccess = () => resolve();
                addRequest.onerror = () => reject();
            });
        }
    } catch (err) {
        console.log("Error during the transaction", err);
    }

    transaction.oncomplete = () => {
        console.log("Transaction completed");
    };

    transaction.onerror = () => {
        console.log("Transaction not completed ", transaction.error);
    };
};

async function fetchDataFromDB() {
    const response = await fetch("/api/countries", {});
    const data = await response.json();
    return data;
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
