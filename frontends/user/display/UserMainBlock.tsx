import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import Information from "./blocks/information/Information";
import Questions from "./blocks/questions/Questions";
import Answers from "./blocks/answers/Answers";
import Subscribers from "./blocks/subscribers/Subscribers";
import Subscriptions from "./blocks/subscriptions/Subscriptions";
import Awards from "./blocks/awards/Awards";
import Socials from "./blocks/socials/Socials";
import Feed from "./blocks/feed/Feed";
import Gallery from "./blocks/gallery/Gallery";

export default function () {
  return (
    <div class="mb-[5rem] flex max-w-[79rem]">
      {Static.feed === true ? <Feed /> : null}
      {Static.aboutMe === true ? <Information /> : null}
      {Static.questions === true ? <Questions /> : null}
      {Static.answers === true ? <Answers /> : null}
      {Static.subscribers === true ? <Subscribers /> : null}
      {Static.subscriptions === true ? <Subscriptions /> : null}
      {Static.awards === true ? <Awards /> : null}
      {Static.socials === true ? <Socials /> : null}
      {Static.gallery === true ? <Gallery /> : null}
    </div>
  );
}
