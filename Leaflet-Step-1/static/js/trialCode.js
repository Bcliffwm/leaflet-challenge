var Events=[];
d3.json(url,function(data)
{

    data.features.forEach(function (f){
        var loc = f.geometry.coordinates;
        var x = loc[0];
        var y = loc[1];
        var z = loc[2];
        var p= f.properties;
        var magnitude = p.mag;
        var place = p.place;

        var asDict={
            X:x,
            Y:y,
            Z:z,
            Mag:magnitude,
            Place:place
        };

        Events.push(asDict);  
    })
});