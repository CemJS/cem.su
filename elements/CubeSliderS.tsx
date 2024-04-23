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

  constructor(element: HTMLElement) {
    this.element = element;
    this.elementCount = Ref.cube.children.length;
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
    this.x = -(this.currentSlide * 90);
    this.size = Math.ceil(this.elementCount / this.countSlides);

    this.lineNode.style.width = `${this.widthContainer}px`;
    let maxHeight = 0;
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
      if (this.firstManage) {
        let slideHeight = slideNode.getBoundingClientRect().height;
        slideHeight > maxHeight ? (maxHeight = slideHeight) : null;
      }
    });
    console.log("=fc862b=", maxHeight);
    if (this.firstManage) {
      Ref.slider.style.minHeight = `${maxHeight}px`;
      Ref.slider.style.maxHeight = `${maxHeight}px`;
    }
    this.firstManage = false;

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

    if (
      this.dragShift > 100 &&
      this.dragShift > 0 &&
      !this.currentSlideWasChanged
    ) {
      this.currentSlideWasChanged = true;
      console.log("=prev=");
      this.clickPrev();
      this.dragShift = 0;
    }

    if (
      this.dragShift < -100 &&
      this.dragShift < 0 &&
      !this.currentSlideWasChanged
    ) {
      this.currentSlideWasChanged = true;
      console.log("=next=");
      this.clickNext();
      this.dragShift = 0;
    }
  }

  dragging(e) {
    this.dragX = e.pageX;
    const easing = this.dragShift / 5;
    // this.x = Math.max(
    //   Math.min(this.startX + this.dragShift, easing),
    //   this.widthContainer + easing,
    // );
    if (this.currentSlide + 1 == this.size) {
      this.dragShift = Math.max(this.dragX - this.clickX, -100);
    } else if (this.currentSlide == 0) {
      this.dragShift = Math.min(this.dragX - this.clickX, 100);
    } else {
      this.dragShift = this.dragX - this.clickX;
    }
    this.x = -(this.currentSlide * 90 - easing);

    this.setStylePosition();

    //change active slide
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
    <div init={init} class="mx-auto h-full w-full [&_img]:w-full" ref="slider">
      <div class="line flex h-full w-full items-center justify-center [perspective-origin:50%] [perspective:1200px]">
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
                  "slid absolute h-full w-full select-none [&_img]:pointer-events-none [&_img]:h-full [&_img]:w-full",
                  "[&.front]:[transform:translateZ(200px)]",
                  "[&.right]:[transform-origin:100%_0] [&.right]:[transform:rotateY(-270deg)_translateX(200px)]",
                  "[&.back]:[transform:translateZ(-200px)_rotateY(180deg)]",
                  "[&.left]:[transform-origin:0_50%] [&.left]:[transform:rotateY(270deg)_translateX(-200px)]",
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
