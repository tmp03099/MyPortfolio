import { useEffect } from "react";
import FramerMotion from "./FramerMotion";

function TextAnimation() {
  useEffect(() => {
    const array = ["Simple", "Creative", "Impressive", "Effective"];
    let arrayIdx = 0;

    const countinue = () => {
      // countinue looping
      if (arrayIdx < array.length) {
        fadeIn();
        arrayIdx++; // loop the next word
      } else {
        arrayIdx = 0;
        fadeIn();
      }
    };

    const fadeIn = () => {
      // get Element by Id
      const arrSpan = document.getElementById("text-store");

      //remove the previous word
      while (arrSpan.firstElementChild) {
        arrSpan.removeChild(arrSpan.firstElementChild);
      }

      //create element span for each word
      const span = document.createElement("span");
      span.id = "text-animation";

      // span.style.animation = "fadeInOut 3s ease-in-out";
      span.style.position = "absolute"; //need set up position
      //set the text content equal each word
      span.textContent = array[arrayIdx];

      //append each word span to the parent arrSpan
      arrSpan.appendChild(span);

      setTimeout(() => {
        span.remove();
        countinue();
      }, 3000);
    };

    countinue();
  }, []);

  return (
    <div className="slogan ml-2 grid grid-cols-2 justify-center content-center items-center ">
      <span>
        <FramerMotion slogan={`Build a Website`} />
      </span>
      <span
        id="text-store"
        className="smAnimation flex items-center content-center"
      ></span>
    </div>
  );
}
export default TextAnimation;
