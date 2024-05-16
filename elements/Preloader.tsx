import { Cemjsx } from "cemjs-all";

export default function () {
  return (
    <div class="flex justify-center">
      <div id="preloader">
        <div class="relative flex justify-center">
          <div class="absolute h-[12.5rem] w-[12.5rem] rounded-[50%] [border:0px_solid_var(--noble-black)] [&:nth-child(1)]:border-b-[.5rem] [&:nth-child(1)]:border-[--pink] [&:nth-child(1)]:[animation:rotate1_2s_linear_infinite]"></div>
          <div class="absolute h-[12.5rem] w-[12.5rem] rounded-[50%] [border:0px_solid_var(--noble-black)] [&:nth-child(2)]:border-r-[.5rem] [&:nth-child(2)]:border-[--purple] [&:nth-child(2)]:[animation:rotate2_2s_linear_infinite]"></div>
          <div class="absolute h-[12.5rem] w-[12.5rem] rounded-[50%] [border:0px_solid_var(--noble-black)] [&:nth-child(3)]:border-t-[.5rem] [&:nth-child(3)]:border-[--fiolet] [&:nth-child(3)]:[animation:rotate3_2s_linear_infinite]"></div>
        </div>
      </div>
    </div>
  );
}
