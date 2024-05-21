import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import AnswerCreateDate from "./AnswerCreateDate";
import defaultGray from "@svg/lenta/defaultGray.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import dots from "@svg/questions/dots.svg";
import AnswersBtbMyProf from "./AnswersBtbMyProf";
import AnswersSkeleton from "@elements/skeletonLoading/user/AnswersSkeleton";

export default function () {
  // Fn.log("Static.record?.answers", Static.record?.answers)
  if (Static.record?.answers && Static.answers) {
    Func.activeBlocksProfile();
  } else Static.showComp = false;

  return (
    <div class="relative m-0 w-full min-w-full px-[.625rem] py-0 pb-[1.25rem] pt-[.625rem] @1024:pb-[2.5rem] @1200:mx-auto @1200:my-0 @1200:min-w-[calc(100%_-_224px)]">
      <h2 class="mx-0 my-[1.25rem] text-center text-[clamp(15px,_3vw,_20px)] font-bold leading-[115%] text-[--white]">
        Предложенные ответы
      </h2>
      <div class="hidden text-[.75rem] leading-[1.25rem] text-[--white] [grid-template-columns:40%_10%_15%_30%_5%] @767:grid">
        <span class="box-border [&:nth-child(1)]:relative [&:nth-child(1)]:left-[1.75rem]">
          Вопрос
        </span>
        <span class="box-border [&:nth-child(2)]:text-center">
          Комментариев
        </span>
        <span class="box-border [&:nth-child(3)]:text-center">Рейтинг</span>
        <span class="box-border">Ответ</span>
      </div>
      <div class="mt-[.5rem]">
        {Static.showComp ? (
          Static.record?.answers?.map((item: any, key: number) => {
            return (
              <div
                key={key}
                class="relative block rounded-[0] px-[1.5625rem] py-[1.875rem] pt-[.9375rem] odd:bg-[#323746] @767:grid @767:[grid-template-columns:40%_10%_15%_30%_5%] @970:[grid-template-columns:40%_10%_15%_30%_5%]"
              >
                <div
                  class="relative top-0 cursor-pointer @767:top-[1.25rem]"
                  onclick={async () => {
                    Fn.linkChange(`/question/show/${item.questionId}`);
                  }}
                >
                  <div class="flex">
                    <a
                      // href={`/user/${item?.id}`}
                      class="left-[-.9375rem] w-[5rem] pl-0 text-inherit no-underline"
                    >
                      <div class="relative z-[1] ml-0 mr-[.9375rem] h-[4.625rem] w-[4.1875rem] min-w-[3.5625rem]">
                        <img
                          class="absolute left-[50%] top-[50%] z-[1] h-[78%] w-[78%] translate-x-[-50%] translate-y-[-50%] rounded-[50%] object-cover"
                          src={
                            item?.question?.author?.avatar?.name
                              ? `/assets/upload/avatar/${item?.question?.author?.avatar?.name}`
                              : avatarDefault
                          }
                        />
                        <img
                          class="absolute left-[50%] top-0 z-[2] h-full w-auto translate-x-[-50%]"
                          src={
                            item?.question?.author?.frame?.name
                              ? `/contents/images/lenta/${item?.question?.author?.frame?.name}`
                              : defaultGray
                          }
                        />
                        <div>
                          <div class="absolute bottom-0 right-[.3125rem] top-auto z-[2] h-[1.75rem]">
                            <img class="h-full" src={leveGray} />
                            <span class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[.75rem] font-bold tracking-[0.6px] text-[--white]">
                              {item?.question?.author?.statistics?.level}
                            </span>
                          </div>
                          <div
                            class={[
                              "absolute bottom-[20%] right-[-1%] z-[2] h-[.875rem] w-[.875rem] rounded-[50%] [border:3px_solid_#ffffff]",
                              item?.online
                                ? "[background:linear-gradient(225deg,_#72FFB6_0,_#10D194_100%)]"
                                : "[background:linear-gradient(225deg,_#FF7272_0%,_#D93030_100%)]",
                            ]}
                          ></div>
                        </div>
                      </div>
                    </a>
                    <div>
                      <a class="text-inherit no-underline">
                        <div class="mb-[.625rem] box-border text-[1.125rem] max-@767:pr-[1.25rem]">
                          {item?.question?.text}
                        </div>
                      </a>
                      <div>
                        <div class="relative mb-[.9375rem] mt-[.4375rem] box-border max-@767:mt-[.625rem] @767:mb-[.625rem]">
                          <AnswerCreateDate item={item} key={key} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="relative box-border inline-block text-left max-@767:mr-[1.5625rem] max-@767:mt-[1.25rem] @767:text-center">
                  <span class="relative top-0 inline pr-[.625rem] @767:absolute @767:top-[2.1875rem] @767:hidden">
                    Комментариев
                  </span>
                  <span class="relative top-0 text-[.9375rem] font-bold @767:absolute @767:top-[2.1875rem]">
                    {item?.statistics?.comments}
                  </span>
                </div>
                <div class="relative box-border inline-block text-left max-@767:mr-[1.5625rem] max-@767:mt-[1.25rem] @767:text-center">
                  <span class="relative top-0 inline pr-[.625rem] @767:absolute @767:top-[2.1875rem] @767:hidden">
                    Рейтинг
                  </span>
                  <span class="relative top-0 text-[.9375rem] font-bold @767:absolute @767:top-[2.1875rem]">
                    {item?.statistics?.rating}
                  </span>
                </div>
                <div class="questions-table__avatar flex items-end max-@767:mb-[1.5625rem] max-@767:mr-[3.125rem]">
                  <div class="relative mt-[1.25rem]">
                    <p class="mb-[1rem] mt-0" html={item?.text}></p>
                  </div>
                </div>
                <AnswersBtbMyProf item={item} key={key} />
              </div>
            );
          })
        ) : (
          <AnswersSkeleton
            countAnswers={front.Variable.myInfo?.statistic?.answer}
          />
        )}
      </div>
    </div>
  );
}
