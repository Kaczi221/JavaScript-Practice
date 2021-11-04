const sidebarButton = document.querySelector(".sidebar-toggle");
const closeButton = document.querySelector(".close-btn");
const sideBar = document.querySelector(".sidebar")

sidebarButton.addEventListener("click", function(){
    sideBar.classList.toggle("show-sidebar");
});
closeButton.addEventListener("click", function(){
    sideBar.classList.remove("show-sidebar");
});