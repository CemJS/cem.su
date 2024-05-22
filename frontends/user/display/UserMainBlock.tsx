import { Cemjsx, Static } from "cemjs-all";
import Information from "./blocks/information/Information";
import Questions from "./blocks/questions/Questions";
import Answers from "./blocks/answers/Answers";
import Subscribers from "./blocks/subscribers/Subscribers";
import Subscriptions from "./blocks/subscriptions/Subscriptions";
import Awards from "./blocks/awards/Awards";
import Socials from "./blocks/socials/Socials";
import Feed from "./blocks/feed/Feed";
import Gallery from "./blocks/gallery/Gallery";

const categoryToComponentMap = {
  feed: Feed,
  aboutMe: Information,
  questions: Questions,
  answers: Answers,
  subscribers: Subscribers,
  subscriptions: Subscriptions,
  awards: Awards,
  socials: Socials,
  gallery: Gallery,
};

export default function () {
  const CategoryComponent = categoryToComponentMap[Static.nameCategory] || null;
  return (
    <div class="mb-[5rem] flex max-w-[79rem]">
      <CategoryComponent />
    </div>
  );
}
