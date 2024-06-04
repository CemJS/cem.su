import { Cemjsx, Fn, front } from "cemjs-all"
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";

const RenderChooseConversation = () => {
  return (
    <div class="absolute w-full h-full bg-[#202432] top-0 left-0 right-0 bottom-0 p-4">
      <span class="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 z-10 rounded-md bg-fuchsia-900 py-2 px-3 flex items-center w-fit justify-center m-auto text-sm">Выберите, кому хотели бы написать</span>
    </div>
  )
}

const RenderTop = () => {
  return (
    <div class="shadow-lg flex items-center justify-between bg-[#2B3040] py-1 px-2">
      <button>
        <i class="i i-chevron-left text-2xl"></i>
      </button>
      <div class="chat-conversation-user">
        <a
          onclick={(e) => {
            e.stopPropagation();
            Fn.link(e);
          }}
          href={`/user/Annyshka`}
          class="relative inline-flex h-auto w-auto"
        >
          <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] min-w-[2.9375rem]">
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
          <div class="absolute -left-20 top-5 mb-2 block leading-[24px]">
            <span class="inline text-[0.875rem] font-semibold leading-[1.375rem] text-[--white]">
              Annyshka
            </span>
          </div>
        </a>
      </div>
    </div>
  )
}

const RenderMainConversation = () => {
  return (
    <div class="chat-conversation-main w-full h-[calc(100%_-_144px)] @1600:h-[calc(100%_-_70px)] overflow-y-auto overflow-x-hidden relative">
      <ul class="p-4">
        {/* divider time */}
        <div class="rounded-md flex items-center justify-center py-2 px-3 bg-fuchsia-900 w-fit mx-auto mb-2 text-sm">15 сентября</div>
        {/* divider time */}

        {/* left side start */}
        <li class="flex items-end">
          <a
            onclick={(e) => {
              e.stopPropagation();
              Fn.link(e);
            }}
            href={`/user/Annyshka`}
            class="relative hidden lg:inline-flex h-auto w-auto mr-2"
          >
            <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] min-w-[2.9375rem]">
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

          <div class="item-content w-full">

            <div class="item-box max-w-[600px] relative mb-3">
              {/* ---- message text ---- */}
              <div class="rounded-tl-md rounded-tr-lg rounded-br-lg rounded-bl-none after:absolute after:bottom-0 after:right-full after:block after:w-[18px] after:h-[18px] after:[background:_radial-gradient(37px_at_top_left,_transparent_49%,_#8b5cf6_51%)_no-repeat_right_bottom] shadow-lg px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <p class="font-medium text-sm">Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Заголовок живет правилами, его родного точках над за путь! Безорфографичный, осталось океана предложения себя рот имени. Коварный ipsum эта вскоре строчка пояс предложения пунктуация путь выйти меня она ты составитель заглавных своих дорогу запятых что одна, его, на берегу переулка не бросил над?</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 left-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>{front.Variable?.words?.tools?.delete}
                  </li>
                </ul>
              </div>
            </div>

            <div class="item-box max-w-[600px] relative mb-3">
              {/* ---- message text ---- */}
              <div class="rounded-tl-md rounded-tr-lg rounded-br-lg rounded-bl-none after:absolute after:bottom-0 after:right-full after:block after:w-[18px] after:h-[18px] after:[background:_radial-gradient(37px_at_top_left,_transparent_49%,_#8b5cf6_51%)_no-repeat_right_bottom] shadow-lg px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <p class="font-medium text-sm">Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Заголовок живет правилами, его родного точках над за путь! Безорфографичный, осталось океана предложения себя рот имени. Коварный ipsum эта вскоре строчка пояс предложения пунктуация путь выйти меня она ты составитель заглавных своих дорогу запятых что одна, его, на берегу переулка не бросил над?</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 left-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>{front.Variable?.words?.tools?.delete}
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </li>
        {/* left side start */}

        {/* divider time */}
        <div class="rounded-md flex items-center justify-center py-2 px-3 bg-fuchsia-900 w-fit mx-auto mb-2 text-sm">14 октября</div>
        {/* divider time */}

        {/* right side end */}
        <li class="flex flex-row-reverse items-end mb-2">
          <a
            onclick={(e) => {
              e.stopPropagation();
              Fn.link(e);
            }}
            href={`/user/Annyshka`}
            class="relative hidden lg:inline-flex h-auto w-auto ml-2"
          >
            <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] min-w-[2.9375rem]">
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

          <div class="item-content w-full flex flex-col items-end">

            <div class="item-box max-w-[600px] relative ml-8 mb-3">
              {/* ---- message text ---- */}
              <div class="rounded-tl-md rounded-tr-lg rounded-br-none rounded-bl-lg after:absolute after:bottom-0 after:left-full after:block after:w-[18px] after:h-[18px] after:[background:_radial-gradient(37px_at_top_right,_transparent_49%,_#86198f_51%)_no-repeat_right_bottom] shadow-lg px-4 py-3 bg-gradient-to-r from-violet-800 to-fuchsia-800">
                <p class="font-medium text-sm">Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Заголовок живет правилами, его родного точках над за путь! Безорфографичный, осталось океана предложения себя рот имени. Коварный ipsum эта вскоре строчка пояс предложения пунктуация путь выйти меня она ты составитель заглавных своих дорогу запятых что одна, его, на берегу переулка не бросил над?</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 right-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>{front.Variable?.words?.tools?.delete}
                  </li>
                </ul>
              </div>
            </div>

            <div class="item-box max-w-[600px] relative ml-8 mb-3">
              {/* ---- message text ---- */}
              <div class="rounded-tl-md rounded-tr-lg rounded-br-none rounded-bl-lg after:absolute after:bottom-0 after:left-full after:block after:w-[18px] after:h-[18px] after:[background:_radial-gradient(37px_at_top_right,_transparent_49%,_#86198f_51%)_no-repeat_right_bottom] shadow-lg px-4 py-3 bg-gradient-to-r from-violet-800 to-fuchsia-800">
                <p class="font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dicta distinctio reiciendis fuga veritatis eum nulla. Eum eius sapiente officia? Deserunt, porro minus. Repellendus nostrum at consequuntur eos sed reiciendis quibusdam eum inventore autem??</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 right-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>{front.Variable?.words?.tools?.delete}
                  </li>
                </ul>
              </div>
            </div>

            <div class="item-box max-w-[600px] relative ml-8 mb-3">
              {/* ---- message text ---- */}
              <div class="rounded-tl-md rounded-tr-lg rounded-br-none rounded-bl-lg after:absolute after:bottom-0 after:left-full after:block after:w-[18px] after:h-[18px] after:[background:_radial-gradient(37px_at_top_right,_transparent_49%,_#86198f_51%)_no-repeat_right_bottom] shadow-lg px-4 py-3 bg-gradient-to-r from-violet-800 to-fuchsia-800">
                <p class="font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dicta distinctio reiciendis fuga veritatis eum nulla. Eum eius sapiente officia? Deserunt, porro minus. Repellendus nostrum at consequuntur eos sed reiciendis quibusdam eum inventore autem??</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 right-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>{front.Variable?.words?.tools?.delete}
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </li>
        {/* right side end */}

        {/* left side start */}
        <li class="flex items-end">
          <a
            onclick={(e) => {
              e.stopPropagation();
              Fn.link(e);
            }}
            href={`/user/Annyshka`}
            class="relative hidden lg:inline-flex h-auto w-auto mr-2"
          >
            <div class="relative z-[1] h-[3.5rem] w-[3.1875rem] min-w-[2.9375rem]">
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

          <div class="item-content w-full">

            <div class="item-box max-w-[600px] relative mb-3 mr-8">
              {/* ---- message text ---- */}
              <div class="rounded-tl-md rounded-tr-lg rounded-br-lg rounded-bl-none after:absolute after:bottom-0 after:right-full after:block after:w-[18px] after:h-[18px] after:[background:_radial-gradient(37px_at_top_left,_transparent_49%,_#8b5cf6_51%)_no-repeat_right_bottom] shadow-lg px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500 relative">
                <p class="font-medium text-sm">Работаю над скруглением уголка у сообщения!</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 left-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>{front.Variable?.words?.tools?.delete}
                  </li>
                </ul>
              </div>
            </div>

            <div class="item-box max-w-[600px] relative mb-3 mr-8">
              {/* ---- message text ---- */}
              <div class="rounded-tl-md rounded-tr-lg rounded-br-lg rounded-bl-none after:absolute after:bottom-0 after:right-full after:block after:w-[18px] after:h-[18px] after:[background:_radial-gradient(37px_at_top_left,_transparent_49%,_#8b5cf6_51%)_no-repeat_right_bottom] shadow-lg px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <p class="font-medium text-sm">Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Заголовок живет правилами, его родного точках над за путь! Безорфографичный, осталось океана предложения себя рот имени. Коварный ipsum эта вскоре строчка пояс предложения пунктуация путь выйти меня она ты составитель заглавных своих дорогу запятых что одна, его, на берегу переулка не бросил над?</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 left-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                  </svg>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>{front.Variable?.words?.tools?.delete}
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </li>
        {/* left side start */}

      </ul>
      <RenderForm />
      <div class="scrollBottom" ref="scrollBottom"></div>
    </div>
  )
}

