import { easeInOut } from "framer-motion";
import { useEffect } from "react";

function TextAnimation() {
  useEffect(() => {
    const array = ["Simple", "Creative", "Easy to Use", "Effective"];
    let arrayIdx = 0;
    let letterIdx = 0;

    const countinue = () => {
      // countinue looping

      if (arrayIdx < array.length) {
        fadeIn();
        arrayIdx++;
      } else {
        arrayIdx = 0;
        fadeIn();
      }
      // countinue();
    };

    const fadeIn = () => {
      // get Element by Id
      const div = document.getElementById("text-store");
      while (div.firstChild) {
        div.removeChild(div.firstChild);
      }

      //create element
      const span = document.createElement("span");
      span.id = "text-animation";

      span.style.animation = "fadeInOut 3s ease-in-out";
      span.style.position = "absolute";
      console.log(div);

      span.textContent = array[arrayIdx];

      div.appendChild(span);

      setTimeout(() => {
        span.remove();
        countinue();
      }, 3000);
    };

    countinue();
  }, []);

  return (
    <div className="slogan">
      <span>Build a website </span>
      <span id="text-store"></span>
    </div>
  );
}
export default TextAnimation;
