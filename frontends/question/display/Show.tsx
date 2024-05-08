import { Cemjsx, Events, Fn, Func, Ref, Static, front } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dislike from "@svg/lenta/dislike.svg";
import like from "@svg/lenta/like.svg";
import points from "@svg/lenta/points.svg";
import sendMessage from "@svg/lenta/send_message.svg";
import notFound from "@svg/icon/notFound.svg";

Static.showComments = "Показать комментарии";
let image = `/contents/images/lenta/avatar_default.png`;

const RenderUser = () => {
  return (
    <div id="user">
      <a
        onclick={Fn.link}
        class="relative inline-flex h-auto w-auto"
        href={`/user/${Static.record?.author.nickname}`}
      >
        <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
          <img
            class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
            src={
              Static.record.author.avatar?.name
                ? `/assets/upload/avatar/${Static.record.author.avatar?.name}`
                : image
            }
          />
          <img
            class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
            src={
              Static.record.author.frame?.name
                ? `/contents/images/lenta/${Static.record.author.frame?.name}`
                : frameDefault
            }
          />
          {Static.record.author.status?.team ? (
            <img
              class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
              src={Static.record.author.status?.team ? teamLogo : null}
            />
          ) : (
            <div>
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <img class="h-full" src={leveGray} />
                <span class="text-[0.75rem absolute left-1/2 top-1/2 font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                  {Static.record.author.statistics.level}
                </span>
              </div>
            </div>
          )}
        </div>
        <div class="absolute left-20 top-5 mb-2 block leading-[24px]">
          <span class="inline text-[0.875rem] font-semibold leading-[1.375rem] text-[--white]">
            {Static.record.author.nickname}
          </span>
        </div>
      </a>
    </div>
  );
};

const RenderNotFound = () => {
  return (
    <div class="not_found col-span-full w-full">
      <img src={notFound} alt="Нет записей" />
      Нет записей
    </div>
  );
};

