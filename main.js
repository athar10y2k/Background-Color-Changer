$(document).ready(function(){
    $("#colorPicker").on("input change",function(){
        //change body background
        $("body").css("background-color",$(this).val());
        if($("#colorPicker").val() <= "#242424"){
            $("h2").css("color","white")
        }else{
            $("h2").css("color","black")
        }
    });
});