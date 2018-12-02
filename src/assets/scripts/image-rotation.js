window.rotate = function () {

    var container = document.querySelector("div.splash-container");
    var pos = 1;

    var images = [
        "/img/rotation/IMG_1452.jpg",
        "/img/rotation/IMG_1682.jpg",
        "/img/rotation/IMG_1709.jpg",
        "/img/rotation/IMG_1863.jpg",
        "/img/rotation/IMG_1876.jpg",
        "/img/rotation/IMG_1878.jpg",
        "/img/rotation/IMG_1880.jpg",
        "/img/rotation/IMG_1936.jpg",
        "/img/rotation/IMG_1949.jpg",
        "/img/rotation/IMG_2030.jpg",
        "/img/rotation/IMG_2032.jpg",
        "/img/rotation/IMG_2056.jpg",
        "/img/rotation/IMG_2069.jpg",
        "/img/rotation/IMG_2078.jpg",
        "/img/rotation/IMG_2108.jpg",
        "/img/rotation/IMG_2115.jpg",
        "/img/rotation/IMG_2118.jpg"
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
