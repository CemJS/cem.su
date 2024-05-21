import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import type { Post } from "types/post.type";
import OptionsPost from "./OptionsPost";
import MediaPost from "./MediaPost";
import TextPost from "./TextPost";
import UserPost from "./UserPost";
import StatisticsPost from "./StatisticsPost";
import TimePost from "./TimePost";
import CubeSlider from "@elements/CubeSlider";

export default function ({
  item,
  index,
  skipUrl = "/api/posts",
  hideOptions = false,
}: {
  item: Post | any;
  index: number;
  skipUrl?: string;
  hideOptions?: boolean;
}) {
  // console.log("=f17c41=", index);
  return (
    // Func.initPost($el, index)
    <div
      init={($el) => {
        console.log("=27d6ae=", 1);
        if (index == Static.posts?.length - 1) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(async (entry) => {
              if (entry.isIntersecting) {
                observer.unobserve($el);

                console.log("=46d8f4=", 1);

                let skip = { ...Static.makeFilter };
                skip.skip = Static.posts.length;
                let res = await front.Services.functions.sendApi(skipUrl, skip);
              }
            });
          });
          observer.observe($el);
        }
      }}
      class="relative mb-[1.2rem] rounded-[--borderR]"
    >
      <div class="relative flex gap-4 rounded-tl-[--borderR] rounded-tr-[--borderR] p-[0.7rem_1rem] [background:var(--backSecond)]">
        <UserPost item={item} />

        <div class="flex w-full items-center justify-between">
          <span class="font-medium">{item?.author?.nickname}</span>
          {/* действия */}
          {!hideOptions ? <OptionsPost index={index} item={item} /> : ""}
        </div>
      </div>

      {item?.media?.length > 0 ? (
        <CubeSlider
          items={item?.media?.map((it, i) => {
            return <MediaPost mediaItem={it} index={index + i} />;
          })}
          key={item.id + index}
        />
      ) : (
        ""
      )}

      <div class="rounded-bl-[--borderR] rounded-br-[--borderR] p-[0rem_0rem_2rem] px-4 [background:var(--backSecond)]">
        <TextPost item={item} />

        <StatisticsPost item={item} />

        {/* <ShowCommentsButton item={item} index={index} /> */}
      </div>

      <TimePost time={item.showDate} />
      {/* <CommentsPost item={item} index={index} /> */}
    </div>
  );
}

// функции

front.func.sendAuth = async (url: string, data: object, method = "POST") => {
  if (front.Variable.Auth) {
    let res = await front.Services.functions.sendApi(url, data, method);
    if (res?.status == 409) {
      Fn.initOne("alert", { text: "Рейтинг уже начислен", type: "danger" });
      return;
    }
    if (res?.error) {
      Fn.initOne("alert", { text: "Ошибка запроса" });
    }
    return res;
  } else {
    Fn.initOne("modalAuthtorization", {});
  }
};

// запросы

front.func.delete = async (item) => {
  let res = await Func.sendAuth(`/api/posts/${item?.id}/delete`, {});
  console.log("=be736f=", res);
  if (res.status == 200) {
    item.hide = true;
  }
  console.log("=6dc889=", Static.posts);
  return;
};

front.func.follow = async (item) => {
  console.log("=3f6bdc=", item.id);
  let res;
  !item?.subscribed
    ? (res = await Func.sendAuth(
        `/api/users/${item?.author?.id}/subscribe`,
        {},
      ))
    : (res = await Func.sendAuth(
        `/api/users/${item?.author?.id}/unsubscribe`,
        {},
      ));
  res?.status == 200 ? (item.subscribed = !item?.subscribed) : null;
  return;
};

front.func.likePost = (id) => {
  Func.sendAuth(`/api/posts/${id}/like`, {});
  return;
};

front.func.dislikePost = (id) => {
  Func.sendAuth(`/api/posts/${id}/dislike`, {});
  return;
};