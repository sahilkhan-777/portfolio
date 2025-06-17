const leftScroll = document.getElementById("left-scroll");
const rightScroll = document.getElementById("right-scroll");
const projectList = document.querySelector(".project-list");

leftScroll.onclick = () => {
  projectList.scrollBy({ left: -300, behavior: "smooth" });
};
rightScroll.onclick = () => {
  projectList.scrollBy({ left: 300, behavior: "smooth" });
};
