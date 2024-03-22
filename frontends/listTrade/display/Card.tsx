import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all"

export default function ({ item, index }) {

    return (
        <div class="flex justify-center items-center @700:hidden">
            <div class="mb-[.9375rem] w-full max-w-[31.25rem] rounded-[--borderR] bg-[#3b3d49] p-[.625rem]">
                <div class="flex items-center justify-between p-[0_10px_15px_10px]">
                    <img class="relative top-[-.125rem] mr-[1.875rem] pt-[10px] my-[.3125rem] mx-0 max-h-[3.75rem]"
                        src={`/assets/upload/worldPress/${item?.mediaName}`}>
                    </img>
                    {/* <div class="body-card__container_font-size pt-10">{item.name}</div> */}
                    <div class="pt-[.625rem] text-[1.125rem] text-center">{item?.score}</div>
                    <div class="hidden @410:block p-[0_0_5px_0]">
                        <img
                            class="pt-[.625rem] h-[4.375rem] static [filter:hue-rotate(226deg)_saturate(210%)_brightness(0.7)_contrast(170%)]"
                            src={`https://s3.coinmarketcap.com/generated/sparklines/exchanges/web/7d/usd/${item?.marketId}.svg`}>
                        </img>
                    </div>
                </div>
                <div class="flex w-full justify-center pb-[.625rem] pt-[.625rem]">
                    <div class="mx-0 mt-auto h-full w-[12.625rem] rounded-[--btnR] p-[0.0725rem] [background:var(--mainGradient)]">
                        <a href={item?.url} onclick={Fn.link}>
                            <button class="relative z-[1] h-[2.625rem] w-full min-w-[9.375rem] cursor-pointer overflow-hidden rounded-[--btnR] border-none bg-[#3b3d49] text-center text-[1rem] font-semibold text-[--white] outline-none before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[-1] before:h-full before:w-full before:opacity-0 before:content-[''] before:[background:var(--mainGradient)] before:[transition:all_0.3s_ease-in-out] hover:before:opacity-100">
                                Торговать
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}