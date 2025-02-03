const sideBar = document.querySelector(".side-bar");
const closeSideBar = document.querySelector(".close-sidebar");
const openSideBar = document.querySelector(".burger-menu");

openSideBar.addEventListener("click", function () {
     sideBar.style.display = "flex";
   });
   
   closeSideBar.addEventListener("click", function () {
     sideBar.style.display = "none";
   });

   
   // hiding the side bar function
function hideSideBar() {
     if (window.innerWidth > 426) {
       sideBar.style.display = "none";
     } else {
       sideBar.style.display = "hidden";
     }
   }
   hideSideBar();
   window.addEventListener("resize", hideSideBar);