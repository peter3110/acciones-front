
function getData() {
    return $.get( "https://acciones-backend.herokuapp.com/getData/", function( data ) {
          return data;
      });  
}