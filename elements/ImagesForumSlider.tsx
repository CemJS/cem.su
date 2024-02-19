import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import back from "@svg/icon/prev.svg";
import next from "@svg/icon/next.svg";

const GalleryClassName = "gallery";
const GalleryClassNamePartners = "gallery_images";
const GalleryLineClassName = "gallery_line";
const GallerySlideClassName = "gallery_slide";
const GalleryGraggableClassName = "gallery_draggable";
const GalleryDotsClassName = "gallery_dots";
const GalleryDotClassName = "gallery_dot";
const GalleryDotActiveClassName = "gallery_dot_active";
const GalleryNavClassName = "gallery_nav";
const GalleryNavLeftClassName = "gallery_nav_left";
const GalleryNavRightClassName = "gallery_nav_right";

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
  firstManage: boolean;

  constructor(element: HTMLElement, dots: HTMLElement, next: HTMLElement, prev: HTMLElement, options = { margin: 10 }) {
    this.element = element;
    this.elementEmpty = undefined;
    this.elementCount = element.children[0].childElementCount;
    this.dots = dots;
    this.next = next;
    this.prev = prev;
    this.firstManage = false;
    this.countSlides = 5;
    this.size = Math.ceil(this.elementCount / this.countSlides); // определяем кол-во слайдов галереи
    this.currentSlide = 0;
    this.currentSlideWasChanged = false;
    this.settings = {
      margin: options.margin || 0,
    };

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
    this.clickDots = this.clickDots.bind(this);
    this.clickNext = this.clickNext.bind(this);
    this.clickPrev = this.clickPrev.bind(this);
    this.changeCurrentSlide = this.changeCurrentSlide.bind(this);
    this.changeActiveDotClass = this.changeActiveDotClass.bind(this);
    // this.setStyleTransition = this.setStyleTransition.bind(this)

    this.manageHTML();
    this.setParameters();
    this.destroyEvents();
    this.setEvents();
    this.resizeGallery();
    // setInterval(this.clickNext, 4000);
  }

  manageHTML() {
    // if (!this.firstManage) {
    this.element.classList.add(GalleryClassName);
    // this.element.innerHTML = `
    //       <div class="${GalleryLineClassName}">
    //           ${this.element.innerHTML}
    //       <div>
    //   `;

    this.lineNode = this.element.querySelector(`.${GalleryLineClassName}`);

    // this.slideItems = Array.from(this.lineNode.children).map((childNode) => {
    //   wrapElementByDiv({
    //     element: childNode,
    //     className: GallerySlideClassName,
    //   });
    // });
    // }
    this.dots.classList.add(GalleryDotsClassName);
    this.dots.innerHTML = "";

    if (this.countSlides > 1) {
      this.dotsItem = Array.from(Array(this.size).keys()).map((key) => {
        wrapElementBtn(this.dots, GalleryDotClassName, key, this.currentSlide);
      });
    }

    this.dotNodes = this.dots.querySelectorAll(`.${GalleryDotClassName}`);
  }

  adaptive() {
    if (window.innerWidth < 768) {
      this.countSlides = 2;
    } else if (window.innerWidth < 400) {
      this.countSlides = 1;
    } else {
      this.countSlides = 3;
    }
  }

  setParameters() {
    this.adaptive();
    const coordsContainer = this.element.getBoundingClientRect();
    this.widthContainer = coordsContainer.width;
    this.maximumX = -(this.size - 1) * (this.widthContainer + this.settings.margin);
    this.x = -this.currentSlide * (this.widthContainer + this.settings.margin);
    this.size = Math.ceil(this.elementCount / this.countSlides);

    this.setStyleTransition();
    this.lineNode.style.width = `${this.size * (this.widthContainer + this.settings.margin)}px`;
    this.setStylePosition();
    Array.from(this.lineNode.children).forEach(async (slideNode: any, i) => {
      let width = (this.widthContainer - this.settings.margin * (this.countSlides - 1)) / this.countSlides;
      if (this.currentSlide + 1 == this.size) {
        let rest = this.elementCount - this.countSlides * (this.size - 1);
        if (i + 1 > (this.size - 1) * this.countSlides) {
          width = (this.widthContainer - this.settings.margin * (rest - 1)) / rest;
        }
      }
      slideNode.style.minWidth = `${width}px`;
      slideNode.style.maxWidth = `${width}px`;
      slideNode.style.marginRight = `${this.settings.margin}px`;
      slideNode.style.minHeight = `${Static.height}px`;
      slideNode.style.maxHeight = `${Static.height}px`;
      await setTimeout(() => {
        i == 0 ? (Static.height = slideNode.offsetHeight) : null;
      }, 200);
    });
    this.manageHTML();
  }

  setEvents() {
    this.debouncedResizeGallery = debounce(this.resizeGallery);
    window.addEventListener("resize", debounce(this.resizeGallery));
    this.lineNode.addEventListener("pointerdown", this.startDrag);
    window.addEventListener("pointerup", this.stopDrag);
    window.addEventListener("pointercancel", this.stopDrag);
    this.dots.addEventListener("click", this.clickDots);
    this.next.addEventListener("click", this.clickNext);
    this.prev.addEventListener("click", this.clickPrev);
  }

  destroyEvents() {
    window.removeEventListener("resize", this.debouncedResizeGallery);
    this.lineNode.removeEventListener("pointerdown", this.startDrag);
    window.removeEventListener("pointerup", this.stopDrag);
    window.removeEventListener("pointercancel", this.stopDrag);
    this.dots.removeEventListener("click", this.clickDots);
    this.next.removeEventListener("click", this.clickNext);
    this.prev.removeEventListener("click", this.clickPrev);
  }

  resizeGallery() {
    this.currentSlide = 0;
    this.x = -this.currentSlide * (this.widthContainer + this.settings.margin);
    this.changeCurrentSlide();
    this.setParameters();
  }

  clickDots(e) {
    const dotNode = e.target.closest("button");
    if (!dotNode) return;

    let dotNumber;
    for (let i = 0; i < this.dotNodes.length; i++) {
      if (this.dotNodes[i] === dotNode) {
        dotNumber = i;
        break;
      }
    }

    if (dotNumber === this.currentSlide) return;

    this.currentSlide = dotNumber;

    this.changeCurrentSlide();
  }

  clickNext() {
    if (!(this.currentSlide + 1 == this.size)) {
      this.currentSlide++;
      this.x = -this.currentSlide * (this.widthContainer + this.settings.margin);
      this.changeCurrentSlide();
    } else {
      this.currentSlide = 0;
      this.x = -this.currentSlide * (this.widthContainer + this.settings.margin);
      this.changeCurrentSlide();
    }
  }

  clickPrev() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.x = -this.currentSlide * (this.widthContainer + this.settings.margin);
      this.changeCurrentSlide();
    } else {
      this.currentSlide = this.size - 1;
      this.x = -this.currentSlide * (this.widthContainer + this.settings.margin);
      this.changeCurrentSlide();
    }
  }

  changeCurrentSlide() {
    this.x = -this.currentSlide * (this.widthContainer + this.settings.margin);
    this.setStylePosition();
    this.setStyleTransition();
    this.changeActiveDotClass();
    this.setParameters();
  }

  changeActiveDotClass() {
    for (let i = 0; i < this.dotNodes.length; i++) {
      this.dotNodes[i]?.classList.remove(GalleryDotActiveClassName);
    }

    this.dotNodes[this.currentSlide]?.classList?.add(GalleryDotActiveClassName);
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
    // this.x = -this.currentSlide * (this.widthContainer + this.settings.margin);
    // this.setStylePosition();
    // this.setStyleTransition();
  }

  dragging(e) {
    this.dragX = e.pageX;
    const dragShift = this.dragX - this.clickX;
    const easing = dragShift / 7;
    this.x = Math.max(Math.min(this.startX + dragShift, easing), this.maximumX + easing);
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

function wrapElementByDiv({ element, className }) {
  const wrapperNode = document.createElement("div");
  wrapperNode.classList.add(className);
  element.parentNode.insertBefore(wrapperNode, element);
  wrapperNode.appendChild(element);

  return wrapperNode;
}

function wrapElementBtn(element, className, key, currentSlide) {
  const wrapBtn = document.createElement("button");
  wrapBtn.classList.add(className);

  if (key === currentSlide) {
    wrapBtn.classList.add(GalleryDotActiveClassName);
  }

  element.appendChild(wrapBtn);

  return wrapBtn;
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
  Static.galleryRun = new Gallery(element, Ref.galleryDots, Ref.nextTeam, Ref.prevTeam, {
    margin: 30,
  });
  // this.init();
};

export const DisplayImages = function ({ items, buttons = true, dots = true }) {
  {
    Ref.slider ? init(Ref.slider) : null;
  }
  if (!items || !items?.length) {
    return <div />;
  }
  return (
    <div
      class={GalleryClassNamePartners}
      style="position: relative;"
    >
      <div
        init={init}
        ref="slider"
      >
        <div class="gallery_line">{items}</div>
      </div>
      <div
        class={["gallery_dots", dots ? null : "opacity gallery_dots_disabled"]}
        ref="galleryDots"
      ></div>
      <button
        ref="prevTeam"
        class={["slide__btn slide__btn_prev", buttons ? null : "opacity"]}
      >
        <img src={back} />
      </button>
      <button
        ref="nextTeam"
        class={["slide__btn slide__btn_next", buttons ? null : "opacity"]}
      >
        <img src={next} />
      </button>
    </div>
  );
};
