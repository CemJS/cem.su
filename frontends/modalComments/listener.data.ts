import { Fn, Func, Static, front } from "cemjs-all";

export default [
  // comments --------------
  // get
  {
    type: "get",
    fn: ({ data }) => {
      let { comments } = front.Services.functions.strToJson(data);
      if (!comments) {
        return;
      }
      Static.comments = comments;
    },
  },
  // create
  {
    type: "addComment",
    fn: ({ data }) => {
      let { comment, postId } = front.Services.functions.strToJson(data);
      if (!comment) {
        return;
      }

      if (!Array.isArray(Static.comments)) {
        Static.comments = [];
      }
      Static.comments.push(comment);
    },
  },
  // like
  {
    type: "likeComment",
    fn: ({ data }) => {
      let { id } = front.Services.functions.strToJson(data);
      if (!id) {
        return;
      }

      let commentIndex = Func.findIndexComment(id);

      Static.comments[commentIndex].statistics.rating++;
    },
  },
  // dislike
  {
    type: "dislikeComment",
    fn: ({ data }) => {
      let { id } = front.Services.functions.strToJson(data);
      if (!id) {
        return;
      }

      let commentIndex = Func.findIndexComment(id);

      Static.comments[commentIndex].statistics.rating--;
    },
  },
  // commentToComments -------
  {
    type: "commentToComment",
    fn: ({ data }) => {
      let { comment, commentId } = front.Services.functions.strToJson(data);
      if (!comment) {
        return;
      }

      let commentIndex = Func.findIndexComment(commentId);

      if (!Array.isArray(Static.comments[commentIndex].comments)) {
        Static.comments[commentIndex].comments = [];
      }
      Static.comments[commentIndex].comments.push(comment);
    },
  },

  // like
  {
    type: "likeCommentToComment",
    fn: ({ data }) => {
      let { id, commentId } = front.Services.functions.strToJson(data);
      if (!id) {
        return;
      }

      let commentIndex = Func.findIndexComment(commentId);
      let commentToCommentIndex = Func.findIndexCommentToComment(
        id,
        commentIndex,
      );

      Static.comments[commentIndex].comments[commentToCommentIndex].statistics
        .rating++;
    },
  },
  // dislike
  {
    type: "dislikeCommentToComment",
    fn: ({ data }) => {
      let { id, commentId } = front.Services.functions.strToJson(data);
      if (!id) {
        return;
      }

      let commentIndex = Func.findIndexComment(commentId);
      let commentToCommentIndex = Func.findIndexCommentToComment(
        id,
        commentIndex,
      );

      Static.comments[commentIndex].comments[commentToCommentIndex].statistics
        .rating--;
    },
  },
];
