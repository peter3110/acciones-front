
function getData() {
    app.get('/getData', (req, res, next) => {
      $.get( "https://acciones-backend.herokuapp.com/getData/", function( data ) {
          return data;
      });  
    })
}