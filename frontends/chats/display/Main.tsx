import { Cemjsx, Fn, Static } from "cemjs-all"
import Letters from './Letters'
import Conversation from './Conversation'

export default function () {
    // Fn.log('=letters=', Static.records)
    return (
        <div class="chat-section flex items-start justify-center">
            <div class="chat-container bg-[#12161F] w-full overflow-hidden flex">
                <Letters />
                <Conversation />
            </div>
        </div>
    )
}