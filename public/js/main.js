let counting = setInterval(update);
let count = 0;
function update() {
    let number = document.querySelector('#number')
    number.innerText = ++count
    if (count == 1000) {
        clearInterval(counting)
    }
}