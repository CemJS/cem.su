import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import avatarDefault from "@images/lenta/avatar_default.png";
import defaultGray from "@svg/lenta/defaultGray.svg";
import settingsIcon from "@svg/profile/settingsIcon.svg";

let parent = null;

export default function () {
  // Fn.log("Static.record", Static.record);
  // Fn.log('=2ae43c=', front.Variable.DataUrl[1])
  return (
    <div class="@479:w-[7.5rem] @479:h-[8.4375rem] @680:w-[8.75rem] @680:h-[9.6875rem] absolute bottom-[-1.875rem] left-[50%] z-[101] h-[7.1875rem] w-[6.25rem] translate-x-[-50%] cursor-pointer text-center @1240:h-[14.0625rem] @1240:w-[210px]">
      <a href="" class="no-underline">
        <div class="h-full relative z-[1] min-w-[2.9375rem]">
          <img
            class="absolute top-[50%] left-[50%] z-[1] h-[78%] w-[78%] rounded-[50%] translate-x-[-50%] translate-y-[-50%] object-cover"
            src={
              Static.record?.avatar?.name
                ? `/assets/upload/avatar/${Static.record?.avatar?.name}`
                : avatarDefault
            }
          />
          <img
            class="absolute top-0 left-[50%] translate-x-[-50%] z-[2] w-auto h-full"
            src={
              Static.record?.frame?.name
                ? `/contents/images/lenta/${Static.record?.frame?.name}`
                : defaultGray
            }
          />
          <div>
            <div class="h-[1.75rem] absolute right-[.3125rem] bottom-0 z-[2] top-auto">
              <img class="h-full" src="" />
            </div>
            {front.Variable.myInfo?.nickname === front.Variable.DataUrl[1] ? (
              <div class="c-avataricon__settings">
                <img src={settingsIcon} />
              </div>
            ) : (
              <div class="c-avataricon__status c-avataricon__status--offline avatar_user_offline"></div>
            )}
            {/* <div style="display: none;" class="c-avataricon__status c-avataricon__status--online avatar_user_online"></div> */}
          </div>
        </div>
      </a>
    </div>
  );
}
