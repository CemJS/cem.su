import { Cemjsx } from "cemjs-all"
import Letters from './Letters'
import Content from './Content'

export default function () {
    return (
        // start (maybe use tag section)
        <div class="chat-section ">
            <div class="chat-container">
                <Letters />
                <Content />
            </div>
        </div>
        // end
    )
}