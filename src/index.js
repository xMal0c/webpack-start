import join from "lodash/join";
import "./style.css";
import SetUpIcon from "./assets/setup.png";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = join(["Hover", "me"], " ");

  return element;
}

function imageComponent() {
  const element = document.createElement("img");
  element.src = SetUpIcon;
  return element;
}

document.body.appendChild(component());
document.body.appendChild(imageComponent());
