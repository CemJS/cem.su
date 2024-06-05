import { Cemjsx, Static, front, Fn } from "cemjs-all";
import leveGray from "@svg/lenta/level_gray.svg";
import avatarDefault from "@images/lenta/avatar_default.png";

interface frameObject {
  name: string;
  frame: string;
  state: boolean;
}

const frames = [
  { name: "rainbow", frame: "rainbow.gif", state: false },
  { name: "animate", frame: "animate.gif", state: false },
  { name: "defaultFrame", frame: "defaultGray.svg", state: false },
];

function Set_Static_Frame(frame: frameObject) {
  frames.forEach((fr) => {
    fr.state = fr.name === frame.name;
  });
  Static.frame = frame.frame;
}

function Get_Frame_Data() {
  return frames.find((frame) => frame.state).frame;
}

async function send() {
  let data = Get_Frame_Data();
  await front.Services.functions.sendApi("/api/users/update", {
    frame: {
      name: data,
    },
  });
  Static.CallInit(data);
}

function Frame_Item({ frame }) {
  const handleOnClick = () => {
    if (!frame.state) Set_Static_Frame(frame);
  };

  return (
    <a class="w-[5rem] cursor-pointer" onclick={handleOnClick}>
      <div
        class={[
          "relative z-[1] ml-[.625rem] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]",
          frame.frame === Static.frame
            ? "before:absolute before:right-[.3125rem] before:top-[.3125rem] before:z-[100] before:h-[1.1313rem] before:w-[1.5625rem] before:bg-cover before:content-[''] before:[background:url('/contents/background/check.png')]"
            : "",
        ]}
      >
        <img
          class="absolute left-[50%] top-[50%] z-[1] h-[78%] w-[78%] translate-x-[-50%] translate-y-[-50%] rounded-[50%] object-cover"
          src={
            Static.avatar
              ? `/assets/upload/avatar/${Static.avatar}`
              : avatarDefault
          }
        />
        <img
          class="absolute left-[50%] top-0 z-[2] h-full w-auto translate-x-[-50%]"
          src={`/contents/images/lenta/${frame.frame}`}
        />
        <div>
          <div class="absolute bottom-0 right-[.3125rem] top-auto z-[2] h-[1.75rem]">
            <img class="h-full" src={leveGray} />
            <span class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-[.75rem] font-bold tracking-[0.6px] text-[--white]">
              10
            </span>
          </div>
          <div
            style="display: none;"
            class="absolute bottom-[20%] right-[-1%] z-[2] h-[.875rem] w-[.875rem] rounded-[50%] [background:linear-gradient(225deg,_#72FFB6_0,_#10D194_100%)] [border:3px_solid_#ffffff]"
          ></div>
          <div class="absolute bottom-[20%] right-[-1%] z-[2] h-[.875rem] w-[.875rem] rounded-[50%] [border:3px_solid_#ffffff] [background:linear-gradient(225deg,_#FF7272_0%,_#D93030_100%)]"></div>
        </div>
      </div>
    </a>
  );
}

export default function Select_Frame_App() {
  return (
    <div class="px-[1.25rem] py-0">
      <div class="flex flex-wrap justify-center [grid-gap:15px]">
        {frames.map((frame: frameObject) => (
          <Frame_Item frame={frame} />
        ))}
      </div>
      <div class="mx-0 my-[1.25rem] h-[3.75rem] w-full cursor-pointer rounded-[.9375rem] p-[.125rem] [background:linear-gradient(160deg,_#C126CE_42.19%,_#284CCB_100%)]">
        <div
          onclick={() => {
            send();
          }}
          class="h-full w-full rounded-[.9375rem] bg-[--backModal] text-center [transition:1s] hover:[background:none]"
        >
          <span class="text-[1.375rem] font-semibold leading-[3.75rem] text-[--white]">
            {front.Variable?.words?.tools?.choose}
          </span>
        </div>
      </div>
    </div>
  );
}
