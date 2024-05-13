import Slider from "@elements/Slider";
import { Cemjsx, Static, Fn, Func, front, Ref } from "cemjs-all";

const RenderImage = (img) => {
  console.log("=b261a1=", img);
  return (
    <img
      src={`/assets/upload/gallery/${img?.src}`}
      class="max-w- pointer-events-none h-full w-full object-cover"
    />
  );
};

export default function () {
  console.log("=fe1203=", Static.images);
  return (
    <main id="modal_main">
      <Slider
        items={Static.images.map((img) => {
          console.log("=861c7b=", img);
          return <RenderImage src={img} />;
        })}
      />
    </main>
  );
}
