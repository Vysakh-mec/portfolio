let menuButton = document.getElementById("menuBtn")
let menuList = document.getElementById("menuList")
let menuListItem = document.getElementById("menuListItem")

menuButton.addEventListener("click", function (e){
    menuList.classList.add("visible")
    console.log("Clicked")
})
menuListItem.addEventListener("click", function (e) {
    menuList.classList.remove("visible")
})