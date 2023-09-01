function galleryLoad() {
    let c = document.getElementById("galleryContainer")
    for (let i = 1; i < 20; i++) {
        let newImg = document.createElement("img")
        newImg.setAttribute("src", "/images/gallery/" + i + ".png" )
        newImg.className = "galleryItem"
        c.appendChild(newImg)
    }
}