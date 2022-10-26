
$(document).ready(function(){
    $("#cookie").on("click", newCookie());
})
console.log('test');



function setCookie(cname, cvalue, extime) {
    const d = new Date();
    d.setTime(d.getTime() + extime);
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function newCookie() {
    var inputName = prompt("What is your name?");
    setCookie('name', inputName, 5 * 60 * 1000);
    var createdCookie = getCookie('name');
    $('<div id="newCookie" onclick="remove(this)">' + createdCookie + '</div>').appendTo("#newCookie");
    console.log(createdCookie);
}

function remove(el) {
    var element = el;
    element.remove();
  }