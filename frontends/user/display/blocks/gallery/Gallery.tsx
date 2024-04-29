import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import avatarDefault from "@images/lenta/avatar_default.png";
import defaultGray from "@svg/lenta/defaultGray.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dots from "@svg/questions/dots.svg";
import editIcon from "@svg/profile/editIcon.svg";
import FormGallery from "./FormGallery";

export default function () {
  console.log("Static.record1", Static.record);

  return (
    <div class="relative z-[1] m-0 w-full min-w-full px-[.625rem] py-0 pb-[1.25rem] @1024:pb-[2.5rem] @1200:mx-auto @1200:my-0 @1200:min-w-[calc(100%_-_224px)] @1200:pt-[.625rem]">
      <div class=" mb-[.3125rem] mt-[1.25rem] flex items-center justify-between pb-[.9375rem] pt-[.625rem] @1024:mt-[1.5625rem]">
        <h2 class="mx-0 my-[1.25rem] text-balance text-center text-[clamp(17px,_3vw,_20px)] font-bold leading-[115%] text-[--white]">
          Заданные вопросы
        </h2>
        <ul class="m-0 flex list-none items-stretch gap-[.4375rem] p-0 max-@1024:pr-[.625rem]">
          <li>
            <a
              class={[
                "block h-[1.8125rem] w-[1.8125rem] [background:no-repeat_url(/contents/svg/gallery/infinity.svg)_center_/_90%]",
                "[border:2px_solid_#40f2d0]",
              ]}
            ></a>
          </li>
        </ul>
      </div>
      {Static.showForm && <FormGallery />}

      <div class="grid grid-cols-[100%] gap-[.625rem] @680:grid-cols-[calc(50%_-_5px)_calc(50%_-_5px)] @1200:grid-cols-[calc(25%_-_7.5px)_calc(25%_-_7.5px)_calc(25%_-_7.5px)_calc(25%_-_7.5px)]">
        {Static.record?.socials?.map((item: any, key: number) => {
          return (
            <div
              class={[
                "relative rounded-[.5rem] p-[.125rem] text-inherit no-underline",
                item?.channel === "youtube"
                  ? "bg-[#FD434F]"
                  : item?.channel === "telegram" || item?.channel === "twitter"
                    ? "bg-[#2481CC]"
                    : item?.channel === "github"
                      ? "bg-[#0D1117]"
                      : item?.channel === "instagram"
                        ? "bg-gradient-to-r from-[#6152bf] via-[#833ab4] to-[#fcb045]"
                        : item?.channel === "twitch"
                          ? "bg-[#4a2779]"
                          : item?.channel === "facebook" ||
                              item?.channel === "linkedin"
                            ? "bg-[#00388d]"
                            : item?.channel === "tiktok"
                              ? "bg-[black]"
                              : item?.channel === "vkontakte"
                                ? "bg-[#4c75a3]"
                                : item?.channel === "discord"
                                  ? "bg-[#5865f2]"
                                  : item?.channel === "twitch"
                                    ? "bg-[#4a2779]"
                                    : item?.channel === "twitch"
                                      ? "bg-[#4a2779]"
                                      : "",
              ]}
            >
              <div class="flex h-full w-full flex-row items-center rounded-[.4375rem] bg-[--black-gray] px-[.625rem] py-[.3125rem] @680:flex-col @680:px-[.9375rem] @680:py-[.625rem]">
                <a
                  onclick={Fn.link}
                  href={item?.url}
                  class={[
                    "flex h-[3.75rem] min-h-[3.75rem] w-[3.75rem] min-w-[3.75rem] items-center justify-center rounded-[50%] [&_img]:h-full [&_img]:max-h-[60%] [&_img]:w-full [&_img]:max-w-[60%]",
                    item?.channel === "youtube"
                      ? "bg-[#FD434F]"
                      : item?.channel === "telegram" ||
                          item?.channel === "twitter"
                        ? "bg-[#2481CC]"
                        : item?.channel === "github"
                          ? "bg-[#0D1117]"
                          : item?.channel === "instagram"
                            ? "bg-[#f8468d]"
                            : item?.channel === "twitch"
                              ? "bg-[#4a2779]"
                              : item?.channel === "facebook" ||
                                  item?.channel === "linkedin"
                                ? "bg-[#00388d]"
                                : item?.channel === "tiktok"
                                  ? "bg-[black]"
                                  : item?.channel === "vkontakte"
                                    ? "bg-[#4c75a3]"
                                    : item?.channel === "discord"
                                      ? "bg-[#5865f2]"
                                      : item?.channel === "twitch"
                                        ? "bg-[#4a2779]"
                                        : "",
                  ]}
                >
                  {item?.channel === "youtube" ? (
                    <img src={`/contents/svg/socials/youTubeIcon.svg`} />
                  ) : item?.channel === "telegram" ? (
                    <img src={`/contents/svg/socials/telegramIcon.svg`} />
                  ) : item?.channel === "github" ? (
                    <img src={`/contents/svg/socials/githubIcon.svg`} />
                  ) : item?.channel === "instagram" ? (
                    <img src={`/contents/svg/socials/instagramIcon.svg`} />
                  ) : item?.channel === "twitch" ? (
                    <img src={`/contents/svg/socials/twitchIcon.svg`} />
                  ) : item?.channel === "facebook" ? (
                    <img src={`/contents/svg/socials/facebookIcon.svg`} />
                  ) : item?.channel === "linkedin" ? (
                    <img src={`/contents/svg/socials/linkedInIcon.svg`} />
                  ) : item?.channel === "tiktok" ? (
                    <img src={`/contents/svg/socials/tiktokIcon.svg`} />
                  ) : item?.channel === "twitter" ? (
                    <img src={`/contents/svg/socials/twitterIcon.svg`} />
                  ) : item?.channel === "vkontakte" ? (
                    <img src={`/contents/svg/socials/vkontakteIcon.svg`} />
                  ) : item?.channel === "discord" ? (
                    <img src={`/contents/svg/socials/discordIcon.svg`} />
                  ) : (
                    ""
                  )}
                </a>
                <div class="text-left max-@680:ml-[.625rem] max-@680:[word-break:break-word] @680:text-center">
                  <p class="mb-[.1875rem] mt-[.5rem] text-[1.125rem] font-semibold">
                    {item?.name}
                  </p>
                  <p class="text-left text-[.75rem] @680:text-center @680:text-[.875rem]">
                    {item?.description}
                  </p>
                </div>
                <div class="absolute right-[1.25rem] top-[.625rem] cursor-pointer">
                  <div
                    onclick={() => {
                      let records = [
                        {
                          name: "Удалить",
                          type: "danger",
                          func: () =>
                            Fn.initOne("modalAccept", {
                              title: "удалить социальную сеть ",
                              Callback: async (CallBack: boolean) => {
                                if (CallBack) {
                                  const array = [...Static.record?.socials];
                                  array?.splice(key, 1);
                                  let res =
                                    await front.Services.functions.sendApi(
                                      `/api/users/update`,
                                      { social: array },
                                    );
                                  if (res?.status === 200) {
                                    Static.record.socials = array;
                                  } else {
                                    Fn.initOne("alert", {
                                      title: "Ошибка!",
                                      text: "Соединение не удалось, попробуйте позже",
                                    });
                                  }
                                }
                              },
                            }),
                        },
                      ];
                      Fn.initOne("modalTools", {
                        records,
                        url: "http://127.0.0.1:3000/user/Dmitrii_Belov",
                      });
                    }}
                    class="relative z-[2] ml-[.625rem] h-[1.875rem] w-[1.875rem] cursor-pointer rounded-[50%]"
                  >
                    <img
                      class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
                      src={dots}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
