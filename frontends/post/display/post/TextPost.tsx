import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import { Post } from "types/post.type";

export default function ({ item }: { item: Post }) {
  return (
    <div>
      <div
        ref={`itemText${item?.id}`}
        html={item.text}
        id="text"
        class={[
          "w-full break-words [&_a]:!bg-clip-text [&_a]:!text-transparent [&_a]:[background:--mainGradient] [&_p]:pb-4",
          item?.media?.length > 0
            ? "line-clamp-1"
            : "flex min-h-[180px] items-center justify-center break-words !bg-cover !bg-no-repeat p-[30px] text-center [background:url('/contents/images/posterBG.png')] @600:min-h-[330px]",
        ]}
      ></div>
      {item?.media?.length > 0 ? (
        <div
          init={(e) => {
            Ref[`itemText${item?.id}`]?.scrollHeight <= 24
              ? e.classList.add("hidden")
              : e.classList.remove("hidden");
            window.addEventListener("resize", () => {
              Ref[`itemText${item?.id}`]?.scrollHeight <= 24
                ? e.classList?.add("hidden")
                : !Static[`showItem${item.id}`]
                  ? e.classList?.remove("hidden")
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
