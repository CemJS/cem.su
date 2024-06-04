import { Cemjsx, Fn, Func, Ref, Static, front } from "cemjs-all";
import { Post } from "types/post.type";

export default function ({ item, index }: { item: Post; index?: number }) {
  return (
    <div>
      <div
        ref={`itemText${item?.id}`}
        html={item.text.replace(/\n\r?/g, "<br />")}
        init={(e) => {
          e?.scrollHeight > 330 && !item?.media?.length
            ? (Static[`longText${item.id}`] = true)
            : "";
        }}
        id="text"
        style="word-break:break-word;"
        class={[
          "w-full break-words px-4 pt-2 [&_a]:bg-transparent [&_a]:!bg-clip-text [&_a]:!text-transparent [&_a]:[background:--mainGradient] [&_p]:pb-4",
          !Static[`showItem${item.id}`] && item?.media?.length > 0
            ? "line-clamp-1"
            : "",
          !Static[`longText${item.id}`] && !(item?.media?.length > 0)
            ? "flex min-h-[180px] flex-col items-center justify-center break-words !bg-cover !bg-no-repeat p-[30px] text-center [background:url('/contents/images/posterBG.png')] @600:min-h-[330px]"
            : "",
          !Static[`showItem${item.id}`] &&
          !(item?.media?.length > 0) &&
          Static[`longText${item.id}`]
            ? "line-clamp-6"
            : "",
        ]}
      ></div>
      {item?.media?.length > 0 || Static[`longText${item.id}`] ? (
        <div
          init={(e) => {
            if (!Static[`longText${item.id}`]) {
              Ref[`itemText${item?.id}`]?.scrollHeight <= 32
                ? e.classList.add("hidden")
                : e.classList.remove("hidden");
              window.addEventListener("resize", () => {
                Ref[`itemText${item?.id}`]?.scrollHeight <= 32
                  ? e.classList.add("hidden")
                  : !Static[`showItem${item.id}`]
                    ? e.classList.remove("hidden")
                    : null;
              });
            } else {
              Ref[`itemText${item?.id}`]?.scrollHeight <= 152
                ? e.classList.add("hidden")
                : e.classList.remove("hidden");
              window.addEventListener("resize", () => {
                Ref[`itemText${item?.id}`]?.scrollHeight <= 152
                  ? e.classList.add("hidden")
                  : !Static[`showItem${item.id}`]
                    ? e.classList.remove("hidden")
                    : null;
              });
            }
          }}
          onclick={(e) => {
            Ref[`itemText${item?.id}`]?.classList?.remove("line-clamp-1");
            Ref[`itemText${item?.id}`]?.classList?.remove("line-clamp-6");
            Static[`showItem${item.id}`] = true;
            e.target.classList.add("hidden");
          }}
          class="inline-block cursor-pointer px-4 font-medium text-[--polar-mist]"
        >
          {front.Variable?.words?.tools?.showAll}
        </div>
      ) : null}
    </div>
  );
}
