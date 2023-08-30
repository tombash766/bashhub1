function getSketches() {
    const Http = new XMLHttpRequest();
    const url='https://openprocessing.org/user/278782/?o=7&view=sketches';
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
}
}