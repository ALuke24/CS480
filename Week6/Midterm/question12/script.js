function changeStyle() {
    var select = document.getElementById("style");
    var value = select.options[select.selectedIndex].text;

    $("ol").css("display", value);
    console.log(value);
}