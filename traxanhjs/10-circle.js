var Circle = function(target) {
    var r = 0;
    this.play = function(e) {
        if ($(e).attr('rotating') == 'false')
        {
            $(e).attr('rotating', 'true');
            var deg = 3600 + target;
            r = r + deg;
            var realdeg = r % 360;
            $("#wheel").css("transform","rotate("+r+"deg)");
            $("#wheel").css("-moz-transform","rotate("+r+"deg)");
            $("#wheel").css("-webkit-transform","rotate("+r+"deg)");
            $("#wheel").css("-o-transform","rotate("+r+"deg)");

            setTimeout(function() {
                $('#btnQuay').attr('rotating', 'false');

                $.post('/game2/updateRotateResult', {r: target}, function(result) {
                    if (result.success == true) {
                        alert(result.message);
                        window.location = '/game2';
                    } else {
                        //alert(result.message);
                    }
                });
            }, 3000);
           $(e).attr('rotating', 'false');
        }
    };
}