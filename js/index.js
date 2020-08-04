var radius = 107;
var answer = {
    qw1: -1,
    qw2: -1,
};
var colors = ["rgb(100%, 0%, 0%)","rgb(0%, 0%, 60%)","rgb(11%, 11%, 70%)","rgb(100%, 100%, 0%)"];

Number.prototype.toRad = function() { return this * Math.PI / 180; }
$(document).ready(function() {
    $(".question2").css("display", "none");
    $(".question1").css("display", "block");
    $("#customRange1").on("input", function() {
        var range = this.value,
            alpha = range * 1.7 * 1.75;
        var coord = {
            x: 183 + radius * Math.sin(alpha.toRad()) + "px",
            y: 183 + radius * Math.cos(alpha.toRad()) + "px"
        };
        var k = alpha > 180?2.7:1.8;
        $("#csd-dot1").css({ "left": coord.x, "top": coord.y });
        $("#csd-sample").css("background", "hsl(" + Number(100 - range * k) + ", 100%, 50%)");
        console.log(Number(100 - range * k));
    });
    $(".button").click(function() {
        if (answer.qw1 == -1) {
            answer.qw1 = 1;
            $(".question1").text("Вопрос 2");
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
