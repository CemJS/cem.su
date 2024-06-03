import { Cemjsx, front, Func, Events, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";

front.func.showUser = async (url, urlLink) => {
  Fn.linkChange(urlLink);
};
front.listener.finish = () => {
  return;
};

front.destroy = () => {
  Events.user?.close();
  document.body.classList.remove("pt-[5.0625rem]");
};

front.func.test = () => {
  return;
};

front.loader = () => {
  !front.Variable.hideHeader
    ? document.body.classList.add("pt-[5.0625rem]")
    : document.body.classList.remove("pt-[5.0625rem]");
  return;
};

front.display = () => {
  return (
    <header class="fixed left-0 right-0 top-0 z-10 border-b-[1px] border-solid border-[#2d3243] bg-[#24283a] py-2 font-medium">
      <Navigation />
    </header>
  );
};

export { front };
