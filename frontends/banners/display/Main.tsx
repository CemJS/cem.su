import { Cemjsx, Fn, Static } from "cemjs-all"



export default function () {
    Fn.log("Static.records banners...", Static.records)
    return (
        <div class="banners">
            {
                Static.records.map(item => {
                    return (
                        <div class="banners__item">
                            <img src={`/assets/upload/worldPress/${item.name}`} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

