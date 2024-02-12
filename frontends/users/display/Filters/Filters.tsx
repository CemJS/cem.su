import { Cemjsx, Fn, Static, front } from "cemjs-all"
import Search from "./Search"
import Select from "./Select"
import CheckBox from "./CheckBox"

export default function () {

    return (
        <div class="users__filter">
            <Search />
            <Select />
            <CheckBox />
        </div>
    )
}