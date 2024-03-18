import { Cemjsx, Static, Fn, Func } from "cemjs-all";
import platformServices from "@json/platformServices";

const RenderListServices = function () {
  return (
    <div class="services">
      {platformServices.map((item) => {
        return (
          <a
            class="services__item"
            onclick={() => {
              Func.close();
            }}
          >
            <div class="services__item-img">
              <i class={["i", `i-${item.icon}`]}></i>
            </div>
            <span class="services__item-text">{item.name}</span>
          </a>
        );
      })}
    </div>
  );
};

export default function () {
  return (
    <main class="modal_main">
      <div class="mt-[15px]">
        <RenderListServices />
      </div>
    </main>
  );
}
