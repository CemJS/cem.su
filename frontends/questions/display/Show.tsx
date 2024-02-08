import { Cemjsx, Events, Fn, Ref, Static, front } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dislike from "@svg/lenta/dislike.svg";
import like from "@svg/lenta/like.svg";
import points from "@svg/lenta/points.svg";
import sendMessage from "@svg/lenta/send_message.svg";

export default function () {
  Fn.log("=cc19c9=", Static.record);
  if (!Static.record?.id) {
    return <div>не найдено</div>;
  }
  Static.showComments = "Показать комментарии";
  Fn.log("=6ba981=", Static.record);
  let image = `/contents/images/lenta/avatar_default.png`;
  return (
    <div>
      <div class="questions-show">
        <div class="wrapper">
          <div class="questions-show__container">
            <div class="questions__user">
              <a
                class="avatar"
                href="#"
              >
                <div class="avatar__icon">
                  <img
                    class="avatar__photo"
                    src={Static.record.authorDetails.avatar?.name ? `/assets/upload/avatar/${Static.record.authorDetails.avatar?.name}` : image}
                  />
                  <img
                    class="avatar__frame"
                    src={Static.record.authorDetails.frame?.name ? `/contents/images/lenta/${Static.record.authorDetails.frame?.name}` : frameDefault}
                  />
                  {Static.record.authorDetails.status?.team ? (
                    <img
                      class="avatar__team"
                      src={Static.record.authorDetails.status?.team ? teamLogo : null}
                    />
                  ) : (
                    <div>
                      <div class="avatar__level">
                        <img src={leveGray} />
                        <span>{Static.record.authorDetails.statistic.level}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div class="avatar__name">
                  <span>{Static.record.authorDetails.nickname}</span>
                </div>
              </a>
            </div>
            <p class="questions-show__title">{Static.record.title}</p>
            <p
              ref="itemText"
              class="questions-show__description"
              init={() => (Ref.itemText.innerHTML = Static.record.text)}
            ></p>
            <div class="questions__item_statistic questions-show__statistic">
              <span>
                <i class="i i-comment"></i>
                {Static.record.statistic.answer}
              </span>
              <span class="questions-show__statistic_view">
                <i class="i i-faq"></i>
                {Static.record.statistic.view}
              </span>
              <span>{front.Services.functions.timeStampToDate(Static.record.showDate, ".")}</span>
            </div>
          </div>

          <div class="user-comment questions-show__answers">
            <div class="answer">
              <textarea
                class="answer__field"
                cols="20"
                rows="10"
                oninput={(e) => {
                  Static.text = e.target.value;
                }}
              ></textarea>
              <div class="answer__btn-wrapper">
                <button
                  class="btn"
                  type="button"
                  onclick={() => {
                    let data = {
                      action: "insert",
                      author: "63c7f6063be93e984c962b75",
                      text: Static.text,
                      questionId: Static.record.id,
                      table: "Questions",
                      tableID: Static.record.id,
                      rating: 1,
                    };
                    fetch(`/api/events/Answers?uuid=${front.Variable.myInfo.uuid}`, {
                      method: "POST",
                      headers: { "content-type": "application/json" },
                      body: JSON.stringify(data),
                    });
                  }}
                >
                  Отправить
                </button>
              </div>
            </div>

            {Static.record.answers?.length > 0 ? (
              <div
                class="user-comment__list questions-show__list"
                ref="answerList"
              >
                {Static.record.answers?.map((answer) => {
                  return (
                    <div class="questions-show__item">
                      <div class="user-comment__item">
                        <a
                          class="user-comment__avatar avatar"
                          href=""
                        >
                          <div class="avatar__icon">
                            <img
                              class="avatar__photo"
                              src={answer.authorDetails.avatar?.name ? `/assets/upload/avatar/${answer.authorDetails.avatar?.name}` : image}
                            />
                            <img
                              class="avatar__frame"
                              src={answer.authorDetails.frame?.name && answer.authorDetails.frame?.name != "default.svg" ? `/contents/images/lenta/${answer.authorDetails.frame?.name}` : frameDefault}
                            />
                            {answer.authorDetails.status?.team ? (
                              <img
                                class="avatar__team"
                                src={answer.authorDetails.status?.team ? teamLogo : null}
                              />
                            ) : (
                              <div>
                                <div class="avatar__level">
                                  <img src={leveGray} />
                                  <span>{answer.authorDetails.statistic.level}</span>
                                </div>
                              </div>
                            )}
                          </div>
                          <div class="user-comment__avatar_info">
                            <div class="user-comment__avatar_name">{answer.authorDetails.nickname}</div>
                            <div class="user-comment__avatar_time">{front.Services.functions.timeStampToDate(answer.showDate, ".")}</div>
                          </div>
                        </a>
                        <div class="user-comment__body">
                          <span init={(e) => (e.innerHTML = answer.text)}></span>
                          {answer.media.map((item) => {
                            return (
                              <img
                                src={`/assets/upload/answers/${item.name}`}
                                alt={item.type}
                                class="user-comment__media"
                              />
                            );
                          })}
                          <div
                            class="user-comment__answer questions-show__tell"
                            onclick={(e) => {
                              let elemr = Ref.answerList.childNodes;
                              for (let i = 0; i < elemr.length; i++) {
                                for (let y = 0; y < elemr[i].childNodes.length; y++) {
                                  if (elemr[i].childNodes[y].firstChild?.nextSibling?.nextSibling) {
                                    elemr[i].childNodes[y].firstChild.nextSibling.nextSibling.style = "display: none";
                                  }
                                }
                              }

                              let el = e.currentTarget;
                              el.parentElement.nextSibling.style = "display: flex";
                              el.parentElement.nextSibling.firstChild.firstChild.focus();
                            }}
                          >
                            Ответить
                          </div>
                        </div>
                        <div class="user-comment__comment user-comment__form">
                          <div class="user-comment__comment_field">
                            <textarea
                              rows="1"
                              data-max-height="200"
                              data-scroll-last="48"
                              oninput={(e) => {
                                Static.textCom = e.target.value;
                              }}
                            ></textarea>
                          </div>
                          <button
                            class="user-comment__comment_button"
                            onclick={() => {
                              let data = {
                                action: "insert",
                                // author: front.Variable.myInfo.id,
                                author: "63c7f6063be93e984c962b75",
                                text: Static.textCom,
                                table: "Answers",
                                tableID: answer.id,
                                rating: 1,
                              };
                              fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                method: "POST",
                                headers: { "content-type": "application/json" },
                                body: JSON.stringify(data),
                              });
                            }}
                          >
                            <img src={sendMessage} />
                          </button>
                        </div>
                        {answer.statistic.comments > 0 ? (
                          <div class="answer__comments">
                            <button
                              onclick={(e) => {
                                let el = e.currentTarget;
                                let elemComments = el.parentElement.parentElement.parentElement.lastChild;
                                console.log("=f5e71d=", elemComments);

                                if (elemComments.style.display == "none") {
                                  Static.showComments = "Скрыть комментарии";
                                  elemComments.style = "display: block";
                                } else {
                                  Static.showComments = "Показать комментарии";
                                  elemComments.style = "display: none";
                                }
                              }}
                            >{`${Static.showComments} (${answer.statistic.comments})`}</button>
                          </div>
                        ) : null}
                        <div class="user-comment__statistic comment-statistic">
                          <div class="comment-statistic__rating">
                            <img
                              src={dislike}
                              onclick={() => {
                                let data = {
                                  action: "update",
                                  author: "63c7f6063be93e984c962b75",
                                  rating: -1,
                                  type: "minus",
                                  answerId: answer.id,
                                };
                                fetch(`/api/events/Answers?uuid=${front.Variable.myInfo.uuid}`, {
                                  method: "POST",
                                  headers: { "content-type": "application/json" },
                                  body: JSON.stringify(data),
                                });
                              }}
                            />
                            <span>{answer.statistic.rating}</span>
                            <img
                              src={like}
                              onclick={() => {
                                let data = {
                                  action: "update",
                                  author: "63c7f6063be93e984c962b75",
                                  rating: 1,
                                  type: "plus",
                                  answerId: answer.id,
                                };
                                fetch(`/api/events/Answers?uuid=${front.Variable.myInfo.uuid}`, {
                                  method: "POST",
                                  headers: { "content-type": "application/json" },
                                  body: JSON.stringify(data),
                                });
                              }}
                            />
                          </div>
                          <div
                            class="user-comment__settings"
                            onclick={() => {
                              // Fn.initOne({
                              //   name: "modalTool",
                              //   ifOpen: (front) => {
                              //     setTimeout(() => {
                              //       front.clearData();
                              //     }, 500);
                              //   },
                              //   data: {
                              //     data: {
                              //       page: "comments",
                              //       id: answer.id,
                              //       collection: "Answers",
                              //       table: "Questions",
                              //       tableID: Static.record.id,
                              //       rating: -1,
                              //     },
                              //   },
                              // });
                              // console.log('=ee090b=', answer.id)
                              // let data = {
                              //   action: "remove",
                              //   id: answer.id,
                              //   table: "Questions",
                              //   tableID: Static.record.id,
                              //   rating: -1,
                              // }
                              // fetch(`/api/events/Answers?uuid=${front.Variable.myInfo.uuid}`, {
                              //   method: "POST",
                              //   headers: { "content-type": "application/json" },
                              //   body: JSON.stringify(data),
                              // })
                            }}
                          >
                            <img src={points} />
                          </div>
                        </div>
                      </div>
                      <div
                        class="questions-show__comments"
                        style="display: none"
                      >
                        {answer.commentsDetails?.map((comment) => {
                          return (
                            <div
                              class="user-comment__item"
                              style="margin: 0 10px"
                            >
                              <a
                                class="user-comment__avatar avatar"
                                href=""
                              >
                                <div class="avatar__icon">
                                  <img
                                    class="avatar__photo"
                                    src={comment.authorDetails.avatar?.name ? `/assets/upload/avatar/${comment.authorDetails.avatar?.name}` : image}
                                  />
                                  <img
                                    class="avatar__frame"
                                    src={
                                      comment.authorDetails.frame?.name && comment.authorDetails.frame?.name != "default.svg"
                                        ? `/contents/images/lenta/${comment.authorDetails.frame?.name}`
                                        : frameDefault
                                    }
                                  />
                                  {comment.authorDetails.status?.team ? (
                                    <img
                                      class="avatar__team"
                                      src={comment.authorDetails.status?.team ? teamLogo : null}
                                    />
                                  ) : (
                                    <div>
                                      <div class="avatar__level">
                                        <img src={leveGray} />
                                        <span>{comment.authorDetails.statistic.level}</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                                <div class="user-comment__avatar_info">
                                  <div class="user-comment__avatar_name">{comment.authorDetails.nickname}</div>
                                  <div class="user-comment__avatar_time">{front.Services.functions.timeStampToDate(comment.showDate, ".")}</div>
                                </div>
                              </a>
                              <div class="user-comment__body">
                                <span init={(e) => (e.innerHTML = comment.text)}></span>
                              </div>
                              <div class="user-comment__statistic comment-statistic">
                                <div class="comment-statistic__rating">
                                  <img
                                    src={dislike}
                                    onclick={() => {
                                      let data = {
                                        action: "update",
                                        author: "63c7f6063be93e984c962b75",
                                        rating: -1,
                                        type: "minus",
                                        id: comment.id,
                                      };
                                      fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                        method: "POST",
                                        headers: { "content-type": "application/json" },
                                        body: JSON.stringify(data),
                                      });
                                    }}
                                  />
                                  <span>{comment.rating}</span>
                                  <img
                                    src={like}
                                    onclick={() => {
                                      let data = {
                                        action: "update",
                                        author: "63c7f6063be93e984c962b75",
                                        rating: 1,
                                        type: "plus",
                                        id: comment.id,
                                      };
                                      fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                        method: "POST",
                                        headers: { "content-type": "application/json" },
                                        body: JSON.stringify(data),
                                      });
                                    }}
                                  />
                                </div>
                                <span
                                  class="user-comment__answer"
                                  onclick={(e) => {
                                    let el = e.currentTarget;
                                    el.parentElement.parentElement.lastChild.style = "display: flex";
                                  }}
                                >
                                  Ответить
                                </span>
                                <div
                                  class="user-comment__settings"
                                  onclick={() => {
                                    // Fn.initOne({
                                    //   name: "modalTool",
                                    //   ifOpen: (front) => {
                                    //     setTimeout(() => {
                                    //       front.clearData();
                                    //     }, 500);
                                    //   },
                                    //   data: {
                                    //     data: {
                                    //       page: "comments",
                                    //       id: comment.id,
                                    //       collection: "Comments",
                                    //       table: "Answers",
                                    //       tableID: answer.id,
                                    //       rating: -1,
                                    //     },
                                    //   },
                                    // });
                                    // let data = {
                                    //   action: "remove",
                                    //   id: comm.id,
                                    //   table: "Answer",
                                    //   tableID: answer.id,
                                    //   rating: -1,
                                    // }
                                    // fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                    //   method: "POST",
                                    //   headers: { "content-type": "application/json" },
                                    //   body: JSON.stringify(data),
                                    // })
                                  }}
                                >
                                  <img src={points} />
                                </div>
                              </div>
                              <div class="user-comment__comment user-comment__form">
                                <div class="user-comment__comment_field">
                                  <textarea
                                    rows="1"
                                    data-max-height="200"
                                    data-scroll-last="48"
                                    oninput={(e) => {
                                      Static.textCom = e.target.value;
                                    }}
                                  ></textarea>
                                </div>
                                <button
                                  class="user-comment__comment_button"
                                  onclick={() => {
                                    let data = {
                                      action: "insert",
                                      author: "63c7f6063be93e984c962b75",
                                      text: Static.textCom,
                                      table: "Answers",
                                      commentId: comment.id,
                                      rating: 1,
                                    };
                                    fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                      method: "POST",
                                      headers: { "content-type": "application/json" },
                                      body: JSON.stringify(data),
                                    });
                                  }}
                                >
                                  <img src={sendMessage} />
                                </button>
                              </div>
                              {Static.recordsCommentsInner?.map((comm, index) => {
                                if (comm.commentId != comment.id) {
                                  return;
                                }
                                return (
                                  <div
                                    class="user-comment__item"
                                    style="margin: 0 10px"
                                  >
                                    <a
                                      class="user-comment__avatar avatar"
                                      href=""
                                    >
                                      <div class="avatar__icon">
                                        <img
                                          class="avatar__photo"
                                          src={comm.authorDetails.avatar?.name ? `/assets/upload/avatar/${comm.authorDetails.avatar?.name}` : image}
                                        />
                                        <img
                                          class="avatar__frame"
                                          src={comm.authorDetails.frame?.name ? `/contents/images/lenta/${comm.authorDetails.frame?.name}` : frameDefault}
                                        />
                                        {comm.authorDetails.status?.team ? (
                                          <img
                                            class="avatar__team"
                                            src={comm.authorDetails.status?.team ? teamLogo : null}
                                          />
                                        ) : (
                                          <div>
                                            <div class="avatar__level">
                                              <img src={leveGray} />
                                              <span>{comm.authorDetails.statistic.level}</span>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                      <div class="user-comment__avatar_info">
                                        <div class="user-comment__avatar_name">{comm.authorDetails.nickname}</div>
                                        <div class="user-comment__avatar_time">{front.Services.functions.timeStampToDate(comm.showDate, ".")}</div>
                                      </div>
                                    </a>
                                    <div class="user-comment__body">
                                      <span init={(e) => (e.innerHTML = comm.text)}></span>
                                    </div>
                                    <div class="user-comment__statistic comment-statistic">
                                      <div class="comment-statistic__rating">
                                        <img
                                          src={dislike}
                                          onclick={() => {
                                            let data = {
                                              action: "update",
                                              author: "63c7f6063be93e984c962b75",
                                              rating: -1,
                                              type: "minus",
                                              id: comm.id,
                                            };
                                            fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                              method: "POST",
                                              headers: { "content-type": "application/json" },
                                              body: JSON.stringify(data),
                                            });
                                          }}
                                        />
                                        <span>{comm.statistic.rating}</span>
                                        <img
                                          src={like}
                                          onclick={() => {
                                            let data = {
                                              action: "update",
                                              author: "63c7f6063be93e984c962b75",
                                              rating: 1,
                                              type: "plus",
                                              id: comm.id,
                                            };
                                            fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                              method: "POST",
                                              headers: { "content-type": "application/json" },
                                              body: JSON.stringify(data),
                                            });
                                          }}
                                        />
                                      </div>
                                      <span
                                        class="user-comment__answer"
                                        onclick={(e) => {
                                          let elemr = Ref.commentList.childNodes;
                                          for (let i = 0; i < elemr.length; i++) {
                                            for (let y = 0; y < elemr[i].childNodes.length; y++) {
                                              elemr[i].childNodes[y].lastChild.style = "display: none";
                                            }
                                          }

                                          let el = e.currentTarget;
                                          el.parentElement.parentElement.lastChild.style = "display: flex;";
                                          el.parentElement.parentElement.lastChild.firstChild.firstChild.focus();
                                        }}
                                      >
                                        Ответить
                                      </span>
                                      <div
                                        class="user-comment__settings"
                                        onclick={() => {
                                          // Fn.initOne({
                                          //   name: "modalTool",
                                          //   ifOpen: (front) => {
                                          //     setTimeout(() => {
                                          //       front.clearData();
                                          //     }, 500);
                                          //   },
                                          //   data: {
                                          //     data: {
                                          //       page: "comments",
                                          //       id: comm.id,
                                          //       collection: "Comments",
                                          //       table: "Answers",
                                          //       tableID: answer.id,
                                          //       rating: -1,
                                          //     },
                                          //   },
                                          // });
                                        }}
                                      >
                                        <img src={points} />
                                      </div>
                                    </div>
                                    <div class="user-comment__comment user-comment__form">
                                      <div class="user-comment__comment_field">
                                        <textarea
                                          rows="1"
                                          data-max-height="200"
                                          data-scroll-last="48"
                                          oninput={(e) => {
                                            Static.textCom = e.target.value;
                                          }}
                                        ></textarea>
                                      </div>
                                      <button
                                        class="user-comment__comment_button"
                                        onclick={() => {
                                          let data = {
                                            action: "insert",
                                            author: "63c7f6063be93e984c962b75",
                                            text: Static.textCom,
                                            table: "Answers",
                                            commentId: comment.id,
                                            rating: 1,
                                          };
                                          fetch(`/api/events/Comments?uuid=${front.Variable.myInfo.uuid}`, {
                                            method: "POST",
                                            headers: { "content-type": "application/json" },
                                            body: JSON.stringify(data),
                                          });
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
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
