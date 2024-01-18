let counting = setInterval(updateNumber);
let count = 0;
let number = document.querySelector('#number')
function updateNumber() {
    number.innerText = ++count
    if (count == 1000) {
        clearInterval(counting)
    }
}
