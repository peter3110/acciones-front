
function displayHeatMap(where) {
	var quakePoints = [
		[-41.5396,174.1242,1.7345],
		[-38.8725,175.9561,2.6901],
		[-41.8992,174.3117,4.6968],
		[-41.7495,174.02,1.8642],
		[-41.7008,174.0876,2.1629],
		[-41.7371,174.0682,2.0408],
		[-41.372,173.3502,2.7565],
		[-41.7511,174.0623,2.4531],
		[-41.7557,174.3391,2.1871],
		[-41.6881,174.2726,3.1336],
		[-41.7463,174.1194,2.7113],
		[-41.6966,174.1238,2.4168]
	]

	var map = L.map(where).setView([-41.5546,174.146], 10);

	map.touchZoom.disable();
	map.doubleClickZoom.disable();
	map.scrollWheelZoom.disable();
	map.boxZoom.disable();
	map.keyboard.disable();
	
    mapLink = 
        '<a href="http://openstreetmap.org">OpenStreetMap</a>';
    L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; ' + mapLink + ' Contributors',
        maxZoom: 18,
    }).addTo(map);
    
    var heat = L.heatLayer(quakePoints,{
        radius: 20,
        blur: 15, 
        maxZoom: 17,
    }).addTo(map);
}