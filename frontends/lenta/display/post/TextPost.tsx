import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";

export default function ({ item }) {
  return (
    <div>
      <div
        ref={`itemText${item?.id}`}
        html={item.text}
        id="text"
        class={[
          "w-full [&_a]:!bg-clip-text [&_a]:!text-transparent [&_a]:[background:--mainGradient] [&_p]:pb-4",
          item?.media?.length > 0 ? "line-clamp-1" : "",
        ]}
      ></div>
      {item?.media?.length > 0 ? (
        <div
          init={(e) => {
            Ref[`itemText${item?.id}`].scrollHeight <= 24
              ? e.classList.add("hidden")
              : e.classList.remove("hidden");
            window.addEventListener("resize", () => {
              Ref[`itemText${item?.id}`].scrollHeight <= 24
                ? e.classList.add("hidden")
                : !Static[`showItem${item.id}`]
                  ? e.classList.remove("hidden")
                  : null;
            });
          }}
          onclick={(e) => {
            Ref[`itemText${item?.id}`].classList.remove("line-clamp-1");
            Static[`showItem${item.id}`] = true;
            e.target.classList.add("hidden");
          }}
          class="inline-block cursor-pointer pl-[5px] font-medium text-[--polar-mist]"
        >
          Показать всё
        </div>
      ) : null}
    </div>
  );
}
