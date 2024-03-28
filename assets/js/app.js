let box = document.querySelectorAll(".box");
console.log(box);
box.forEach(function (item) {
    item.addEventListener("click", function () {
        let isitopen = item.classList.contains("active");
        box.forEach(function (item) {
            item.classList.remove("active");
        });
        if (!isitopen) {
            item.classList.toggle("active");
        }
    })
})
