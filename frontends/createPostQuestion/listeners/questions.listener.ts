import { Func, Static, front, Fn } from "cemjs-all";

export default [
  {
    type: "get",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }

      Static.questions = json;
    },
  },
  {
    type: "update",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }
      Fn.log("json questions",json)
      Static.questions.forEach((item, index) => {
        if (item.id == json.id) {
          Static.questions[index] = json;
        }
      });
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
