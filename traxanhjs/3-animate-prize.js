var prize = function() {

    var listE = [$(".lumia-1"),
        $(".lumia-2"),
        $(".lumia-3"),
        $(".lumia-4"),
        $(".lumia-5"),
        $(".card-20"),
        $(".card-50"),
        $(".blank-1"),
        $(".blank-2"),
        $(".blank-3"),
        $(".blank-4"),
        $(".blank-5")
    ];

    var randomNumber = [-1, 1];

    function randomResult() {
        return randomNumber[Math.floor(Math.random() * randomNumber.length)];
    }
    var x, y = 0;

    function move(e) {

        if (e.attr("data-firstmove")) {
            x = randomResult();
            y = randomResult();
            e.removeAttr("data-firstmove");
            e.attr("data-x", x);
            e.attr("data-y", y);
        } else {
            if (Math.round(parseInt($(e).css("top").replace("px", ""))) == 0) {
                y = randomResult();
                if (x == -1) {
                    x = 1;
                }
                e.attr("data-x", x);
                e.attr("data-y", y);
            }
            if (Math.round(parseInt($(e).css("left").replace("px", ""))) == 0) {
                x = randomResult();
                if (y == -1) {
                    y = 1;
                }
                e.attr("data-x", x);
                e.attr("data-y", y);
            }
            if (Math.round(parseInt($(e).css("left").replace("px", ""))) + $(e).width() == $("body").width()) {
                x = randomResult();
                if (y == 1) {
                    y = -1;
                }
                e.attr("data-x", x);
                e.attr("data-y", y);
            }
            if (Math.round(parseInt($(e).css("top").replace("px", ""))) + $(e).height() == $("body").height()) {
                y = randomResult();
                if (x == 1) {
                    x = -1;
                }
                e.attr("data-x", x);
                e.attr("data-y", y);
            }

        }
        console.log(e + "x=" + Math.round(parseInt($(e).css("top").replace("px", ""))) + ",y=" + Math.round(parseInt($(e).css("left").replace("px", ""))));
        e.css({
            "top": Math.round(parseInt($(e).css("top").replace("px", ""))) + parseInt(e.attr("data-x")),
            "left": Math.round(parseInt($(e).css("left").replace("px", ""))) + parseInt(e.attr("data-y"))
        });
    }

    function transitionPrize() {
        move(listE[0]);
    }
    setInterval(transitionPrize, 10);

    function transition2() {
        move(listE[1]);
    }
    setInterval(transition2, 10);

    function transition3() {
        move(listE[2]);
    }
    setInterval(transition3, 10);

    function transition4() {
        move(listE[3]);
    }
    setInterval(transition4, 10);

    function transition5() {
        move(listE[4]);
    }
    setInterval(transition5, 10);

    function transition6() {
        move(listE[5]);
    }
    setInterval(transition6, 10);

    function transition7() {
        move(listE[6]);
    }
    setInterval(transition7, 10);

    function transition8() {
        move(listE[7]);
    }
    setInterval(transition8, 10);

    function transition9() {
        move(listE[8]);
    }
    setInterval(transition9, 10);

    function transition10() {
        move(listE[9]);
    }
    setInterval(transition10, 10);

    function transition11() {
        move(listE[10]);
    }
    setInterval(transition11, 10);

    function transition12() {
        move(listE[11]);
    }
    setInterval(transition12, 10);
}