const RenderForm = () => {
  return (
    <div class="backdrop-blur-sm sticky bottom-0 left-0 right-0  flex items-center px-2 py-3 pt-0 gap-4 z-10">
      <div class="flex w-full flex-row items-center gap-2 rounded-[99px] border border-gray-900/10 p-2 bg-[#202432]">
        <div class="flex">
          <button
            class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <i class="i i-paper-clip text-xl"></i>
            </span>
          </button>
          <button
            class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <i class="i i-microphone text-xl"></i>
            </span>
          </button>
        </div>
        <div class="relative grid h-full w-full min-w-[200px]">
          <textarea
            autofocus
            rows="1"
            placeholder="Напишите сообщение..."
            class="peer h-full  min-h-full w-full resize-y rounded-[7px]  !border-0 border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder:text-blue-gray-300 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-transparent focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
            oninput={(e) => {
              e.currentTarget.rows = e.currentTarget.value.split('\n').lenght
            }}
          >

          </textarea>
          <label
            class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all before:content-none after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all after:content-none peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"></label>
        </div>
        <div>
          <button
            class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button">
            <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <i class="i i-paper-airplane text-2xl"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}




export default function () {
  return (
    <div ref="conversation" class="chat-conversation h-full w-full absolute left-full top-0 md:relative md:left-auto md:top-auto">
      <RenderTop />
      <RenderMainConversation />
    </div>
  )
}