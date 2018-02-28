window.rotate = function () {

    var container = document.querySelector("div.splash-container");
    var pos = 1;

    if (container) {

        setInterval(function() {

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

            container.style.backgroundImage = "url(" + images[pos] + ")";
            ++pos;

            if (pos === images.length) {

                pos = 0;
            }

        }, 5000)
    }
}

window.rotate();
