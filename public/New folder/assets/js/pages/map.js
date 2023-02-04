var map;
var infowindow;
var service;
var details_array = Array();
var place_id = 0;
var markers = [];
var StoredRecordSet = [];
var prevRadius;
var localResults=[];
var searchResult = [];
var highestRadiusResulted = 0;
var prevKeyword;

$(document).on("click", "[data-toggle=tab][href='#sp_search_google']", () => {
    markers = [];
    initialize();
})

function initialize() {

    keywords = "";
    //$("#item_list").html("");
    //$("#res").html("");
    if (window.next_page_token == "") {
        place_id = 0;        
    }
    var lat = 30.204100000;
    var lng = -92.979420000;
    var radius = 5000;
    window.next_page_token = "";

    if ($("#keyword").val() != "")
        keywords = $("#keyword").val();

    if ($("#latitude").val())
        lat = parseFloat($("#latitude").val());

    if ($("#longitude").val())
        lng = parseFloat($("#longitude").val());

    if ($("#radius").val() != "")
        radius = parseFloat($("#radius").val());
    var zoom=11; 
    if (radius == 20) {
        zoom = 10;
    }
    if (radius == 50) {
        zoom = 8;
    }
    var pyrmont = new google.maps.LatLng(lat, lng);
    radius = radius * 1609.34; //radius is in meter
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: pyrmont,
        zoom: zoom
    });
    var pinSVGHole = "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";

    var markerImage = {
        path: pinSVGHole,
        anchor: new google.maps.Point(12, 17),
        fillOpacity: 1,
        fillColor: 'blue',
        strokeWeight: 1,
        strokeColor: "white",
        scale: 2
    };

    var marker_center = new google.maps.Marker({
        map: map,
        icon: markerImage,
        position: pyrmont
    });
   
    const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        map,
        center: pyrmont,
        radius: radius,
    });

    var request = {
        location: pyrmont,
        radius: radius,
        rankby: 'distance',
        query: keywords // this is where you set the map to get the related places
    };
    infowindow = new google.maps.InfoWindow();

    console.log("Call initiated for Keyword(s): " + keywords);

    if (prevRadius && prevRadius >= request.radius && prevKeyword == keywords) {
        localResults = [];
        StoredRecordSet.filter((arrayItem) => {
            var dis = arrayItem.distance;
            if (dis <= request.radius) {
                localResults.push(arrayItem);
            }
        });
        searchResult = localResults;
        prevRadius = request.radius;
        console.log(searchResult.length + ` Provider Loaded By Google in (${$("#radius").val()}miles) For Keyword(s):  "${request.query}", Total Loaded: ${searchResult.length}`);
        console.log(searchResult);
        if (!searchResult.length) {
            $("#res").prepend("No Results Found");
        } else {
            searchResult.sort(SortBydistance);
            $("#item_list").html("");
            $("#res").html("");
            details_array = []; // for sorting
            for (var i = 0; i < searchResult.length; i++) {
                createMarker(searchResult[i].id, searchResult[i].distance);
            }
        }
    } else {
        service = new google.maps.places.PlacesService(map);
        service.textSearch(request, callback);
        if (prevKeyword != request.query) {
            StoredRecordSet = [];
        }
    }
    function callback(results, status, next_page_token) {
        //StoredRecordSet = [];
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            var max_iteration = (results.length < 5) ? results.length : 5;
            var resultCount = 0;
            for (var i = 0; i < results.length; i++) {
                var dis = google.maps.geometry.spherical.computeDistanceBetween(results[i].geometry.location, pyrmont);
                if (dis <= request.radius)
                    //createMarker(results[i], dis);
                    if (!StoredRecordSet.find(x => x.id.place_id == results[i].place_id) && ((!prevRadius || prevRadius <= request.radius) || (prevRadius && prevRadius > request.radius))) {
                        StoredRecordSet.push({ id: results[i], distance: dis });
                        resultCount++;
                    }
            }
            prevRadius = request.radius;
            prevKeyword = request.query;
            searchResult = [];
            StoredRecordSet.filter((arrayItem) => {
                var dis = arrayItem.distance;
                if (dis <= request.radius) {
                    searchResult.push(arrayItem);
                }
            });

            searchResult.sort(SortBydistance);
            console.log(resultCount + ` Provider Loaded By Google in (${$("#radius").val()}miles) For Keyword(s): "${request.query}", Total Loaded: ${searchResult.length}`);
            console.log(searchResult);

            $("#item_list").html("");
            $("#res").html("");
            details_array = []; // for sorting
            for (var i = 0; i < searchResult.length; i++) {

                createMarker(searchResult[i].id, searchResult[i].distance);
            }
            
          
            if (next_page_token.hasNextPage)
                next_page_token.nextPage();
            else
                window.next_page_token = "";
        } else {
            $("#res").prepend("No Results, status " + status);
        }
    }
}
function SortBydistance(a, b) {
    
    var adistance = a.distance;
    var bdistance = b.distance;
    return ((adistance < bdistance) ? -1 : ((adistance > bdistance) ? 1 : 0));
}


//function callback(results, status, next_page_token) {
//    $("#more_btn").hide("slow");
//    if (status == google.maps.places.PlacesServiceStatus.OK) {
//        markers = [];

//        for (var i = 0; i < results.length; i++) {
//            createMarker(results[i]);
//        }

