var countPoint = 0;
var rp = 0;
function Bubble(el, op) {
    var self = this;

    var option;

    if (op) {
        option = op;
    } else {
        option = {
            speed: 5
        }
    }

    var element = el;
    var prototype = {
        x: 0,
        y: 0
    };

    function move(option) {
        $.extend(prototype, option);
        // console.log(option);
        element.css({
            "top": prototype.y,
            "left": prototype.x
        });
    }

    function moveDefault(y) {
        move({
            x: Math.floor(Math.random() * (1215 - 0 + 1) + 0), // max 870, min 0
            y: y
        });
    }


    (function() {
        moveDefault(option.timeappear);
        self.interval = setInterval(function() {
            //console.log("x :" + el.css("left") + " y : " + el.css("top"));
            if (parseInt(element.css("top")) <= 0) {
                /*clearInterval(bubble.interval);*/
                moveDefault(option.timeappear);
            }
            element.css({
                "top": parseInt(element.css("top")) - option.speed
            });

        }, 20);
    })();

    function generatePointEle(type,x,y) {
        $(".point").remove();
        var pointEle = ['<img class="bubble text-mark point" src="/img/game2/inscrease-two-mark.png" align="traxanh" style="top:' + y +';left:' + x + '">',
                        '<img class="bubble text-mark point" src="/img/game2/descrease-two-mark.png" align="traxanh" style="top:' + y +';left:' + x + '">',
                        '<img class="bubble text-mark point" src="/img/game2/descrease-one-mark.png" align="traxanh" style="top:' + y +';left:' + x + '">',
        ];
        if(type == "yellow"){
            $(".game2-container").append(pointEle[1]);
            //$("#totalnum").val($("#totalnum").val() - 2);
            rp -= 2
        }else {
            if(type == "no-leaf") {
                $(".game2-container").append(pointEle[2]);
                //$("#totalnum").val($("#totalnum").val() - 1);
                rp -= 1;
            }else {
                $(".game2-container").append(pointEle[0]);
                //$("#totalnum").val(parseInt($("#totalnum").val()) + 2);
                rp += 2;
            }
        }
        //console.log(rp);

    }
    
    element.click(function() {
        countPoint++;
        //console.log(countPoint);
        //el.remove();
        /*clearInterval(bubble.interval);*/
        generatePointEle(element.attr("data-type"),element.css("left"),element.css("top"));
        if(countPoint >= 1) {
            option.timeappear = 1000;
        }
        moveDefault(option.timeappear);
        // op.callback();
        
        //alert(element.attr('data-type'));
    })

    return;
}
