$(".cen20").hide();
$(".cen19").hide();

$("#oso").hide();
$("#tweak").hide();
$("#goofy").hide();
$("#pinkPanther").hide();
$("#jerry").hide();

$("#button1").click(function() {
    var year= $("input").val();
        year=parseInt($("input").val());
        
        if(year===1900){
            $(".cen19").show();
            $(".cen20").hide();
        } else{
            $(".cen20").show();
            $(".cen19").hide();
        }

});

$("#button2").click(function() {
    var personality=$("#input2").val();
    
    if((personality==="Silly and Goofy")||(personality==="#goofyLine")){
        $("#goofy").show();
        $("#pinkPanther").hide();
        $("#jerry").hide();
    } else if((personality==="Quiet and Slick")||(personality==="#pinkPantherLine")){
        $("#pinkPanther").show();
        $("#goofy").hide();
        $("#jerry").hide();
    } else if((personality==="Mischevious and Cunning")||(personality==="#jerryLine")){
        $("#jerry").show();
        $("#pinkPanther").hide();
        $("#goofy").hide();
    } else if((personality==="Fun and Kind")||(personality==="#osoLine")){
        $("#oso").show();
        $("#tweak").hide();
    } else if((personality==="Smart and Handy")||(personality==="#tweakLine")){
        $("#tweak").show();
        $("#oso").hide();
    }
});