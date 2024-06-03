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
  document.body.classList.add("pt-[5.0625rem]");

  Static.menu = [
    {
      name: front.Variable.words?.chapters?.contacts,
      url: "/contacts"
    },
    {
      name: front.Variable.words?.chapters?.about,
      url: "/about"
    },
    {
      name: front.Variable.words?.chapters?.news,
      url: "/news"
    }
  ]

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
