
function displayArgentinaMap(where) {

	d3.select(where+" svg").remove()

	width = 300
	height = 400

	var svg = d3.select(where).append("svg")
		.attr("style", "solid 1px black")
		.attr("width", width)
		.attr("height", height);

	var projection = d3.geo.mercator()
		.center([2.5, -38.5])
		.rotate([66, 0])
        .scale(500)
        .translate([(width / 2), (height / 2)]);

	var path = d3.geo.path().projection(projection);

	var g = svg.append("g");
	d3.json("/public/data/countries/ARG.geo.json", function (error, json) {
	    g.selectAll("path")
           .data(json.features)
           .enter()
           .append("path")
           .attr("d", path)
           .style("fill", "red");
	});
}