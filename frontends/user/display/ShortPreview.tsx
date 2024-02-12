import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"

export default function () {
    return (
        <div class="c-userpreview__shortinfo c-usershortinfo">
            <div class="c-usershortinfo__main">
                <a class="c-usershortinfo__"></a>
                <a class="c-usershortinfo__flag">
                    <img src={`/contents/svg/flags/${Static.record?.country?.Code}.svg`} />
                </a>
                <input id="username" class="c-usershortinfo__name userinfoinput" readonly="true" value={Static.record?.nickname}></input>
                <a href="#" class="c-usershortinfo__rating">{Static.record?.statistic?.rating.toFixed(2) || 0}</a>
                <p></p>
                <div class="c-usershortinfo__status" id="userstatus">{Static.record?.information?.status}</div>
            </div>
            <div class="c-userpreview__level">
                <div style={`width: ${(Static.record?.statistic?.exp / Static.record?.statistic?.expNext * 100).toFixed(2)}%;`}
                    class="c-userpreview__current"/>
                <div class="c-userpreview__num">23.960000000000417/153</div>
            </div>
        </div >
    )
}