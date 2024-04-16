import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import avatarDefault from "@images/lenta/avatar_default.png";
import defaultGray from "@svg/lenta/defaultGray.svg";
import settingsIcon from "@svg/profile/settingsIcon.svg";

let parent = null;

export default function () {
  // Fn.log("Static.record", Static.record);
  // Fn.log('=2ae43c=', front.Variable.DataUrl[1])
  return (
    <div class="absolute bottom-[-1.875rem] left-[50%] z-[10] h-[7.1875rem] w-[6.25rem] translate-x-[-50%] cursor-pointer text-center @479:h-[8.4375rem] @479:w-[7.5rem] @680:h-[9.6875rem] @680:w-[8.75rem] @1240:h-[14.0625rem] @1240:w-[210px]">
      <a class="no-underline">
        <div class="relative z-[1] h-full min-w-[2.9375rem]">
          <img
            class="absolute left-[50%] top-[50%] z-[1] h-[78%] w-[78%] translate-x-[-50%] translate-y-[-50%] rounded-[50%] object-cover"
            src={
              Static.record?.avatar?.name
                ? `/assets/upload/avatar/${Static.record?.avatar?.name}`
                : avatarDefault
            }
          />
          <img
            class="absolute left-[50%] top-0 z-[2] h-full w-auto translate-x-[-50%]"
            src={
              Static.record?.frame?.name
                ? `/contents/images/lenta/${Static.record?.frame?.name}`
                : defaultGray
            }
          />
          <div>
            <div class="absolute bottom-0 right-[.3125rem] top-auto z-[2] h-[1.75rem]">
              <img class="h-full" src="" />
            </div>
            {front.Variable.myInfo?.nickname === front.Variable.DataUrl[1] ? (
              <div class="max-@1200:z-[99]">
                <div
                  onclick={() => {
                    Fn.initOne("modalTools", {
                      userId: "",
                      complainTo: {
                        name: "posts",
                        text: "пост",
                        id: "",
                      },
                    });
                  }}
                  class="absolute bottom-0 right-0 z-[2] h-[2.5rem] w-[2.5rem] cursor-pointer text-[0] @767:bottom-[.3125rem] @767:right-[.3125rem] @767:h-[3.125rem] @767:w-[3.125rem]"
                >
                  <img src={settingsIcon} />
                </div>
              </div>
            ) : (
              <div
                class={[
                  "absolute bottom-[20%] right-[-1%] z-[2] h-[.875rem] w-[.875rem] rounded-[50%] [border:3px_solid_#ffffff]",
                  Static.record?.online === true
                    ? "[background:linear-gradient(225deg,_#72FFB6_0%,_#10D194_100%)]"
                    : Static.record?.online === undefined
                      ? "hidden"
                      : "[background:linear-gradient(225deg,_#FF7272_0%,_#D93030_100%)]",
                ]}
              ></div>
            )}
            {/* <div class="c-avataricon__status c-avataricon__status--online avatar_user_online"></div> */}
          </div>
        </div>
      </a>
    </div>
  );
}
