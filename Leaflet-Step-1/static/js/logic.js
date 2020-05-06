//var jsonData = getJson("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_day.geojson")
// Create a map object
var myMap = L.map("map", {
  center: [33.31, -114.7],
  zoom: 4,
  //access the data from var Events here
});

// var grayscale = L.tileLayer(
//   "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
//   {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "mapbox.streets-basic",
//     accessToken: API_KEY,
//   }
// ).addTo(myMap);
L.tileLayer(
  "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox.light",
    accessToken: API_KEY,
  }
).addTo(myMap);
// var baseMaps = {
//   Grayscale: grayscale,
//   Streets: street,
// };
// L.control.layers(baseMaps, circle).addTo(myMap);
// Getting Json data
var Events = [];

d3.json(
  "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson",
  function (data) {
    data.features.forEach(function (f) {
      var loc = f.geometry.coordinates;
      var x = loc[0];
      var y = loc[1];
      var z = loc[2];
      var p = f.properties;
      var magnitude = p.mag;
      var place = p.place;

      var asDict = {
        Long: x,
        Lat: y,
        Depth: z,
        Mag: magnitude,
        Place: place,
      };

      Events.push(asDict);
      

      // Create Switch for circle coloring and sizing
      var color;

      switch (asDict.Mag) {
        case 1.2:
          color = "Green";
          break;
        case 2.0:
          color = "Blue";
          break;
        case 5.0:
          color = "Black";
          break;
        case 4.0:
          color = "Teal";
          break;
        default:
          color = "Red";
          break;
      }
      var circle = L.circle([asDict.Lat, asDict.Long], {
        color: color,
        radius: 8000,
      }).addTo(myMap);
      circle.bindPopup(asDict.Place + asDict.Mag).openPopup();
      
    });
  }
);
