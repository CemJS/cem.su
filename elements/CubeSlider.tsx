import { Cemjsx, Fn, Ref, Static } from "cemjs-all";

const GalleryLineclass = "line";
const GalleryGraggableclass = "gallery_draggable";

class Gallery {
  element: HTMLElement;
  elementEmpty: any;
  elementCount: number;
  dots: HTMLElement;
  next: HTMLElement;
  prev: HTMLElement;
  size: number; // количество слайдов галереи
  currentSlide: number; // первый слайд
  countSlides: number;
  lineNode: any;
  dotsNode: any;
  slideItems: any;
  widthContainer: any;
  widthSlide: any;
  clickX: any;
  dragX: any;
  x: any;
  startX: any;
  debouncedResizeGallery: any;
  currentSlideWasChanged: boolean;
  maximumX: number;
  settings: any;
  dotsItem: any;
  dotNodes: any;
  dragShift: number;
  firstManage: boolean;
  adaptive: object;
  cube: any;
  counter: any;

  constructor(element: HTMLElement, cube: HTMLElement, counter: HTMLElement) {
    this.element = element;
    this.cube = cube;
    this.counter = counter;
    this.elementCount = this.cube.children.length;
    this.countSlides = 1;
    this.size = Math.ceil(this.elementCount / this.countSlides); // определяем кол-во слайдов галереи
    this.currentSlide = 0;
    this.currentSlideWasChanged = false;
    this.firstManage = true;

    // чтобы при вызове методов не слетали контексты вызываем  bind
    this.manageHTML = this.manageHTML.bind(this);
    this.setParameters = this.setParameters.bind(this);
    this.setEvents = this.setEvents.bind(this);
    this.resizeGallery = this.resizeGallery.bind(this);
    this.destroyEvents = this.destroyEvents.bind(this);
    this.startDrag = this.startDrag.bind(this);
    this.stopDrag = this.stopDrag.bind(this);
    this.dragging = this.dragging.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.clickPrev = this.clickPrev.bind(this);
    this.changeCurrentSlide = this.changeCurrentSlide.bind(this);
    // this.setStyleTransition = this.setStyleTransition.bind(this)

    this.manageHTML();
    this.setParameters();
    this.destroyEvents();
    this.setEvents();
    this.resizeGallery();
    // setInterval(this.clickNext, 4000);
  }

  manageHTML() {
    this.lineNode = this.element.querySelector(`.${GalleryLineclass}`);
    this.counter = this.element.querySelector(`#counter`);
    this.cube = this.element.querySelector(`#cube`);
  }

  setParameters() {
    const coordsContainer = this.element.getBoundingClientRect();
    this.widthContainer = coordsContainer.width;
    this.x = -(this.currentSlide * 90);
    this.size = Math.ceil(this.elementCount / this.countSlides);

    this.size > 1
      ? (this.cube.style.cursor = `grab`)
      : (this.cube.style.cursor = "");

    this.lineNode.style.width = `${this.widthContainer}px`;

    // поворот куба
    this.cube.style.transform = `translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(${this.x}deg)`;
    this.cube.style.transformOrigin = `50% 50% -${this.widthContainer / 2}px`;

    // счётчик
    this.size > 1
      ? (this.counter.textContent = `${this.currentSlide + 1} / ${this.size}`)
      : (this.counter.style.display = "none");

    let counterSlides = 0;
    Array.from(this.cube.children).forEach(async (slideNode: any, i) => {
      if (
        this.currentSlide == i ||
        this.currentSlide - 1 == i ||
        this.currentSlide + 1 == i
      ) {
        slideNode.style.zIndex = 1;
      } else {
        slideNode.style.zIndex = 0;
      }

      slideNode.style.width = `${this.widthContainer}px`;

      // расставка слайдов по кругу
      if (i <= 1) {
        slideNode.style.transform = `rotateX(0deg) rotateY(${90 * i}deg) translate3d(0px, 0px, 0px)`;
      } else {
        counterSlides++;

        counterSlides == 1
          ? (slideNode.style.transform = `rotateX(0deg) rotateY(${90 * i}deg) translate3d(${this.widthContainer * (i - 1)}px, 0px, ${this.widthContainer}px)`)
          : null;
        counterSlides == 2
          ? (slideNode.style.transform = `rotateX(0deg) rotateY(${90 * i}deg) translate3d(${-this.widthContainer}px, 0px, ${this.widthContainer * i}px)`)
          : null;
        counterSlides == 3
          ? (slideNode.style.transform = `rotateX(0deg) rotateY(${90 * i}deg) translate3d(${-(this.widthContainer * i)}px, 0px, 0px)`)
          : null;
        counterSlides == 4
          ? (slideNode.style.transform = `rotateX(0deg) rotateY(${90 * i}deg) translate3d(0px, 0px, ${-(this.widthContainer * (i - 1))}px)`)
          : null;

        counterSlides == 4 ? (counterSlides = 0) : null;
      }
    });
  }

  setEvents() {
    this.debouncedResizeGallery = debounce(this.resizeGallery);
    window.addEventListener("resize", debounce(this.resizeGallery));
    this.lineNode.addEventListener("pointerdown", this.startDrag);
    window.addEventListener("pointerup", this.stopDrag);
    window.addEventListener("pointercancel", this.stopDrag);
  }

