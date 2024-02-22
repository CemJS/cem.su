import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import photo from "@svg/personalPosts/photo.svg";
import video from "@svg/personalPosts/video.svg";
import audio from "@svg/personalPosts/audio.svg";
import Feed from "./blocks/posts/Feed";
import Post from "./blocks/posts/Post";

export default function () {
  Static.feedState = true;

  return (
    <div class="wrapper wrapper_padding">
      <Post />
      {/* <div class="post-lenta">
        <div class="post-lenta__top">
          <h4 class="post-lenta__title">Моя лента</h4>
          <div class="post-lenta__settings">
            <button
              onclick={(e) => {
                Static.show = "lenta";
              }}
              class={["post-lenta__button", Static.show == "lenta" ? "post-lenta__button_active" : null]}
            >
              <div class="post-lenta__button_one"></div>
            </button>
            <button
              onclick={(e) => {
                Static.show = "grid";
              }}
              class={["post-lenta__button", Static.show == "grid" ? "post-lenta__button_active" : null]}
            >
              <div class="post-lenta__button_grid"></div>
            </button>
          </div>
        </div>
        <div class="post-lenta__grid"></div>
      </div> */}
      <Feed />
    </div>
  );
}
