import { Fn, Static, front } from "cemjs-all";
import { indexDB, IndexDBGetByOne } from "./indexDB";

export const sendApi = async function (
  url: string,
  data: any,
  method = "POST",
  auth = false,
) {
  try {
    Fn.initOne("modalAuthtorization", {});
    console.log("=1c5dda=", 1);
    Static.authState = await IndexDBGetByOne({
      base: "auth",
      key: "authorized",
    });
    console.log("=13fdca=", 2);
    Fn.log("=962545=", Static.authState);
    if (auth) {
      front;
      alert(1);
    }
    data.uuid = localStorage.uuid;
    data.suuid = localStorage.suuid;
    url += `?uuid=${localStorage.uuid}`;
    let answer = await fetch(url, {
      method,
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });

    let json = await answer.json();
    return json;
  } catch (error) {
    return { error };
  }
};

export { indexDB, IndexDBGetByOne };
