import { openDB } from 'idb';
import { sendApi } from "./sendApi";

async function indexDB() {
  const db = await openDB('my-db', 1, {
    upgrade(db) {
      db.createObjectStore('dateUpdate');
      db.createObjectStore('counts');
    },
  });

  let transaction = db.transaction(['dateUpdate'], 'readwrite');
  let store = transaction.objectStore('dateUpdate');
  let reqCountry = await store.get('country');
  
  if (!reqCountry) {
    let response = await sendApi("/api/countries", {});
    let data = await response.json();
    
    store.put(data.country, 'country');
    console.log('country value from fetch set!');
  }

  transaction = db.transaction(['counts'], 'readwrite');
  store = transaction.objectStore('counts');
  let counts = await store.get('counts');
  
  if (!counts) {
    store.put([], 'counts');
    console.log('initialized counts with empty array!');
  }
}

export { indexDB };
