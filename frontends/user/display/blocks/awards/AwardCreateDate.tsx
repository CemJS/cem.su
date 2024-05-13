import { Cemjsx } from "cemjs-all";

export default function ({ item, key }) {
  let timestamp = item?.dateCreate;
  let date = new Date(timestamp);

  let day = ("0" + date.getDate()).slice(-2);
  let month = ("0" + (date.getMonth() + 1)).slice(-2);
  let year = date.getFullYear();

  let hours = ("0" + date.getHours()).slice(-2);
  let minutes = ("0" + date.getMinutes()).slice(-2);
  let seconds = ("0" + date.getSeconds()).slice(-2);

  let formattedDate = day + "." + month + "." + year;
  return (
    <span class="text-[.875rem] font-bold uppercase leading-[1.25rem] text-transparent ![-webkit-background-clip:text] [background:linear-gradient(89.03deg,_#2c66b8_0.54%,_#8859ec_97.66%)]">
      {formattedDate}
    </span>
  );
}
