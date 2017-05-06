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
      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
      <style>
        * {
          font-family: 'Nunito', sans-serif;
        }
        html, body {
          min-height: 100vh;
        }
        div.body {
          padding-bottom: 7.5vh;
        }
        div.wrapper {
          width: 100%;
          height: 0;
          padding-bottom: 56%;
        }
        iframe {
          position: absolute;
          width: 100%;
          height: 100%;
          display: block;
        }
        section {
          margin-bottom: 7.5vh;
        }
        .sub-heading {
          border-bottom: 1px solid #679;
          height: 2rem;
          margin-bottom: 4rem;
        }
        .sub-heading h2 {
          position: absolute;
          display: inline-block;
          padding: 0 20px 0 0;
          margin: 0;
          background: #fff;
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
        }
        ul.list {
          list-style-type: none;
          text-align: center;
        }
        .footer {
          bottom: 0;
          position: absolute;
          height: 7.5vh;
          background: #679;
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

    </body>
    </html>
  `
};