import { Static, front } from "cemjs-all";

export default [
  // get question
  {
    type: "getById",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }
      Static.post = json;
    },
  },
];
