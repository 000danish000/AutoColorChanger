const start = document.getElementById('start')
const stop = document.getElementById('stop')
let colorchange;
start.addEventListener("click", () => {
    colorchange = setInterval(() => {
        document.body.style.backgroundColor = `${randomColor()}`;
    }, 1000)
})
stop.addEventListener("click", () => {
    clearInterval(colorchange);
})

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
