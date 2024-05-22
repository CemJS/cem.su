import { Cemjsx, Func, Ref, Static, front } from "cemjs-all";
import openDrop from "@svg/icons/openDropDown.svg";

export default function ({
  key,
  isOpen = false,
  filters,
  onChoose,
  current = filters[0]?.name,
  className,
}: {
  isOpen?: boolean;
  key: string;
  filters: { name: string; text: string }[];
  onChoose: (value: string) => void;
  current?: string;
  className?: string;
}) {
  !Static["isOpen" + key]
    ? front.Variable.$el.body?.addEventListener("click", (e) => {
        !e.target?.closest("#filter") ? (Static["isOpen" + key] = false) : "";
      })
    : "";
  !Static["isOpen" + key] ? (Static["isOpen" + key] = isOpen) : "";
  !Static["current" + key] ? (Static["current" + key] = current) : "";

  return (
    <div
      onclick={(e) => {
        Static["isOpen" + key] = !Static["isOpen" + key];
      }}
      id="filter"
      class={[
        "filterOne relative z-0 flex w-full max-w-[18.75rem] cursor-pointer items-center justify-between rounded-[--borderR] bg-[--light-gray] p-[0.625rem_1.25rem]",
        className,
        Static["isOpen" + key] && "!z-[2] !rounded-ee-sm !rounded-es-sm",
      ]}
    >
      <div>
        <p class="text-[--textGray]">Сортировать</p>
        <p>
          {
            filters?.filter((item) => item?.name == Static["current" + key])[0]
              ?.text
          }
        </p>
      </div>
      <img src={openDrop} alt="" />
      <div
        class={[
          "pointer-events-none absolute bottom-0 left-0 right-0 z-[12] overflow-hidden rounded-ee-[--borderR] rounded-es-[--borderR] opacity-0 [background:var(--light-gray)] [transform:translateY(100%)] [transition:all_0.2s_ease-in-out]",
          Static["isOpen" + key] && "!pointer-events-auto !opacity-100",
        ]}
      >
        {filters.map((item) => {
          return (
            <div
              onclick={() => {
                Static["current" + key] = item.name;
                onChoose(item.name);
              }}
              class="flex min-h-[2.5rem] w-full items-center justify-start p-[0_1.25rem]"
            >
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}
