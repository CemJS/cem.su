import { Cemjsx, Events, Fn, Func, Ref, Static, front } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dislike from "@svg/lenta/dislike.svg";
import like from "@svg/lenta/like.svg";
import points from "@svg/lenta/points.svg";
import sendMessage from "@svg/lenta/send_message.svg";
import notFound from "@svg/icon/notFound.svg";
import CubeSlider from "@elements/CubeSlider";
import QuestionMedia from "./blocks/QuestionMedia";
import QuestionUser from "./blocks/QuestionUser";
import QuestionStatistic from "./blocks/QuestionStatistic";
import CreateMedia from "@elements/addMedia/CreateMedia";
import QuestionAnswer from "./blocks/QuestionAnswer";
import QuestionAddAnswer from "./blocks/QuestionAddAnswer";

Static.showComments = "Показать комментарии";
let image = `/contents/images/lenta/avatar_default.png`;

const RenderNotFound = () => {
  return (
    <div class="not_found col-span-full w-full">
      <img src={notFound} alt="Нет записей" />
      Нет записей
    </div>
  );
};

export default function () {
  if (!Static.record?.id) {
    return <div>не найдено</div>;
  }
  return (
    <div>
      <div class="pb-20">
        <div class="wrapper">
          <div class="mx-auto max-w-[53.125rem] pt-[3.125rem]">
            <QuestionUser item={Static.record} />
            <p class="pt-5 text-[1.125rem] font-semibold">
              {Static.record.title}
            </p>
            <p
              ref="itemText"
              class="pb-4 pt-[0.9375rem] text-[1.125rem] @767:pb-0"
              html={Static.record.text}
            ></p>
            {Static.record?.media ? (
              <div class="py-4">
                <CubeSlider
                  items={Static.record?.media?.map((media, i) => {
                    return <QuestionMedia mediaItem={media} index={i} />;
                  })}
                />
              </div>
            ) : (
              ""
            )}
            {/* items=
            {item?.media?.map((it, i) => {
              return <MediaPost mediaItem={it} index={index + i} />;
            })}
            key={item.id + index} */}
            <QuestionStatistic item={Static.record} />
          </div>

          <div class="mx-auto mt-10 max-w-[53.125rem]">
            {!Static.record.closed ? <QuestionAddAnswer /> : null}

            {Static.record.answers?.length > 0 ? (
              <div
                class="relative mb-5 w-full rounded-[0.9375rem] p-[1.5625rem_0rem] !pb-0 !pt-[0.125rem]"
                ref="answerList"
              >
                {Static.record.answers?.map((answer, index) => {
                  return <QuestionAnswer answer={answer} answerIndex={index} />;
                })}
              </div>
            ) : (
              <RenderNotFound />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
