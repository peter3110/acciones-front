var width = 700;
var height = 400;

var projection = d3.geo
                   .mercator()
                   .scale(100)
                   .translate([width / 2, height / 2]);

var path = d3.geo
             .path()
             .pointRadius(2)
             .projection(projection);
  
var svg = d3.select("#map")
            .append("svg")
            .attr("width", width)
            .attr("height", height);


function loaded(error, countries, airports) {
  svg.append("g")
    .attr("class", "countries")
    .selectAll("path")
    .data(countries.features)
    .enter()
    .append("path")
    .attr("d", path)
    .on('mouseover', function(d, i) {
        displayInfoCountryOnMouseover(d.properties.ADMIN);
    })
    .on('click', function(d, i) {
        displayInfoCountryOnClick(d.properties.ADMIN);
    });

  svg.append("g")
    .attr("class", "airports")
    .selectAll("path")
    .data(airports.features)
    .enter()
    .append("path")
    .attr("id", function(d) {return d.id;})
    .attr("d", path).on('click', function(d, i) {
        displayInfoAirportOnClick(d.properties.name);
    });
}

queue().defer(d3.json, "/public/data/countries.json")
       .defer(d3.json, "/public/data/airports.json")
       .await(loaded);



