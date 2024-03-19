document.addEventListener("mousemove", function() {
    var cursor = document.querySelector(".custom-cursor");
    cursor.style.left = event.clientX + "px";
    cursor.style.top = event.clientY + "px";
});

document.addEventListener("mouseover", function() {
    var cursor = document.querySelector(".custom-cursor");
    cursor.classList.add("glow");
});

document.addEventListener("mouseout", function() {
    var cursor = document.querySelector(".custom-cursor");
    cursor.classList.remove("glow");
});
