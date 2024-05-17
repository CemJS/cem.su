import { Func, Static, front } from "cemjs-all";

export default [
  {
    type: "get",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }

      Static.questions = json;
      console.log("=127e7c=", Static.questions);
    },
  },
  {
    type: "create",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }

      Static.questions.unshift(json);
    },
  },
  {
    type: "skip",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }
      Static.questions = [...Static.questions, ...json];
    },
  },
  {
    type: "delete",
    fn: ({ data }) => {
      let { id } = front.Services.functions.strToJson(data);
      if (!id) {
        return;
      }
      Static.questions = [
        ...Static.questions.filter((record) => record.id != id),
      ];
    },
  },
];
