import CubeSlider from "@elements/CubeSlider";
import Post from "@elements/post/Post";
import { Cemjsx, Fn, Static, front } from "cemjs-all";
import QuestionMedia from "frontends/question/display/blocks/QuestionMedia";
import QuestionStatistic from "frontends/question/display/blocks/QuestionStatistic";
import QuestionUser from "frontends/question/display/blocks/QuestionUser";

const callModal = () => {
  let myInfo = front.Variable.myInfo;
  let item = {
    id: "1",
    media: [...Static.data?.media],
    statistics: {
      answers: 0,
      comments: 0,
      complain: 0,
      unreadComments: 0,
      views: 0,
      rating: 0,
    },
    author: {
      id: myInfo?.id,
      fullName: myInfo?.fullName,
      online: true,
      nickname: myInfo?.nickname,
      avatar: myInfo?.avatar,
      frame: myInfo?.frame,
      background: {},
      country: myInfo?.country,
      information: {},
      interests: null,
      works: null,
      statistics: myInfo?.statistic,
      socials: null,
    },
    forFriends: Static.data?.forFriends ? Static.data.forFriends : false,
    subscribe: false,
    showDate: new Date().getTime(),
    languages: {
      engName: "Russian",
      origName: Static.origName,
      code: Static.data?.languageCode,
    },
    text: Static.data.text,
    subscribed: false,
  };
  if (Static.page == "posts") {
    Fn.initOne("previewModal", {
      item: () => <Post item={item} index={-1} hideOptions={true} />,
    });
  }
  if (Static.page == "questions") {
    Fn.initOne("previewModal", {
      item: () => (
        <div class="mx-auto max-w-[53.125rem] pt-[3.125rem]">
          <QuestionUser item={item} />
          <p class="pt-5 text-[1.125rem] font-semibold">{Static.data?.title}</p>
          <p
            ref="itemText"
            class="pb-4 pt-[0.9375rem] text-[1.125rem] @767:pb-0"
            html={Static.data?.text}
          ></p>
          {Static.data?.media ? (
            <div class="pt-4">
              <CubeSlider
                items={Static.data?.media?.map((media, i) => {
                  return <QuestionMedia mediaItem={media} index={i} />;
                })}
              />
            </div>
          ) : (
            ""
          )}
          <QuestionStatistic item={item} />
        </div>
      ),
    });
  }
};

export default function () {
  console.log("=b950e2=", front.Variable.myInfo);
  console.log("=316a35=", Static.posts);
  return (
    <button
      onclick={(e: Event) => {
        e.preventDefault();
        Static.isValid ? callModal() : null;
      }}
      class={[
        "btn",
        "!flex !items-center !justify-center",
        !Static.isValid ? "!btn_reset" : null,
        !Static.edit ? "!w-1/2" : "",
      ]}
    >
      <span>Предпросмотр</span>
    </button>
  );
}