const RenderAddAnswer = () => {
  return (
    <div ref={`ans${Static.record.id}`} class="hidden">
      <textarea
        class="w-full resize-none rounded-[0.9375rem] border-[0] bg-[#313543] p-5 text-[1rem] text-[--white]"
        cols="20"
        rows="10"
        value={Static.text}
        oninput={(e) => {
          Static.text = e.target.value;
        }}
      ></textarea>
      <div class="flex justify-center p-10">
        <button
          class={["btn", !Static.text ? "btn_passive" : null]}
          type="button"
          onclick={() => {
            let data = {
              text: Static.text,
              questionId: Static.record.id,
            };
            Static.text = "";
            Static.open = "Ответить";
            Ref[`ans${Static.record.id}`].classList.toggle("!block");
            Func.sendAuth("/api/answers/create", data);
          }}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

const RenderStatistic = () => {
  return (
    <div class="flex h-auto flex-wrap items-center justify-between pb-[0.625rem] text-[0.875rem] text-[#838ba3] [border-bottom:0.0625rem_solid] ![border-color:var(--border-answer)] [row-gap:1.25rem] @767:col-[1/span_2] @767:h-[3.875rem] @767:text-[0.8125rem] [&_span]:flex [&_span]:gap-[0.625rem]">
      <span>
        <i class="i i-comment"></i>
        {Static.record.statistics.answers}
      </span>
      <span>
        <i class="i i-faq"></i>
        {Static.record.statistics.views}
      </span>
      <span>{`${front.Services.functions.timeStampToDate(Static.record.showDate, ".")} ${Func.addNull(Func.getDate(Static.record.showDate).getHours())}:${Func.addNull(Func.getDate(Static.record.showDate).getMinutes())}`}</span>
      {!Static.record.closed &&
      front.Variable?.myInfo?.id != Static.record?.author?.id ? (
        <div class="btn_border-wrap !m-0 !w-full @600:!w-[12.625rem] ">
          <button
            onclick={(e: any) => {
              Static.open == "Ответить"
                ? (Static.open = "Отменить")
                : (Static.open = "Ответить");
              Ref[`ans${Static.record.id}`].classList.toggle("!block");
            }}
            class="btn_border"
          >
            {Static.open}
          </button>
        </div>
      ) : null}
    </div>
  );
};

const RenderAnswer = ({ answer, answerIndex }) => {
  return (
    <div
      class={[
        "mb-[0.9375rem] rounded-[0.9375rem] bg-[#313643] pb-[0.625rem]",
        answer.best
          ? "!order-[-1] !rounded-[15px] ![border:1px_solid_#00e741]"
          : null,
      ]}
      init={($el: any) => {
        if (answerIndex == Static.record?.answers?.length - 1) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(async (entry) => {
              if (entry.isIntersecting) {
                observer.unobserve($el);
                let skip = Static.record.answers?.length;
                front.Services.functions.sendApi(
                  `/api/questions/${Static.record?.id}/answers`,
                  { skip },
                );
              }
            });
          });
          observer.observe($el);
        }
      }}
    >
      <div class="relative p-[0_0.625rem]">
        <a
          onclick={Fn.link}
          class="relative inline-flex h-auto w-auto"
          href={`/user/${answer?.author.nickname}`}
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={
                answer.author.avatar?.name
                  ? `/assets/upload/avatar/${answer.author.avatar?.name}`
                  : image
              }
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={
                answer.author.frame?.name &&
                answer.author.frame?.name != "default.svg"
                  ? `/contents/images/lenta/${answer.author.frame?.name}`
                  : frameDefault
              }
            />
            {answer.author.status?.team ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={answer.author.status?.team ? teamLogo : null}
              />
            ) : (
              <div>
                <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    {answer.author.statistics.level}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div class="absolute left-[4.5625rem] top-5 block w-[8.125rem]">
            <div class="text-[0.875rem] font-semibold leading-[1.375rem] text-[--white]">
              {answer.author.nickname}
            </div>
            <div class="relative top-[-0.4375rem] inline-block text-[0.8125rem] font-medium leading-[1.375rem] text-[#b0b7cd]">{`${front.Services.functions.timeStampToDate(answer.showDate, ".")} ${Func.addNull(Func.getDate(answer.showDate).getHours())}:${Func.addNull(Func.getDate(answer.showDate).getMinutes())}`}</div>
          </div>
        </a>
        <div class="mb-[0.125rem] w-full pt-[0.375rem]">
          {!Static[`isEditing${answer.id}`] ? (
            <span
              class="relative mx-auto block overflow-hidden break-words p-[0_0.5rem] text-[1rem] font-medium leading-[1.375rem] text-[--white]"
              html={answer.text}
            ></span>
          ) : (
            <div
              id="form"
              class="relative z-[6] mx-auto !mb-[0.625rem] !mt-[0.625rem] flex w-full max-w-[64rem] items-stretch justify-between"
            >
              <div class="relative mt-0 w-[calc(100%_-_3.125rem)]">
                <textarea
                  class="relative flex min-h-[2.5625rem] w-full resize-none rounded-[0.625rem] bg-[#313543] p-[0.625rem_1.5625rem] text-[1rem] font-medium text-[--white] outline-none [border:0.0625rem_solid_#44495c]"
                  rows="1"
                  data-max-height="200"
                  data-scroll-last="48"
                  value={Static[`edit${answer.id}`]}
                  oninput={(e) => {
                    Static[`edit${answer.id}`] = e.target.value;
                  }}
                ></textarea>
              </div>
              <button
                class={[
                  "m-0 flex w-10 cursor-pointer justify-between self-center border-none bg-transparent p-0 [filter:invert(96%)_sepia(5%)_saturate(6439%)_hue-rotate(180deg)_brightness(95%)_contrast(76%)] [transform:none]",
                  !Static[`edit${answer.id}`] ? "btn_passive" : null,
                ]}
                onclick={() => {
                  let data = {
                    text: Static[`edit${answer.id}`],
                  };
                  Static[`edit${answer.id}`] = "";
                  Func.closeEdit(answer.id);
                  Func.sendAuth(`/api/answers/${answer.id}/update`, data);
                }}
              >
                <img src={sendMessage} />
              </button>
            </div>
          )}

          {answer.media?.map((item) => {
            return item.type == "image" ? (
              <img
                src={`/assets/upload/answers/${item.mediaName}`}
                alt={item.type}
                class="user-comment__media"
              />
            ) : item.type == "video" ? (
              // <RenderVideo src={`/assets/upload/answers/${item.name}`} />
              {}
            ) : null;
          })}
          <div
            class="m-0 !ml-[0.3125rem] inline-block cursor-pointer !bg-clip-text pt-[0.625rem] text-[1rem] font-semibold [-webkit-text-fill-color:transparent] [background:linear-gradient(56.57deg,#2973ff_0,#8846d3_51.56%,#ff22ac_105.28%)]"
            onclick={(e) => {
              let isShow =
                Ref[`inputAns${answerIndex}`].classList.contains("!flex");
              Func.hideInputs();
              if (!isShow) {
                Ref[`inputAns${answerIndex}`].classList.add("!flex");
                Ref[`inputAns${answerIndex}`].focus();
              } else {
                Ref[`inputAns${answerIndex}`].classList.remove("!flex");
              }
            }}
          >
            Ответить
          </div>
        </div>
        <div
          id="form"
          ref={`inputAns${answerIndex}`}
          class="relative z-[6] mx-auto !mb-[0.625rem] !mt-[0.625rem] hidden w-full max-w-[64rem] items-stretch justify-between"
        >
          <div class="relative mt-0 w-[calc(100%_-_3.125rem)]">
            <textarea
              class="relative flex min-h-[2.5625rem] w-full resize-none rounded-[0.625rem] bg-[#313543] p-[0.625rem_1.5625rem] text-[1rem] font-medium text-[--white] outline-none [border:0.0625rem_solid_#44495c]"
              rows="1"
              data-max-height="200"
              data-scroll-last="48"
              value={Static[`${answerIndex}`]}
              oninput={(e) => {
                Static[`${answerIndex}`] = e.target.value;
              }}
            ></textarea>
          </div>
          <button
            class={[
              "m-0 flex w-10 cursor-pointer justify-between self-center border-none bg-transparent p-0 [filter:invert(96%)_sepia(5%)_saturate(6439%)_hue-rotate(180deg)_brightness(95%)_contrast(76%)] [transform:none]",
              !Static[`${answerIndex}`] ? "btn_passive" : null,
            ]}
            onclick={() => {
              let data = {
                text: Static[`${answerIndex}`],
                answerId: answer.id,
              };
              Static[`${answerIndex}`] = "";
              Static[`showComments${answerIndex}`] = "Скрыть комментарии";
              Ref[`inputAns${answerIndex}`].classList.toggle("!flex");
              Func.sendAuth(`/api/answers/${answer.id}/comment`, data);
            }}
          >
            <img src={sendMessage} />
          </button>
        </div>
        {answer.statistics.comments > 0 ? (
          <div class="relative ml-[0.3125rem] mt-[1rem] [transform:translate(0,0)]">
            <button
              init={() =>
                (Static[`showComments${answerIndex}`] = "Показать комментарии")
              }
              class="relative block min-h-[2rem] w-max cursor-pointer overflow-hidden rounded-[0.1875rem] border-none bg-transparent pl-[0.625rem] pr-[0.625rem] pt-0 text-center text-[0.875rem] font-semibold text-[--white] no-underline "
              onclick={(e) => {
                if (
                  Static[`showComments${answerIndex}`] == "Показать комментарии"
                ) {
                  if (!answer.comments?.length) {
                    front.Services.functions.sendApi(
                      `/api/questions/${Static.record?.id}/answers/${answer.id}/comments`,
                      {},
                    );
                  }

                  Static[`showComments${answerIndex}`] = "Скрыть комментарии";
                } else {
                  Static[`showComments${answerIndex}`] = "Показать комментарии";
                }
              }}
            >
              {`${Static[`showComments${answerIndex}`]} (${answer.statistics.comments})`}{" "}
              <div class="absolute top-0 z-[-1] inline-block h-[3.4375rem] w-[27.5rem] bg-[#3bade3] [background:linear-gradient(45deg,#3bade3_0%,#576fe6_10%,#9844b7_70%,#ff357f_90%)] [transform:translateX(-20.625rem)]   [transition:transform_400ms_ease-in]"></div>
            </button>
          </div>
        ) : null}
        <div class="static flex items-center justify-end gap-[0.3125rem] pb-[0.375rem] @410:absolute @410:right-[0.9375rem] @410:top-[0.9375rem] @410:pb-0">
          <div class="flex w-16 items-center justify-between">
            <img
              class="h-5 w-5 cursor-pointer rounded-[50%]"
              src={dislike}
              onclick={async () => {
                await Func.sendAuth(`/api/answers/${answer.id}/dislike`, {});
              }}
            />
            <span class="relative ml-[0.125rem] min-w-[1.125rem] !bg-clip-text text-center text-[0.9375rem] font-bold tracking-[0.0625rem] [-webkit-text-fill-color:transparent] [background:linear-gradient(45deg,#3bade3_0%,#576fe6_25%,#9844b7_51%,#ff357f_100%)]">
              {answer.statistics.rating}
            </span>
            <img
              class="h-5 w-5 cursor-pointer rounded-[50%]"
              src={like}
              onclick={async () => {
                await Func.sendAuth(`/api/answers/${answer.id}/like`, {});
              }}
            />
          </div>
          <div
            class="ml-[0.625rem] flex h-[1.375rem] w-[1.875rem] cursor-pointer items-center"
            onclick={() => {
              let records = [];
              if (front.Variable.myInfo.id == Static.record.author.id) {
                Func.isEditable(answer.showDate)
                  ? records.push({
                      name: "Редактировать",
                      func: () => Func.edit(answer.id),
                    })
                  : null;

                !Static.record.closed
                  ? records.push({
                      name: "Выбрать лучшим",
                      func: () => Func.bestAnswer(answer.id),
                    })
                  : null;
              }
              if (front.Variable.myInfo.id == answer.author.id) {
                records.push({
                  name: "Удалить",
                  func: () => Func.deleteAnswer(answer.id),
                  type: "danger",
                });
              }

              Fn.initOne("modalTools", {
                records,
                userId: answer.author.id,
                complainTo: {
                  name: "answers",
                  text: "ответ",
                  id: answer?.id,
                },
              });
            }}
          >
            <img src={points} />
          </div>
        </div>
      </div>
      {answer.comments.length > 0 &&
      Static[`showComments${answerIndex}`] == "Скрыть комментарии" ? (
        <div class="mb-[-0.625rem] bg-[#242835] pb-[0.4rem] [border-radius:0_0_0.9375rem_0.9375rem]">
          {answer.comments?.map((comment, commentIndex) => {
            return (
              <div
                class="relative !mt-[0.625rem] p-[0_0.625rem]"
                style="margin: 0 10px"
              >
                <a
                  onclick={Fn.link}
                  class="relative left-[-0.25rem] top-[0.625rem] inline-flex h-[auto] w-[auto] no-underline"
                  href={`/user/${comment?.author.nickname}`}
                >
                  <div class="relative z-[1] ml-[0.625rem] h-[2.625rem] w-[2.25rem] min-w-[2.9375rem]">
                    <img
                      class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] [object-fit:cover] [transform:translateX(-50%)_translateY(-50%)]"
                      src={
                        comment.author.avatar?.name
                          ? `/assets/upload/avatar/${comment.author.avatar?.name}`
                          : image
                      }
                    />
                    <img
                      class="absolute left-1/2 top-[0] z-[2] h-full !w-auto [transform:translateX(-50%)]"
                      src={
                        comment.author.frame?.name &&
                        comment.author.frame?.name != "default.svg"
                          ? `/contents/images/lenta/${comment.author.frame?.name}`
                          : frameDefault
                      }
                    />
                    {comment.author.status?.team ? (
                      <img
                        class="absolute bottom-[0] right-0 z-[2] h-[1.0625rem] w-[1.0625rem] rounded-[50%] bg-[--white] p-[0.1875rem]"
                        src={comment.author.status?.team ? teamLogo : null}
                      />
                    ) : (
                      <div>
                        <div class="absolute !top-[auto] bottom-0 right-[0] z-[2] h-[1.125rem]">
                          <img class="h-full" src={leveGray} />
                          <span class="absolute left-1/2 top-1/2 text-[0.625rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                            {comment.author.statistics.level}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div class="absolute left-[3.75rem] top-[0.625rem] block w-[8.125rem]">
                    <div class="text-[0.625rem] leading-[1.25rem] text-[--white] [font-weight:600]">
                      {comment.author.nickname}
                    </div>
                    <div class="relative top-[-0.4375rem] inline-block leading-[1.375rem] text-[#b0b7cd] [font-size:0.8125rem] [font-weight:500]">{`${front.Services.functions.timeStampToDate(comment.showDate, ".")} ${Func.addNull(Func.getDate(comment.showDate).getHours())}:${Func.addNull(Func.getDate(comment.showDate).getMinutes())}`}</div>
                  </div>
                </a>
                <div class="mb-[0.125rem] w-full pt-[0.875rem]">
                  {!Static[`isEditing${comment.id}`] ? (
                    <span
                      class="relative mx-auto block overflow-hidden break-words p-[0_0.5rem] text-[1rem] font-medium leading-[1.375rem] text-[--white]"
                      html={comment.text}
                    ></span>
                  ) : (
                    <div
                      id="form"
                      class="relative z-[6] mx-auto !mb-[0.625rem] !mt-[0.625rem] flex w-full max-w-[64rem] items-stretch justify-between"
                    >
                      <div class="relative mt-0 w-[calc(100%_-_3.125rem)]">
                        <textarea
                          class="relative flex min-h-[2.5625rem] w-full resize-none rounded-[0.625rem] bg-[#313543] p-[0.625rem_1.5625rem] text-[1rem] font-medium text-[--white] outline-none [border:0.0625rem_solid_#44495c]"
                          rows="1"
                          data-max-height="200"
                          data-scroll-last="48"
                          value={Static[`edit${comment.id}`]}
                          oninput={(e) => {
                            Static[`edit${comment.id}`] = e.target.value;
                          }}
                        ></textarea>
                      </div>
                      <button
                        class={[
                          "m-0 flex w-10 cursor-pointer justify-between self-center border-none bg-transparent p-0 [filter:invert(96%)_sepia(5%)_saturate(6439%)_hue-rotate(180deg)_brightness(95%)_contrast(76%)] [transform:none]",
                          !Static[`edit${comment.id}`] ? "btn_passive" : null,
                        ]}
                        onclick={() => {
                          let data = {
                            text: Static[`edit${comment.id}`],
                            answerId: answer.id,
                          };
                          Static[`edit${comment.id}`] = "";
                          Func.closeEdit(comment.id);
                          Func.sendAuth(
                            `/api/comments/${comment.id}/update`,
                            data,
                          );
                        }}
                      >
                        <img src={sendMessage} />
                      </button>
                    </div>
                  )}
                </div>
                <div class="static flex items-center justify-end gap-[0.3125rem] pb-[0.375rem] @410:absolute @410:right-[0.9375rem] @410:top-[0.9375rem]">
                  <div class="flex w-16 items-center justify-between">
                    <img
                      class="h-5 w-5 cursor-pointer rounded-[50%]"
                      src={dislike}
                      onclick={async () => {
                        await Func.sendAuth(
                          `/api/comments/${comment.id}/dislike`,
                          { answerId: answer.id },
                        );
                      }}
                    />
                    <span class="relative ml-[0.125rem] min-w-[1.125rem] !bg-clip-text text-center text-[0.9375rem] font-bold tracking-[0.0625rem] [-webkit-text-fill-color:transparent] [background:linear-gradient(45deg,#3bade3_0%,#576fe6_25%,#9844b7_51%,#ff357f_100%)]">
                      {comment.statistics.rating}
                    </span>
                    <img
                      class="h-5 w-5 cursor-pointer rounded-[50%]"
                      src={like}
                      onclick={async () => {
                        await Func.sendAuth(
                          `/api/comments/${comment.id}/like`,
                          { answerId: answer.id },
                        );
                      }}
                    />
                  </div>
                  <span
                    class="m-0 !ml-[0.3125rem] inline-block cursor-pointer !bg-clip-text text-[0.75rem] font-semibold [-webkit-text-fill-color:transparent] [background:linear-gradient(56.57deg,#2973ff_0,#8846d3_51.56%,#ff22ac_105.28%)]"
                    onclick={(e) => {
                      let isShow =
                        Ref[
                          `inputComment${answerIndex}${commentIndex}`
                        ].classList.contains("!flex");
                      Func.hideInputs();
                      if (!isShow) {
                        Ref[
                          `inputComment${answerIndex}${commentIndex}`
                        ].classList.add("!flex");
                        Ref[
                          `inputComment${answerIndex}${commentIndex}`
                        ].focus();
                      } else {
                        Ref[
                          `inputComment${answerIndex}${commentIndex}`
                        ].classList.remove("!flex");
                      }
                    }}
                  >
                    Ответить
                  </span>
                  <div
                    class="ml-[0.625rem] flex h-[1.375rem] w-[1.875rem] cursor-pointer items-center"
                    onclick={() => {
                      let records = [];
                      if (front.Variable.myInfo.id == comment.author.id) {
                        Func.isEditable(comment.showDate)
                          ? records.push({
                              name: "Редактировать",
                              func: () => Func.edit(comment.id),
                            })
                          : null;

                        records.push({
                          name: "Удалить",
                          func: () => Func.deleteComment(comment.id, answer.id),
                          type: "danger",
                        });
                      }

                      Fn.initOne("modalTools", {
                        records,
                        userId: comment.author.id,
                        complainTo: {
                          name: "comments",
                          text: "комментарий",
                          id: comment?.id,
                        },
                      });
                    }}
                  >
                    <img src={points} />
                  </div>
                </div>
                <div
                  id="form"
                  ref={`inputComment${answerIndex}${commentIndex}`}
                  class="relative z-[6] mx-auto !mb-[0.625rem] !mt-[0.625rem] hidden w-full max-w-[64rem] items-stretch justify-between"
                >
                  <div class="relative mt-0 w-[calc(100%_-_3.125rem)]">
                    <textarea
                      class="relative flex min-h-[2.5625rem] w-full resize-none rounded-[0.625rem] bg-[#313543] p-[0.625rem_1.5625rem] text-[1rem] font-medium text-[--white] outline-none [border:0.0625rem_solid_#44495c]"
                      rows="1"
                      data-max-height="200"
                      data-scroll-last="48"
                      value={
                        Static[`inputComment${answerIndex}${commentIndex}`]
                      }
                      oninput={(e) => {
                        Static[`inputComment${answerIndex}${commentIndex}`] =
                          e.target.value;
                      }}
                    ></textarea>
                  </div>
                  <button
                    class={[
                      "m-0 flex w-10 cursor-pointer justify-between self-center border-none bg-transparent p-0 [filter:invert(96%)_sepia(5%)_saturate(6439%)_hue-rotate(180deg)_brightness(95%)_contrast(76%)] [transform:none]",
                      !Static[`inputComment${answerIndex}${commentIndex}`]
                        ? "btn_passive"
                        : null,
                    ]}
                    onclick={() => {
                      let data = {
                        text: Static[
                          `inputComment${answerIndex}${commentIndex}`
                        ],
                      };
                      Static[`inputComment${answerIndex}${commentIndex}`] = "";
                      Ref[
                        `inputComment${answerIndex}${commentIndex}`
                      ].classList.toggle("!flex");
                      Func.sendAuth(
                        `/api/answers/${answer.id}/comments/${comment.id}/comment`,
                        data,
                      );
                    }}
                  >
                    <img src={sendMessage} />
                  </button>
                </div>
                {comment.comments?.map((comm, commIndex) => {
                  return (
                    <div class="relative p-[0_0.625rem]" style="margin: 0 10px">
                      <a
                        onclick={Fn.link}
                        class="relative left-[-0.25rem] top-[0.625rem] inline-flex h-[auto] w-[auto] no-underline"
                        href={`/user/${comm?.author.nickname}`}
                      >
                        <div class="relative z-[1] ml-[0.625rem] h-[2.625rem] w-[2.25rem] min-w-[2.9375rem]">
                          <img
                            class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] [object-fit:cover] [transform:translateX(-50%)_translateY(-50%)]"
                            src={
                              comm.author.avatar?.name
                                ? `/assets/upload/avatar/${comm.author.avatar?.name}`
                                : image
                            }
                          />
                          <img
                            class="absolute left-1/2 top-[0] z-[2] h-full !w-auto [transform:translateX(-50%)]"
                            src={
                              comm.author.frame?.name
                                ? `/contents/images/lenta/${comm.author.frame?.name}`
                                : frameDefault
                            }
                          />
                          {comm.author.status?.team ? (
                            <img
                              class=""
                              src={comm.author.status?.team ? teamLogo : null}
                            />
                          ) : (
                            <div>
                              <div class="absolute !top-[auto] bottom-0 right-[0] z-[2] h-[1.125rem]">
                                <img class="h-full" src={leveGray} />
                                <span class="absolute left-1/2 top-1/2 text-[0.625rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                                  {comm.author?.statistics?.level}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                        <div class="absolute left-[3.75rem] top-[0.625rem] block w-[8.125rem]">
                          <div class="text-[0.625rem] leading-[1.25rem] text-[--white] [font-weight:600]">
                            {comm.author.nickname}
                          </div>
                          <div class="relative top-[-0.4375rem] inline-block leading-[1.375rem] text-[#b0b7cd] [font-size:0.8125rem] [font-weight:500]">
                            {front.Services.functions.timeStampToDate(
                              comm.showDate,
                              ".",
                            )}
                          </div>
                        </div>
                      </a>
                      <div class="mb-[0.125rem] w-full pt-[0.875rem]">
                        {!Static[`isEditing${comm.id}`] ? (
                          <span
                            class="relative mx-auto block overflow-hidden break-words p-[0_0.5rem] text-[1rem] font-medium leading-[1.375rem] text-[--white]"
                            html={comm.text}
                          ></span>
                        ) : (
                          <div
                            id="form"
                            class="relative z-[6] mx-auto !mb-[0.625rem] !mt-[0.625rem] flex w-full max-w-[64rem] items-stretch justify-between"
                          >
                            <div class="relative mt-0 w-[calc(100%_-_3.125rem)]">
                              <textarea
                                class="relative flex min-h-[2.5625rem] w-full resize-none rounded-[0.625rem] bg-[#313543] p-[0.625rem_1.5625rem] text-[1rem] font-medium text-[--white] outline-none [border:0.0625rem_solid_#44495c]"
                                rows="1"
                                data-max-height="200"
                                data-scroll-last="48"
                                value={Static[`edit${comm.id}`]}
                                oninput={(e) => {
                                  Static[`edit${comm.id}`] = e.target.value;
                                }}
                              ></textarea>
                            </div>
                            <button
                              class={[
                                "m-0 flex w-10 cursor-pointer justify-between self-center border-none bg-transparent p-0 [filter:invert(96%)_sepia(5%)_saturate(6439%)_hue-rotate(180deg)_brightness(95%)_contrast(76%)] [transform:none]",
                                !Static[
                                  `${answerIndex}${commentIndex}${commIndex}`
                                ]
                                  ? "btn_passive"
                                  : null,
                              ]}
                              onclick={() => {
                                let data = {
                                  text: Static[`edit${comm.id}`],
                                  answerId: answer.id,
                                  commentId: comment.id,
                                };
                                Static[`edit${comm.id}`] = "";
                                Func.closeEdit(comm.id);
                                Func.sendAuth(
                                  `/api/comments/${comm.id}/update`,
                                  data,
                                );
                              }}
                            >
                              <img src={sendMessage} />
                            </button>
                          </div>
                        )}
                      </div>
                      <div class="static flex items-center justify-end gap-[0.3125rem] pb-[0.375rem] @410:absolute @410:right-[0.9375rem] @410:top-[0.9375rem]">
                        <div class="flex w-16 items-center justify-between">
                          <img
                            class="h-5 w-5 cursor-pointer rounded-[50%]"
                            src={dislike}
                            onclick={async () => {
                              await Func.sendAuth(
                                `/api/comments/${comm.id}/dislike`,
                                { answerId: answer.id, commentId: comment.id },
                              );
                            }}
                          />
                          <span class="relative ml-[0.125rem] min-w-[1.125rem] !bg-clip-text text-center text-[0.9375rem] font-bold tracking-[0.0625rem] [-webkit-text-fill-color:transparent] [background:linear-gradient(45deg,#3bade3_0%,#576fe6_25%,#9844b7_51%,#ff357f_100%)]">
                            {comm.statistics?.rating}
                          </span>
                          <img
                            class="h-5 w-5 cursor-pointer rounded-[50%]"
                            src={like}
                            onclick={async () => {
                              await Func.sendAuth(
                                `/api/comments/${comm.id}/like`,
                                { answerId: answer.id, commentId: comment.id },
                              );
                            }}
                          />
                        </div>
                        <span
                          class="m-0 !ml-[0.3125rem] inline-block cursor-pointer !bg-clip-text text-[0.75rem] font-semibold [-webkit-text-fill-color:transparent] [background:linear-gradient(56.57deg,#2973ff_0,#8846d3_51.56%,#ff22ac_105.28%)]"
                          onclick={(e) => {
                            let isShow =
                              Ref[
                                `inputCommentComm${answerIndex}${commentIndex}${commIndex}`
                              ].classList.contains("!flex");
                            Func.hideInputs();
                            if (!isShow) {
                              Ref[
                                `inputCommentComm${answerIndex}${commentIndex}${commIndex}`
                              ].classList.add("!flex");
                              Ref[
                                `inputCommentComm${answerIndex}${commentIndex}${commIndex}`
                              ].focus();
                            } else {
                              Ref[
                                `inputCommentComm${answerIndex}${commentIndex}${commIndex}`
                              ].classList.remove("!flex");
                            }
                          }}
                        >
                          Ответить
                        </span>
                        <div
                          class="ml-[0.625rem] flex h-[1.375rem] w-[1.875rem] cursor-pointer items-center"
                          onclick={() => {
                            let records = [];
                            if (front.Variable.myInfo.id == comm.author.id) {
                              Func.isEditable(comm.showDate)
                                ? records.push({
                                    name: "Редактировать",
                                    func: () => Func.edit(comm.id),
                                  })
                                : null;

                              records.push({
                                name: "Удалить",
                                func: () =>
                                  Func.deleteComment(
                                    comm.id,
                                    answer.id,
                                    comment.id,
                                  ),
                              });
                            }

                            Fn.initOne("modalTools", {
                              records,
                              userId: comm.author.id,
                              complainTo: {
                                name: "comments",
                                text: "комментарий",
                                id: comm?.id,
                              },
                            });
                          }}
                        >
                          <img src={points} />
                        </div>
                      </div>
                      <div
                        id="form"
                        ref={`inputCommentComm${answerIndex}${commentIndex}${commIndex}`}
                        class="relative z-[6] mx-auto !mb-[0.625rem] !mt-[0.625rem] hidden w-full max-w-[64rem] items-stretch justify-between"
                      >
                        <div class="relative mt-0 w-[calc(100%_-_3.125rem)]">
                          <textarea
                            rows="1"
                            class="relative flex min-h-[2.5625rem] w-full resize-none rounded-[0.625rem] bg-[#313543] p-[0.625rem_1.5625rem] text-[1rem] font-medium text-[--white] outline-none [border:0.0625rem_solid_#44495c]"
                            data-max-height="200"
                            data-scroll-last="48"
                            value={
                              Static[
                                `${answerIndex}${commentIndex}${commIndex}`
                              ]
                            }
                            oninput={(e) => {
                              Static[
                                `${answerIndex}${commentIndex}${commIndex}`
                              ] = e.target.value;
                            }}
                          ></textarea>
                        </div>
                        <button
                          class={[
                            "m-0 flex w-10 cursor-pointer justify-between self-center border-none bg-transparent p-0 [filter:invert(96%)_sepia(5%)_saturate(6439%)_hue-rotate(180deg)_brightness(95%)_contrast(76%)] [transform:none]",
                            !Static[`${answerIndex}${commentIndex}${commIndex}`]
                              ? "btn_passive"
                              : null,
                          ]}
                          onclick={() => {
                            let data = {
                              quote: comm.id,
                              text: Static[
                                `${answerIndex}${commentIndex}${commIndex}`
                              ],
                            };
                            Ref[
                              `inputCommentComm${answerIndex}${commentIndex}${commIndex}`
                            ].classList.toggle("!flex");
                            Static[
                              `${answerIndex}${commentIndex}${commIndex}`
                            ] = "";
                            Func.sendAuth(
                              `/api/answers/${answer.id}/comments/${comment.id}/comment`,
                              data,
                            );
                          }}
                        >
                          <img src={sendMessage} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : null}
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
            <RenderUser />
            <p class="pt-5 text-[1.125rem] font-semibold">
              {Static.record.title}
            </p>
            <p
              ref="itemText"
              class="pb-4 pt-[0.9375rem] text-[1.125rem] @767:pb-0"
              html={Static.record.text}
            ></p>
            <RenderStatistic />
          </div>

          <div class="mx-auto mt-10 max-w-[53.125rem]">
            {!Static.record.closed ? <RenderAddAnswer /> : null}

            {Static.record.answers?.length > 0 ? (
              <div
                class="relative mb-5 w-full rounded-[0.9375rem] p-[1.5625rem_0rem] !pb-0 !pt-[0.125rem]"
                ref="answerList"
              >
                {Static.record.answers?.map((answer, index) => {
                  return <RenderAnswer answer={answer} answerIndex={index} />;
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
