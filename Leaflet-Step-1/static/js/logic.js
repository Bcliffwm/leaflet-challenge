// Getting Json data
function getJson(url){
    d3.json(url, function(data){
        return(data)
    })
};
var jsonData = getJson("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson")
// Create a map object
var myMap = L.map("map", {
    center: [33.31, -114.70],
    zoom: 4
  });
  
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets-basic",
    accessToken: API_KEY
  }).addTo(myMap);