  destroyEvents() {
    window.removeEventListener("resize", this.debouncedResizeGallery);
    this.lineNode.removeEventListener("pointerdown", this.startDrag);
    window.removeEventListener("pointerup", this.stopDrag);
    window.removeEventListener("pointercancel", this.stopDrag);
  }

  resizeGallery() {
    this.currentSlide = 0;
    this.x = -(this.currentSlide * 90);
    this.changeCurrentSlide();
    this.setParameters();
  }

  clickNext() {
    if (!(this.currentSlide + 1 == this.size)) {
      this.currentSlide++;
      this.x = -(this.currentSlide * 90);
      this.changeCurrentSlide();
    } else {
      // this.currentSlide = 0;
      this.x = -(this.currentSlide * 90);
      this.changeCurrentSlide();
    }
  }

  clickPrev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.x = -(this.currentSlide * 90);
      this.changeCurrentSlide();
    } else {
      // this.currentSlide = this.size - 1;
      this.x = -(this.currentSlide * 90);
      this.changeCurrentSlide();
    }
  }

  changeCurrentSlide() {
    this.x = -(this.currentSlide * 90);
    this.setStyleTransition();
    this.setParameters();
  }

  startDrag(e) {
    this.cube.style.cursor = "grabbing";
    this.currentSlideWasChanged = false;
    this.clickX = e.pageX;
    this.startX = this.x;
    // this.resetStyleTransition();
    window.addEventListener("pointermove", this.dragging);
  }

  stopDrag() {
    this.cube.style.cursor = "grab";

    window.removeEventListener("pointermove", this.dragging);
    this.changeCurrentSlide();

    if (
      this.dragShift > this.widthContainer / 2 &&
      this.dragShift > 0 &&
      !this.currentSlideWasChanged
    ) {
      this.currentSlideWasChanged = true;
      this.clickPrev();
      this.dragShift = 0;
    }

    if (
      this.dragShift < -this.widthContainer / 2 &&
      this.dragShift < 0 &&
      !this.currentSlideWasChanged
    ) {
      this.currentSlideWasChanged = true;
      this.clickNext();
      this.dragShift = 0;
    }
    this.setStyleTransition();
  }

  dragging(e) {
    this.resetStyleTransition();
    this.dragX = e.pageX;

    let difference = this.dragX - this.clickX;

    if (this.size > 1) {
      if (this.currentSlide + 1 == this.size) {
        this.dragShift = Math.max(Math.min(difference, this.widthContainer), 0);
      } else if (this.currentSlide == 0) {
        this.dragShift = Math.min(
          Math.max(difference, -this.widthContainer),
          0,
        );
      } else {
        if (difference > 0) {
          this.dragShift = Math.min(difference, this.widthContainer);
        } else {
          this.dragShift = Math.max(difference, -this.widthContainer);
        }
      }
    }

    // 90 = 900;
    // 10;
    // 90 = 600;
    // 6.66;

    const separator = this.widthContainer / 90;
    const easing = this.dragShift / separator;

    this.x = -(this.currentSlide * 90 - easing);
    //change active slide

    this.setStylePosition();
  }

  setStyleTransition() {
    this.cube.style.transition = `all 0.25s ease 0s`;
  }

  resetStyleTransition() {
    this.cube.style.transition = `all 0s ease 0s`;
  }

  setStylePosition() {
    this.cube.style.transform = `rotateY(${this.x}deg)`;
  }
}

function debounce(func, time = 100) {
  let timer;
  return function (e) {
    clearTimeout(timer);
    timer = setTimeout(func, time, e);
  };
}

export { Gallery };

export const init = function (element: HTMLElement) {
  let cube: HTMLElement = element.querySelector("#cube");
  let counter: HTMLElement = element.querySelector("#counter");
  let galleryRun;
  !galleryRun ? (galleryRun = new Gallery(element, cube, counter)) : "";
};

export default function ({ items, key = "" }) {
  // {
  //   Ref.slider ? init(Ref.slider) : null;
  // }
  // if (!items || !items?.length) {
  //   return <div />;
  // }
  return (
    <div
      init={init}
      class="relative mx-auto h-full w-full [&_img]:w-full"
      ref="slider"
    >
      <div
        ref="counter"
        id="counter"
        class="pointer-events-none absolute right-3 top-3 z-10 flex min-w-[26px] items-center justify-center rounded-[10px] p-[5px] text-center font-semibold [background:rgba(0,0,0,0.6);]"
      ></div>

      <div class="line h-full w-full touch-none [perspective:1200px]">
        <div
          id="cube"
          ref="cube"
          class="relative z-[1] box-content flex h-full w-full [transform-style:preserve-3d]"
        >
          {items?.map((item, i) => {
            return (
              <div
                id="slide"
                ref={`slide${i}`}
                class={[
                  "w-full flex-shrink-0 select-none [backface-visibility:hidden] [transform-origin:0_0] [transform-style:preserve-3d] [&_img]:pointer-events-none [&_img]:select-none",
                ]}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
