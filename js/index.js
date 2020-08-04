var radius = 107;
var answer = {
    qw1: -1,
    qw2: -1
};

Number.prototype.toRad = function() { return this * Math.PI / 180; }
$(document).ready(function() {
    $(".question2").css("display", "none");
    $(".question1").css("display", "block");
    $("#customRange1").on("input", function() {
        var range = this.value,
            alpha = range * 3;
        var coord = {
            x: 183 + radius * Math.sin(alpha.toRad()) + "px",
            y: 183 + radius * Math.cos(alpha.toRad()) + "px"
        };
        $("#csd-dot1").css({ "left": coord.x, "top": coord.y });
        $("#csd-sample").css("background", "hsl(" + Number(100 - range * 1.8) + ", 100%, 50%)");
    });
    $(".button").click(function() {
        if (answer.qw1 == -1) {
            answer.qw1 = 1;
            $(".question1").css("display", "none");
            $(".question2").css("display", "block");
        } else {
            $(".question2").css("display", "none");
            $(".result").css("display", "block");
        }
    });
    $(".btn-again").click(function() {
        answer.qw1 = -1;
        answer.qw2 = -1;
        $(".question1").css("display", "block");
        $(".result").css("display", "none");
    });
});
