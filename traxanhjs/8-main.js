var main = function() {

    this.carousel = function() {
        $('.carousel').carousel({
            interval: 0
        });
    };


    this.controlTab = function () {
       $('#tab-three-game a').click(function (e) {
          e.preventDefault();
          $(this).tab('show');
        });
       $('#tab-final-result a').click(function (e) {
          e.preventDefault();
          $(this).tab('show');
        });
    };

    
    /*$("#carousel-example-generic input").change(function(){
    	if( $("#q-1 input:checked").val() &&
    		$("#q-2 input:checked").val() &&
    		$("#q-3 input:checked").val() &&
    		$("#q-4 input:checked").val() &&
    		$("#q-5 input:checked").val()) {
    			$("#btn-next-question").hide();
    		}
    		else{
    			$("#btn-next-question").show();
    		}
	});*/
    this.animateBubbleIndex = function() {
        var listBubble = [{
            'element': $(".fly-bubble1"),
            'x': parseInt($(".fly-bubble1").css("left")),
            'y': parseInt($(".fly-bubble1").css("top"))
        }, {
            'element': $(".fly-bubble2"),
            'x': parseInt($(".fly-bubble2").css("left")),
            'y': parseInt($(".fly-bubble2").css("top"))
        }, {
            'element': $(".fly-bubble3"),
            'x': parseInt($(".fly-bubble3").css("left")),
            'y': parseInt($(".fly-bubble3").css("top"))
        }, {
            'element': $(".fly-bubble4"),
            'x': parseInt($(".fly-bubble4").css("left")),
            'y': parseInt($(".fly-bubble4").css("top"))
        }, ];

        function fly(e, x, y, w) {

            if (e.attr("data-firstmove")) { // Check when bubble ready to fly
                e.attr("data-x", x);
                e.attr("data-y", y);
                e.attr("data-w", y);
                /*console.log(y + "/" + x);*/
                e.removeAttr("data-firstmove");
                w = 1;
            } else { //Flying
                y = e.attr("data-y") - 0.5;
                w = e.attr("data-w") - y;
                x = x + 15 * Math.sin(y * 0.2);
                e.attr("data-x", x);
                e.attr("data-y", y);
                if (y < 0) {
                    e.attr("data-firstmove", true);
                }
            }
            e.css({
                "top": y,
                "left": x,
                width: w * 0.03 + "%"
            });
        }

        function transition() {
            fly(listBubble[0].element, listBubble[0].x, listBubble[0].y, listBubble[0].y);
        }
        setInterval(transition, 10);

        function transition2() {
            fly(listBubble[1].element, listBubble[1].x, listBubble[1].y, listBubble[1].y);
        }
        setInterval(transition2, 10);

        function transition3() {
            fly(listBubble[2].element, listBubble[2].x, listBubble[2].y, listBubble[2].y);
        }
        setInterval(transition3, 10);

        function transition4() {
            fly(listBubble[3].element, listBubble[3].x, listBubble[3].y, listBubble[3].y);
        }
        setInterval(transition4, 10);
    };

    this.controlModal = function () {
        // fancy example
        $(document).ready(function(){
           $('#ruleModal').modal('show');
        });
    };

    
}

function agsswop(num) {
    var rText = '';
    var tmpArr = num.split("");
    var mapC = {
        '0' : 'm',
        '1' : 'g',
        '2' : 't',
        '3' : 'w',
        '4' : 'x',
        '5' : 'c',
        '6' : 'o',
        '7' : 'q',
        '8' : 'f',
        '9' : 'l',
    };

    //Encrypt num to text
    for(var i = 0; i < tmpArr.length; i++) {
        rText += mapC[tmpArr[i]];
    }

    //Add more text with encrypt
    for(var key in mapC)
    {
      rText = mapC[Math.floor(Math.random() * 9)] + rText + mapC[Math.floor(Math.random() * 9)];
    }
    return rText + tmpArr.length;
}
