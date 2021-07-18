$("document").ready(function () {
  let menu = document.querySelector(".menu");
  let headlinks = document.querySelector(".links");

  $(".menu").click(function () {
    menu.classList.toggle("active_menu");
    headlinks.classList.toggle("links_active");
  });
});

// let burger = document.querySelector(".burger");
// let headLinks = document.querySelector(".head_links");

// burger.addEventListener("click", function(){
//   burger.classList.toggle("active_burger");
//   console.log("click button");
//   headLinks.classList.toggle("shown");
// });
