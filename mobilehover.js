[].forEach.call(document.querySelectorAll(".card"), card => card.addEventListener('click', event => {
    //var target = event.target;
    if (event.target.tagName === "DIV") {
        var target = event.target;
    }
    else if (event.target.tagName === "H2" || event.target.tagName === "H1" || event.target.tagName === "P") {
        var target = event.target.parentNode;
    }
    show(target);
}))

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