import { Cemjsx, Fn, Func, Static, front } from "cemjs-all";
import photo from "@svg/personalPosts/photo.svg";
import video from "@svg/personalPosts/video.svg";
import audio from "@svg/personalPosts/audio.svg";
import Feed from "./blocks/posts/Feed";
import Post from "./blocks/posts/Post";

export default function () {
  Static.feedState = false;

  return (
    <div class="wrapper wrapper_padding">
      <Post />
      <Feed />
    </div>
  );
}
