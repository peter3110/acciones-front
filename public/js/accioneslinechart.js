function AccionesLineChart(where) {
    // Init
    d3.select(where +" svg").remove()

    // Fill
    var margin = {top: 3, right: 2, bottom: 3, left: 5},
    width = 260 - margin.left - margin.right,
    height = 227 - margin.top - margin.bottom;
 
    // Parse the date / time
    var parseDate = d3.time.format("%Y-%m-%d").parse;
     
    // Set the ranges
    var x = d3.time.scale().range([0, width]);
    var y = d3.scale.linear().range([height, 0]);
     
    // Define the axes
    var xAxis = d3.svg.axis().scale(x)
        .orient("bottom").ticks(5);
     
    var yAxis = d3.svg.axis().scale(y)
        .orient("left").ticks(5);
     
    // Define the line
    var valueline = d3.svg.line()
        .x(function(d) { return x(d.fecha); })
        .y(function(d) { return y(d.cierre); });
        
    // Adds the svg canvas
    var svg = d3.select(where)
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
     
    // Get the data
    $.get( "https://acciones-backend.herokuapp.com/getData/", function( data ) {
        data = data.points[0];
        console.log(data);
        
        data.forEach(function(d) {
            d.fecha  = +parseDate(d.fecha);
            d.cierre = +d.cierre;
        });
         
        // Scale the range of the data
        x.domain(d3.extent(data, function(d) { return d.fecha; }));
        y.domain([0, d3.max(data, function(d) { return d.cierre; })]);
     
        // Add the valueline path.
        svg.append("path")  
            .attr("class", "line")
            .attr("d", valueline(data))
            .attr("stroke", "steelblue")
            .attr("stroke-width", 2)
            .attr("fill", "none");

        // Add the X Axis
        svg.append("g")     
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
     
        // Add the Y Axis
        svg.append("g")     
            .attr("class", "y axis")
            .call(yAxis);
    });
}