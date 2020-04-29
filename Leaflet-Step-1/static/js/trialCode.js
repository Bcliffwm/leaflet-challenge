function GetJsonData(url){
    var events=[]
    d3.json(url,function(data){
            features=data.features;
            features.forEach(function (f){
                var coordinates=f.geomtery.coordinates;
                var x = coordinates[0];
                var y = coordinates[1];
                var z= coordinates[2];
              
            })
    var properties=data.properties;
            properties.forEach(function (p){
                var magnitude=p.mag;
                var place = p.place;
            })
    var dict = {
      "place": "lac",
      "magnitude": magnitude,
      "coordinates": [x,y,z]
    };
    events.append(dict)
        })}