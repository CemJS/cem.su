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
  // comment
  {
    type: "comment",
    fn: ({ data }) => {
      let { postId } = front.Services.functions.strToJson(data);
      if (!postId) {
        return;
      }

      let postIndex = Func.findIndexPost(postId);

      Static.records[postIndex].statistics.comments++;
    },
  },
];
