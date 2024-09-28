
const Items = document.querySelectorAll(".item");

Items.forEach(item => {
  const title = item.querySelector(".title");
  const content = item.querySelector(".content");

  title.addEventListener("click", () => {
    Items.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".content").style.display = "none";
      }
    });

    if (item.classList.contains("active")) {
      content.style.display = "none";
      item.classList.remove("active");
    } else {
      content.style.display = "block";
      item.classList.add("active");
    }
  });
});
