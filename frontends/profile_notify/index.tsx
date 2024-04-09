import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.loader = async () => {
  Static.notify = "questions";

  // Static.questionsList = [
  //   {
  //     title: "Задан новый вопрос!",
  //     description: "Задан новый вопрос на ваших языках",
  //     date: "час назад",
  //   },
  //   {
  //     title: "Новый лайк!",
  //     description: "Вам поставили лайк. Рейтинг увеличен",
  //     nickname: "UserName",
  //     date: "5 сентября 2023",
  //   },
  //   {
  //     title: "Задан новый вопрос!",
  //     description: "Задан новый вопрос на ваших языках",
  //     date: "28 августа 2023",
  //   },
  //   {
  //     title: "Новый лайк!",
  //     description: "Вам поставили лайк. Рейтинг увеличен",
  //     nickname: "UserName",
  //     date: "23 августа 2023",
  //   },
  //   {
  //     title: "Задан новый вопрос!",
  //     description: "Задан новый вопрос на ваших языках",
  //     date: "17 августа 2023",
  //   },
  // ];

  // Static.awardsList = [
  //   {
  //     title: "Получена награда!",
  //     description: "За первый заданный вопрос на сайте",
  //     date: "2 часа назад",
  //   },
  //   {
  //     title: "Получена награда!",
  //     description: "За первого подписчика",
  //     date: "6 сентября 2023",
  //   },
  //   {
  //     title: "Получена награда!",
  //     description: "За первый пост на сайте",
  //     date: "4 сентября 2023",
  //   },
  //   {
  //     title: "Получена награда!",
  //     description: "За первый ответ на сайте",
  //     date: "1 сентября 2023",
  //   },
  // ];
  let { result } = await front.Services.functions.sendApi(
    `/api/notifications`,
    {},
  );
  Static.questionsList = result.notifyQuestions;
  Static.awardsList = result.notifyAwards;
  Static.systemList = result.notifySystem;
  Static.actualNotify = Static.questionsList;

  console.log("=799db1=", Static.questionsList);

  const lang = localStorage.lang;
  Static.words = await front.Services.functions.IndexDBGetByOne({
    base: "linguaData",
    key: "translations",
  });
  Static.words = Static.words[0];
  Static.words = Static.words.find((item) => item.code == lang);
  Static.words = Static.words?.notify;

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
