import { Cemjsx, Static, Func, Ref, front, Fn } from "cemjs-all";
import frameDefault from "@svg/lenta/default.svg";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";
import dislike from "@svg/lenta/dislike.svg";
import like from "@svg/lenta/like.svg";
import points from "@svg/lenta/points.svg";
import sendMessage from "@svg/lenta/send_message.svg";
import Comments from "./Comments";
import Header from "./Header";
import InputComment from "./InputComment";

let image = `/contents/images/lenta/avatar_default.png`;

export default function () {
  return (
    <div
      class="fixed left-0 top-0 flex h-full w-full flex-col items-center justify-end [background:rgba(0,0,0,0.5)]"
      ref="bottomSheetOverlay"
    >
      {/* content */}
      <div
        id="content"
        class="relative h-[70vh] max-h-screen w-full max-w-[50rem] rounded-[1rem_1rem_0_0] bg-[--backModal] p-[1.5rem_1.8rem_4.5rem] [transform:translateY(100%)] [transition:var(--tran-03)]"
        ref="bottomSheetContent"
      >
        <Header />
        {/* body */}
        <div class="h-full p-[1rem_0_1.3rem]">
          <div
            ref={`wrapper${Static.id}`}
            class="h-full overflow-y-auto scroll-smooth"
          >
            {/* <h2 class="bottomSheet-title">Tools</h2> */}
            <Comments to={Static.to} />
          </div>
        </div>

        <InputComment item={Static.item} />
      </div>
    </div>
  );
}
