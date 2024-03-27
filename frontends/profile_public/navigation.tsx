import { Cemjsx, Fn, front } from "cemjs-all";
import Main from "./display/Main";
import Posts from "./display/Posts";
import Questions from "./display/Questions";

const IfPage = function () {
  switch (front.Variable.DataUrl[2]) {
    case "posts":
      return <Posts />;
    case "question":
      return <Questions />;
  }
};

export default function () {
  return (
    <div>
      <Main />
      <IfPage />
    </div>
  );
}
