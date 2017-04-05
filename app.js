// require and instantiate express

var express = require('express');
var cors = require('cors');
var path = require('path');

const app = express();

app.use(cors());

/*
var hdb = require('hdb');
var hdb = hdb.createClient({
  host     : 'localhost',
  port     : 30015,
  user     : 'S0016562034',
  password : 'Peter31!'
});
//var hdb_schema = "S0016562034";

hdb.connect(function (err) {
  if (err) {
    return console.error('HDB connect error:', err);
  } 
});*/

// fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'John',
    title: 'Templating with EJS',
    body: 'Blog post number 1'
  },
  {
    id: 2,
    author: 'Drake',
    title: 'Express: Starting from the Bottom',
    body: 'Blog post number 2'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'Streams',
    body: 'Blog post number 3'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Events',
    body: 'Blog post number 4'
  }
]

// set the view engine to ejs
app.set('view engine', 'ejs')
app.use("/public", express.static(path.join(__dirname, 'public')));

// blog home page
app.get('/', (req, res, next) => {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts })
});

/*app.get('/inflaciometro', function(req, res, next){
  //var track = req.param("track");
  console.log('Agrego dato a bdd');
  res.send('Agrego dato a bdd!');
  hdb.exec(
    "INSERT INTO \"S0016562034\".\"Tweets\" VALUES" +
    " ('1','1','1','1','1','1','4')", function(err, affectedRows){
    if (err) {
      console.log('Error:', err)
    }  
    console.log('Tweet inserted:');  
  });
});*/


/* UNU decision slider! */
var value_slider1_server = 10;

app.get('/sum_slider1_server', (req, res, next) => {
  value_slider1_server = value_slider1_server + 1;
  return res.json({val: value_slider1_server});
})

app.get('/subtract_slider1_server', (req, res, next) => {
  value_slider1_server = value_slider1_server - 1;
  return res.json({val: value_slider1_server});
})

app.get('/slider1_server', (req, res, next) => {
  return res.json({val: value_slider1_server});
})


// blog post
app.get('/post/:id', (req, res, next) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the `post.ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

app.listen(process.env.PORT || 8080)

//console.log('listening on port 8080')
