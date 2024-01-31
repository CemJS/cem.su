import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";
import banners from "json/affiliateBanners.json";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.func.changeLanguage = () => {
  if (Static.language == "Русский") {
    Static.sizes = banners.filter((item) => item.language == "Русский")[0];
  } else {
    Static.sizes = banners.filter((item) => item.language == "English")[0];
  }
  Static.currentSize = Static.sizes.banners[0];
  Func.changeLink();
  return;
};

front.func.changeLink = () => {
  Static.addLink = `${Static.currentSize}${Static.language == "Русский" ? "ru" : ""}.jpg`;
  Static.fullLink = `${window.location.origin}/contents/images/affiliate_banners/${Static.addLink}`;
  Static.tagLink = `<img src="${Static.fullLink}" alt="Crypto Emergency"/>`;
};

front.loader = () => {
  Static.language = "Русский";
  Func.changeLanguage();
  Static.currentSize = Static.sizes.banners[0];
  Func.changeLink();
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
