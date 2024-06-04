import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dislike from "@svg/lenta/dislike.svg";
import like from "@svg/lenta/like.svg";
import points from "@svg/lenta/points.svg";
import sendMessage from "@svg/lenta/send_message.svg";
import Form from "./Form";
import CommentAvatar from "./Comments/CommentAvatar";
import CommentInfo from "./Comments/CommentInfo";
import CommentText from "./Comments/CommentText";
import CommentAnswerBtn from "./Comments/CommentAnswerBtn";
import CommentRating from "./Comments/CommentRating";

let image = `/contents/images/lenta/avatar_default.png`;

export default function ({ to = "" }) {
  return (
    <div class="flex flex-col gap-2" role="list">
      {
        <div class="mb-[-0.625rem] pb-[0.4rem] [border-radius:0_0_0.9375rem_0.9375rem]">
          {Static.comments?.map((comment) => {
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
                  <CommentAvatar item={comment} />
                  <CommentInfo item={comment} />
                </a>
                <div class="mb-[0.125rem] w-full pt-[0.875rem]">
                  {!Static[`isEditing${comment.id}`] ? (
                    <CommentText item={comment} />
                  ) : (
                    <Form
                      key={"edit" + comment.id}
                      sendUrl={`/api/${to}${Static.id}/comments/${comment.id}/update`}
                      show={true}
                      extraData={{
                        postId: Static.id,
                      }}
                    />
                  )}
                </div>
                <div class="static flex items-center justify-end gap-[0.3125rem] pb-[0.375rem] @410:absolute @410:right-[0.9375rem] @410:top-[0.9375rem]">
                  <CommentRating
                    item={comment}
                    likeUrl={`/api/comments/${comment.id}/like`}
                    dislikeUrl={`/api/comments/${comment.id}/dislike`}
                    extraData={{
                      postId: Static.id,
                    }}
                  />
                  <CommentAnswerBtn item={comment} />
                  <div
                    class="ml-[0.625rem] flex h-[1.375rem] w-[1.875rem] cursor-pointer items-center"
                    onclick={() => {
                      let records = [];
                      if (front.Variable.myInfo.id == comment.author.id) {
                        Func.isEditable(comment.showDate)
                          ? records.push({
                              name: front.Variable?.words?.tools?.edit,
                              func: () => Func.edit(comment.id),
                            })
                          : null;

                        records.push({
                          name: front.Variable?.words?.tools?.delete,
                          func: () => Func.deleteComment(comment.id, Static.id),
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
                <Form
                  key={`answer${comment.id}`}
                  sendUrl={`/api/${to}${Static.id}/comments/${comment.id}/comment`}
                  extraData={{}}
                />

                {comment.comments?.map((comm, commIndex) => {
                  return (
                    <div class="relative p-[0_0.625rem]" style="margin: 0 10px">
                      <a
                        onclick={Fn.link}
                        class="relative left-[-0.25rem] top-[0.625rem] inline-flex h-[auto] w-[auto] no-underline"
                        href={`/user/${comm?.author.nickname}`}
                      >
                        <CommentAvatar item={comm} />
                        <CommentInfo item={comm} />
                      </a>
                      <div class="mb-[0.125rem] w-full pt-[0.875rem]">
                        {!Static[`isEditing${comm.id}`] ? (
                          <CommentText item={comm} />
                        ) : (
                          <Form
                            key={comm.id}
                            sendUrl={`/api/${to}${Static.id}/comments/${comm.id}/update`}
                            show={true}
                            extraData={{
                              postId: Static.id,
                              commentId: comment.id,
                            }}
                          />
                        )}
                      </div>
                      <div class="static flex items-center justify-end gap-[0.3125rem] pb-[0.375rem] @410:absolute @410:right-[0.9375rem] @410:top-[0.9375rem]">
                        <CommentRating
                          item={comm}
                          likeUrl={`/api/comments/${comm.id}/like`}
                          dislikeUrl={`/api/comments/${comm.id}/dislike`}
                          extraData={{
                            postId: Static.id,
                            commentId: comment.id,
                          }}
                        />
                        <CommentAnswerBtn item={comm} />
                        <div
                          class="ml-[0.625rem] flex h-[1.375rem] w-[1.875rem] cursor-pointer items-center"
                          onclick={() => {
                            let records = [];
                            if (front.Variable.myInfo.id == comm.author.id) {
                              Func.isEditable(comm.showDate)
                                ? records.push({
                                    name: front.Variable?.words?.tools?.edit,
                                    func: () => Func.edit(comm.id),
                                  })
                                : null;

                              records.push({
                                name: front.Variable?.words?.tools?.delete,
                                func: () =>
                                  Func.deleteComment(
                                    comm.id,
                                    Static.id,
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
                      <Form
                        key={`answer${comm.id}`}
                        sendUrl={`/api/${to}${Static.id}/comments/${comment.id}/comment`}
                        extraData={{
                          quote: comm.id,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}
