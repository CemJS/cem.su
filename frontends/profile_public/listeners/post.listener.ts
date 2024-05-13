import { Static, front } from "cemjs-all";

export default [
  {
    type: "get",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }

      console.log("=9bba39=", json);
      Static.posts = json;
    },
  },
  {
    type: "add",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }
      Static.posts = [...Static.records, ...json];
    },
  },
];
