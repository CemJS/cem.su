import { Cemjsx } from "cemjs-all"
import menuBottom from '@json/menuBottom'


export default function () {
    return (
        <div class="wrapper">
            <div class="menu-inner">
                {
                    menuBottom.map(item => {
                        return (
                            <div><i class={["i", `i-${item.icon}`]}></i></div>
                        )
                    })
                }
            </div>
        </div>
    )
}