import { Cemjsx, Fn } from "cemjs-all"
import frameDefault from "@svg/lenta/default.svg";
import avatarDefault from "@images/lenta/avatar_default.png";
import teamLogo from "@svg/lenta/mini_logo.svg";
import leveGray from "@svg/lenta/level_gray.svg";

const RenderTop = () => {
  return (
    <div class="flex items-center justify-between bg-[#2B3040] py-1 px-2">
      <button>
        <i class="i i-arrow-left text-2xl"></i>
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
    <div class="chat-conversation-main w-full h-[calc(100%_-_145px)] overflow-y-auto p-4">
      <ul>

        {/* divider time */}
        <div class="rounded-md flex items-center justify-center py-2 px-3 bg-fuchsia-900 w-fit mx-auto my-2 text-sm">15 сентября</div>
        {/* divider time */}

        {/* left side start */}
        <li class="flex items-end">
          <a
            onclick={(e) => {
              e.stopPropagation();
              Fn.link(e);
            }}
            href={`/user/Annyshka`}
            class="relative inline-flex h-auto w-auto mr-2"
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
              <div class="rounded-md shadow-lg px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <p class="font-medium text-sm">Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Заголовок живет правилами, его родного точках над за путь! Безорфографичный, осталось океана предложения себя рот имени. Коварный ipsum эта вскоре строчка пояс предложения пунктуация путь выйти меня она ты составитель заглавных своих дорогу запятых что одна, его, на берегу переулка не бросил над?</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 left-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <i class="i i-info text-base"></i>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>Удалить
                  </li>
                </ul>
              </div>
            </div>

            <div class="item-box max-w-[600px] relative mb-3">
              {/* ---- message text ---- */}
              <div class="rounded-md shadow-lg px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <p class="font-medium text-sm">Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Заголовок живет правилами, его родного точках над за путь! Безорфографичный, осталось океана предложения себя рот имени. Коварный ipsum эта вскоре строчка пояс предложения пунктуация путь выйти меня она ты составитель заглавных своих дорогу запятых что одна, его, на берегу переулка не бросил над?</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 left-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <i class="i i-info text-base"></i>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>Удалить
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </li>
        {/* left side start */}

        {/* divider time */}
        <div class="rounded-md flex items-center justify-center py-2 px-3 bg-fuchsia-900 w-fit mx-auto my-2 text-sm">14 октября</div>
        {/* divider time */}

        {/* right side end */}
        <li class="flex flex-row-reverse items-end">
          <a
            onclick={(e) => {
              e.stopPropagation();
              Fn.link(e);
            }}
            href={`/user/Annyshka`}
            class="relative inline-flex h-auto w-auto ml-2"
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

            <div class="item-box max-w-[600px] relative ml-auto mb-3">
              {/* ---- message text ---- */}
              <div class="rounded-md shadow-lg px-4 py-3 bg-gradient-to-r from-violet-800 to-fuchsia-800">
                <p class="font-medium text-sm">Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Заголовок живет правилами, его родного точках над за путь! Безорфографичный, осталось океана предложения себя рот имени. Коварный ipsum эта вскоре строчка пояс предложения пунктуация путь выйти меня она ты составитель заглавных своих дорогу запятых что одна, его, на берегу переулка не бросил над?</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 right-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <i class="i i-info text-base"></i>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>Удалить
                  </li>
                </ul>
              </div>
            </div>

            <div class="item-box max-w-[600px] relative ml-auto mb-3">
              {/* ---- message text ---- */}
              <div class="rounded-md shadow-lg px-4 py-3 bg-gradient-to-r from-violet-800 to-fuchsia-800">
                <p class="font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dicta distinctio reiciendis fuga veritatis eum nulla. Eum eius sapiente officia? Deserunt, porro minus. Repellendus nostrum at consequuntur eos sed reiciendis quibusdam eum inventore autem??</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 right-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <i class="i i-info text-base"></i>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>Удалить
                  </li>
                </ul>
              </div>
            </div>

            <div class="item-box max-w-[600px] relative ml-auto mb-3">
              {/* ---- message text ---- */}
              <div class="rounded-md shadow-lg px-4 py-3 bg-gradient-to-r from-violet-800 to-fuchsia-800">
                <p class="font-medium text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dicta distinctio reiciendis fuga veritatis eum nulla. Eum eius sapiente officia? Deserunt, porro minus. Repellendus nostrum at consequuntur eos sed reiciendis quibusdam eum inventore autem??</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 right-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <i class="i i-info text-base"></i>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>Удалить
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
            class="relative inline-flex h-auto w-auto mr-2"
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
              <div class="rounded-md shadow-lg px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <p class="font-medium text-sm">Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Заголовок живет правилами, его родного точках над за путь! Безорфографичный, осталось океана предложения себя рот имени. Коварный ipsum эта вскоре строчка пояс предложения пунктуация путь выйти меня она ты составитель заглавных своих дорогу запятых что одна, его, на берегу переулка не бросил над?</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 left-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <i class="i i-info text-base"></i>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>Удалить
                  </li>
                </ul>
              </div>
            </div>

            <div class="item-box max-w-[600px] relative mb-3">
              {/* ---- message text ---- */}
              <div class="rounded-md shadow-lg px-4 py-3 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <p class="font-medium text-sm">Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Заголовок живет правилами, его родного точках над за путь! Безорфографичный, осталось океана предложения себя рот имени. Коварный ipsum эта вскоре строчка пояс предложения пунктуация путь выйти меня она ты составитель заглавных своих дорогу запятых что одна, его, на берегу переулка не бросил над?</p>
                <span class="leading-4 text-xs block font-medium text-right mt-2">12 : 30</span>
              </div>
              {/* ---- dropdown ---- */}
              <div class="absolute top-0 left-[calc(100%_+_8px)]">
                <button class="cursor-pointer w-[30px] h-[30px] bg-slate-600 flex items-center justify-center rounded-full hover:bg-slate-700 transition-all active:bg-slate-800">
                  <i class="i i-info text-base"></i>
                </button>
                <ul class="absolute top-[calc(100%_+_5px)] left-0 bg-slate-600 z-10 rounded-lg opacity-0 invisible scale-90 origin-left-top transition-all">
                  <li class="rounded-t-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-forward"></i>Переслать
                  </li>
                  <li class="rounded-b-lg flex items-center text-sm px-2 py-1 gap-2 cursor-pointer hover:bg-slate-700 active:bg-slate-800 transition-all">
                    <i class="i i-trash"></i>Удалить
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
    <div>
      <button><i class="i i-share"></i></button>
      <div>
        <input type="text" placeholder="Напишите сообщение..." />
        <button><i class="i i-messanger"></i></button>
      </div>
    </div>
  )
}


export default function () {
  return (
    <div class="chat-conversation h-full w-full">
      <RenderTop />
      <RenderMainConversation />
    </div>
  )
}