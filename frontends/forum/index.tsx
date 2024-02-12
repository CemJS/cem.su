import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";

front.listener.finish = () => {
  return;
};

front.func.test = () => {
  return;
};

front.loader = () => {
  Static.howMutchSpeakers = 8;
  Static.speakersTabName = "CryptoЮГ2023";
  let str = "apple banana orange apple";

  let obj = {};

  let sub = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ") {
      let subStr = str.substring(sub, i);
      sub = i + 1;
      if (obj[subStr]) {
        obj[subStr]++;
      } else {
        obj[subStr] = 1;
      }
    }
    if (i == str.length - 1) {
      let subStr = str.substring(sub, str.length);
      if (obj[subStr]) {
        obj[subStr]++;
      } else {
        obj[subStr] = 1;
      }
    }
  }
  console.log("=d36209=", obj);
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
