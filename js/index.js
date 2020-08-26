var radius = 107;
var answer = [];
var flag_count = 1;
var colors = ["hsl(0, 100%,  50%)","hsl(150, 100%,  50%)","hsl(240, 100%,  50%)","hsl(60, 100%,  50%)"];
var range = 180;
Number.prototype.toRad = function() { return this * Math.PI / 180; }
function color_point(integer){
    var  alpha = integer /** 5.14*/;
    var coord = {
        x: 183 + radius * Math.sin(alpha.toRad()) + "px",
        y: 183 + radius * Math.cos(alpha.toRad()) + "px"
    };
    //var k = alpha > 180 ? (alpha > 270 ? 3.2: 2.2): (alpha > 90 ? 1.7 :1.8);
    $("#csd-dot1").css({ "left": coord.x, "top": coord.y });
    $("#csd-sample").css("background", "hsl(" + /*Number(100 - alpha*100*k/360)*/ alpha + ", 100%, 50%)");
}
$(document).ready(function() {
    $(".question2").css("display", "none");
    $(".question1").css("display", "block");
    $("#customRange1").on("input", function() {
        range = this.value;
        color_point(range);
    });
    $(".button").click(function() {
        answer[flag_count] = range;
        flag_count++;
        if (flag_count > colors.length) {
            console.log(answer);
            $(".question1").css("display", "none");
            $(".result").css("display", "block");
            flag_count =1;
            var text_answer = "<table class='table'>";
            for(var i=1; i<answer.length; i++)
            {
                text_answer+="<tr><td>Вопрос № "+i+"</td><td>"+answer[i]+"</td></tr>";
            }
            text_answer+="</table>"
            $("#answ-res").html(text_answer);
        }
        $("#question").text("Вопрос "+ flag_count);
        $("#anger-div").css("background", colors[flag_count-1]);
        range =35;
        $("#customRange1").val(range);
        $("#customRange1").trigger("input");
       
    });
    $(".btn-again").click(function() {
        answer = {};
        $(".question1").css("display", "block");
        $(".result").css("display", "none");
    });
});

window.onload = function() {
    color_point(range);
};
