import { Cemjsx, Static, Fn, front, Events } from "cemjs-all"

const HeaderBack = function ({ title }) {
    return (
        <div class="fixed z-[5] py-3 top-0 left-0 right-0 border-b-[1px] border-solid border-[#2d3243] w-full bg-[#1d2029]">
            <div class="wrapper">
                <div class="flex justify-between items-center">
                    <span
                        class="cursor-pointer flex justify-center items-center"
                        onclick={() => {
                            Fn.linkChange("/")
                        }}
                    >
                        <i class="i i-chevron-left text-2xl"></i>
                    </span>

                    <h5 class="@700:text-xl text-center px-4 line-clamp-1 font-medium text-base">{title}</h5>

                    <span
                        class="relative cursor-pointer w-8 after:content-['...'] after:absolute after:text-5xl after:left-0 after:top-0 after:translate-x-[-10%] after:translate-y-[-80%]"
                        onclick={() => Fn.initOne("modalTools", {
                            records: [
                                {
                                    name: `${front.Variable.words?.tools?.copy} URL`
                                },
                                {
                                    name: front.Variable.words?.tools?.share
                                }
                            ]
                        })}
                    ></span>
                </div>
            </div>
        </div>
    )
}

export default function () {
    // Fn.log('=news=', Static.news)
    return (
        <div>
            <HeaderBack title={front.Variable.words?.chapters?.news} />
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 @464:gap-4">
                {
                    Static.news.map((item, index) => {
                        return (
                            <div class="cursor-pointer rounded-2xl relative bg-[#303545] grid grid-cols-[5rem_1fr] grid-rows-[1.5rem_2.5rem_auto] p-[0.8rem] gap-3 [grid-template-areas:'image_title'_'image_desc'_'statistics_statistics'] @870:block @870:pt-5 @870:pr-5 @870:pl-5 @870:pb-10"
                                init={($el: any) => {
                                    if (index == Static.news?.length - 1) {
                                        const observer = new IntersectionObserver((entries) => {
                                            entries.forEach(async (entry) => {
                                                if (entry.isIntersecting) {
                                                    observer.unobserve($el);
                                                    front.Services.functions.sendApi("/api/events/news", {
                                                        // action: "skip",
                                                        lang: front.Variable.words?.code,
                                                        category: Static.activeItem,
                                                        skip: Static.news.length
                                                    });
                                                }
                                            });
                                        });
                                        observer.observe($el);
                                    }
                                }}
                                onclick={async () => {
                                    Static.record = item
                                    let url = front.Services.functions.makeUrlEvent(`news/${item.id}`);
                                    Events.news = await Fn.event(url, Static.newListener);
                                    Fn.linkChange(`/news/show/${item.id}`);
                                }}

                            >
                                <div class="[grid-area:image]">
                                    <img
                                        class="rounded-[0.6rem] object-contain w-auto @870:rounded-2xl @870:object-cover @870:h-full @870:w-full"
                                        src={`/assets/upload/news/${item.mediaName}`}
                                        alt={item.title}
                                    />
                                </div>
                                <h3 class="line-clamp-1 font-semibold [grid-area:title] h-[1.3rem] text-base @870:text-lg @870:pt-4 @870:mb-2 @870:h-auto">{item.title}</h3>
                                <p class="font-medium line-clamp-2 [grid-area:desc] leading-[132%] text-sm @870:text-base lg:line-clamp-3">{item.preview}</p>

                                <div class="flex items-center justify-between relative text-[#909cbf] [grid-area:statistics] text-xs @870:absolute @870:left-5 @870:right-5 @870:bottom-2 @870:text-base">
                                    <div class="flex items-center gap-1">
                                        {front.Services.functions.timeStampToDate(item.dateCreate, ".")}
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <i class="i i-comment text-xs @870:text-base"></i>{item.statistics.comments}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}