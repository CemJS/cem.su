import { Cemjsx, front, Func, Static, Fn, Events, Ref } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

// ======== videoplayer start ========

// ======== videoplayer end ========
front.func.updateFilter = async () => {
  Static.makeFilter = {
    sort: Static.sort,
    order: Static.order,
    search: Static.search,
    isClosed:
      Static.type == "opened"
        ? false
        : Static.type == "closed"
          ? true
          : undefined,
    isBest: Static.type == "best",
    language: Static.chooseLanguage.code,
  };
  let res = await front.Services.functions.sendApi(
    "/api/questions",
    Static.makeFilter,
  );
  return;
};

// questions

front.func.getQuestion = async (id) => {
  let url = front.Services.functions.makeUrlEvent(`questions/${id}`);

  Events.questions = await Fn.event(url, Static.questionListener);

  front.Services.functions.sendApi(`/api/questions/${id}/answers`, {});
};

front.loader = async () => {
  Static.open = "Ответить";

  Static.search = "";
  Static.order = -1;
  Static.types = [
    {
      name: "All",
      text: "Все вопросы",
    },
    {
      name: "opened",
      text: "Ожидающие ответа",
    },
    {
      name: "closed",
      text: "Закрытые вопросы",
    },
    {
      name: "best",
      text: "Закрытые с лучшим ответом",
    },
  ];

  Static.type = "All";

  Static.chooseLanguage = {
    engName: "Russian",
    origName: "Русский",
    code: "ru",
  };

  Static.sorts = [
    {
      name: "date",
      text: "По дате",
    },
    {
      name: "views",
      text: "По просмотрам",
    },
    {
      name: "answers",
      text: "По ответам",
    },
  ];

  Static.sort = "date";

  // Func.updateFilter();

  Static.makeFilter = {
    sort: Static.sort,
    order: Static.order,
    search: Static.search,
    isClosed:
      Static.type == "opened"
        ? false
        : Static.type == "closed"
          ? true
          : undefined,
    isBest: Static.type == "best",
    language: Static.chooseLanguage.code,
  };

  delete Static.makeFilter.isClosed; //== undefined ? Static.makeFilter.

  let url = front.Services.functions.makeUrlEvent(
    "questions",
    Static.makeFilter,
  );
  let listener = [
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
      type: "create",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        console.log("=8587af=", json);

        Static.records.unshift(json);
        console.log("=4d73fb=", Static.records);
      },
    },
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
    {
      type: "delete",
      fn: ({ data }) => {
        let { id } = front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }
        console.log("=05c3a3=", id);
        Static.records = [
          ...Static.records.filter((record) => record.id != id),
        ];
      },
    },
  ];
  Events.questions = await Fn.event(url, listener);

  Static.questionListener = [
    // get question
    {
      type: "getById",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        Static.record = json;
      },
    },
    // answer -------------------
    // get
    {
      type: "getAnswers",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        Static.record.answers = json;
      },
    },
    // skip
    {
      type: "skipAnswers",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        Static.record.answers = [...Static.record.answers, ...json];
      },
    },
    // best
    {
      type: "bestAnswer",
      fn: ({ data }) => {
        let { id } = front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(id);

        Static.record.answers[answerIndex].best = true;
      },
    },
    // delete
    {
      type: "deleteAnswer",
      fn: ({ data }) => {
        let { id } = front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        Static.record.answers = Static.record.answers.filter(
          (item) => item.id != id,
        );
      },
    },
    // create answer
    {
      type: "answer",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }
        Static.record.answers.unshift(json);
        Static.record.statistics.answers++;
      },
    },
    // like
    {
      type: "likeAnswer",
      fn: ({ data }) => {
        let { id } = front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(id);

        Static.record.answers[answerIndex].statistics.rating++;
      },
    },
    // dislike
    {
      type: "dislikeAnswer",
      fn: ({ data }) => {
        let { id } = front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(id);

        Static.record.answers[answerIndex].statistics.rating--;
      },
    },
    // edit
    {
      type: "updateAnswer",
      fn: ({ data }) => {
        let { id, text } = front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(id);

        Static.record.answers[answerIndex].text = text;
      },
    },
    // comment ------------------------
    // get
    {
      type: "getAnswerComments",
      fn: ({ data }) => {
        let { answerId, comments } = front.Services.functions.strToJson(data);
        if (!answerId) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(answerId);

        Static.record.answers[answerIndex].comments = comments;
      },
    },
    // create
    {
      type: "comment",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(json.answerId);

        Static.record.answers[answerIndex].statistics.comments++;
        if (!Array.isArray(Static.record.answers[answerIndex].comments)) {
          Static.record.answers[answerIndex].comments = [];
        }
        Static.record.answers[answerIndex].comments.push(json.comment);
        Static.record.statistics.answers++;
      },
    },
    // delete
    {
      type: "deleteComment",
      fn: ({ data }) => {
        let { id, answerId } = front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(answerId);
        let commentIndex = Func.findIndexComment(id, answerIndex);

        let comments = Static.record.answers[answerIndex]?.comments[
          commentIndex
        ].comments?.length
          ? Static.record.answers[answerIndex]?.comments[commentIndex].comments
              ?.length
          : 0;

        console.log("=759005=", comments);

        Static.record.answers[answerIndex].statistics.comments -= comments + 1;

        Static.record.answers[answerIndex].comments = Static.record.answers[
          answerIndex
        ].comments.filter((item) => item.id != id);
      },
    },
    // like
    {
      type: "likeComment",
      fn: ({ data }) => {
        let { id, answerId } = front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(answerId);
        let commentIndex = Func.findIndexComment(id, answerIndex);

        Static.record.answers[answerIndex].comments[commentIndex].statistics
          .rating++;
      },
    },
    // dislike
    {
      type: "dislikeComment",
      fn: ({ data }) => {
        let { id, answerId } = front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(answerId);
        let commentIndex = Func.findIndexComment(id, answerIndex);

        Static.record.answers[answerIndex].comments[commentIndex].statistics
          .rating--;
      },
    },
    // edit
    {
      type: "updateComment",
      fn: ({ data }) => {
        let { id, answerId, text } = front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(answerId);
        let commentIndex = Func.findIndexComment(id, answerIndex);

        Static.record.answers[answerIndex].comments[commentIndex].text = text;
      },
    },
    // comment to comment -------------------------
    // delete
    {
      type: "deleteCommentToComment",
      fn: ({ data }) => {
        let { id, answerId, commentId } =
          front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(answerId);
        let commentIndex = Func.findIndexComment(commentId, answerIndex);

        Static.record.answers[answerIndex].statistics.comments--;

        Static.record.answers[answerIndex].comments[commentIndex].comments =
          Static.record.answers[answerIndex].comments[
            commentIndex
          ].comments.filter((item) => item.id != id);
      },
    },
    // create
    {
      type: "commentToComment",
      fn: ({ data }) => {
        let json = front.Services.functions.strToJson(data);
        if (!json) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(json.answerId);

        let commentIndex = Func.findIndexComment(json.commentId, answerIndex);

        Static.record.answers[answerIndex].statistics.comments++;

        if (
          !Array.isArray(
            Static.record.answers[answerIndex].comments[commentIndex].comments,
          )
        ) {
          Static.record.answers[answerIndex].comments[commentIndex].comments =
            [];
        }
        Static.record.answers[answerIndex].comments[commentIndex].comments.push(
          json.comment,
        );
        Static.record.statistics.answers++;
      },
    },
    // like
    {
      type: "likeCommentToComment",
      fn: ({ data }) => {
        let { id, answerId, commentId } =
          front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(answerId);
        let commentIndex = Func.findIndexComment(commentId, answerIndex);
        let commentToCommentIndex = Func.findIndexCommentToComment(
          id,
          answerIndex,
          commentIndex,
        );

        Static.record.answers[answerIndex].comments[commentIndex].comments[
          commentToCommentIndex
        ].statistics.rating++;
      },
    },
    // dislike
    {
      type: "dislikeCommentToComment",
      fn: ({ data }) => {
        let { id, answerId, commentId } =
          front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(answerId);
        let commentIndex = Func.findIndexComment(commentId, answerIndex);
        let commentToCommentIndex = Func.findIndexCommentToComment(
          id,
          answerIndex,
          commentIndex,
        );

        Static.record.answers[answerIndex].comments[commentIndex].comments[
          commentToCommentIndex
        ].statistics.rating--;
      },
    },
    // edit
    {
      type: "updateCommentToComment",
      fn: ({ data }) => {
        let { id, answerId, commentId, text } =
          front.Services.functions.strToJson(data);
        if (!id) {
          return;
        }

        let answerIndex = Func.findIndexAnswer(answerId);
        let commentIndex = Func.findIndexComment(commentId, answerIndex);
        let commentToCommentIndex = Func.findIndexCommentToComment(
          id,
          answerIndex,
          commentIndex,
        );

        Static.record.answers[answerIndex].comments[commentIndex].comments[
          commentToCommentIndex
        ].text = text;
      },
    },
  ];

  if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] == "show") {
    Func.getQuestion(front.Variable.DataUrl[2]);
  }

  return;
};

front.display = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export { front };
