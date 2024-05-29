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
};

front.func.test = () => {
  return;
};

front.loader = () => {
  return;
};

front.display = () => {
  return (
    <header class="z-10 border-b-[1px] border-solid border-[#2d3243] bg-[#24283a] py-2 font-medium">
      <Navigation />
    </header>
  );
};

export { front };
