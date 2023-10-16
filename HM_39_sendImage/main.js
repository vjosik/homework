const img = document.querySelector("img")

function getPicture () {
    let count = Math.floor(Math.random() * 8) + 1;
    return count;
}

function imageCreate () {
    img.src = `./image/${getPicture()}.png`
}

setInterval(() => {
    imageCreate()
}, 2000)