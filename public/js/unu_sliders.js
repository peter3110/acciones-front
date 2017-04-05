function sumSlider1() {
	$.get( "https://acciones-frontend.herokuapp.com/sum_slider1_server", function( data ) {
  		document.getElementById('slider1').innerHTML = data.val
	});
	displaySlider1()
}

function subtractSlider1() {
	$.get( "https://acciones-frontend.herokuapp.com/subtract_slider1_server", function( data ) {
  		document.getElementById('slider1').innerHTML = data.val
	});
	displaySlider1()
}

function displaySlider1() {
	$.get( "https://acciones-frontend.herokuapp.com/slider1_server", function( data ) {
  		document.getElementById('slider1').innerHTML = data.val
	});
}

displaySlider1()