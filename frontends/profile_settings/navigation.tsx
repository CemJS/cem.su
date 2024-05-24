import { Cemjsx, Fn, front } from "cemjs-all";
import Main from "./display/Main";
import Security from "./display/Security";
import BlackList from "./display/BlackList";

const IfPage = function () {
  switch (front.Variable.DataUrl[2]) {
    case "security":
      return <Security />;
    case "blacklist":
      return <BlackList />;
  }
};
export default function () {
  return (
    <div class="mx-auto flex max-w-[113.75rem] flex-col flex-wrap pt-[1.25rem] max-@1860:w-[calc(100%_-_40px)]">
      <div class="flex max-w-full max-@992:flex-col">
        <Main />
        <IfPage />
      </div>
    </div>
  );
}
