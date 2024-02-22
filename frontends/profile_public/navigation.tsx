import { Cemjsx, Fn, front } from "cemjs-all";
import Main from "./display/Main";
import Posts from "./display/Posts";
import Question from "./display/Question";

const IfPage = function () {
  switch (front.Variable.DataUrl[2]) {
    case "posts":
      return <Posts />;
    case "question":
      return <Question />;
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
