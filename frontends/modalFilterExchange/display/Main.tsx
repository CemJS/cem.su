import { Cemjsx, Func, Static, Fn, Ref } from "cemjs-all"
import notFound from '@svg/notFound.svg'

const RenderSearch = function () {
    return (
        <div
            class={[
                "modalWindow_field",
                Static.searchText ? "modalWindow_field__valid" : null
            ]}
        >
            <input
                type="text"
                autocomplete="off"
                oninput={(e: any) => {
                    Static.searchText = e.target.value.toLowerCase();
                    Static.coins = Static.records.filter((item) => {
                        if (item.name.toLowerCase().includes(Static.searchText)) {
                            return true;
                        }
                    })
                }} />
            <div class="modalWindow_field_labelLine">
                <i class="i i-user"></i>
                <span>Поиск</span>
            </div>
        </div>
    )
}

const RenderNotFound = function () {
    return (
        <div class="notFound">
            <img src={notFound} alt="Not found" />
            <span>Не найдено</span>
        </div>
    )
}

const RenderListCoins = function ({ coins }) {
    return (
        <ul class="list-coins">
            {
                coins?.map(item => {
                    // Fn.log('=125deb=', item)
                    return (
                        <li
                            class={[
                                "list-coins__item",
                                Static.filterCoins?.includes(item?.name) ? "list-coins__item_active" : null
                            ]}
                            onclick={() => {
                                if (Static.filterCoins?.includes(item?.name)) {
                                    Static.filterCoins?.splice(Static.filterCoins?.indexOf(item?.name), 1);
                                } else {
                                    Static.filterCoins?.push(item?.name);
                                }
                            }}
                        >
                            <img
                                src={`/contents/coins/${item?.mediaName}.svg`}
                                alt={item?.name}
                            />
                            <span>{item?.name}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default function () {
    return (
        <main class="modal_main">
            <RenderSearch />

            <div class="modal-filterExchange__wrap mt-15">
                {
                    Static.coins.length > 0 ? <RenderListCoins coins={Static.coins} /> : <RenderNotFound />
                }
            </div>
        </main>
    )
}