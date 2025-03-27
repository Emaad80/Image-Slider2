let next = document.getElementById("next");
let prev = document.getElementById("prev");
let listItem = document.querySelector(".carousel .list");
let thumbnail = document.querySelector(".carousel .thumbnail");
let carousal = document.querySelector(".carousel");
let runTimeOut;
let runAutoRun = setTimeout(() => {
  next.click();
}, 5000);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carousel .list .item");
  let itemThumbnail = document.querySelectorAll(".carousel .thumbnail .item");

  console.log("listItem:", listItem);
  console.log("thumbnail:", thumbnail);
  console.log("itemSlider:", itemSlider);
  console.log("itemThumbnail:", itemThumbnail);

  if (type === "next") {
    listItem.appendChild(itemSlider[0]);
    thumbnail.appendChild(itemThumbnail[0]);
    carousal.classList.add("next");
  } else {
    let positionLast = itemSlider[itemSlider.length - 1];
    listItem.prepend(positionLast);
    thumbnail.prepend(itemThumbnail[itemThumbnail.length - 1]);
    carousal.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousal.classList.remove("next");
    carousal.classList.remove("prev");
  }, 7000);

  clearTimeout(runAutoRun);
}

next.addEventListener("click", function () {
  showSlider("next");
});

prev.addEventListener("click", function () {
  showSlider("prev");
});
