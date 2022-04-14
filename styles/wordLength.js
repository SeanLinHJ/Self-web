// 查看線段的長度 (做寫入特效用)
const text = document.querySelectorAll(".thePaths");

for (let i = 0; i < text.length; i++) {
  console.log(`第 ${i} 個字的長度是 ${text[i].getTotalLength()}`);
}

// 顯示完後消失的特效
const lastWord = document.querySelector("#word5");
const animation = document.querySelector("header.animation");
lastWord.addEventListener("animationend", () => {
  animation.style =
    "transition: all 1s ease; opacity: 0; pointer-events: none;";
});
