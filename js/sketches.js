function sketchesLoad(){
    
    fetch("/OPUserData.json").then( (Response) => Response.json() ).then( (json) => console.log(json) )

    /*
    let c = document.getElementById("sketchesContainer");
    for (let i = 0; i < jsonObj.sketches.length; i++) {
        let currentSketch = jsonObj.sketches[i];
        let newA = document.createElement("a");
        newA.setAttribute("href", "https://openprocessing.org/sketches/" + str(currentSketch.visualID));
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "stdHalfCol");
        newDiv.setAttribute("innerText", currentSketch.title);
        newA.appendChild(newDiv);
        c.appendChild(newA);
    }
    */
}