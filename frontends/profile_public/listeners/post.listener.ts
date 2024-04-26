import { Static, front } from "cemjs-all";

export default [
  {
    type: "get",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }

      Static.records = json;
    },
  },
  {
    type: "add",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }
      Static.records = [...Static.records, ...json];
    },
  },
];
