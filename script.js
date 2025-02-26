document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".progress-circle").forEach(circle => {
        let value = circle.getAttribute("data-progress");
        circle.style.background = `conic-gradient(#00d2ff ${value}%, #ddd ${value}%)`;
        circle.querySelector("span").textContent = `${value}%`;
    });
});
