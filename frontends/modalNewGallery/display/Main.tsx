import Slider from "@elements/Slider";
import { Cemjsx, Static, Fn, Func, front, Ref } from "cemjs-all";

const RenderImage = (img) => {
  return (
    <img
      src={`/assets/upload/gallery/${img?.src}`}
      class="max-w- pointer-events-none h-full w-full object-cover"
    />
  );
};

export default function () {
  return (
    <main id="modal_main">
      <Slider
        items={Static.images.map((img) => {
          return <RenderImage src={img} />;
        })}
      />
    </main>
  );
}
