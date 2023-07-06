function galleryLoad() {
    let c = document.getElementById("galleryContainer")
    for (let i = 1; i < 20; i++) {
        let newImg = document.createElement("img")
        newImg.setAttribute("src", "gallery/" + i + ".png" )
        newImg.setAttribute("width", "300")
        newImg.className = "galleryItem"
        c.appendChild(newImg)
    }
}