import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"
import esV2 from "@svg/icon/flags/esV2.svg";

export default function () {
    return (
        <div class="c-userpreview__shortinfo c-usershortinfo">
            <div class="c-usershortinfo__main">
                <a class="c-usershortinfo__"></a>
                <a class="c-usershortinfo__flag">
                    <img src={`/contents/svg/flags/${Static.record?.country?.Code}.svg`} />
                </a>
                <input id="username" class="c-usershortinfo__name userinfoinput" readonly="true" value={Static.record?.nickname}></input>
                <a href="#" class="c-usershortinfo__rating">19.40</a>
                <p></p>
                <div class="c-usershortinfo__status" id="userstatus">{Static.record?.information?.status}</div>
            </div>
            <div class="c-userpreview__level">
                <div style="width: 15.660130718954521%;"
                    class="c-userpreview__current"/>
                <div class="c-userpreview__num">23.960000000000417/153</div>
            </div>
        </div >
    )
}