"use strict";var precacheConfig=[["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/dragon.png","ab4bb91265fac434fa21b3407b6a3e69"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/icons/icon_128x128.79a1593208b504875d4ebf1d7cf86943.png","79a1593208b504875d4ebf1d7cf86943"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/icons/icon_192x192.0182c84ebb9294abdd6cf467dabd2ac4.png","0182c84ebb9294abdd6cf467dabd2ac4"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/icons/icon_256x256.1ad716cdccc0e31aeffd49f24599d5fa.png","1ad716cdccc0e31aeffd49f24599d5fa"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/icons/icon_384x384.a16cc079e7bc1a91d637b3213fbadf0a.png","a16cc079e7bc1a91d637b3213fbadf0a"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/icons/icon_512x512.8e99561c5bc56b9d0ee69462abb048e4.png","8e99561c5bc56b9d0ee69462abb048e4"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/icons/icon_96x96.5998371412c021bec37c5f4b8942d121.png","5998371412c021bec37c5f4b8942d121"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/images/load.gif","f1298478e3f7754e73cf4930c3689f71"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/js/home.min.js","df0a97d24b1a89408993ee0993a4db31"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/js/internal.min.js","f789a72e0136afd21e72273dfe406216"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/styles/home.min.css","3441add0c74599667cdee8d0c928f860"],["https://thiagosalome.github.io/dragon-crypt/dist/assets/styles/internal.min.css","6aba82ad2a6bfa87fff812d5e55ff45b"],["https://thiagosalome.github.io/dragon-crypt/dist/index.html","2afad42cedeb91df5bcc521d354de8fd"],["https://thiagosalome.github.io/dragon-crypt/dist/list.html","f809fb4440cc2b8abe6b3f377c2f7373"],["https://thiagosalome.github.io/dragon-crypt/dist/manifest.8de7278bca5c84ac5dbaad9dd39a93aa.json","8de7278bca5c84ac5dbaad9dd39a93aa"]],cacheName="sw-precache-v3-https://thiagosalome.github.io/dragon-crypt/dist/-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,s){var n=new URL(e);return s&&n.pathname.match(s)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],s=new URL(t,self.location),n=createCacheKey(s,hashParamName,a,/\.\w{8}\./);return[s.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var s=new Request(a,{credentials:"same-origin"});return fetch(s).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));var s="https://thiagosalome.github.io/dragon-crypt/dist/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL(s,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});