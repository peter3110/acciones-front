function sumSlider1() {
	$.get( "http://localhost:8080/sum_slider1_server", function( data ) {
  		document.getElementById('slider1').innerHTML = data.val
	});
	displaySlider1()
}

function subtractSlider1() {
	$.get( "http://localhost:8080/subtract_slider1_server", function( data ) {
  		document.getElementById('slider1').innerHTML = data.val
	});
	displaySlider1()
}

function displaySlider1() {
	$.get( "http://localhost:8080/slider1_server", function( data ) {
  		document.getElementById('slider1').innerHTML = data.val
	});
}

displaySlider1()