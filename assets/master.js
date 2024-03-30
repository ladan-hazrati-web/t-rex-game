const trexElem = document.querySelector("#trex");
const treeElem = document.querySelector("#tree");
const restartContainer = document.querySelector(".restart-container");
const restartBtn = document.querySelector(".restart-btn");
const jumpHandler = (e) => {
  if (e.key === " ") {
    trexElem.classList.add("jumpAnimate");
    setTimeout(() => {
      trexElem.classList.remove("jumpAnimate");
    }, 500);
  }
};

const checkCondition = () => {
  const trexTop = parseInt(window.getComputedStyle(trexElem).top);
  const treeLeft = parseInt(window.getComputedStyle(treeElem).left);

  if (treeLeft <= 70 && trexTop >= 380) {
    trexElem.style.top = trexTop + "px";
    treeElem.style.display = "none";
    restartContainer.style.display = "flex";
    clearInterval(trexInterval);
  }
};

const restartHandler = () => {
  restartContainer.style.display = "none";
  treeElem.style.display = "block";
  trexElem.style.top = "";
  setInterval(checkCondition, 10);
};
const trexInterval = setInterval(checkCondition, 10);
document.addEventListener("keyup", jumpHandler);
restartBtn.addEventListener("click", restartHandler);
