import { Cemjsx, Fn, Func, Ref, Static } from "cemjs-all"

const RenderVideo = function () {
    return (
        <div class="video-container" ref="videoContainer">
            {/* wrapper */}
            <div class="video-wrapper">

                <div class="video-timeline">
                    {/* progress-area */}
                    <div class="video-timeline__area">
                        <span>00:00</span>
                        <div class="video-timeline__progressbar" ref="progressBar"></div>
                    </div>
                </div>

                <ul class="video-controls">
                    <li class="video-options">
                        <span class="video-icon">
                            <i
                                class="i i-volume-medium"
                                ref="volume"
                                onclick={(e) => {
                                    if (!e.currentTarget.classList.contains("i-volume-medium")) {
                                        Ref.video.volume = 0.5
                                        e.currentTarget.classList.replace("i-volume-mute", "i-volume-medium")
                                    } else {
                                        Ref.video.volume = 0.0
                                        e.currentTarget.classList.replace("i-volume-medium", "i-volume-mute")
                                    }
                                    Ref.volumeSlider.value = Ref.video.volume
                                }}
                            ></i>
                        </span>
                        <input
                            type="range"
                            ref="volumeSlider"
                            min="0"
                            max="1"
                            step="any"
                            oninput={(e) => {
                                Ref.video.volume = e.target.value
                                if (e.target.value == 0) {
                                    Ref.volume.classList.replace("i-volume-medium", "i-volume-mute")
                                } else {
                                    Ref.volume.classList.replace("i-volume-mute", "i-volume-medium")
                                }
                            }}
                        />
                        <div class="video-options__timer">
                            <span>{`00:00 / 00:00`}</span>
                        </div>
                    </li>
                    <li class="video-options">
                        {/* 15сек */}
                        <span
                            class="video-icon"
                            ref="skipBackward"
                            onclick={() => {
                                console.log('=079bfc=', Ref.video)
                                Ref.video.currentTime -= 5
                            }}
                        >
                            <i class="i i-undo1"></i>
                        </span>
                        {/* play */}
                        <span class="video-icon">
                            <i
                                class="i i-play3"
                                ref="playAndPause"
                                onclick={() => {
                                    Func.playAndPause(Ref.video)
                                }}
                            ></i>
                        </span>
                        {/* +15cек */}
                        <span
                            class="video-icon"
                            ref="skipForward"
                            onclick={() => {
                                Ref.video.currentTime += 5
                            }}
                        >
                            <i class="i i-redo1"></i>
                        </span>
                    </li>
                    <li class="video-options">
                        <div
                            class="video-options-speed"
                            ref="speed"
                            onclick={(e: any) => {
                                e.currentTarget.classList.toggle('video-options-speed_active')
                            }}
                        >
                            <span class="video-icon">
                                <i class="i i-settings"></i>
                            </span>
                            <ul class="speed-tools" ref="speedOptions">
                                {
                                    Static.speedOptions.map(item => {
                                        return (
                                            <li
                                                class={["speed-tools__item", Static.activeSpeed == item.value ? "speed-tools__item_active" : null]}
                                                onclick={() => {
                                                    Ref.video.playbackRate = item.value
                                                    Static.activeSpeed = item.value
                                                }}
                                            >
                                                {`${item.value}x`}
                                            </li>
                                        )
                                    })
                                }
                                <li
                                    class={["speed-tools__item", Static.activeSpeed == 1 ? "speed-tools__item_active" : null]}
                                    onclick={() => {
                                        Ref.video.playbackRate = 1
                                    }}
                                >
                                    Обычная
                                </li>
                            </ul>
                        </div>
                        <span class="video-icon" onclick={() => { Ref.video.requestPictureInPicture() }}>
                            <i class="i i-onedrive"></i>
                        </span>
                        <span
                            class="video-icon"
                            onclick={() => {
                                Ref.videoContainer.classList.toggle("video-container_fullscreen")
                                // Ref.videoContainer.requestFullScreen()
                            }}>
                            <i class="i i-share"></i>
                        </span>
                    </li>
                </ul>

            </div>
            <video
                ref="video"
                src="/contents/video/yan.MOV"
                onplay={() => {
                    Ref.playAndPause.classList.replace("i-play3", "i-pause2")
                }}
                onpause={() => {
                    Ref.playAndPause.classList.replace("i-pause2", "i-play3")
                }}
                ontimeupdate={(e: any) => {
                    Func.timeUpdate(e)
                }}
            >
            </video>
        </div >
    )
}

export default function () {
    return (
        <div class="lenta">
            <div class="lenta-item">
                <div class="lenta-item__header">
                    <div class="user-circle"></div>
                    <div class="lenta-item__header-info">
                        <span class="lenta-item__header-title">Annyshka Shalbuzova</span>
                        <span
                            class="back-ellipsis"
                            onclick={() => Fn.initOne("modalTools", {})}
                        ></span>
                    </div>
                </div>

                <div class="lenta-item__body">
                    <RenderVideo />
                </div>
            </div>
        </div>
    )
}



{/* <video class="video" ref="video" src="/contents/video/yan.MOV"></video> */ }
{/* <div class="controlls">
    <button ref="play" onclick={() => { Func.playVideo(Ref.video) }}>
        <i class="i i-lock"></i>play
    </button>
    <button ref="pause" onclick={() => { Func.pauseVideo(Ref.video) }}>
        <i class="i i-lock"></i>pause
    </button>
    <button ref="stop" onclick={() => { Func.stopVideo(Ref.video) }}>
        <i class="i i-lock"></i>stop
    </button>
    <button ref="speedUp" onclick={Func.speedUpVideo()}>
        <i class="i i-lock"></i>Быстрее
    </button>
    <button ref="speedDown" onclick={Func.speedDownVideo()}>
        <i class="i i-lock"></i>Медленнее
    </button>
    <button ref="speedNormal" onclick={Func.speedNormalVideo()}>
        <i class="i i-lock"></i>Норма
    </button>
    <div>
        <input type="range" ref="volume" onclick={Func.volumeVideo()} />Звук
    </div>
</div> */}