# PWA Notes

## Traits
* Reliable - Loads like a native app, no matter network conditions
* Fast - Independent of network, geography
* Engaging - Mimic native-app fullscreen, immersive experience

## Create a Manifest File
* Installed directly from a visit to the website
* Properties which define various parts of the application
* manifest.json file
  * https://developers.google.com/web/fundamentals/web-app-manifest/

## Using a Service Worker
* Runs independently of the browser
  * Intercept network requests
  * Caching or retrieving resources form the cache
  * Delivering push notifications
* Makes the PWA offline capable

## Install the Site Assets, Including CSS
* When service worker is triggered, site assets are installed