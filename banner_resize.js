
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
    // взима всички banner модули, независимо от номера
    var modules = document.querySelectorAll('[id^="banners_module_"]');
    if (!modules.length) return;

    modules.forEach(function (module) {
      module.querySelectorAll('picture source').forEach(function (s) {
        var oldSet = s.getAttribute('srcset');
        var newSet = stripFixedHeightFromSrcset(oldSet);

        if (newSet && newSet !== oldSet) {
          s.setAttribute('srcset', newSet);
        }
      });

      // прерисува картинките
      module.querySelectorAll('picture img').forEach(function (img) {
        img.src = img.src; // force reload
      });
    });
  }

  // изчакай DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})(); /* Resize banner */
