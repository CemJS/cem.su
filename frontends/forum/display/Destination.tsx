import { Cemjsx, Fn, Ref, Static } from "cemjs-all";

export default function () {
  return (
    <section class="forum__destination forum_z-index pb-[30px]">
      <div class="wrapper wrapper_padding">
        <h2 class="my-6 text-center text-[clamp(3rem,6vw,5.625rem)]">
          Как добраться?
        </h2>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2835.3190646991166!2d37.780930385449935!3d44.713099391189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f1f910735ee6eb%3A0x7a3a071353327c49!2z0YPQuy4g0L3QsNCx0LXRgNC10LbQvdCw0Y8g0JDQtNC80LjRgNCw0LvQsCDQodC10YDQtdCx0YDRj9C60L7QstCwLCAyN9CwLCDQndC-0LLQvtGA0L7RgdGB0LjQudGB0LosINCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5LCAzNTM5MDA!5e0!3m2!1sru!2sru!4v1708413564534!5m2!1sru!2sru"
            width="100%"
            height="700"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
