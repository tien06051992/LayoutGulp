var FireBubbleGame = function(level) {

    var imgBubble = '<img class="bubble bubble-tea green-leaf" src="/img/game2/bubble-gree.png" align="traxanh" data-type="green">';
    var imgBubbleYellow = '<img class="bubble bubble-tea yellow-leaf" src="/img/game2/bubble-gray.png" align="traxanh" data-type="yellow">';
    var imgBubbleEGCG = '<img class="bubble bubble-tea EGCG" src="/img/game2/bubble-EGCG.png" align="traxanh" data-type="egcg">';
    var imgBubbleTuoiMat = '<img class="bubble bubble-tea TuoiMat" src="/img/game2/bubble-cool.png" align="traxanh" data-type="tuoimat">';
    var imgBubbleSangKhoai = '<img class="bubble bubble-tea SangKhoai" src="/img/game2/bubble-fresh.png" align="traxanh" data-type="sangkhoai">';
    var imgBubbleMoiMe = '<img class="bubble bubble-tea MoiMe" src="/img/game2/bubble-refresh.png" align="traxanh" data-type="moime">';
    var imgBubbleBlank = '<img class="bubble bubble-tea MoiMe" src="/img/game2/bubble-no-leaf.png" align="traxanh" data-type="no-leaf">';
    
    var gamePlay = [0, {
        lv: 1,
        numberOfBubble: 3,
        numberOfBubbleYellow: 0,
        numberOfBubbleEGCG: 0,
        numberOfBubbleTuoiMat: 1,
        numberOfBubbleSangKhoai: 0,
        numberOfBubbleMoiMe: 1,
        numberOfBubbleBlank:2,
        option: {
            speed: 3,
            timeappear: 500,
            callback: function() {
                alert('1');
            }
        }
    }, {
        lv: 2,
        numberOfBubble: 3,
        numberOfBubbleYellow: 0,
        numberOfBubbleEGCG: 1,
        numberOfBubbleTuoiMat: 1,
        numberOfBubbleSangKhoai: 0,
        numberOfBubbleMoiMe: 2,
        numberOfBubbleBlank:2,
        option: {
            speed: 3,
            timeappear: 500,
            callback: function() {
                alert('2');
            }
        }
    }, {
        lv: 3,
        numberOfBubble: 2,
        numberOfBubbleYellow: 1,
        numberOfBubbleEGCG: 1,
        numberOfBubbleTuoiMat: 2,
        numberOfBubbleSangKhoai: 1,
        numberOfBubbleMoiMe: 2,
        numberOfBubbleBlank:2,
        option: {
            speed: 3,
            timeappear: 500,
            callback: function() {
                alert('3');
            }
        }
    }, {
        lv: 4,
        numberOfBubble: 2,
        numberOfBubbleYellow: 2,
        numberOfBubbleEGCG: 1,
        numberOfBubbleTuoiMat: 2,
        numberOfBubbleSangKhoai: 1,
        numberOfBubbleMoiMe: 2,
        numberOfBubbleBlank:2,
        option: {
            speed: 4,
            timeappear: 500,
            callback: function() {
                alert('3');
            }
        }
    }, {
        lv: 5,
        numberOfBubble: 1,
        numberOfBubbleYellow: 3,
        numberOfBubbleEGCG: 1,
        numberOfBubbleTuoiMat: 2,
        numberOfBubbleSangKhoai: 1,
        numberOfBubbleMoiMe: 2,
        numberOfBubbleBlank:4,
        option: {
            speed: 5,
            timeappear: 500,
            callback: function() {
                alert('3');
            }
        }
    }, {
        lv: 6,
        numberOfBubble: 2,
        numberOfBubbleYellow: 4,
        numberOfBubbleEGCG: 1,
        numberOfBubbleTuoiMat: 1,
        numberOfBubbleSangKhoai: 1,
        numberOfBubbleMoiMe: 1,
        numberOfBubbleBlank:5,
        option: {
            speed: 5,
            timeappear: 500,
            callback: function() {
                alert('3');
            }
        }
    }, {
        lv: 7,
        numberOfBubble: 1,
        numberOfBubbleYellow: 5,
        numberOfBubbleEGCG: 1,
        numberOfBubbleTuoiMat: 1,
        numberOfBubbleSangKhoai: 1,
        numberOfBubbleMoiMe: 1,
        numberOfBubbleBlank:6,
        option: {
            speed: 5,
            timeappear: 500,
            callback: function() {
                alert('3');
            }
        }
    }]

    var curLevel = level;

    /**
     * Create ele bubble
     */
    for (var i = 0; i < gamePlay[curLevel].numberOfBubble; i++) {
        $(".game2-container").append(imgBubble);
    }for (var i = 0; i < gamePlay[curLevel].numberOfBubbleYellow; i++) {
        $(".game2-container").append(imgBubbleYellow);
    }for (var i = 0; i < gamePlay[curLevel].numberOfBubbleEGCG; i++) {
        $(".game2-container").append(imgBubbleEGCG);
    }for (var i = 0; i < gamePlay[curLevel].numberOfBubbleTuoiMat; i++) {
        $(".game2-container").append(imgBubbleTuoiMat);
    }for (var i = 0; i < gamePlay[curLevel].numberOfBubbleSangKhoai; i++) {
        $(".game2-container").append(imgBubbleSangKhoai);
    }for (var i = 0; i < gamePlay[curLevel].numberOfBubbleMoiMe; i++) {
        $(".game2-container").append(imgBubbleMoiMe);
    }for (var i = 0; i < gamePlay[curLevel].numberOfBubbleBlank; i++) {
        $(".game2-container").append(imgBubbleBlank);
    }

    var el1 = $(".bubble-tea");
    $.each(el1, function(i, val) {
        setTimeout(function() {
            Bubble($(el1[i]), gamePlay[curLevel].option);
        }, i * gamePlay[curLevel].option.timeappear);
    });
    var t = 0;
    this.countdown = function() {
        var cd = setInterval(function() {
            if($(".time-number").attr("data-second") == 0) {
                $(".bubble").remove();
                // $('#container-game-2').addClass('game2-intro-container');
                clearInterval(cd);

                alert("Chúc mừng bạn! Số điểm bạn đã đạt được là: " + rp);
                rp = agsswop(rp.toString());
                //window.location.href = '/game2/finish';
                $.post('/game2/updateLevelScore', {cl: cl, s: rp, t: t}, function(result) {
                    if (result.success == true) {
                        window.location = '/game2/finish';
                    } else {
                        alert(result.message);
                    }
                });
                return;
            }
            t++;
            var process = $(".time-number").attr("data-second") * 1.6  + "%";
            $(".progress-bar").width(process);

            $(".time-number").attr("data-second",$(".time-number").attr("data-second") - 1);
            $(".time-number").html("0 : " + $(".time-number").attr("data-second"));
        }, 1000);
    }
}
