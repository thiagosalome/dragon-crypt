"use strict";var precacheConfig=[["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/dragon.png","ab4bb91265fac434fa21b3407b6a3e69"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/icons/icon_128x128.25af98499d03733bf671c22607918563.png","25af98499d03733bf671c22607918563"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/icons/icon_192x192.7d54c34c65b61f04db3a73aeb7f6668e.png","7d54c34c65b61f04db3a73aeb7f6668e"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/icons/icon_256x256.4416e07c8662827a3e0b34f0da6813c5.png","4416e07c8662827a3e0b34f0da6813c5"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/icons/icon_384x384.87c136e2f9267e5c19d8446a8c0bae68.png","87c136e2f9267e5c19d8446a8c0bae68"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/icons/icon_512x512.188a2769d2451a3a6b4b5b8ef9a71cf9.png","188a2769d2451a3a6b4b5b8ef9a71cf9"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/icons/icon_96x96.d05ee018ac9854219d869efb24a1d754.png","d05ee018ac9854219d869efb24a1d754"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/load.gif","f1298478e3f7754e73cf4930c3689f71"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/js/home.min.js","df0a97d24b1a89408993ee0993a4db31"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/js/internal.min.js","f789a72e0136afd21e72273dfe406216"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/styles/home.min.css","bb3d4370bb988c9fdb8e3331e365bea2"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/styles/internal.min.css","fc0d047fd4b90f78ea50302670f265f5"],["https://thiagosalome.github.io/dragon-crypt/dist/index.html","3add66221472163057e690e804ce211f"],["https://thiagosalome.github.io/dragon-crypt/dist/list.html","d1f26320c6d25657f490e3ec29c679de"],["https://thiagosalome.github.io/dragon-crypt/dist/manifest.b87b57c6c73d798345ce7fd2d2f72710.json","b87b57c6c73d798345ce7fd2d2f72710"]],cacheName="sw-precache-v3-https://thiagosalome.github.io/dragon-crypt/dist/-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,s){var n=new URL(e);return s&&n.pathname.match(s)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),n=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));var s="https://thiagosalome.github.io/dragon-crypt/dist/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL(s,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});