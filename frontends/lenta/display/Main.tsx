import { Cemjsx, Fn, Func, Ref, Static } from "cemjs-all"


const RenderVideo = function () {
    return (
        <div class="video-container " ref="videoContainer"
            onmousemove={(e) => {
                e.currentTarget.classList.add("video-container_showControlls")
            }}
            onmouseleave={() => {
                setTimeout(() => {
                    Ref.videoContainer.classList.remove("video-container_showControlls")
                }, 300)
            }}
        >
            <div
                class="video-play"
                onclick={() => {
                    Func.playAndPause(Ref.video)
                }}
                ondblclick={(e: any) => {
                    if (e.clientX <= 250) {
                        Ref.video.currentTime -= 5
                    }
                    if (e.clientX >= 550) {
                        Ref.video.currentTime += 5
                    }
                }}
            >
                <div class="video-play__icon">
                    <i class="i i-play3" ref="mainPlay"></i>
                </div>
            </div>
            <div class="video-wrapper">

                <div
                    class="video-timeline"
                    ref="videoTimeLine"
                    onclick={(e: any) => {
                        let timeLineWidth = Ref.videoTimeLine.clientWidth
                        Ref.video.currentTime = (e.offsetX / timeLineWidth) * Ref.video.duration
                    }}

                    onmousedown={() => { Static.videoDragStart = true }}
                    onmousemove={(e: any) => {
                        if (!Static.videoDragStart) return
                        Func.draggableProgressBar(e)
                        Ref.progressTime.style.left = `${e.offsetX}px`
                    }}

                >
                    <div class="video-timeline__area">
                        <span ref="progressTime">{Func.formatTime(Static.currentTime)}</span>
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
                            <span>{`${Static.currentTime ? Func.formatTime(Static.currentTime) : "00:00"} / ${Static.duration ? Func.formatTime(Static.duration) : "00:00"}`}</span>
                        </div>
                    </li>
                    <li class="video-options">
                        <span
                            class="video-icon"
                            ref="skipBackward"
                            onclick={() => {
                                Ref.video.currentTime -= 5
                            }}
                        >
                            <i class="i i-undo1"></i>
                        </span>
                        <span class="video-icon">
                            <i
                                class="i i-play3"
                                ref="playAndPause"
                                onclick={() => {
                                    Func.playAndPause(Ref.video)
                                }}
                            ></i>
                        </span>
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
                                <i class="i i-speed"></i>
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
                        <span class="video-icon">
                            <i
                                ref="fullScreen"
                                class="i i-share"
                                onclick={(e) => {
                                    Ref.videoContainer.classList.toggle("video-container_fullscreen")
                                    if (document.fullscreenElement) {
                                        Ref.fullScreen.classList.replace("i-user", "i-share")
                                        return document.exitFullscreen()
                                    }
                                    Ref.fullScreen.classList.replace("i-share", "i-user")
                                    Ref.videoContainer.requestFullscreen()
                                }}
                            ></i>
                        </span>
                    </li>
                </ul>

            </div>
            <video
                class="video"
                ref="video"
                src="/contents/video/yan.MOV"
                onplay={() => {
                    Ref.playAndPause.classList.replace("i-play3", "i-pause2")
                    Ref.mainPlay.classList.replace("i-play3", "i-pause2")
                    Ref.mainPlay.style.display = 'none'
                }}
                onpause={() => {
                    Ref.playAndPause.classList.replace("i-pause2", "i-play3")
                    Ref.mainPlay.classList.replace("i-pause2", "i-play3")
                    Ref.mainPlay.style.display = 'block'

                }}
                ontimeupdate={(e: any) => {
                    Func.timeUpdate(e)
                }}
                onloadeddata={(e: any) => {
                    Static.duration = e.target.duration
                }}
            >
            </video>
        </div >
    )
}

const RenderStatistics = function () {
    return (
        <ul class="statistics">
            <li class="statistics__item">
                <div class="statistics__item_icon"><i class="i i-likeFull"></i>12</div>
                <div class="statistics__item_icon"><i class="i i-dislikeFull"></i>12</div>
            </li>
            <li class="statistics__item">
                <div class="statistics__item_icon"><i class="i i-comments"></i>250</div>
                <div class="statistics__item_icon"><i class="i i-eye"></i>1021</div>
            </li>
        </ul>
    )
}

export default function () {
    return (
        <div class="lenta">
            <div class="lenta-item">
                <div class="lenta-item__header">
                    <div class="user-circle"></div>
                    <div class="lenta-item__header-info">
                        <span class="lenta-item__header-title">Betarost</span>
                        <span
                            class="back-ellipsis"
                            onclick={() => Fn.initOne("modalTools", {})}
                        ></span>
                    </div>
                </div>

                <div class="lenta-item__body">
                    <audio-player></audio-player>
                </div>

                <div class="lenta-item__footer">
                    <div class="lenta-item__text">
                        <p>🙌 Гонконгская компания VSFG намерена запустить спотовый BTC-ETF в I квартале 2024 года</p>
                        <p>📩 Гонконгская компания Venture Smart Financial Holdings (VSFG) планирует подать заявку в местную Комиссию по ценным бумагам и фьючерсам (SFC) на запуск спотового биржевого биткоин-фонда (ETF) и рассчитывает получить одобрение уже в текущем квартале.</p>
                    </div>
                    <RenderStatistics />
                </div>
            </div>
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

                <div class="lenta-item__footer">
                    <div class="lenta-item__text">
                        <p>🙌 Гонконгская компания VSFG намерена запустить спотовый BTC-ETF в I квартале 2024 года</p>
                        <p>📩 Гонконгская компания Venture Smart Financial Holdings (VSFG) планирует подать заявку в местную Комиссию по ценным бумагам и фьючерсам (SFC) на запуск спотового биржевого биткоин-фонда (ETF) и рассчитывает получить одобрение уже в текущем квартале.</p>
                    </div>
                    <RenderStatistics />
                </div>
            </div>
            {/* more item */}

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