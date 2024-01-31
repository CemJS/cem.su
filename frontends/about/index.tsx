import { Cemjsx, front, Func, Static, Fn } from "cemjs-all";
import Navigation from "./navigation";

export const start = function () { }

export const finish = function () {

  this.Static.root = document.documentElement;
  this.Static.marqueeElementsDisplayed = getComputedStyle(this.Static.root).getPropertyValue("--marquee_elements_displayed")

  this.Static.root.style.setProperty("--marquee_elements", this.Ref.marqueeContentStart.children.length)
  this.Static.root.style.setProperty("--marquee_elements", this.Ref.marqueeContentEnd.children.length)

  for (let i = 0; i < this.Static.marqueeElementsDisplayed; i++) {
    this.Ref.marqueeContentStart.appendChild(this.Ref.marqueeContentStart.children[i].cloneNode(true));
    this.Ref.marqueeContentEnd.appendChild(this.Ref.marqueeContentEnd.children[i].cloneNode(true));
  }
  //clone for running line parners


  // gallery cryptoBreakfast
  if (!this.Static.callGallery) {
    this.fn("test", this.Ref.galleryCryptoBreakfast, this.Ref.galleryDots, {
      margin: 10
    })
  }




  this.Static.employments = document.querySelectorAll(".employment_item");

  const observer = new IntersectionObserver(entries => {

    entries.forEach(item => {
      item.target.classList.toggle("show", item.isIntersecting)
    })
    // console.log('=b1055d=', entries)
  })

  this.Static.employments.forEach(item => {

    observer.observe(item)
  })

}

front.loader = () => {
  return;
}

front.display = () => {

  return (
    <div>
      <Navigation />
    </div>
  );
};

export { front };
