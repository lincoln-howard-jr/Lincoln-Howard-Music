
let express = require ('express');
let fs = require ('fs');
let uuid_4 = require ('uuid/v4');
let html = require ('./pages');
let sent = require ('./static/pages/sent');

let pages = {
  get index () {return html (fs.readFileSync ('static/pages/index.html'))},
  get upcoming () {return html (fs.readFileSync ('static/pages/upcoming.html'))},
  get contact () {return html (fs.readFileSync ('static/pages/contact.html'))},
  get about () {return html (fs.readFileSync ('static/pages/works.html'))},
  sent (body) {return html (sent (body))}
}

let app = express ();

app.use (require ('body-parser') ())
app.use (require ('compression') ());
app.get ('/', (req, res) => {
  res.header ('X-Frame-Options', 'ALLOW-FROM https://www.youtube.com/');
  res.header ('Content-Type', 'text/html');
  res.send (pages.index);
});
app.get ('/:page', (req, res) => {
  res.header ('Content-Type', 'text/html');
  res.send (pages [req.params.page]);
});
app.get ('/static/:dir/:file', (req, res) => {
  res.sendFile (require ('path').join (__dirname, 'static', req.params.dir, req.params.file));
});
// font awesome
app.use ('/fa', express.static ('node_modules/font-awesome/css'));
app.use ('/fonts', express.static ('node_modules/font-awesome/fonts'));

function messageFile () {
  return fs.createWriteStream (`messages/${uuid_4 ()}`);
}

app.post ('/messages', (req, res) => {
  messageFile ().write (JSON.stringify (req.body));
  res.header ('Content-Type', 'text/html');
  res.send (pages.sent (req.body));
});

app.listen (80);