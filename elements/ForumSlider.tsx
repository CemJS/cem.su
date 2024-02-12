import { Cemjsx, Fn, Ref, Static } from "cemjs-all";
import back from "@svg/icon/prev.svg";
import next from "@svg/icon/next.svg";

const GalleryClassName = "gallery";
const GalleryClassNamePartners = "gallery_partners";
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

  constructor(element: HTMLElement, dots: HTMLElement, next: HTMLElement, prev: HTMLElement, options = { margin: 10 }) {
    this.element = element;
    this.elementCount = element.childElementCount;
    this.dots = dots;
    this.next = next;
    this.prev = prev;
    if (window.innerWidth > 1100) {
      this.countSlides = 5;
    } else if (window.innerWidth > 768) {
      this.countSlides = 4;
    } else {
      this.countSlides = 3;
    }
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
    // setInterval(this.clickNext, 3000);
  }

  manageHTML() {
    this.element.classList.add(GalleryClassName);
    this.element.classList.add(GalleryClassNamePartners);
    this.element.innerHTML = `
            <div class="${GalleryLineClassName}">
                ${this.element.innerHTML}
            <div>
        `;

    this.lineNode = this.element.querySelector(`.${GalleryLineClassName}`);

    this.slideItems = Array.from(this.lineNode.children).map((childNode) => {
      wrapElementByDiv({
        element: childNode,
        className: GallerySlideClassName,
      });
    });
    this.dots.classList.add(GalleryDotsClassName);

    this.dotsItem = Array.from(Array(this.size).keys()).map((key) => {
      wrapElementBtn(this.dots, GalleryDotClassName, key, this.currentSlide);
    });

    this.dotNodes = this.dots.querySelectorAll(`.${GalleryDotClassName}`);
  }

  setParameters() {
    // this.manageHTML()
    const coordsContainer = this.element.getBoundingClientRect();
    this.widthContainer = coordsContainer.width;
    this.maximumX = -(this.size - 1) * (this.widthContainer + this.settings.margin);
    this.x = -this.currentSlide * (this.widthContainer + this.settings.margin);
    this.size = Math.ceil(this.elementCount / this.countSlides);

    this.setStyleTransition();
    this.lineNode.style.width = `${this.size * (this.widthContainer + this.settings.margin)}px`;
    this.setStylePosition();
    Array.from(this.lineNode.children).forEach((slideNode: any) => {
      let width = (this.widthContainer - 10 * (this.countSlides - 1)) / this.countSlides;
      slideNode.style.width = `${width}px`;
      slideNode.style.marginRight = `${this.settings.margin}px`;
    });
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
    this.setParameters();
    // Fn.initAll();
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
  }

  changeActiveDotClass() {
    for (let i = 0; i < this.dotNodes.length; i++) {
      this.dotNodes[i].classList.remove(GalleryDotActiveClassName);
    }

    this.dotNodes[this.currentSlide].classList.add(GalleryDotActiveClassName);
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
    if (dragShift > 20 && dragShift > 0 && !this.currentSlideWasChanged && this.currentSlide > 0) {
      this.currentSlideWasChanged = true;
      this.currentSlide = this.currentSlide - 1;
    }

    if (dragShift < -20 && dragShift < 0 && !this.currentSlideWasChanged && this.currentSlide < this.size - 1) {
      this.currentSlideWasChanged = true;
      this.currentSlide = this.currentSlide + 1;
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
  if (!Static.galleryRun) {
    Static.galleryRun = new Gallery(element, Ref.galleryDots, Ref.nextTeam, Ref.prevTeam, {
      margin: 10,
    });
  }
  Static.callGallery = true;
  // this.init();
};

export const Display = function ({ items }) {
  if (!items || !items.length) {
    return <div />;
  }
  return (
    <div style="position: relative;">
      <div init={init}>
        {items?.map((item) => {
          return (
            <a
              ref="slide"
              target="_blank"
              href={item.url}
              class={["partners_list_item", item.visited.includes(Static.partnersTabName) ? null : null]}
            >
              <img
                src={`/contents/forum/partners/${item.logo}`}
                alt="img"
              />
            </a>
          );
        })}
      </div>
      <div
        class="gallery_dots"
        ref="galleryDots"
      ></div>
      <button
        ref="prevTeam"
        class="slide__btn slide__btn_prev"
      >
        <img src={back} />
      </button>
      <button
        ref="nextTeam"
        class="slide__btn slide__btn_next"
      >
        <img src={next} />
      </button>
    </div>
  );
};
