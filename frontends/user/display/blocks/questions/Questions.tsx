import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import QuestionCreateDate from "./QuestionCreateDate";
import defaultGray from "@svg/lenta/defaultGray.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import closed_question from "@svg/questions/closed_question.svg";
import best_answer from "@svg/questions/best_answer.svg";
import open_question from "@svg/questions/open_question.svg";
import question_status_delete from "@svg/questions/question_status_delete.svg";
import dots from "@svg/questions/dots.svg";

export default function () {
  Fn.log("Static.record?.questions", Static.record?.questions);
  return (
    <div class="relative m-0 w-full min-w-full pb-[1.25rem] pt-[.625rem] @1200:mx-auto @1200:my-0 @1200:min-w-[calc(100%--_224px)] @1200:pb-[2.5rem]">
      <h2 class="mx-0 my-[1.25rem] text-balance text-center text-[clamp(17px,_3vw,_20px)] font-bold leading-[115%] text-[--white]">
        Заданные вопросы
      </h2>
      <div class="hidden text-[.75rem] leading-[1.25rem] text-[--white] @767:grid @767:[grid-template-columns:40%_10%_15%_30%_5%] @970:[grid-template-columns:50%_10%_15%_20%_5%]">
        <span class="box-border [&:nth-child(1)]:relative [&:nth-child(1)]:left-[1.25rem]">
          Вопрос
        </span>
        <span class="box-border [&:nth-child(2)]:text-center">Ответов</span>
        <span class="box-border [&:nth-child(3)]:text-center">Просмотров</span>
        <span>Лучший ответ</span>
      </div>
      <div class="mb-[3.75rem] mt-[.5rem] rounded-[0] text-[.875rem] font-medium leading-[1.25rem] [border:1px_solid_#323746] @767:rounded-[.9375rem]">
        {Static.record?.questions?.map((item: any, key: number) => {
          // Fn.log("item", item);
          return (
            <div
              key={key}
              class="relative block rounded-[0] px-[1.5625rem] py-[1.875rem] pt-[.9375rem] first:rounded-t-[.9375rem] odd:bg-[#323746] @767:grid @767:[grid-template-columns:40%_10%_15%_30%_5%] @970:[grid-template-columns:50%_10%_15%_20%_5%]"
            >
              <div class="relative top-0 @767:top-[1.25rem]">
                <a
                  class="text-inherit no-underline"
                  href={`/question/show/${item?.id}`}
                  onclick={() => {
                    Fn.link;
                  }}
                >
                  <div class="mb-[.625rem] text-[1.125rem] max-@767:mr-[1.25rem]">
                    {item?.title}
                  </div>
                </a>
                <div>
                  <div class="relative mt-[.4375rem] max-@767:mb-[.625rem] @767:mt-[.625rem]">
                    <QuestionCreateDate item={item} key={key} />
                  </div>
                </div>
              </div>
              <div class="relative text-left max-@767:mr-[1.5625rem] max-@767:mt-[1.25rem] max-@767:inline-block @767:text-center">
                <span class="relative top-0 inline max-@767:pr-[.625rem] @767:absolute @767:top-[2.1875rem] @767:hidden">
                  Ответов
                </span>
                <span class="relative top-0 max-@767:text-[.9375rem] max-@767:font-bold @767:absolute @767:top-[2.1875rem]">
                  {item?.statistics?.answersCount}
                </span>
              </div>
              <div class="relative text-left max-@767:mr-[1.5625rem] max-@767:mt-[1.25rem] max-@767:inline-block @767:text-center">
                <span class="relative top-0 max-@767:inline max-@767:pr-[.625rem] @767:absolute @767:top-[2.1875rem] @767:hidden">
                  Просмотров
                </span>
                <span class="relative top-0 max-@767:text-[.9375rem] max-@767:font-bold @767:absolute @767:top-[2.1875rem]">
                  {item?.statistics?.viewsCount}
                </span>
              </div>
              <div class="flex items-end max-@767:mb-[1.5625rem] max-@767:pr-[3.125rem]">
                <a
                  href={`/user/${item?.id}`}
                  class="left-[-.9375rem] w-[5rem] pl-0 text-inherit no-underline"
                >
                  <div class="relative z-[1] ml-[.625rem] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
                    <img
                      class="absolute left-[50%] top-[50%] z-[1] h-[78%] w-[78%] translate-x-[-50%] translate-y-[-50%] rounded-[50%] object-cover"
                      src={
                        item.bestAnswerAuthor?.avatar?.name
                          ? `/assets/upload/avatar/${item?.bestAnswerAuthor?.avatar?.name}`
                          : avatarDefault
                      }
                    />
                    <img
                      class="absolute left-[50%] top-0 z-[2] h-full w-auto translate-x-[-50%]"
                      src={
                        item.bestAnswerAuthor?.frame?.name
                          ? `/contents/images/lenta/${item.bestAnswerAuthor?.frame?.name}`
                          : defaultGray
                      }
                    />
                    <div>
                      <div class="absolute bottom-0 right-[.3125rem] top-auto z-[2] h-[1.75rem]">
                        <img class="h-full" src={leveGray} />
                        <span class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[.75rem] font-bold tracking-[0.6px] text-[--white]">
                          {item.bestAnswerAuthor?.statistics?.level}
                        </span>
                      </div>
                      <div
                        style="display: none;"
                        class="absolute bottom-[20%] right-[-1%] z-[2] h-[.875rem] w-[.875rem] rounded-[50%] [background:linear-gradient(225deg,_#72FFB6_0,_#10D194_100%)] [border:3px_solid_#ffffff]"
                      ></div>
                      <div class="absolute bottom-[20%] right-[-1%] z-[2] h-[.875rem] w-[.875rem] rounded-[50%] [border:3px_solid_#ffffff] [background:linear-gradient(225deg,_#FF7272_0%,_#D93030_100%)]"></div>
                    </div>
                  </div>
                </a>
                <div class="relative top-[-21px]">
                  <p class="mb-[1rem] mt-0 first:m-0 first:text-[.875rem] first:font-medium first:leading-[1.25rem]">
                    {item?.bestAnswerAuthor?.nickname}
                  </p>
                  <p class="mb-[1rem] mt-0 leading-[1.25rem] last:m-0 last:text-[.75rem] last:font-medium last:text-[#B3BEDF]"></p>
                </div>
              </div>
              <div class="relative box-border">
                <div class="relative top-[50%] translate-y-[-10%] cursor-pointer">
                  <img
                    class="relative top-[50%] h-[1.875rem] translate-y-[-20%]"
                    src={
                      item?.isClosed
                        ? closed_question
                        : item?.bestAnswerAuthor?.nickname?.length
                          ? best_answer
                          : open_question
                    }
                  />
                </div>
              </div>
              <div class="absolute right-[1.25rem] top-[.625rem] box-border cursor-pointer">
                <div
                  class="relative ml-[.625rem] box-border h-[1.875rem] w-[1.875rem] cursor-pointer rounded-[50%]"
                  onclick={() => {
                    Fn.initOne("modalTools", {
                      records: [
                        {
                          name: "Удалить",
                          type: "danger",
                          func: () =>
                            Fn.initOne("modalAccept", {
                              title: "удалить свой вопрос",
                              CallInit: async (CallBack: boolean) => {
                                if (CallBack) {
                                  Static.record?.questions?.splice(key, 1);
                                  let res =
                                    await front.Services.functions.sendApi(
                                      `/api/questions/${item?.id}/delete`,
                                      {},
                                    );

                                  if (res?.status === 200) {
                                    // Static.record.work = array;
                                  }
                                }
                              },
                            }),
                        },
                        {
                          name: "Закрыть вопрос",
                          func: () =>
                            Fn.initOne("modalAccept", {
                              title: "закрыть свой вопрос",
                              CallInit: async (CallBack: boolean) => {
                                if (CallBack) {
                                  item.isClosed = true;
                                  let res =
                                    await front.Services.functions.sendApi(
                                      `/api/questions/${item?.id}/close`,
                                      {},
                                    );

                                  if (res?.status === 200) {
                                    // Static.record.work = array;
                                  }
                                }
                              },
                            }),
                        },
                      ],
                    });
                  }}
                >
                  <img
                    class="absolute left-[50%] top-[50%] box-border translate-x-[-50%] translate-y-[-50%]"
                    src={dots}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
