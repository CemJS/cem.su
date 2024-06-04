import { Cemjsx, Fn, Static, front } from "cemjs-all";
import notFound from "@svg/icon/notFound.svg";
import Category from "./Category";

const RenderItems = function ({ items }) {
  if (!items.length) {
    return (
      <div class="notFound">
        <img src={notFound} alt={front.Variable?.words?.notFoundRecords} />
        {front.Variable?.words?.notFoundRecords}
      </div>
    );
  }
  return (
    <section class="pb-20">
      <div
        id="bg"
        class="fixed left-[-10%] top-[-8%] z-[-2] h-full w-full bg-[url('/contents/svg/about/vector_1.svg')] bg-no-repeat [background-size:100%_100%]"
      ></div>
      <div
        class="relative z-[1] grid grid-cols-1 grid-rows-[8.125rem] gap-[0.9375rem] @767:grid-cols-2 @767:grid-rows-[9.375rem]"
        ref="startapsList"
      >
        {!items.length ? (
          <p>not found</p>
        ) : (
          items.map((item, index) => {
            return (
              <a
                class="relative grid cursor-pointer grid-cols-[15%_80%] grid-rows-[auto] gap-[0.9375rem] overflow-hidden rounded-[--borderR] p-[0.9375rem] [background:rgba(255,255,255,0.09)] [border:0.0625rem_solid_transparent] [box-shadow:0rem_0.3125rem_2.75rem_0rem_rgba(29,33,45,0.8)] [transition:0.5s] hover:scale-[0.98] hover:bg-transparent hover:[border:0.0625rem_solid_var(--border)] @992:grid-cols-[20%_75%] @992:gap-[1.5625rem]"
                init={($el: any) => {
                  if (index == Static.records?.length - 1) {
                    const observer = new IntersectionObserver((entries) => {
                      entries.forEach(async (entry) => {
                        if (entry.isIntersecting) {
                          observer.unobserve($el);
                          let res = front.Services.functions.sendApi(
                            "/api/startups",
                            {
                              category:
                                Static.catActive == "Все"
                                  ? "All"
                                  : Static.catActive,
                              skip: Static.records.length,
                            },
                          );
                        }
                      });
                    });
                    observer.observe($el);
                  }
                }}
                onclick={(e) => {
                  Static.record = item;
                  Fn.log("=af157b=", item);
                  Fn.linkChange(`/list-startups/show/${item.id}`);
                }}
                isVisible={() => {
                  if (index == items.length - 3) {
                    Static.moreid = items[items.length - 1].id;
                  }
                }}
              >
                {/* <span class="category">{item.category}</span> */}
                <div>
                  <img
                    class="w-full min-w-[2.5rem] rounded-[--borderR]"
                    src={`/assets/upload/worldPress/${item.icon}`}
                  ></img>
                </div>
                {/* info */}
                <div>
                  <h5 class="m-[0_0_0.9375rem_0] !mb-[0.9375rem] text-[1.25rem] font-bold @767:!mb-[0.625rem] @767:text-[1.125rem] @992:text-[1.375rem]">
                    {item.title}
                  </h5>
                  <p class="m-0 line-clamp-3 text-[1rem] @767:leading-[1.375rem] @992:text-[1.125rem] @992:leading-[1.5rem]">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })
        )}
      </div>
    </section>
  );
};

export default function () {
  return (
    <section class="wrapper">
      <Category items={Static.categories} />
      <RenderItems items={Static.records} />
    </section>
  );
}
