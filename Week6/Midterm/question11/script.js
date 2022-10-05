function changeDiv(){
    $("#div").css("width", "800px");
    $('#div').css("border-color", "green");
    setTimeout(function() {$('#div').css("width", "100px"); }, 5000);
    setTimeout(function() {$('#div').css("border-color", "magenta"); }, 5000);
}