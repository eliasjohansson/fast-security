import fullpage, { toggleScrolling } from "../fullpage";
import { showSectionNav, hideSectionNav } from "../navigation";
// SECTION 2 (The Legend)
// Go to next slide when pressing "More"
const initSection2 = () => {
  const theLegendBtn = document.querySelector(".the-legend-btn");
  theLegendBtn.addEventListener("click", () => {
    fullpage.moveTo(2, 1);
  });

  const theLegendContent = document.querySelector(".the-legend-content");
  theLegendContent.addEventListener("scroll", ev => {
    const [section1, section2, section3] = theLegendContent.querySelectorAll(
      "div"
    );
    const scrollPos = ev.target.scrollTop;
    const currentSlide = fullpage.getActiveSlide();
    // Go to slide that corresponds with current visible paragraph
    if (
      scrollPos > section1.offsetTop &&
      scrollPos < section2.offsetTop - 100 &&
      currentSlide.index !== 1
    ) {
      fullpage.moveTo(2, 1);
    } else if (
      scrollPos > section2.offsetTop - 100 &&
      scrollPos < section3.offsetTop - 100 &&
      currentSlide.index !== 2
    ) {
      fullpage.moveTo(2, 2);
    } else if (
      scrollPos > section3.offsetTop - 100 &&
      currentSlide.index !== 3
    ) {
      fullpage.moveTo(2, 3);
    }
  });

  const dragHandle = theLegendContent.querySelector(".drag-handle");
  dragHandle.addEventListener("click", () => {
    theLegendContent.classList.toggle("minimized");
    if (theLegendContent.classList.contains("minimized")) {
      showSectionNav();
      toggleScrolling(true);
    } else {
      hideSectionNav();
      toggleScrolling(false);
    }
  });
};

export default initSection2;
