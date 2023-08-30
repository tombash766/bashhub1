function sketchesLoad(){
    fetch("/OPUserData.json").then( (Response) => Response.json() ).then( (json) => 
        {
            let sketches = json.sketches;
            let c = document.getElementById("sketchesContainer");
            for (let i = 0; i < sketches.length; i++) {
                let currentSketch = sketches[i];
                let newA = document.createElement("a");
                newA.setAttribute("href", "https://openprocessing.org/sketch/" + currentSketch.visualID);
                let newDiv = document.createElement("div");
                newDiv.setAttribute("class", "stdHalfCol sketch");
                newDiv.innerText = currentSketch.title;
                let newImg = document.createElement("img");
                newImg.setAttribute("src", "https://openprocessing-usercontent.s3.amazonaws.com/thumbnails/visualThumbnail" + currentSketch.visualID + "@2x.jpg");
                newImg.setAttribute("width", "200px");
                newImg.className = "sketchThumbnail"
                newDiv.appendChild(newImg);
                newA.appendChild(newDiv);
                c.appendChild(newA);
            } 
        } 
    )
}
