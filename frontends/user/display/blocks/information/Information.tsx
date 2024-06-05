import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all";
import AboutMe from "./AboutMe";
import Interests from "./Interests";

export default function () {
  return (
    <div class="relative m-0 w-full min-w-full pb-[1.25rem] pt-[.625rem] @1200:min-w-[calc(100%_-_224px)] @1200:pb-[2.5rem]">
      <h2 class="mx-0 my-[1.25rem] text-balance text-center text-[clamp(15px,_3vw,_20px)] font-bold leading-[115%] text-[--white]">
        {front.Variable?.words?.user?.personalInfo}
      </h2>
      <div class="m-auto relative flex flex-wrap mt-[.9375rem] max-@767:w-full max-@1200:w-[calc(100%_-_24px)]">
        <AboutMe />
        <Interests />
      </div>
    </div>
  );
}
