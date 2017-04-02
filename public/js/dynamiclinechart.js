
function deleteDynamicLineChart(where) {
    d3.select(where +" svg").remove()
}

function dynamicLinechart(where) {

	// Init
    d3.select(where +" svg").remove()

    // Create
    var margin = {top: 20, right: 20, bottom: 30, left: 50};
    var width = 500;
    var height = 250;

    // Seteo las dimensiones del grafico
    var xScale = d3.time.scale()
    .range([0, width])

    var yScale = d3.scale
    .linear()
    .range([height - 20, 20]);

    // Seteo los ejes
    var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");

    var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left");

    // Creacion de las curvas
    var valueline = d3.svg.line()
        .x(function(d) { return xScale(d.xAxis); })
        .y(function(d) { return yScale(d.yAxis); });

    // Creacion de los tooltip
    // Define 'div' for tooltips
    var div = d3.select(where)
        .append("div")               // declare the tooltip div 
        .attr("class", "tooltip")  // apply the 'tooltip' class
        .style("opacity", 0); 


    // Creacion del chart propiamente dicho
    var svg = d3.select(where)
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Fill
    data = [
        {xAxis:1, yAxis: 1},
        {xAxis:2, yAxis: 2},
        {xAxis:3, yAxis: 3},
        {xAxis:4, yAxis: 4},
        {xAxis:5, yAxis: 5}
    ]
    var xxa = d3.extent(data, function(d) { return d.xAxis; });
    xScale.domain( [xxa[0], xxa[1]] );

    var yya = d3.extent(data, function(d) { return d.yAxis; });
    yScale.domain( [yya[0], yya[1]] );

    svg
    .append("path")
    .attr("class", "line")
    .style("stroke", "blue")
    .attr("d", valueline(data));

    svg.selectAll("dot")
        .data(data).enter()
        .append("circle")
            .attr("r", 3) 
            .attr("cx", function(d) { return xScale(d.xAxis); })     
            .attr("cy", function(d) { return yScale(d.yAxis); })
            .on("mouseover", function(d) {    
              div.transition()    
                  .duration(200)    
                  .style("opacity", .9);    
              div.html("Gasto: " + d3.format(",.4r")(d.yAxis))  
                  .style("left", 100 + "px")   
                  .style("top", 100 + "px");  
            })          
            .on("mouseout", function(d) {   
              div.transition()    
                  .duration(500)    
                  .style("opacity", 0); 
            }
    );

    // Ejes
    svg
    .append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

    svg
    .append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Gastos");
}






