import { Cemjsx, front, Fn, Static, Func, Ref } from "cemjs-all"

export default function () {
    return (
        <div class="c-userpreview__shortinfo c-usershortinfo">
            <div class="c-usershortinfo__main">
                <a class="c-usershortinfo__"></a>
                <a class="c-usershortinfo__flag">
                    {Static.record?.country?.code &&
                        <img src={`/contents/svg/flags/${Static.record?.country?.code}.svg`} />
                    }
                </a>
                <input id="username" class="c-usershortinfo__name userinfoinput" readonly="true" value={Static.record?.nickname ? Static.record?.nickname : ""}></input>
                <a href="#" class="c-usershortinfo__rating">{Static.record?.statistics?.rating.toFixed(2) || 0}</a>
                <p></p>
                <div class="c-usershortinfo__status" id="userstatus">{Static.record?.status}</div>
            </div>
            <div class="c-userpreview__level">
                <div style={`width: ${(Static.record?.statistics?.exp / Static.record?.statistics?.expNext * 100).toFixed(2)}%;`}
                    class="c-userpreview__current" />
                <div class="c-userpreview__num"></div>
            </div>
        </div >
    )
}