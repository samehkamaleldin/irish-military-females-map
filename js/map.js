/**
 * Created by sameh on 30/11/2017.
 */

// This example displays a marker at the center of Australia.
// Whindependence clicks the marker, an info window opens.

function initMap() {
    var dublin = {lat: -8.673180, lng: 51.799761};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: dublin
    });
    d3.tsv("female_records.tsv",
        function(error, data){
            data.forEach(function (d) {

                var location = {lat: parseFloat(d.lat), lng: parseFloat(d.lng)};

                var contentString = "<div><h3>"+d.name+"</h3> " +
                    "File reference: "+ d.id +
                    "<br /> Job: "+ d.job +
                    "<br /> Status: "+ d.status +
                    "<br /> Address: "+ d.address +
                    "<br /> Easter Rising: "+ d.rising +
                    "<br /> War of independece : "+ d.independence +
                    "<br /> Civil war : "+ d.civil +
                    "</div>";

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                var marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    title: d.name
                });
                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
            });
        });
}