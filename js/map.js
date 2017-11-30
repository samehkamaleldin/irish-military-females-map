/**
 * Created by sameh on 30/11/2017.
 */

// This eMaritalisplays a marker at the center of Australia.
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

                ContentText = "<h3>"+d.name+"</h3>" +
                    "<table class=\"table\">" +
                    "<tbody>"+
                    "<tr>"+
                        "<td> Job </td>" +
                        "<td>" + d.job+ "</td>"
                    +"</tr>"+
                    "<tr>"+
                    "<td> Status </td>" +
                    "<td>" + d.status+ "</td>"
                    +"</tr>"+
                    "<tr>"+
                    "<td> Address </td>" +
                    "<td>" + d.address+ "</td>"
                    +"</tr>"+
                    "<tr>"+
                    "<td> Easter rising participation </td>" +
                    "<td>" + d.rising+ "</td>"
                    +"</tr>"+
                    "<tr>"+
                    "<td> Independence war participation </td>" +
                    "<td>" + d.independence+ "</td>"+
                    "<tr>"+
                    "<td> Civil war participation </td>" +
                    "<td>" + d.civil+ "</td>"
                    "</tr>"+
                    +"</tbody>"
                    +"</table>"
                /*





                 <th>Email</th>
                 </tr>
                 </thead>
                 <tbody>
                 <tr>
                 <td>John</td>
                 <td>Doe</td>
                 <td>john@example.com</td>
                 </tr>
                 <tr>
                 */
                var infowindow = new google.maps.InfoWindow({
                    content: ContentText
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