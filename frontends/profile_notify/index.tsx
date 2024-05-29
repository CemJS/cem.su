import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";
import awards from '@svg/sections/awards.svg';

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

export type Notify = {
  icon: String;
  title: string;
  text: string;
  date: Date;
}
export type ServerResponse = {
  questions: null | Notify[];
  awards: null | Notify[];
  system: null | Notify[];
}
front.loader = async () => {
  Static.activeNotify = "questions";

  // const { result } = await front.Services.functions.sendApi(
  //   `/api/notifications`,
  //   {},
  // );

  const result: ServerResponse = {
    questions: [
      {
        icon: awards,
        title: "questionsIYGfb73478123",
        text: "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd",
        date: new Date(),
      },
      {
        icon: awards,
        title: "questionsIYGfb73478123",
        text: "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd",
        date: new Date(),
      },
      {
        icon: awards,
        title: "questionsIYGfb73478123",
        text: "asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd",
        date: new Date(),
      },
    ],
    awards: [
      {
        icon: awards,
        title: "awards",
        text: "asdasd",
        date: new Date(),
      },
    ],
    system: [
      {
        icon: awards,
        title: "dasdas",
        text: "asdasd",
        date: new Date(),
      },
    ]
  }

  Static.notifyList = result;

  return;
};

front.destroy = async () => {
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
