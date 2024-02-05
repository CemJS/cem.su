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
                ref="searchFilter"
                type="text"
                autocomplete="off"
                oninput={(e: any) => {
                    Static.searchText = e.target.value.toLowerCase();
                    Static.coins = Static.records.filter((item) => {
                        if (item.name.toLowerCase().includes(Static.searchText)) {
                            return true;
                        }
                    })

                    console.log('=5ee441=', Ref.searchFilter.value.length)
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


export default function () {
    return (
        <main class="modal_main">
            <RenderSearch />

            <div class="list-coins mt-15">
                {
                    Static.coins.length ?
                        Static.coins.map(item => {
                            return (
                                <div
                                    class={[
                                        "list-coins__item",
                                        Static.filterCoins.includes(item.name) ? "list-coins__item_active" : null
                                    ]}
                                    onclick={() => {
                                        if (Static.filterCoins.includes(item.name)) {
                                            Static.filterCoins.splice(Static.filterCoins.indexOf(item.name), 1);
                                        } else {
                                            Static.filterCoins.push(item.name);
                                        }
                                    }}
                                >
                                    <img
                                        src={`/contents/coins/${item.icon}.svg`}
                                        alt={item.name}
                                    />
                                    <span>{item.name}</span>
                                </div>
                            )
                        }) :
                        <RenderNotFound />
                }
            </div>
        </main>
    )
}