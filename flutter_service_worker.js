'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "015d2b7057fa07951fba51b4c498e402",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75ee93dea9482f08dca56284c82c202a",
".git/logs/refs/heads/main": "6dce38de60a15a98911dc4866fae87d9",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/18/6fb524758c647574662c96a8c55e055b29db4c": "c166461c9d65f1548c179dddebc10f06",
".git/objects/19/2f4ebc2d233cb4b5b21f199b2a016535c7965c": "0be97ca026ff65bf27c6d36a4fae9afe",
".git/objects/1b/0ba07640c7d9bb1f505b07e349d164971746b6": "3a2ad35d19944d121ab4da6b6cef019e",
".git/objects/1e/4816482449b422f318033768fa817cb96689ed": "8d7379ae37cb85e731d935462d643dcc",
".git/objects/29/7f745df8b29eb7d4fb36d1883ed1d993367e57": "55253e739f0249c56d28cb8e09f0e68a",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/001bab81f0d6caf38ff9320d18fb90a43339a0": "eb1a35d16239b54a9f2ff4aa6dac3be3",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/260492832baa611bb26e5d2bc355f7cc2809e4": "5b5f992864411faa86bc297ecfbe5277",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/88b098358e23c74495c8aaa9e1d773a7c11fd9": "04a407d015ef78a1426fb0bbc3e564a2",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/64ec17dd27ed377842268651c14bf03c75fc58": "212b36d4a0ff3e0362c24573e56b7c45",
".git/objects/5a/c7ba0799c7f0194b08609ade17f163397e484a": "af9379d6ab7a38d5593d7635a91d5823",
".git/objects/60/923963c5a4bd7f41a5acb1b194c2ca5d6aa815": "a2aaaba66defda3e522e0f80df808d0e",
".git/objects/65/06c1fd57404e66a789b343d9a1f9386a7d0176": "98865d99272f7ba75b13f86fafc85993",
".git/objects/66/3b6b15f90fb987b62790e5036fca55970cdff7": "0e818425a87bbac0fd6260aa26882dda",
".git/objects/69/d6e703edc00efe439329cdd43b974d6839e0a4": "19f4db0f2938cb3bf1e99e71316666f7",
".git/objects/6e/c46f38a61c8eee2fac18b405a6e6f8cf4c97c5": "7218d6eaa9f3428d41c31ec2c13eeed4",
".git/objects/71/fa30dd3e946dbee081e9d95bcf413166a60d23": "3fc8fbb18608d9d5284e2faa36976d3d",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/85/0cce5e28a8d8a61607c133067f75fddb67d758": "3b020a6069f69f9aa62204d06a69c7e5",
".git/objects/87/6fbdb8e703a840b6ef37850aa31cfe7c641239": "a8b26137e1c82f99951bf2c0ac14babf",
".git/objects/87/f1cacbc6708eeac8155c63f59dd1de9d176922": "0e071598c1988c13daaa5d17db4f2dfd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/77cc8564ad84328fd5587424132f9634a2f7b8": "7cb08bc76bdba9d02b504470f3bff42a",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/98/8fa524b4f21fae4200434b951899cd9c5833c2": "db792dc06a71bb4daeec59fa611ee79f",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b2/b31258e1de4cd45bca4f501b1779178d94e717": "d4706966a170b78abb810b1261a7a9ad",
".git/objects/b3/7fd0e3b421200c704e309cf2065971df513c37": "a8d4991d86b766eb6fadb3a5f25a4c4d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2b9a36ae242f1e58bbfd6565e0ee2c1241d4e3": "1e3cc6280466f175c4463f6cc8826dce",
".git/objects/bb/70635d5bf0a39f326425feae4406fae8d52282": "141919d7c5546d2243c0e798c57685ff",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/0e05d9e7ae0fce5f1e44b69090d2c4b1e8a0a0": "03029cb5ac47413d53fa8e55ecc123e8",
".git/objects/c2/a945b3a30ce2c15af68970db86ee8e788b9e64": "52fa3d6e07b18dca046d388b514c2ae0",
".git/objects/c3/955f6cc3209f8d3b7f8e6153db40996d1d60bd": "eecc008d476f16cb1081653c0bd19e5a",
".git/objects/c7/31b37f0fb21c7bb05adc9418d4a2244e83c35e": "a514803e49b19c70030883440f575c67",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d5/ee7de810e8eb799462223534935e7ac86ee16c": "01c1905c63b51559a385505a39c584bf",
".git/objects/d6/4f8ccf4f553d0603c319434c3c9089ade226e0": "06fb9ddfc5dc8ddf64cb48bcb8c9377b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/b640cdeaf7174504a6da2ee3a3838e1b38c953": "95ea645b4135bb609e96db35cb4ae241",
".git/objects/e0/5b171646f9d95783b6a03f984ea36a22ef7c6d": "98c23959efc7a13810a39ae39b344179",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/fb2933c17c62c985d9b8e3f1fb10b8c78d6f67": "615c87a9785b91463a31a330828002f8",
".git/objects/f1/77d0847b08dded7a979c889fcebeff4cc3e62c": "6072d5dcb2b734551d5dbce11ae5e95e",
".git/objects/f5/eb8b7980e27eb08583c097d7bd12ced949dd1e": "a8488845061da28fe0e494f6ee898dc0",
".git/objects/fb/d5033ba62be1e62466a03a0d5c693769a7b633": "a9dae8f2ccd509792cb17c1c7bd7d2cd",
".git/objects/fc/620c5eb928bbcc4bc13e854f0b5007132302e0": "b411df1cd358d6cdc806555aaeac05b1",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/ce45ece7f5ebb4671d19996058cf02ecd2d476": "12b98f6a529758d774cf8e6943297c0d",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "5a6f2281fdcf4bae949ff26d022557f7",
"assets/AssetManifest.bin": "514f8c3f56e87d8aa3d8481eeea2a88f",
"assets/AssetManifest.json": "c9ec6e3dfbda9d634f9c3162ab61575a",
"assets/assets/classification.tflite": "641667ddc3a0db227061a4d5b7b48027",
"assets/assets/food_category.tflite": "a78c0f64fb4057d33072c19c95aff9f5",
"assets/assets/images/login.png": "2a6804c844acc9552346b6bce462479d",
"assets/assets/images/login_bottom.png": "b473d9b1b30607e274348f114273a094",
"assets/assets/images/main_bottom.png": "322c8b4cda43fe21e0d78a1f30f387ce",
"assets/assets/images/main_top.png": "cd3220e276bb9dee0a1c7d18126aad72",
"assets/assets/images/signup_top.png": "6eaad7a7b0febd05500366722015bd6d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "5c039249a441bee9ca1618955b98005e",
"assets/NOTICES": "6566df6971f96d827ece862895f00160",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f1075895c54aa79a757138724213d47a",
"/": "f1075895c54aa79a757138724213d47a",
"main.dart.js": "90888fbc3ea7495da0a105bc99fd6c60",
"manifest.json": "fd002696a1e4e93fcf6d6ee0709c4c38",
"version.json": "877d9823a710265f381f4f37535beb61"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
