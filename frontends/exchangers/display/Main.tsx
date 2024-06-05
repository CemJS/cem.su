import { Cemjsx, Fn, Static, front, Ref } from "cemjs-all";
import Table from "./Table";

export default function () {
  return (
    <section class="relative p-[60px_5px_100px_5px]">
      <h1 class="m-[0.625rem_0_1.5625rem_0] text-balance text-center text-[clamp(2rem,_3vw,_2.5rem)] font-bold leading-[3.625rem]">
        {front.Variable.words?.listOfExchanges}
      </h1>
      <div class="">
        <Table />
      </div>
    </section>
  );
}
