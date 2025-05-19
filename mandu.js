function init() {
    const dumpling = document.querySelector("img"),
        picture = new URLSearchParams(window.location.search).get("i") || "mandu"
    let direction = 1
    dumpling.src = `img/${picture}/1.png`
    dumpling.addEventListener("click", () => {
        frame += direction

        if (frame >= 3) direction = -1
        else if (frame <= 1) direction = 1

        dumpling.src = `img/${picture}/${frame}.png`
    })
}

document.onload = init()