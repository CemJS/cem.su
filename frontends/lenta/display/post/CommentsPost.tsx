import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dislike from "@svg/lenta/dislike.svg";
import like from "@svg/lenta/like.svg";
import points from "@svg/lenta/points.svg";
import sendMessage from "@svg/lenta/send_message.svg";

let image = `/contents/images/lenta/avatar_default.png`;

export default function ({ item, index: postIndex }) {
  return Static[`showComments${postIndex}`] == "Скрыть комментарии" ? (
    <div class="mb-[-0.625rem] bg-[#242835] pb-[0.4rem] [border-radius:0_0_0.9375rem_0.9375rem]">
      {item.comments?.map((comment, commentIndex) => {
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
                        answerId: item.id,
                      };
                      Static[`edit${comment.id}`] = "";
                      Func.closeEdit(comment.id);
                      Func.sendAuth(`/api/comments/${comment.id}/update`, data);
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
                    await Func.sendAuth(`/api/comments/${comment.id}/dislike`, {
                      answerId: item.id,
                    });
                  }}
                />
                <span class="relative ml-[0.125rem] min-w-[1.125rem] !bg-clip-text text-center text-[0.9375rem] font-bold tracking-[0.0625rem] [-webkit-text-fill-color:transparent] [background:linear-gradient(45deg,#3bade3_0%,#576fe6_25%,#9844b7_51%,#ff357f_100%)]">
                  {comment.statistics.rating}
                </span>
                <img
                  class="h-5 w-5 cursor-pointer rounded-[50%]"
                  src={like}
                  onclick={async () => {
                    await Func.sendAuth(`/api/comments/${comment.id}/like`, {
                      answerId: item.id,
                    });
                  }}
                />
              </div>
              <span
                class="m-0 !ml-[0.3125rem] inline-block cursor-pointer !bg-clip-text text-[0.75rem] font-semibold [-webkit-text-fill-color:transparent] [background:linear-gradient(56.57deg,#2973ff_0,#8846d3_51.56%,#ff22ac_105.28%)]"
                onclick={(e) => {
                  let isShow =
                    Ref[
                      `inputComment${postIndex}${commentIndex}`
                    ].classList.contains("!flex");
                  Func.hideInputs();
                  if (!isShow) {
                    Ref[
                      `inputComment${postIndex}${commentIndex}`
                    ].classList.add("!flex");
                    Ref[`inputComment${postIndex}${commentIndex}`].focus();
                  } else {
                    Ref[
                      `inputComment${postIndex}${commentIndex}`
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
                      func: () => Func.deleteComment(comment.id, item.id),
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
              ref={`inputComment${postIndex}${commentIndex}`}
              class="relative z-[6] mx-auto !mb-[0.625rem] !mt-[0.625rem] hidden w-full max-w-[64rem] items-stretch justify-between"
            >
              <div class="relative mt-0 w-[calc(100%_-_3.125rem)]">
                <textarea
                  class="relative flex min-h-[2.5625rem] w-full resize-none rounded-[0.625rem] bg-[#313543] p-[0.625rem_1.5625rem] text-[1rem] font-medium text-[--white] outline-none [border:0.0625rem_solid_#44495c]"
                  rows="1"
                  data-max-height="200"
                  data-scroll-last="48"
                  value={Static[`inputComment${postIndex}${commentIndex}`]}
                  oninput={(e) => {
                    Static[`inputComment${postIndex}${commentIndex}`] =
                      e.target.value;
                  }}
                ></textarea>
              </div>
              <button
                class={[
                  "m-0 flex w-10 cursor-pointer justify-between self-center border-none bg-transparent p-0 [filter:invert(96%)_sepia(5%)_saturate(6439%)_hue-rotate(180deg)_brightness(95%)_contrast(76%)] [transform:none]",
                  !Static[`inputComment${postIndex}${commentIndex}`]
                    ? "btn_passive"
                    : null,
                ]}
                onclick={() => {
                  let data = {
                    text: Static[`inputComment${postIndex}${commentIndex}`],
                  };
                  Static[`inputComment${postIndex}${commentIndex}`] = "";
                  Ref[
                    `inputComment${postIndex}${commentIndex}`
                  ].classList.toggle("!flex");
                  Func.sendAuth(
                    `/api/answers/${item.id}/comments/${comment.id}/comment`,
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
                            !Static[`${postIndex}${commentIndex}${commIndex}`]
                              ? "btn_passive"
                              : null,
                          ]}
                          onclick={() => {
                            let data = {
                              text: Static[`edit${comm.id}`],
                              answerId: item.id,
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
                            { answerId: item.id, commentId: comment.id },
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
                          await Func.sendAuth(`/api/comments/${comm.id}/like`, {
                            answerId: item.id,
                            commentId: comment.id,
                          });
                        }}
                      />
                    </div>
                    <span
                      class="m-0 !ml-[0.3125rem] inline-block cursor-pointer !bg-clip-text text-[0.75rem] font-semibold [-webkit-text-fill-color:transparent] [background:linear-gradient(56.57deg,#2973ff_0,#8846d3_51.56%,#ff22ac_105.28%)]"
                      onclick={(e) => {
                        let isShow =
                          Ref[
                            `inputCommentComm${postIndex}${commentIndex}${commIndex}`
                          ].classList.contains("!flex");
                        Func.hideInputs();
                        if (!isShow) {
                          Ref[
                            `inputCommentComm${postIndex}${commentIndex}${commIndex}`
                          ].classList.add("!flex");
                          Ref[
                            `inputCommentComm${postIndex}${commentIndex}${commIndex}`
                          ].focus();
                        } else {
                          Ref[
                            `inputCommentComm${postIndex}${commentIndex}${commIndex}`
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
                              Func.deleteComment(comm.id, item.id, comment.id),
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
                    ref={`inputCommentComm${postIndex}${commentIndex}${commIndex}`}
                    class="relative z-[6] mx-auto !mb-[0.625rem] !mt-[0.625rem] hidden w-full max-w-[64rem] items-stretch justify-between"
                  >
                    <div class="relative mt-0 w-[calc(100%_-_3.125rem)]">
                      <textarea
                        rows="1"
                        class="relative flex min-h-[2.5625rem] w-full resize-none rounded-[0.625rem] bg-[#313543] p-[0.625rem_1.5625rem] text-[1rem] font-medium text-[--white] outline-none [border:0.0625rem_solid_#44495c]"
                        data-max-height="200"
                        data-scroll-last="48"
                        value={
                          Static[`${postIndex}${commentIndex}${commIndex}`]
                        }
                        oninput={(e) => {
                          Static[`${postIndex}${commentIndex}${commIndex}`] =
                            e.target.value;
                        }}
                      ></textarea>
                    </div>
                    <button
                      class={[
                        "m-0 flex w-10 cursor-pointer justify-between self-center border-none bg-transparent p-0 [filter:invert(96%)_sepia(5%)_saturate(6439%)_hue-rotate(180deg)_brightness(95%)_contrast(76%)] [transform:none]",
                        !Static[`${postIndex}${commentIndex}${commIndex}`]
                          ? "btn_passive"
                          : null,
                      ]}
                      onclick={() => {
                        let data = {
                          quote: comm.id,
                          text: Static[
                            `${postIndex}${commentIndex}${commIndex}`
                          ],
                        };
                        Ref[
                          `inputCommentComm${postIndex}${commentIndex}${commIndex}`
                        ].classList.toggle("!flex");
                        Static[`${postIndex}${commentIndex}${commIndex}`] = "";
                        Func.sendAuth(
                          `/api/answers/${item.id}/comments/${comment.id}/comment`,
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
  ) : (
    ""
  );
}
