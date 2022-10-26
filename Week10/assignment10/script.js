var selectedCountry = prompt("Choose a country");
var cname;

var url = 'https://disease.sh/v3/covid-19/countries/' + selectedCountry + '?strict=true';

$.get(url, function (data) {
    var flag = data.countryInfo.flag;
    cname = data.country;
    var cases = data.cases;
    var population = data.population;

    $('<h2 ID="pop"> Population: ' + population + '</h1>').appendTo("#pop");
    $('<h2 ID="cases"> Cases: ' + cases + '</h1>').appendTo("#cases");
    $('<h1 ID="countryName">' + cname + '</h1>').appendTo("#countryName");
    $('<div ID="flagDiv"> <img src=' + flag + '> </div>').appendTo("#flagDiv");
})

google.charts.load('current', {
    'packages': ['geochart'],
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    console.log(cname);
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Cases'],
        [cname, 35172693],
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}


$('<div id="newCookie">' + inputName + '</div>').appendTo("#newCookie");