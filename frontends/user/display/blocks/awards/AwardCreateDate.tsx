import { Cemjsx} from "cemjs-all"

export default function ({ item, key }) {

    let timestamp = item?.dateCreate
    let date = new Date(timestamp);

    let day = ("0" + date.getDate()).slice(-2);
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();

    let hours = ("0" + date.getHours()).slice(-2);
    let minutes = ("0" + date.getMinutes()).slice(-2);
    let seconds = ("0" + date.getSeconds()).slice(-2);

    let formattedDate = day + "." + month + "." + year;
    return (
        <span class="user-awards__progress-bar-label">{formattedDate}</span>
    )
}