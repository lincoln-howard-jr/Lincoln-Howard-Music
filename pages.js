module.exports = function (body) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Experiments</title>
      <meta charset=utf-8>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" type="text/css" href="/static/css/bare.min.css">
      <link rel="stylesheet" type="text/css" href="/fa/font-awesome.css">
      <link href="https://fonts.googleapis.com/css?family=Indie+Flower|Nunito" rel="stylesheet">
      <style>
        * {
          font-family: 'Nunito', sans-serif;
        }
        html, body {
          min-height: 100vh;
          background: rgba(200,224,200,0.1);
        }
        nav {
          min-height: 7.5vh;
        }
        div.body {
          margin-top: 12px;
          min-height: 77.5vh;
          padding-bottom: 7.5vh;
        }
        div.body > section {
          font-size: 16px;
          background: #fff;
          border: 1px solid #ccc;
          border-width: 0 1px;
        }
        div.body > section:first-child {
          border-top: 1px solid #ccc;
        }
        div.body > section:last-child {
          border-bottom: 1px solid #ccc;
        }
        div.wrapper {
          width: 100%;
          height: 0;
          padding-bottom: 56%;
        }
        div.wrapper-75 {
          width: 100%;
          height: 0;
          padding-bottom: 76%;
        }
        iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          display: block;
        }
        .lyrics-box {
          font-size: 16px;
          text-align: center;
          font-family: 'Indie Flower', cursive;
        }
        .bubble {
          margin: 5px;
          padding: 0;
          border-radius: 50%;
          border: 1px solid #efefef;
          transition: 0.2s all;
        }
        .bubble:hover {
          border-color: #ccc;
          padding: 5px;
        }
        .boxy {
          margin: 0;
          padding: 5px;
          border: solid 1px #efefef;
          transition: 0.2s all;
        }
        .boxy:hover {
          border-color: #ccc;
          box-shadow: 1px 1px 5px #999;
        }
        section {
          border-color: #ccc;
          border-width: 0 1px;
        }
        .sub-heading {
          height: 2rem;
          margin-bottom: 4rem;
        }
        .sub-heading h2 {
          position: absolute;
          display: inline-block;
          padding: 0 20px 0 0;
          margin: 0;
          color: #679;
        }
        .sub-heading h2.right {
          text-align: right;
          right: 0;
          padding: 0 0 0 20px;
        }
        .listen {
          color: #111;
          margin: 0 6px;
          transition: 0.3s all;
        }
        .listen:hover {
          border-bottom: 1px solid #ccc;
        }
        ul.list {
          list-style-type: none;
          text-align: center;
          vertical-align: middle;
        }
        ul.list li {
          display: inline-block;
          vertical-align: middle;
          width: 49%;
          margin-top: 10px;
          font-size: 20px;
        }
        .footer {
          bottom: 0;
          position: absolute;
          height: 7.5vh;
          background: #679;
        }
        .footer div {
          height: 100%;
          margin: 0;
          line-height: 7.5vh;
          vertical-align: middle;
        }
        .footer div {
          background: #679;
        }
        .footer div h3, .footer div h2 {
          margin: auto;
        }
      </style>
    </head>
    <body>

      <nav>
        <label>
          <input type="checkbox">
          <header>
            <a href="/">Lincoln Howard Music</a>
          </header>
          <ul>
            <li><a href="/upcoming">Upcoming</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li>
              <a href="#"></a>
              <menu>
                <menuitem></menuitem>
              </menu>
            </li>
          </ul>
        </label>
      </nav>
      <div class="body">
        ${body}
      </div>
        <grid xx full txt="c" class="footer">
          <div col="1/3">
            <h3>
              <a class="listen" href="https://github.com/lincoln-howard-jr/Lincoln-Howard-Music">
                <i class="fa fa-github"></i>
              </a>
            </h3>
          </div>
          <div col="1/3">
            <h2>
              <a class="listen" href="https://www.facebook.com/LincolnHowardJr/">
                <i class="fa fa-facebook"></i>
              </a>
            </h2>
          </div>
          <div col="1/3">
            <h3>
              <a class="listen" href="/contact">
                <i class="fa fa-envelope"></i>
              </a>
            </h3>
          </div>
        </grid>
        <!-- Google Analytics -->
        <script>
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', 'UA-99563768-1', 'auto');
          ga('send', 'pageview');
          if (document.referrer) ga('set', 'referrer', document.referrer);
        </script>
        <script async src='https://www.google-analytics.com/analytics.js'></script>
        <!-- End Google Analytics -->
    </body>
    </html>
  `
};