/* app.js */
// require and instantiate express
//const app = require('express')()
//
// fake data to simulate a database
var express = require("express");
var app = express();
app.use(express.static('public'))
//app.use(express.static('files'))
//app.use(express.static(path.join(__dirname, 'public')));
const usersdata = [
 {
 id: 1,
 email: 'Johndoe@gmail.com',
 address: 'NYC',
 },
 {
 id: 2,
 email: 'ldoe@gmail.com',
 address: 'NYC',
 },
 {
 id: 3,
 email: 'mary@gmail.com',
 address: 'BX',
 }
];
// set the view engine to ejs
app.set('view engine', 'ejs')
app.get('/', function(req, res){
 res.render('list', {
 groceries:[
 'bananas',
 'milk',
 'lettuce',
 'Eggs',
 'Juice',
 'Bathing Soap'
 ] })
});
app.get('/users', function(req, res){
 res.render('users', {usersdata:usersdata})
});
/*
// blog home page
app.get('/', (req, res) => {
 // render `home.ejs` with the list of posts
 res.render('home', { posts: posts })
});
// blog post
app.get('/post/:id', (req, res) => {
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
})*/
app.listen(8080)
console.log('listening on port 8080')