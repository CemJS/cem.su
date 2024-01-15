import { Cemjsx, Static, Func, Ref } from "cemjs-all"

export default function () {
    return (
        <div class="bottomSheet-overlay" ref="bottomSheetOverlay">
            <div class="bottomSheet-content" ref="bottomSheetContent">
                <div class="bottomSheet-content__header">
                    <div
                        class="bottomSheet-content__header_drag-icon"
                        onmouseup={() => { Func.dragStop }}
                        onmousedown={(e) => { Func.dragStart(e) }}
                        onmousemove={(e) => { Func.dragging(e) }}
                    >
                        <span></span>
                    </div>
                </div>
                <div class="bottomSheet-content__body">
                    <h2 class="bottomSheet-title">Tools</h2>
                    <ul class="bottomSheet-list" role="list"
                        onclick={() => {
                            console.log('=fbc11f=', Ref.bottomSheetContent.offsetHeight)
                        }}
                    >
                        <li class="bottomSheet-list__item">Скопировать URL</li>
                        <li class="bottomSheet-list__item">Поделиться</li>

                        <li class="bottomSheet-list__item mt-15">
                            Отмена
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}