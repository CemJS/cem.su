import { Cemjsx, front, Func, Static, Fn, Events, Ref } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

// ======== videoplayer start ========
front.func.playAndPause = (video: any) => {
  // video.paused ? video.play() : video.pause()
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }

  return;
};

front.func.formatTime = (time: any) => {
  let seconds = Math.floor(time % 60),
    minutes = Math.floor(time / 60) % 60,
    hours = Math.floor(time / 3600);

  seconds = seconds < 10 ? Number(`0${seconds}`) : seconds;
  minutes = minutes < 10 ? Number(`0${minutes}`) : minutes;
  hours = hours < 10 ? Number(`0${hours}`) : hours;

  if (hours == 0) {
    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }
  return `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

front.func.draggableProgressBar = (e: any) => {
  let timeLineWidth = Ref.videoTimeLine.clientWidth;
  Ref.progressBar.style.width = `${e.offsetX}px`;
  Ref.video.currentTime = (e.offsetX / timeLineWidth) * Ref.video.duration;
  return;
};
// ======== videoplayer end ========

front.func.getDate = (timestamp: any) => {
  return new Date(timestamp);
};

front.func.addNull = (str: any) => {
  str = String(str);
  return str.length < 2 ? `0${str}` : str;
};

front.func.isEditable = (timestamp: string | number) => {
  let createDate = new Date(timestamp).getTime();
  let date = new Date().getTime();

  let isOneDayExpired = (date - createDate) / 3600000 < 24;

  return isOneDayExpired;
};

front.func.edit = (id) => {
  Func.hideInputs();
  Static.currentEditing = id;
  Static[`isEditing${id}`] = true;
};

front.func.closeEdit = (id) => {
  Static[`isEditing${id}`] = false;
};

// questions

front.func.getQuestion = async (id) => {
  let url = front.Services.functions.makeUrlEvent(`questions/${id}`);

  Events.questions = await Fn.event(url, Static.questionListener);

  front.Services.functions.sendApi(`/api/questions/${id}/answers`, {});
};

front.func.deleteQuestion = async () => {
  let res = await front.Services.functions.sendApi(
    `/api/questions/${Static.record.id}/delete`,
    {},
  );
  front.Variable.$el.header.classList.remove("hide");
  front.Variable.$el.footer.classList.remove("hide");
  Static.record = null;
  Events.questions.close();
  Fn.linkChange("/questions");
};

front.func.closeQuestion = async () => {
  Static.record.closed = true;
  Func.sendAuth(`/api/questions/${Static.record.id}/close`, {});
};

front.func.reportQuestion = async () => {
  front.Services.functions.sendApi(
    `/api/questions/${Static.record.id}/complain`,
    {},
  );
};

// answer

front.func.deleteAnswer = async (id: string) => {
  let res = await front.Services.functions.sendApi(
    `/api/answers/${id}/delete`,
    {},
  );
};

front.func.bestAnswer = async (id: string) => {
  Static.record.closed = true;
  let res = await front.Services.functions.sendApi(
    `/api/questions/${Static.record.id}/answers/${id}/close`,
    {},
  );
};

front.func.deleteAnswer = async (id: string) => {
  let res = await front.Services.functions.sendApi(
    `/api/answers/${id}/delete`,
    {},
  );
};

// comment

front.func.deleteComment = async (
  id: string,
  answerId: string,
  commentId: string,
) => {
  let data = {
    commentId: commentId ? commentId : undefined,
  };
  let res = await front.Services.functions.sendApi(
    `/api/${answerId}/comments/${id}/delete`,
    data,
  );
};

// функция проверки авторизации

front.func.sendAuth = async (url: string, data: object, method = "POST") => {
  if (front.Variable.Auth) {
    let res = await front.Services.functions.sendApi(url, data, method);
    console.log("=55a7bd=", res);
    if (res?.status == 409) {
      Fn.initOne("alert", { text: "Рейтинг уже начислен", type: "danger" });
      return;
    }
    if (res?.error) {
      Fn.initOne("alert", { text: "Ошибка запроса" });
      return;
    }
    return res;
  } else {
    Fn.initOne("modalAuthtorization", {});
  }
};

//

front.func.hideInputs = () => {
  console.log("=00e74a=", Static.currentEditing);
  Func.closeEdit(Static.currentEditing);
  let inputs = document.querySelectorAll("#form");
  let arr = [...inputs];
  for (let elem of arr) {
    elem.classList.remove("!flex");
  }
};

front.func.findIndexAnswer = (id) => {
  return Static.record.answers.findIndex((item) => item.id == id);
};

front.func.findIndexComment = (id, answerIndex) => {
  return Static.record.answers[answerIndex].comments.findIndex(
    (item) => item.id == id,
  );
};

front.func.findIndexCommentToComment = (id, answerIndex, commentIndex) => {
  console.log("=b53b67=", id);
  console.log(
    "=09f769=",
    Static.record.answers[answerIndex].comments[commentIndex].comments,
  );
  return Static.record.answers[answerIndex].comments[
    commentIndex
  ].comments.findIndex((item) => item.id == id);
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

  if (front.Variable.DataUrl[1] && front.Variable.DataUrl[1] === "show") {
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
