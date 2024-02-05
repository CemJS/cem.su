import { Cemjsx, Ref } from "cemjs-all"



export default function () {
    return (
        <div class="card-wrap">
            <ul class="card-list"
                onpointermove={(e) => {
                    console.log('=fb0081=', e)
                    // updateCursor
                }}
            >
                <li class="card"><span>1</span></li>
                <li class="card"><span>2</span></li>
                <li class="card"><span>3</span></li>
                <li class="card"><span>4</span></li>
                <li class="card"><span>5</span></li>
                <li class="card"><span>6</span></li>
                <li class="card"><span>7</span></li>
                <li class="card"><span>8</span></li>
            </ul>
        </div>
    )
}