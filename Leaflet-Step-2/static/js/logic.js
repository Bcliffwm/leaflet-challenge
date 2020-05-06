// var grayscale = L.tileLayer(
//     "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
//     {
//       attribution:
//         'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//       maxZoom: 18,
//       id: "mapbox.streets-basic",
//       accessToken: API_KEY,
//     }
//   ),
var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
var mbUrl = "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}";
var myMap = L.map("map", {
    center: [33.31, -114.7],
    zoom: 4,
  //   layers: [baseLayers],
});

L.tileLayer(
    mbUrl,
    {
      attribution:
        mbAttr,
      maxZoom: 18,
      id: "mapbox/light-v9",
      accessToken: API_KEY,
    }
).addTo(myMap);



// baseLayers = [grayscale, street];
