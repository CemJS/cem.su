import { Cemjsx, front, Func, Static, Fn, Ref } from "cemjs-all";
import Navigation from "./navigation";
import partners from "@json/forum/forumPartners";
import { load } from "@2gis/mapgl";

front.listener.finish = () => {
  window.onresize = () => (Ref.activeTab2.style.left = `${Ref.tabItem2.offsetWidth * Static.activeIndex}px`);
  load().then((mapglAPI) => {
    const map = new mapglAPI.Map("map", {
      center: [55.31878, 25.23584],
      zoom: 13,
      key: "rudcgu3317",
    });
  });
  return;
};

front.func.test = () => {
  return;
};

front.loader = () => {
  Static.howMutchSpeakers = 6;
  Static.speakersTabName = "CryptoЮГ2023";
  Static.partnersTabName = "CryptoЮГ2023";
  // Static.partners = partners.filter((item) => item.visited.includes(Static.partnersTabName));
  return;
};

front.display = () => {
  return <Navigation />;
};

export { front };
