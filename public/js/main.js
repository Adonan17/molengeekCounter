let counting = setInterval(updateNumber);
let count = 0;
function updateNumber() {
    let number = document.querySelector('#number')
    number.innerText = ++count
    if (count == 1000) {
        clearInterval(counting)
    }
}