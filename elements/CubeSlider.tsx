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
  adaptive: object;

  constructor(element: HTMLElement) {
    this.element = element;
    this.elementCount = Ref.cube.children.length;
    this.countSlides = 1;
    this.size = Math.ceil(this.elementCount / this.countSlides); // определяем кол-во слайдов галереи
    this.currentSlide = 0;
    this.currentSlideWasChanged = false;

    // чтобы при вызове методов не слетали контексты вызываем  bind
    this.manageHTML = this.manageHTML.bind(this);
    this.setParameters = this.setParameters.bind(this);
    this.setEvents = this.setEvents.bind(this);
    this.resizeGallery = this.resizeGallery.bind(this);
    this.destroyEvents = this.destroyEvents.bind(this);
    this.startDrag = this.startDrag.bind(this);
    this.stopDrag = this.stopDrag.bind(this);
    this.dragging = this.dragging.bind(this);
    // this.setStylePosition = this.setStylePosition.bind(this);
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
  }

  setParameters() {
    const coordsContainer = this.element.getBoundingClientRect();
    this.widthContainer = coordsContainer.width;
    // this.maximumX = -(this.size - 1) * this.widthContainer;
    this.x = this.currentSlide * 90;
    this.size = Math.ceil(this.elementCount / this.countSlides);

    // this.setStyleTransition();
    this.lineNode.style.width = `${this.widthContainer}px`;
    // this.setStylePosition();
    Array.from(Ref.cube.children).forEach(async (slideNode: any, i) => {
      if (
        this.currentSlide == i ||
        this.currentSlide - 1 == i ||
        this.currentSlide + 1 == i
      ) {
        slideNode.style.zIndex = 1;
      } else {
        slideNode.style.zIndex = 0;
      }
      // slideNode.style.transform = `rotateX(0deg) rotateY(${90 * i}deg) translate3d(0px, 0px, 0px)`;
      slideNode.style.minWidth = `${this.widthContainer}px`;
      slideNode.style.maxWidth = `${this.widthContainer}px`;
      // slideNode.style.minHeight = `${Static.height}px`;
      // slideNode.style.maxHeight = `${Static.height}px`;
    });
    // this.manageHTML();
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
    this.x = this.currentSlide * 90;
    this.changeCurrentSlide();
    this.setParameters();
  }

  clickNext() {
    if (!(this.currentSlide + 1 == this.size)) {
      this.currentSlide++;
      this.x = this.currentSlide * 90;
      this.changeCurrentSlide();
    } else {
      // this.currentSlide = 0;
      this.x = this.currentSlide * 90;
      this.changeCurrentSlide();
    }
  }

  clickPrev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.x = this.currentSlide * 90;
      this.changeCurrentSlide();
    } else {
      // this.currentSlide = this.size - 1;
      this.x = this.currentSlide * 90;
      this.changeCurrentSlide();
    }
  }

  changeCurrentSlide() {
    this.x = this.currentSlide * 90;
    this.setStylePosition();
    this.setStyleTransition();
    this.setParameters();
  }

  startDrag(e) {
    this.currentSlideWasChanged = false;
    this.clickX = e.pageX;
    this.startX = this.x;
    // this.resetStyleTransition();
    this.element.classList.add("cursor-grab");
    window.addEventListener("pointermove", this.dragging);
  }

  stopDrag() {
    window.removeEventListener("pointermove", this.dragging);
    this.element.classList.remove("cursor-grab");
    this.changeCurrentSlide();
    console.log("=8b797a=", this.currentSlide);
  }

  dragging(e) {
    this.dragX = e.pageX;
    const dragShift = this.dragX - this.clickX;
    const easing = dragShift / 7;
    // this.x = Math.max(
    //   Math.min(this.startX + dragShift, easing),
    //   this.maximumX + easing,
    // );
    // console.log("=5304a3=", dragShift);
    // dragShift > 0
    //   ? (this.x = this.currentSlide * 90 - dragShift)
    //   : (this.x = this.currentSlide * 90 + dragShift);

    this.setStylePosition();

    //change active slide
    if (dragShift < 40 && dragShift > 0 && !this.currentSlideWasChanged) {
      this.currentSlideWasChanged = true;
      console.log("=prev=");
      this.clickPrev();
    }

    if (dragShift > -40 && dragShift < 0 && !this.currentSlideWasChanged) {
      this.currentSlideWasChanged = true;
      console.log("=next=");
      this.clickNext();
    }
  }

  setStylePosition() {
    Ref.cube.style.transform = `rotateY(${this.x}deg)`;
  }

  setStyleTransition() {
    Ref.cube.style.transition = `all 0.25s ease 0s`;
  }

  resetStyleTransition() {
    Ref.cube.style.transition = `all 0s ease 0s`;
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
  !Static.galleryRun ? (Static.galleryRun = new Gallery(element)) : "";
};

export default function ({ items }) {
  let counter = 0;
  let slideClassesMap = {
    1: "front",
    2: "right",
    3: "back",
    4: "left",
  };
  {
    Ref.slider ? init(Ref.slider) : null;
  }
  if (!items || !items?.length) {
    return <div />;
  }
  return (
    <div init={init} class="h-[300px] w-[300px] [&_img]:w-full" ref="slider">
      <div class="line flex h-full w-full items-center justify-center [perspective-origin:50%] [perspective:800px]">
        <div
          id="cube"
          ref="cube"
          class="relative h-full w-full [transform-style:preserve-3d] [transition:2s]"
        >
          {items.map((item, i) => {
            counter >= 4 ? (counter = 0) : null;
            counter++;
            return (
              <div
                ref={`slide${i}`}
                class={[
                  "slide absolute h-[300px] w-[300px]",
                  "[&.front]:[transform:translateZ(150px)]",
                  "[&.right]:[transform-origin:100%_0] [&.right]:[transform:rotateY(-270deg)_translateX(150px)]",
                  "[&.back]:[transform:translateZ(-150px)_rotateY(180deg)]",
                  "[&.left]:[transform-origin:0_50%] [&.left]:[transform:rotateY(270deg)_translateX(-150px)]",
                  `${slideClassesMap[counter]}`,
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
