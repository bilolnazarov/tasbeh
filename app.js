const count = document.querySelector(".count")
let value = 0

function inc() {
    value++
    count.innerHTML = value
}
function dec() {
    value--
    count.innerHTML = value
}
function reset() {
    value=0
    count.innerHTML = value
}


