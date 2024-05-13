import { Func, Static, front } from "cemjs-all";

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
  // like
  {
    type: "likePost",
    fn: ({ data }) => {
      let { id } = front.Services.functions.strToJson(data);
      if (!id) {
        return;
      }

      Static.post.statistics.rating++;
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

      Static.post.statistics.rating--;
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

      Static.post.statistics.comments++;
    },
  },
];