//        if (next_page_token.hasNextPage)
//            next_page_token.nextPage();
//        else
//            window.next_page_token = "";
//    }
//}

function searchProviderOnGoogleMaps() {
    window.next_page_token = "";
    markers = [];
    initialize();
}
function createMarker(place, dis) {

    if (details_array.find(x => x && x.place_id == place.place_id) ) {
        return;
    }

    details_array[place_id] = place;
    var name = place.name;
    var place_details = `<div class="row"><div class=col-9><h5>${name}</h5></div><div class=col-3>${((dis / 1000) * 0.621371).toFixed(2)} mi</div></div>
                           
                                <div id="info_${place_id}"></div>                                
                                <span style="cursor:pointer; color:blue;" onclick="show_details(${place_id},this,${((dis / 1000) * 0.621371).toFixed(2)});">Show Details</span>
                            
                            <hr>
                        </div>`;

    document.getElementById("item_list").innerHTML += place_details;


    var pinSVGHole = "M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z";

    var markerImage = {
        path: pinSVGHole,
        anchor: new google.maps.Point(12, 17),
        fillOpacity: 1,
        fillColor: 'red',
        strokeWeight: 1,
        strokeColor: "white",
        scale: 2
    };

    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        icon: markerImage,
        position: place.geometry.location
    });
    markers.push(marker);
    var request = { reference: place.place_id };
    service.getDetails(request, function (details, status) {
        google.maps.event.addListener(marker, 'click', function () {
            if (details) {
                var content = createInfoWindowContent(details.name, details.formatted_phone_number, details.formatted_address, details.geometry.location.lat(),
                    details.geometry.location.lng());
                infowindow.setContent(content);
            }
                
            else
                infowindow.setContent("<center><b>" + place.name + "</b><br></center>");

            infowindow.open(map, this);
        });
    });
    place_id++;
}
function showResultInfoWindow(btn) {
    var detail = $(btn).data();
    var name = detail.name;
    var address = detail.address;
    var contact_number = detail.contactnumber;
    var long = detail.long;
    var lat = detail.lat;
    var id = detail.id;
    var dist = detail.dis;
    var content = createInfoWindowContent(name, contact_number, address, lat, long,dist);
    infowindow.setContent(content);

    var marker = markers.find(a => a.position.lng() == long && a.position.lat() == lat);
    infowindow.open(map, marker);
}
function createInfoWindowContent(name, contact_number, address, lat, long, dist) {
    var content = ` <h4>${name}</h4>
                    <b>Contact No: </b>${contact_number}<br>
                    <b>Address: </b>${address}<br>
                    <b>Latitude: </b>${lat}<br>
                    <b>Longitude: </b>${long}<br>
                    <button class="btn btn-primary d-block btn-sm w-100 my-1" type="button"
                        data-contactnumber="${contact_number}"
                        data-name="${name}"
                        data-address="${address}"
                        data-long="${long}"
                        data-lat="${lat}"
                        data-dis="${dist}"
                        onclick="selectGoogleProvider(this)">
                        Select
                    </button>
                    `;
    return content;
}
function show_details(id, btn,dis) {
    var new_place = details_array[id]
    var request = { reference: new_place.place_id };
    service.getDetails(request, function (details, status) {
        var name = new_place.name;
        var address = "";
        var contact_number = "";
        if ($(btn).hasClass("more")) {
            $("#info_" + id).slideUp();
            $(btn).text("Show Details").removeClass("more");
        } else {
            document.getElementById("info_" + id).innerHTML = "Please wait...";


            if (details) {
                if (details.name)
                    name = details.name;
                if (details.formatted_phone_number)
                    contact_number = details.formatted_phone_number;
                if (details.formatted_address)
                    address = details.formatted_address;

                document.getElementById("info_" + id).innerHTML = ` <b>Contact No: </b>${contact_number}<br>
                                                            <b>Address: </b>${address}<br>
                                                            <b>Latitude: </b>${new_place.geometry.location.lat()}<br>
                                                            <b>Longitude: </b>${new_place.geometry.location.lng()}<br>
                                                            <button class="btn btn-light-primary d-block btn-sm w-100 my-1" type="button"
                                                                data-name="${name}"
                                                                data-contactnumber="${contact_number}"
                                                                data-address="${address}"
                                                                data-long="${new_place.geometry.location.lng()}"
                                                                data-lat="${new_place.geometry.location.lat()}"
                                                                data-id="${id}"
                                                                data-dis="${dis}"
                                                                onclick="showResultInfoWindow(this)">
                                                                <i class="flaticon2-map"></i> Show On Map
                                                            </button>
                                                            <button class="btn btn-primary d-block btn-sm w-100 my-1" type="button"
                                                                data-contactnumber="${contact_number}"
                                                                data-address="${address}" 
                                                                data-name="${name}"
                                                                data-long="${new_place.geometry.location.lng()}"
                                                                data-lat="${new_place.geometry.location.lat()}"
                                                                data-dis="${dis}"
                                                                onclick="selectGoogleProvider(this)">
                                                                Select
                                                            </button>
                                                            `;
               // console.log(details);
            }
            else {
                document.getElementById("info_" + id).innerHTML = 'No data found';
               // console.log('No data found');
            }
            $("#info_" + id).slideDown();

            $(btn).text("Show Less").addClass("more");

        }
    });
}

