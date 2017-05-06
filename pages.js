module.exports = function (body) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Experiments</title>
      <base target="_blank">
      <meta charset=utf-8>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" type="text/css" href="/static/css/bare.min.css">
      <link rel="stylesheet" type="text/css" href="/fa/font-awesome.css">
      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
      <style>
        * {
          font-family: 'Nunito', sans-serif;
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

      ${body}

    </body>
    </html>
  `
};