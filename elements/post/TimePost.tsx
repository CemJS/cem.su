import { Cemjsx, Fn, Func, front } from "cemjs-all";
import Video from "@elements/Video";

export default function ({ time }) {
  return (
    <div class="absolute bottom-[10px] left-4 text-[10px] text-[#B1B7CE]">
      {front.Services.functions.timeStampToDate(time, ".", true)}
    </div>
  );
}
