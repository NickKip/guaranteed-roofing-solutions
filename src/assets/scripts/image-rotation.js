window.rotate = function () {

    var container = document.querySelector("div.splash-container");
    var pos = 1;

    var images = [

        "/img/rotation/IMG_1346.jpg",
        "/img/rotation/IMG_1348.jpg",
        "/img/rotation/IMG_1358.jpg",
        "/img/rotation/IMG_1372.jpg",
        "/img/rotation/IMG_1373.jpg",
        "/img/rotation/IMG_1398.jpg",
        "/img/rotation/IMG_1401.jpg",
        "/img/rotation/IMG_1402.jpg",
        "/img/rotation/IMG_1452.jpg"
    ];

    if (container) {

        setInterval(function() {

            container.style.backgroundImage = "url(" + images[pos] + ")";
            ++pos;

            if (pos === images.length) {

                pos = 0;
            }

        }, 7500)
    }
}

window.rotate();
