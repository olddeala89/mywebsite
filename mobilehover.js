let cards = document.getElementById("cards");
cards.onclick = function(event) {
    var target = event.target;
    show(target);
}

function show(el) {
    if (el.classList.contains("opacity-0") && (!el.classList.contains("opacity-100"))) {
        el.classList.remove("opacity-0");
        el.classList.add("opacity-100"); 
    }
    else if (el.classList.contains("opacity-100") && (!el.classList.contains("opacity-0"))) {
        el.classList.remove("opacity-100");
        el.classList.add("opacity-0");
    }
}