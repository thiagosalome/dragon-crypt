import "./components/form"

(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
      .then(() => console.log('Service Worker registered successfully.'))
      .catch(error => console.log('Service Worker registration failed:', error));
  }
})();