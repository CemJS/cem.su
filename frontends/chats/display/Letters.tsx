import { Cemjsx, Fn } from "cemjs-all"
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";

const RenderSearch = () => {
  return (
    <div class="px-2 py-4 flex items-center gap-2">
      <button>
        <i class="i i-arrow-left text-2xl"></i>
      </button>
      <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Поиск по сообщениям..." />
    </div>
  )
}

const RenderMessages = () => {
  return (
    <ul class="overflow-y-auto h-[calc(100%_-_150px)]">
      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all bg-slate-700 border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={avatarDefault}
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={frameDefault}
            />
            {5 < 0 ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={teamLogo}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    12
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      5 > 0
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </a>

        <div class="flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Text message asdasdljahsdjahsdlahcccccccccccccsdl</p>
        </div>
        <div class="flex flex-col text-right justify-around items-end">
          <span class="text-xs text-gray-600 font-bold bg-slate-200 rounded-full p-1 w-[18px] h-[18px] flex items-center justify-center	">5</span>
          <span class="text-xs text-gray-400 font-medium">12:30</span>
        </div>
      </li>

      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={avatarDefault}
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={frameDefault}
            />
            {5 > 0 ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={teamLogo}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    12
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      5 < 0
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </a>

        <div class="flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Text message asdasdljahsdjahsdlahcccccccccccccsdl</p>
        </div>
        <div class="flex flex-col text-right justify-around items-end">
          <span class="text-xs text-gray-600 font-bold bg-slate-200 rounded-full p-1 w-[18px] h-[18px] flex items-center justify-center	">5</span>
          <span class="text-xs text-gray-400 font-medium">12:30</span>
        </div>
      </li>

      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={avatarDefault}
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={frameDefault}
            />
            {5 < 0 ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={teamLogo}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    12
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      5 > 0
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </a>

        <div class="flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Text messageываываыва asdasdljahsdjahsdlahcccccccccccccsdl</p>
        </div>
        <div class="flex flex-col text-right justify-around items-end">
          <span class="text-xs text-gray-600 font-bold bg-slate-200 rounded-full p-1 w-[18px] h-[18px] flex items-center justify-center	">5</span>
          <span class="text-xs text-gray-400 font-medium">12:30</span>
        </div>
      </li>

      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={avatarDefault}
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={frameDefault}
            />
            {5 < 0 ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={teamLogo}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    12
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      5 > 0
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </a>

        <div class="flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Text message asdasdljahsdjahsdlahcccccccccccccsdl</p>
        </div>
        <div class="flex flex-col text-right justify-around items-end">
          <span class="text-xs text-gray-600 font-bold bg-slate-200 rounded-full p-1 w-[18px] h-[18px] flex items-center justify-center	">5</span>
          <span class="text-xs text-gray-400 font-medium">12:30</span>
        </div>
      </li>

      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={avatarDefault}
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={frameDefault}
            />
            {5 > 0 ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={teamLogo}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    12
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      5 < 0
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </a>

        <div class="flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Text message asdasdljahsdjahsdlahcccccccccccccsdl</p>
        </div>
        <div class="flex flex-col text-right justify-around items-end">
          <span class="text-xs text-gray-600 font-bold bg-slate-200 rounded-full p-1 w-[18px] h-[18px] flex items-center justify-center	">5</span>
          <span class="text-xs text-gray-400 font-medium">12:30</span>
        </div>
      </li>

      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={avatarDefault}
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={frameDefault}
            />
            {5 < 0 ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={teamLogo}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    12
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      5 > 0
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </a>

        <div class="flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Text messageываываыва asdasdljahsdjahsdlahcccccccccccccsdl</p>
        </div>
        <div class="flex flex-col text-right justify-around items-end">
          <span class="text-xs text-gray-600 font-bold bg-slate-200 rounded-full p-1 w-[18px] h-[18px] flex items-center justify-center	">5</span>
          <span class="text-xs text-gray-400 font-medium">12:30</span>
        </div>
      </li>

      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={avatarDefault}
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={frameDefault}
            />
            {5 < 0 ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={teamLogo}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    12
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      5 > 0
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </a>

        <div class="flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Text message asdasdljahsdjahsdlahcccccccccccccsdl</p>
        </div>
        <div class="flex flex-col text-right justify-around items-end">
          <span class="text-xs text-gray-600 font-bold bg-slate-200 rounded-full p-1 w-[18px] h-[18px] flex items-center justify-center	">5</span>
          <span class="text-xs text-gray-400 font-medium">12:30</span>
        </div>
      </li>

      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={avatarDefault}
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={frameDefault}
            />
            {5 > 0 ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={teamLogo}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    12
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      5 < 0
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </a>

        <div class="flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Text message asdasdljahsdjahsdlahcccccccccccccsdl</p>
        </div>
        <div class="flex flex-col text-right justify-around items-end">
          <span class="text-xs text-gray-600 font-bold bg-slate-200 rounded-full p-1 w-[18px] h-[18px] flex items-center justify-center	">5</span>
          <span class="text-xs text-gray-400 font-medium">12:30</span>
        </div>
      </li>

      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={avatarDefault}
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={frameDefault}
            />
            {5 < 0 ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={teamLogo}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    12
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      5 > 0
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </a>

        <div class="flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Text messageываываыва asdasdljahsdjahsdlahcccccccccccccsdl</p>
        </div>
        <div class="flex flex-col text-right justify-around items-end">
          <span class="text-xs text-gray-600 font-bold bg-slate-200 rounded-full p-1 w-[18px] h-[18px] flex items-center justify-center	">5</span>
          <span class="text-xs text-gray-400 font-medium">12:30</span>
        </div>
      </li>

      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={avatarDefault}
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={frameDefault}
            />
            {5 < 0 ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={teamLogo}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    12
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      5 > 0
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </a>

        <div class="flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Text message asdasdljahsdjahsdlahcccccccccccccsdl</p>
        </div>
        <div class="flex flex-col text-right justify-around items-end">
          <span class="text-xs text-gray-600 font-bold bg-slate-200 rounded-full p-1 w-[18px] h-[18px] flex items-center justify-center	">5</span>
          <span class="text-xs text-gray-400 font-medium">12:30</span>
        </div>
      </li>

      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={avatarDefault}
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={frameDefault}
            />
            {5 > 0 ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={teamLogo}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    12
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      5 < 0
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </a>

        <div class="flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Text message asdasdljahsdjahsdlahcccccccccccccsdl</p>
        </div>
        <div class="flex flex-col text-right justify-around items-end">
          <span class="text-xs text-gray-600 font-bold bg-slate-200 rounded-full p-1 w-[18px] h-[18px] flex items-center justify-center	">15</span>
          <span class="text-xs text-gray-400 font-medium">12:30</span>
        </div>
      </li>

      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[4.5rem] w-[4.1875rem] min-w-[2.9375rem]">
            <img
              class="absolute left-1/2 top-1/2 z-[1] h-[78%] w-[78%] rounded-[50%] object-cover [transform:translateX(-50%)_translateY(-50%)]"
              src={avatarDefault}
            />
            <img
              class="absolute left-1/2 top-0 z-[2] h-full !w-auto [transform:translateX(-50%)]"
              src={frameDefault}
            />
            {5 < 0 ? (
              <img
                class="absolute bottom-[0.4375rem] right-[0.4375rem] z-[2] flex h-5 w-5 items-center justify-center rounded-[50%] bg-[--white] p-[0.1875rem]"
                src={teamLogo}
              />
            ) : (
              <div class="absolute !top-auto bottom-0 right-[0.3125rem] z-[2] h-7">
                <div class="relative flex h-full w-full items-center justify-center">
                  <img class="h-full" src={leveGray} />
                  <span class="absolute left-1/2 top-1/2 text-[0.75rem] font-bold tracking-[0.0375rem] text-[--white] [transform:translateX(-50%)_translateY(-50%)]">
                    12
                  </span>
                  <div
                    class={[
                      "absolute right-[-0.1563rem] top-[-0.1563rem] h-[0.875rem] w-[0.875rem] rounded-[50%] [background:linear-gradient(225deg,#ff7272_0%,#d93030_100%)] [border:0.1875rem_solid_#ffffff]",
                      5 > 0
                        ? "[background:linear-gradient(225deg,#72ffb6_0,#10d194_100%)]"
                        : null,
                    ]}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </a>

        <div class="flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Text messageываываыва asdasdljahsdjahsdlahcccccccccccccsdl</p>
        </div>
        <div class="flex flex-col text-right justify-around items-end">
          <span class="text-xs text-gray-600 font-bold bg-slate-200 rounded-full p-1 w-[18px] h-[18px] flex items-center justify-center	">17</span>
          <span class="text-xs text-gray-400 font-medium">12:30</span>
        </div>
      </li>
    </ul>
  )
}

export default function () {
  return (
    <div class="w-[350px] bg-[#2B3040] h-full border-solid border-[#363C50] border-r-[1px]">
      <RenderSearch />
      <RenderMessages />
    </div>
  )
}