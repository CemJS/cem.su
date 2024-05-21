import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import dots from "@svg/questions/dots.svg";
import editIcon from "@svg/profile/editIcon.svg";
import FormSocials from "./FormSocials";
import SocialsSkeleton from "@elements/skeletonLoading/user/SocialsSkeleton";

export default function () {
  if (Static.record?.socials && Static.socials) {
    Func.activeBlocksProfile();
  } else Static.showComp = false;

  return (
    <div class="relative z-[1] m-0 w-full min-w-full px-[.625rem] py-0 pb-[1.25rem] @1024:pb-[2.5rem] @1200:mx-auto @1200:my-0 @1200:min-w-[calc(100%_-_224px)] @1200:pt-[.625rem]">
      <div class=" mb-[.3125rem] mt-[1.25rem] flex items-center justify-between pb-[.9375rem] pt-[.625rem] @1024:mt-[1.5625rem]">
        <h2 class="mx-0 my-0 mb-0 self-start text-balance text-[clamp(25px,_3vw,_30px)] font-normal leading-[115%] text-[--white] max-@1024:px-[.9375rem]">
          Социальные сети
        </h2>
        {front.Variable.myInfo?.nickname === front.Variable.DataUrl[1] && (
          <img
            onclick={() => {
              Static.showForm = !Static.showForm;
            }}
            src={editIcon}
            alt="editIcon"
            class="absolute right-[1rem] mr-[.5rem] inline w-[1.125rem] cursor-pointer"
          />
        )}
      </div>
      {Static.showForm && <FormSocials />}
      <div class="grid grid-cols-[100%] gap-[.625rem] @680:grid-cols-[calc(50%_-_5px)_calc(50%_-_5px)] @1200:grid-cols-[calc(25%_-_7.5px)_calc(25%_-_7.5px)_calc(25%_-_7.5px)_calc(25%_-_7.5px)]">
        {Static.showComp
          ? Static.record?.socials?.map((item: any, key: number) => {
              return (
                <div
                  class={[
                    "relative rounded-[.5rem] p-[.125rem] text-inherit no-underline",
                    item?.channel === "youtube"
                      ? "bg-[#FD434F]"
                      : item?.channel === "telegram" ||
                          item?.channel === "twitter"
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
                      href={item?.url + item?.name}
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
                                      const url = "/api/users/update";
                                      const array =
                                        Static.record?.socials.toSpliced(
                                          key,
                                          1,
                                        );
                                      const name = "social";
                                      Func.delete(url, array, name);
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
            })
          : Array.from(
              {
                length: Math.min(Static.record?.statistics?.subscribe, 4),
              },
              (_, index) => <SocialsSkeleton key={index} />,
            )}
      </div>
    </div>
  );
}
