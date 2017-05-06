
let express = require ('express');
let fs = require ('fs');
let html = require ('./pages'); 

let pages = {
  '/': html (fs.readFileSync ('static/pages/index.html')),
  '/upcoming': html (fs.readFileSync ('static/pages/upcoming.html')),
  '/contact': html (fs.readFileSync ('static/pages/contact.html')),
  '/works': html (fs.readFileSync ('static/pages/works.html'))
}

let app = express ();

app.use (require ('compression') ());
app.get ('/', (req, res) => {
  res.header ('X-Frame-Options', 'ALLOW-FROM https://www.youtube.com/');
  res.header ('Content-Type', 'text/html');
  res.send (pages ['/']);
});
app.get ('/:page', (req, res) => {
  res.header ('X-Frame-Options', 'ALLOW-FROM https://www.youtube.com/');
  res.header ('Content-Type', 'text/html');
  res.send (pages [req.path]);
});
app.get ('/static/:dir/:file', (req, res) => {
  res.sendFile (require ('path').join (__dirname, 'static', req.params.dir, req.params.file));
});
// font awesome
app.use ('/fa', express.static ('node_modules/font-awesome/css'));
app.use ('/fonts', express.static ('node_modules/font-awesome/fonts'));

app.listen (80);