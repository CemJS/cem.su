import { Func, Static, front } from "cemjs-all";

export default [
  // get
  {
    type: "get",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }

      Static.records = json;
      console.log("=628fef=", json);
    },
  },
  // like
  {
    type: "likePost",
    fn: ({ data }) => {
      let { id } = front.Services.functions.strToJson(data);
      if (!id) {
        return;
      }

      let postIndex = Func.findIndexPost(id);

      Static.records[postIndex].statistics.rating++;
    },
  },
  // dislike
  {
    type: "dislikePost",
    fn: ({ data }) => {
      let { id } = front.Services.functions.strToJson(data);
      if (!id) {
        return;
      }

      let postIndex = Func.findIndexPost(id);

      Static.records[postIndex].statistics.rating--;
    },
  },
  // skip
  {
    type: "skip",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }
      Static.records = [...Static.records, ...json];
    },
  },
];
