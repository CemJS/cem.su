import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import Post from "./post/Post";

export default function () {
  return (
    <div class="mx-auto w-full max-w-[900px]">
      {Static.records?.map((item, index) => {
        return <Post item={item} index={index} />;
      })}
    </div>
  );
}
{
  /* <div class="circle-wrap">
  <div class="circle">
    <div class="mask full" style="transform: rotate( 180deg">
      <div class="fill" style="transform: rotate( 180deg"></div>
    </div>
    <div class="mask half">
      <div class="fill" style="transform: rotate( 180deg"></div>
    </div>
  </div>
</div>;

.circle-wrap {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
} */
}

// на mask
// mask full
// transform: rotate(180deg)

// mask
// .circle-wrap .circle .mask {
//     clip: rect(0px, 70px, 70px, 35px);
// }

// .circle-wrap .circle .mask, .circle-wrap .circle .fill {
//     width: 100%;
//     height: 100%;
//     position: absolute;
//     border-radius: 50%;
// }

// mask.full, .circle .fill {
//     transform: rotate(0deg);
//     transition: 1s;
// }

// .mask .fill {
//     clip: rect(0px, 35px, 70px, 0px);
//     background: radial-gradient(rgba(0, 0, 0, 0) 57%, #F8F8F8 60%);
// }
