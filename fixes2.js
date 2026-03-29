/* ============================================================
   SELLAVI DEMO — fixes.js
   thorbalan.github.io/Sellavi/fixes.js
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. LAZY IMAGE FADE-IN
     Добавя клас .img-loaded след зареждане — CSS управлява
     opacity transition.
  ---------------------------------------------------------- */
  function initImageFade() {
    const style = document.createElement('style');
    style.textContent = `
      .product-item .media img,
      .product-layout .media img {
        opacity: 0;
        transition: opacity 0.4s ease;
      }
      .product-item .media img.img-loaded,
      .product-layout .media img.img-loaded {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);

    function markLoaded(img) {
      img.classList.add('img-loaded');
    }

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const img = entry.target;
            if (img.complete) {
              markLoaded(img);
            } else {
              img.addEventListener('load', () => markLoaded(img), { once: true });
            }
            observer.unobserve(img);
          });
        },
        { rootMargin: '120px' }
      );

      document.querySelectorAll(
        '.product-item .media img, .product-layout .media img'
      ).forEach((img) => observer.observe(img));
    } else {
      document.querySelectorAll(
        '.product-item .media img, .product-layout .media img'
      ).forEach((img) => {
        if (img.complete) markLoaded(img);
        else img.addEventListener('load', () => markLoaded(img), { once: true });
      });
    }
  }

  /* ----------------------------------------------------------
     2. WISHLIST ACTIVE STATE
     Следи wishlist.add() и добавя визуален active state.
  ---------------------------------------------------------- */
  function initWishlistState() {
    const active = new Set();

    document.querySelectorAll('.btn-wish-list').forEach((btn) => {
      const card = btn.closest('[data-product_id]');
      if (!card) return;
      const id = card.dataset.product_id;

      btn.addEventListener('click', () => {
        if (active.has(id)) {
          active.delete(id);
          btn.classList.remove('wl-active');
          btn.style.background = '';
          btn.style.color = '';
          btn.style.borderColor = '';
          btn.style.opacity = '';
          btn.style.transform = '';
        } else {
          active.add(id);
          btn.classList.add('wl-active');
          btn.style.cssText = `
            background: #C8432B !important;
            color: #fff !important;
            border-color: #C8432B !important;
            opacity: 1 !important;
            transform: scale(1) !important;
          `;
        }
      });
    });
  }

  /* ----------------------------------------------------------
     3. ADD TO CART — визуален feedback
     Прихваща натискането на "Купи" и показва ✓ за 2 секунди.
  ---------------------------------------------------------- */
  function initCartFeedback() {
    document.querySelectorAll('.add_to_cart .btn').forEach((btn) => {
      btn.addEventListener('click', function () {
        const self = this;
        if (self.dataset.feedbackActive) return;

        const original = self.innerHTML;
        self.dataset.feedbackActive = '1';
        self.style.background = '#2E6B52';
        self.style.pointerEvents = 'none';
        self.innerHTML = '&#10003; Добавено';

        setTimeout(() => {
          self.innerHTML = original;
          self.style.background = '';
          self.style.pointerEvents = '';
          delete self.dataset.feedbackActive;
        }, 2000);
      });
    });
  }

  /* ----------------------------------------------------------
     4. PRODUCT GRID — Bootstrap колони → CSS Grid
     Sellavi рендерира .col-xl-3 върху всяка карта.
     Тук премахваме Bootstrap width стиловете, за да позволим
     на нашия CSS Grid да поеме контрол.
  ---------------------------------------------------------- */
  function fixGridColumns() {
    document.querySelectorAll('.products.grid .product-item').forEach((el) => {
      el.style.width = '';
      el.style.float = 'none';
      el.style.paddingLeft = '0';
      el.style.paddingRight = '0';
    });

    const grid = document.querySelector('.products.grid, .row.products');
    if (grid) {
      grid.style.marginLeft = '0';
      grid.style.marginRight = '0';
    }
  }

  /* ----------------------------------------------------------
     5. SECTION TITLE DECORATIVE LINE
     Добавя тънка линия вдясно от заглавието на секцията,
     ако не е добавена от CSS (за по-стари браузъри).
  ---------------------------------------------------------- */
  function initSectionTitleLine() {
    document.querySelectorAll(
      '.section-title, h2.section-title, .module-section > .container > h2'
    ).forEach((el) => {
      if (el.dataset.lineAdded) return;
      el.dataset.lineAdded = '1';
      const line = document.createElement('span');
      line.style.cssText =
        'display:block;width:44px;height:1px;background:#8B6F47;margin-top:0.5rem;';
      el.appendChild(line);
    });
  }

  /* ----------------------------------------------------------
     6. SMOOTH SCROLL за вътрешни котви
  ---------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ----------------------------------------------------------
     INIT — изчакваме DOM
  ---------------------------------------------------------- */
  function init() {
    initImageFade();
    initWishlistState();
    initCartFeedback();
    fixGridColumns();
    initSectionTitleLine();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
