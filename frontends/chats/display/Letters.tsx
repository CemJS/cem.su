import { Cemjsx, Fn } from "cemjs-all"
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";

const RenderSearch = () => {
  return (
    <div class="shadow-lg px-2 py-4 flex items-center gap-2">
      <span
        onclick={() => {
          Fn.linkChange("/")
        }}
      >
        <i class="i i-chevron-left text-2xl"></i>
      </span>

      <input type="text" class="peer h-full  min-h-full w-full resize-y rounded-[7px]  !border-0 border-blue-gray-200 border-t-transparent bg-[#202432] px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-transparent focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50" placeholder="Поиск по сообщениям..." />
    </div>
  )
}

const RenderMessages = () => {
  return (
    <ul class="overflow-y-auto h-[calc(100%_-_150px)] @1600:h-[calc(100%_-_70px)]">
      <li class="flex gap-x-2 hover:bg-slate-700 cursor-pointer px-2 py-1 transition-all bg-slate-700 border-solid border-[#363C50] border-b-[1px]">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] xl:h-[4.5rem] xl:w-[4.1875rem] min-w-[2.9375rem]">
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

        <div class="w-full flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Anton</p>
          <p class="text-sm line-clamp-1">Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. По всей текст несколько пустился ты приставка дороге предупредила! До, назад вопрос переписывается текст снова что его однажды. Щеке, запятой грамматики.</p>
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
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] xl:h-[4.5rem] xl:w-[4.1875rem] min-w-[2.9375rem]">
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

        <div class="w-full flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Natali</p>
          <p class="text-sm line-clamp-1">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Семантика запятой буквоград деревни, продолжил свой даже диких, до снова над пустился себя запятых гор алфавит заголовок текста свою которой.</p>
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
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] xl:h-[4.5rem] xl:w-[4.1875rem] min-w-[2.9375rem]">
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

        <div class="w-full flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Aleksandra</p>
          <p class="text-sm line-clamp-1">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Переписали образ безопасную вопрос, власти первую, до ее вскоре семантика своих правилами продолжил но единственное то что, ведущими города вершину?</p>
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
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] xl:h-[4.5rem] xl:w-[4.1875rem] min-w-[2.9375rem]">
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

        <div class="w-full flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Vasya</p>
          <p class="text-sm line-clamp-1">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Составитель это вершину ты, большого текста коварный родного свою грамматики, выйти приставка злых. Первую вопроса даже, города вершину эта повстречался.</p>
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
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] xl:h-[4.5rem] xl:w-[4.1875rem] min-w-[2.9375rem]">
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

        <div class="w-full flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Gleb</p>
          <p class="text-sm line-clamp-1">Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты.</p>
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
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] xl:h-[4.5rem] xl:w-[4.1875rem] min-w-[2.9375rem]">
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

        <div class="w-full flex flex-col text-left justify-around items-start overflow-hidden">
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
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] xl:h-[4.5rem] xl:w-[4.1875rem] min-w-[2.9375rem]">
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

        <div class="w-full flex flex-col text-left justify-around items-start overflow-hidden">
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
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] xl:h-[4.5rem] xl:w-[4.1875rem] min-w-[2.9375rem]">
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

        <div class="w-full flex flex-col text-left justify-around items-start overflow-hidden">
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
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] xl:h-[4.5rem] xl:w-[4.1875rem] min-w-[2.9375rem]">
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

        <div class="w-full flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Sveta</p>
          <p class="text-sm line-clamp-1">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Страна своих щеке бросил которой силуэт себя, семь прямо. Наш своих возвращайся пустился меня вскоре продолжил эта буквоград, всемогущая раз.</p>
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
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] xl:h-[4.5rem] xl:w-[4.1875rem] min-w-[2.9375rem]">
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

        <div class="w-full flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Vlada</p>
          <p class="text-sm line-clamp-1">Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Злых дороге оксмокс рот составитель по всей использовало живет? Единственное, океана?</p>
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
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] xl:h-[4.5rem] xl:w-[4.1875rem] min-w-[2.9375rem]">
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

        <div class="w-full flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Zhenya</p>
          <p class="text-sm line-clamp-1">Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Скатился ее агентство осталось оксмокс безорфографичный ведущими раз свой одна своего проектах, использовало послушавшись однажды маленькая за на берегу, дорогу до.</p>
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
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] xl:h-[4.5rem] xl:w-[4.1875rem] min-w-[2.9375rem]">
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

        <div class="w-full flex flex-col text-left justify-around items-start overflow-hidden">
          <p class="text-base font-semibold">Someone</p>
          <p class="text-sm line-clamp-1">Далеко-далеко, за словесными горами в стране гласных и согласных живут рыбные тексты. Наш всеми ipsum рыбного великий, бросил деревни приставка страну раз. Бросил инициал ты имени агентство текстов страну его реторический рыбного.</p>
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
    <div class="w-full md:w-[265px] lg:w-[300px] xl:w-[350px] absolute left-0 top-0 md:relative md:left-auto md:top-auto bg-[#2B3040] h-full border-solid border-[#363C50] border-r-[1px]">
      <RenderSearch />
      <RenderMessages />
    </div>
  )
}