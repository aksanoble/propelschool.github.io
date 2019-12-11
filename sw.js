/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.2/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.2"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-282a09cb02f44bcaf91b.js"
  },
  {
    "url": "commons-12c7b25b977c79fbcd06.js"
  },
  {
    "url": "app-2585dea5948ddeff442c.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-f3f35f6ef3789022665d.js"
  },
  {
    "url": "index.html",
    "revision": "6a6a4f56d51e27df01f2eff71a1bcf1a"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ec2eb6feba715cccf1ff2845d081f87c"
  },
  {
    "url": "styles.c97d3db5ab3297682b4b.css"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem5YaGs126MiZpBA-UN7rgOUuhp.woff2",
    "revision": "0edb76284a7a0f8db4665b560ee2b48f"
  },
  {
    "url": "google-fonts/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0b.woff2",
    "revision": "33543c5cc5d88f5695dd08c87d280dfd"
  },
  {
    "url": "component---src-pages-index-js-0f145214a7a4245410c8.js"
  },
  {
    "url": "styles-bf5296a6e2e101eea376.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "afe1406463a0178127280b6085ae75fa"
  },
  {
    "url": "component---src-pages-404-js-b136bc5af85b91b250c6.js"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "9e23b356eb2fd5164f5eb50eb30c31e7"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "d274adf0f008ef152ce70a312b04b730"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "cbac88ea51ba22f4993bc21f9fb725e1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});