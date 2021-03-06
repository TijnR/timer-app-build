const staticCacheName = 'site-static'
const assets = [
  '/',
  '/index.html',
  '/assets-manifest.json',
  '/manifest.json',
  '/meta.js',
  '/robots.txt',
  '/test-icon.png',
  '/testt-icon.png',
  '/static/css/main.d0a7cde1.chunk.css',
  '/static/css/main.d0a7cde1.chunk.css.map',
  '/static/js/2.6675074e.chunk.js',
  '/static/js/2.6675074e.chunk.js.map',
  '/static/js/2.6675074e.chunk.js.LICENSE.txt',
  '/static/js/3.d9a3f724.chunk.js',
  '/static/js/3.d9a3f724.chunk.js.map',
  '/static/js/main.4655760c.chunk.js',
  '/static/js/main.4655760c.chunk.js.map',
  '/static/js/runtime-main.c24e6cb4.js',
  '/static/js/runtime-main.c24e6cb4.js.map',
  '/static/media/commando.68717231.ttf',
  '/static/media/synthwave-background.1a79017b.jpg',
]

self.addEventListener('install', (event) => {
    console.log('Service worker install event!');
    event.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener('fetch', evt => {
    console.log('fetch event: ' + evt)
})
