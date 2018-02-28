window.rotate = function () {

    var container = document.querySelector("div.splash-container");
    var pos = 1;

    var images = [

        "/img/rotation/IMG_0069.jpg",
        "/img/rotation/IMG_0263.jpg",
        "/img/rotation/IMG_0715a.jpg",
        "/img/rotation/IMG_0715b.jpg",
        "/img/rotation/IMG_0784.jpg",
        "/img/rotation/IMG_0866.jpg",
        "/img/rotation/IMG_0976.jpg",
        "/img/rotation/IMG_1511.jpg"
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
