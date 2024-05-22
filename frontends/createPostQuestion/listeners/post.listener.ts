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

      Static.posts = json;
    },
  },
  // update
  {
    type: "update",
    fn: ({ data }) => {
      let json = front.Services.functions.strToJson(data);
      if (!json) {
        return;
      }
      Static.posts.forEach((item, index) => {
        if (item.id == json.id) {
          Static.posts[index] = json;
        }
      });
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

      Static.posts[postIndex].statistics.rating++;
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

      Static.posts[postIndex].statistics.rating--;
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
      Static.posts = [...Static.posts, ...json];
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

      Static.posts[postIndex].statistics.comments++;
    },
  },
];

front.func.findIndexPost = (id) => {
  return Static.posts.findIndex((item) => item.id == id);
};

front.func.findIndexComment = (id, postIndex) => {
  return Static.posts[postIndex].comments.findIndex((item) => item.id == id);
};

front.func.findIndexCommentToComment = (id, postIndex, commentIndex) => {
  console.log("=b53b67=", id);
  console.log(
    "=09f769=",
    Static.posts[postIndex].comments[commentIndex].comments,
  );
  return Static.posts[postIndex].comments[commentIndex].comments.findIndex(
    (item) => item.id == id,
  );
};
