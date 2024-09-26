// @refresh reload
import { createHandler, StartServer } from '@solidjs/start/server';

function onMountFavicon() {
  window.onblur = function () {
    var link: any = document.querySelector("link[rel~='icon']");
    link.href = '/favicon-off.png';
  };
  window.onfocus = function () {
    var link: any = document.querySelector("link[rel~='icon']");
    link.href = '/favicon-on.png';
  };
}
export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang='en'>
        <head>
          <title>Curso SolidStart</title>
          <meta name='description'>Curso SolidStart</meta>
          <meta charset='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Oswald:wght@200..700&display=swap'
            rel='stylesheet'
          />

          {assets}
        </head>
        <body>
          <div id='app'>{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
