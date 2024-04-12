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

  let { result } = await front.Services.functions.sendApi(
    `/api/notifications`,
    {},
  );
  Static.questionsList = result.notifyQuestions;
  Static.awardsList = result.notifyAwards;
  Static.systemList = result.notifySystem;
  Static.actualNotify = Static.questionsList;

  console.log("=799db1=", Static.questionsList);

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
