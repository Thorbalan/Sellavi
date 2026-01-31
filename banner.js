
(function () {
  function stripFixedHeightFromSrcset(srcset) {
    if (!srcset) return srcset;

    // маха ,h_460 и /h_460 и подобни
    return srcset
      .replace(/,h_\d+/g, '')
      .replace(/\/h_\d+/g, '')
      .replace(/h_\d+,/g, '')
      .replace(/h_\d+\//g, '');
  }

  function run() {
    var module = document.getElementById('banners_module_47374'); /* смени номера на модула */
    if (!module) return;

    module.querySelectorAll('picture source').forEach(function (s) {
      var newSet = stripFixedHeightFromSrcset(s.getAttribute('srcset'));
      if (newSet && newSet !== s.getAttribute('srcset')) {
        s.setAttribute('srcset', newSet);
      }
    });

    // прерисува картинките
    module.querySelectorAll('picture img').forEach(function (img) {
      img.src = img.src; // force reload
    });
  }

  // изчакай DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})(); /* Resize banner */