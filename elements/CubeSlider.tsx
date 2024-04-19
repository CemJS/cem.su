import { Cemjsx, Fn, Ref, Static } from "cemjs-all";

const GalleryLineClassName = "gallery_line";
const GalleryGraggableClassName = "gallery_draggable";
const GalleryDotActiveClassName = "gallery_dot_active";

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
    this.elementCount = element.children[0].childElementCount;
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
    this.setStylePosition = this.setStylePosition.bind(this);
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
    this.lineNode = this.element.querySelector(`.${GalleryLineClassName}`);
  }

  setParameters() {
    const coordsContainer = this.element.getBoundingClientRect();
    this.widthContainer = coordsContainer.width;
    this.maximumX = -(this.size - 1) * this.widthContainer;
    this.x = -this.currentSlide * this.widthContainer;
    this.size = Math.ceil(this.elementCount / this.countSlides);

    this.setStyleTransition();
    this.lineNode.style.width = `${this.size * this.widthContainer}px`;
    this.setStylePosition();
    Array.from(this.lineNode.children).forEach(async (slideNode: any, i) => {
      let width =
        (this.widthContainer * (this.countSlides - 1)) / this.countSlides;
      if (this.currentSlide + 1 == this.size) {
        let rest = this.elementCount - this.countSlides * (this.size - 1);
        if (i + 1 > (this.size - 1) * this.countSlides) {
          width =
            (this.widthContainer - this.settings.margin * (rest - 1)) / rest;
        }
      }
      slideNode.style.minWidth = `${width}px`;
      slideNode.style.maxWidth = `${width}px`;
      slideNode.style.marginRight = `${this.settings.margin}px`;
      slideNode.style.minHeight = `${Static.height}px`;
      slideNode.style.maxHeight = `${Static.height}px`;
      await new Promise((resolve) =>
        setTimeout(() => {
          i == 0 ? (Static.height = slideNode.offsetHeight) : null;
        }, 200),
      );
    });
    this.manageHTML();
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
    this.x = -this.currentSlide * this.widthContainer;
    this.changeCurrentSlide();
    this.setParameters();
  }

  clickNext() {
    if (!(this.currentSlide + 1 == this.size)) {
      this.currentSlide++;
      this.x = -this.currentSlide * this.widthContainer;
      this.changeCurrentSlide();
    } else {
      this.currentSlide = 0;
      this.x = -this.currentSlide * this.widthContainer;
      this.changeCurrentSlide();
    }
  }

  clickPrev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.x = -this.currentSlide * this.widthContainer;
      this.changeCurrentSlide();
    } else {
      this.currentSlide = this.size - 1;
      this.x = -this.currentSlide * this.widthContainer;
      this.changeCurrentSlide();
    }
  }

  changeCurrentSlide() {
    this.x = -this.currentSlide * this.widthContainer;
    this.setStylePosition();
    this.setStyleTransition();
    this.setParameters();
  }

  startDrag(e) {
    this.currentSlideWasChanged = false;
    this.clickX = e.pageX;
    this.startX = this.x;
    this.resetStyleTransition();
    this.element.classList.add(GalleryGraggableClassName);
    window.addEventListener("pointermove", this.dragging);
  }

  stopDrag() {
    window.removeEventListener("pointermove", this.dragging);
    this.element.classList.remove(GalleryGraggableClassName);
    this.changeCurrentSlide();
  }

  dragging(e) {
    this.dragX = e.pageX;
    const dragShift = this.dragX - this.clickX;
    const easing = dragShift / 7;
    this.x = Math.max(
      Math.min(this.startX + dragShift, easing),
      this.maximumX + easing,
    );
    this.setStylePosition();

    //change active slide
    if (dragShift > 5 && dragShift > 0 && !this.currentSlideWasChanged) {
      this.currentSlideWasChanged = true;
      this.clickPrev();
    }

    if (dragShift < -5 && dragShift < 0 && !this.currentSlideWasChanged) {
      this.currentSlideWasChanged = true;
      this.clickNext();
    }
  }

  setStylePosition() {
    this.lineNode.style.transform = `translate3d(${this.x}px, 0, 0)`;
  }

  setStyleTransition() {
    this.lineNode.style.transition = `all 0.25s ease 0s`;
  }

  resetStyleTransition() {
    this.lineNode.style.transition = `all 0s ease 0s`;
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
  // this.init();
};

export default function ({ items }) {
  {
    Ref.slider ? init(Ref.slider) : null;
  }
  if (!items || !items?.length) {
    return <div />;
  }
  return (
    <div class="cube" style="position: relative;">
      <div
        init={init}
        class="relative z-[1] box-content    flex h-full w-full cursor-grab [transform-origin:50%_50%_-510.5px] [transform-style:preserve-3d] [transform:translate3d(0px,0px,0px)_rotateX(0deg)_rotateY(0deg)] [transition-duration:0ms] [transition-property:transform]"
        ref="slider"
      >
        <div class="gallery_line">{items}</div>
      </div>
    </div>
  );
}
