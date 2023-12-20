let cards = document.getElementById("cards");
cards.onclick = function(event) {
    let target = event.target;
    show(target);
}

function show(el) {
    el.classList.remove("opacity-0");
    el.classList.add("opacity-100");
}

window.addEventListener("click", function () {
    
});