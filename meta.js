if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(() => console.log('server worker registered'))
    .catch(() => console.log('server worker not registered'))
}
