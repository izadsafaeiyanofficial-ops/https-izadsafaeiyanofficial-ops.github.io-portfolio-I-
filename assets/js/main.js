(function () {
  'use strict';
  var D = window.SITE;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var hasGsap = !!(window.gsap && window.ScrollTrigger);
  if (reduced) document.documentElement.classList.add('reduced');
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var featById = {};
  D.featured.forEach(function (f) { featById[f.id] = f; });

  $('#year').textContent = new Date().getFullYear();

  /* ---------- Render: selected work ---------- */
  var track = $('#workTrack');
  track.innerHTML = D.featured.map(function (f, i) {
    return '<article class="wcard" data-open="' + f.id + '" data-cursor="View" tabindex="0" role="button" aria-label="Open gallery: ' + esc(f.title) + '">' +
      '<div class="wcard-media"><span class="wcard-num">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<span class="wcard-count">' + f.images.length + ' photos</span>' +
      '<img src="' + f.cover + '" alt="' + esc(f.title) + '" loading="lazy" data-parallax></div>' +
      '<div class="wcard-body"><div><h3 class="wcard-title">' + esc(f.title) + '</h3>' +
      (f.sub ? '<div class="wcard-sub">' + esc(f.sub) + '</div>' : '') +
      '<div class="mono" style="margin-top:8px">' + esc(f.role) + ' · ' + esc(f.place) + '</div></div>' +
      '<div class="wcard-meta"><span class="yr">' + f.year + '</span></div></div></article>';
  }).join('') +
    '<div class="wcard-end"><p>Fourteen productions, <em>two countries</em>, one stage.</p><a href="#index" class="link-arrow" data-scroll data-magnetic>See full index <span>→</span></a></div>';

  /* ---------- Render: index ---------- */
  var list = $('#indexList');
  list.innerHTML = D.phases.map(function (ph) {
    return '<div class="phase"><div class="phase-head"><b>' + ph.years + '</b><span class="mono">' + esc(ph.title) + '</span></div>' +
      ph.items.map(function (it) {
        var f = it.gallery ? featById[it.gallery] : null;
        var img = f ? f.cover : (it.img || '');
        var note = it.note || (f && f.text) || '';
        var awards = (f && f.awards) || [];
        return '<div class="irow" data-type="' + it.type + '"' + (img ? ' data-img="' + img + '"' : '') + ' tabindex="0" role="button" aria-expanded="false">' +
          '<div class="irow-date">' + it.date + '</div>' +
          '<div class="irow-main"><div class="irow-title">' + esc(it.title) + '</div><div class="irow-meta">' + esc(it.meta) + '</div></div>' +
          '<span class="irow-role ' + it.type + '">' + esc(it.role) + '</span>' +
          '<span class="irow-arrow" aria-hidden="true">→</span>' +
          '<div class="irow-detail">' +
            (note ? '<p>' + esc(note) + '</p>' : '<p>' + esc(it.role) + ' — ' + esc(it.meta) + '.</p>') +
            (awards.length ? '<div class="awards">' + awards.map(function (a) { return '<span class="award">' + esc(a) + '</span>'; }).join('') + '</div>' : '') +
            (f ? '<button class="irow-gal" data-open="' + f.id + '">Open gallery · ' + f.images.length + ' photos ↗</button>' : '') +
          '</div></div>';
      }).join('') + '</div>';
  }).join('');

  list.addEventListener('click', function (e) {
    var g = e.target.closest('[data-open]');
    if (g) { e.stopPropagation(); openLightbox(g.dataset.open, 0); return; }
    var row = e.target.closest('.irow'); if (!row) return;
    var open = row.classList.toggle('is-open');
    row.setAttribute('aria-expanded', open);
    setTimeout(function () { if (window.ScrollTrigger) ScrollTrigger.refresh(); }, 650);
  });
  list.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('irow')) { e.preventDefault(); e.target.click(); }
  });

  $$('#filters .chip').forEach(function (b) {
    b.addEventListener('click', function () {
      $$('#filters .chip').forEach(function (x) { x.classList.toggle('is-active', x === b); });
      var f = b.dataset.filter;
      $$('.irow').forEach(function (r) { r.classList.toggle('is-hidden', f !== 'all' && r.dataset.type !== f); });
      $$('.phase').forEach(function (p) { p.style.display = $$('.irow:not(.is-hidden)', p).length ? '' : 'none'; });
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });
  });

  /* ---------- Render: film ---------- */
  $('#filmGrid').innerHTML = D.films.map(function (v) {
    var isYt = !!v.yt;
    var tag = isYt ? 'button' : 'a';
    var attrs = isYt ? ' type="button" data-yt="' + v.yt + '"' : ' href="' + v.href + '" target="_blank" rel="noopener noreferrer"';
    var where = isYt ? 'Play' : (v.href.indexOf('instagram') > -1 ? 'Instagram ↗' : 'YouTube ↗');
    return '<' + tag + ' class="fcard' + (v.big ? ' big' : '') + '"' + attrs + ' data-cursor="' + (isYt ? 'Play' : 'Watch') + '" style="text-align:left">' +
      '<div class="fcard-media"><img src="' + v.thumb + '" alt="' + esc(v.title) + '" loading="lazy">' +
      '<span class="fcard-play"><i>▶</i>' + where + '</span></div>' +
      '<div class="fcard-body"><div><div class="mono fcard-label">' + esc(v.label) + '</div>' +
      '<h3 class="fcard-title">' + esc(v.title) + (v.sub ? ' <em>' + esc(v.sub) + '</em>' : '') + '</h3>' +
      (v.desc ? '<p class="fcard-desc">' + esc(v.desc) + '</p>' : '') + '</div>' +
      '<div class="fcard-meta mono">' + esc(v.meta) + '</div></div></' + tag + '>';
  }).join('');

  /* ---------- Video modal ---------- */
  var vm = $('#vmodal'), vmFrame = $('#vmFrame');
  function openVideo(id) {
    vmFrame.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0" title="Video" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    vm.classList.add('is-open'); vm.setAttribute('aria-hidden', 'false'); lockScroll(true);
    $('#vmClose').focus();
  }
  function closeVideo() { vm.classList.remove('is-open'); vm.setAttribute('aria-hidden', 'true'); vmFrame.innerHTML = ''; lockScroll(false); }
  $('#filmGrid').addEventListener('click', function (e) { var b = e.target.closest('[data-yt]'); if (b) openVideo(b.dataset.yt); });
  $('#vmClose').addEventListener('click', closeVideo);
  vm.addEventListener('click', function (e) { if (e.target === vm) closeVideo(); });

  /* ---------- Lightbox ---------- */
  var lb = $('#lightbox'), lbImg = $('#lbImg'), cur = null, idx = 0, lastFocus = null;
  function openLightbox(id, start) {
    cur = featById[id]; if (!cur) return;
    lastFocus = document.activeElement;
    $('#lbEyebrow').textContent = cur.role + ' · ' + cur.year;
    $('#lbTitle').textContent = cur.title;
    var info = '<dl>' +
      (cur.sub ? '<div><dt>Also known as</dt><dd>' + esc(cur.sub) + '</dd></div>' : '') +
      (cur.playwright ? '<div><dt>Playwright</dt><dd>' + esc(cur.playwright) + '</dd></div>' : '') +
      '<div><dt>Venue</dt><dd>' + esc(cur.place) + '</dd></div><div><dt>Role</dt><dd>' + esc(cur.role) + '</dd></div></dl>' +
      '<p>' + esc(cur.text) + '</p>' +
      (cur.awards ? '<div class="awards">' + cur.awards.map(function (a) { return '<span class="award">' + esc(a) + '</span>'; }).join('') + '</div>' : '');
    $('#lbInfo').innerHTML = info;
    $('#lbThumbs').innerHTML = cur.images.map(function (im, i) {
      return '<button data-i="' + i + '" aria-label="Image ' + (i + 1) + '"><img src="' + im.src + '" alt="" loading="lazy"></button>';
    }).join('');
    show(start || 0);
    lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false'); lockScroll(true);
    $('#lbClose').focus();
  }
  function show(i) {
    idx = (i + cur.images.length) % cur.images.length;
    var im = cur.images[idx];
    if (hasGsap && !reduced) gsap.fromTo(lbImg, { opacity: 0, scale: .98 }, { opacity: 1, scale: 1, duration: .6, ease: 'expo.out' });
    lbImg.src = im.src; lbImg.alt = cur.title + ' — ' + im.cap;
    $('#lbCap').textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(cur.images.length).padStart(2, '0') + '  —  ' + im.cap;
    $$('#lbThumbs button').forEach(function (b, j) { b.classList.toggle('is-active', j === idx); if (j === idx) b.scrollIntoView({ block: 'nearest', inline: 'center' }); });
  }
  function closeLightbox() { lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); lockScroll(false); if (lastFocus) lastFocus.focus(); }
  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', function () { show(idx - 1); });
  $('#lbNext').addEventListener('click', function () { show(idx + 1); });
  $('#lbThumbs').addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) show(+b.dataset.i); });
  var tx = 0;
  lb.addEventListener('touchstart', function (e) { tx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend', function (e) { var dx = e.changedTouches[0].clientX - tx; if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1)); });
  document.addEventListener('keydown', function (e) {
    if (lb.classList.contains('is-open')) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') show(idx + 1);
      if (e.key === 'ArrowLeft') show(idx - 1);
    } else if (vm.classList.contains('is-open') && e.key === 'Escape') closeVideo();
    else if (e.key === 'Escape' && menu.classList.contains('is-open')) toggleMenu(false);
  });

  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-open]');
    if (t && !t.closest('#indexList')) { e.preventDefault(); openLightbox(t.dataset.open, 0); }
  });
  track.addEventListener('keydown', function (e) {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.dataset.open) { e.preventDefault(); openLightbox(e.target.dataset.open, 0); }
  });

  /* ---------- Smooth scroll (Lenis) ---------- */
  var lenis = null;
  if (window.Lenis && !reduced) {
    lenis = new Lenis({ duration: 1.15, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }, smoothWheel: true });
    if (hasGsap) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(0);
    }
  }
  function lockScroll(on) {
    document.body.classList.toggle('no-scroll', on);
    if (lenis) on ? lenis.stop() : lenis.start();
  }
  function scrollToTarget(sel) {
    var el = sel === '#top' ? 0 : $(sel); if (el === null) return;
    if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.6 });
    else if (el === 0) window.scrollTo({ top: 0, behavior: 'smooth' });
    else el.scrollIntoView({ behavior: 'smooth' });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[data-scroll]'); if (!a) return;
    e.preventDefault(); toggleMenu(false); scrollToTarget(a.getAttribute('href'));
  });

  /* ---------- Menu ---------- */
  var burger = $('#burger'), menu = $('#menu');
  function toggleMenu(force) {
    var open = typeof force === 'boolean' ? force : !menu.classList.contains('is-open');
    if (!open && !menu.classList.contains('is-open')) return;
    menu.classList.toggle('is-open', open); burger.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', open); menu.setAttribute('aria-hidden', !open);
    lockScroll(open);
  }
  burger.addEventListener('click', function () { toggleMenu(); });

  /* ---------- Nav state ---------- */
  var nav = $('#nav'), lastY = 0;
  function onScroll(y) {
    nav.classList.toggle('is-scrolled', y > 40);
    nav.classList.toggle('is-hidden', y > lastY && y > 400 && !menu.classList.contains('is-open'));
    lastY = y;
  }
  if (lenis) lenis.on('scroll', function (l) { onScroll(l.scroll); });
  else window.addEventListener('scroll', function () { onScroll(window.scrollY); }, { passive: true });

  var navLinks = $$('.nav-links a');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) {
        if (en.isIntersecting) navLinks.forEach(function (a) { a.classList.toggle('is-active', a.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['work', 'index', 'film', 'about', 'contact'].forEach(function (id) { io.observe(document.getElementById(id)); });
  }

  /* ---------- Hero slideshow ---------- */
  var slides = $$('#heroMedia img'), si = 0;
  if (!reduced) setInterval(function () {
    slides[si].classList.remove('is-active');
    si = (si + 1) % slides.length;
    slides[si].classList.add('is-active');
    $('#heroIdx').textContent = String(si + 1).padStart(2, '0');
  }, 5200);

  /* ---------- Cursor + hover preview + magnetic ---------- */
  if (finePointer && !reduced) {
    var cursor = $('#cursor'), label = $('#cursorLabel'), prev = $('#hoverPreview'), prevImg = $('#hoverPreviewImg');
    var mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my, px = mx, py = my;
    window.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; cursor.classList.add('is-visible'); });
    document.addEventListener('mouseleave', function () { cursor.classList.remove('is-visible'); });
    (function loop() {
      cx += (mx - cx) * .22; cy += (my - cy) * .22; px += (mx - px) * .1; py += (my - py) * .1;
      cursor.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
      prev.style.transform = 'translate(' + (px + 24) + 'px,' + (py - 110) + 'px)' + (prev.classList.contains('is-visible') ? ' scale(1)' : ' scale(.8)');
      requestAnimationFrame(loop);
    })();
    document.addEventListener('mouseover', function (e) {
      var l = e.target.closest('[data-cursor]');
      var h = e.target.closest('a, button, .irow, [role=button]');
      cursor.classList.toggle('is-label', !!l);
      cursor.classList.toggle('is-hover', !l && !!h);
      label.textContent = l ? l.dataset.cursor : '';
      var row = e.target.closest('.irow[data-img]');
      if (row) { if (prevImg.getAttribute('src') !== row.dataset.img) prevImg.src = row.dataset.img; prev.classList.add('is-visible'); }
      else prev.classList.remove('is-visible');
    });
    $$('[data-magnetic]').forEach(function (el) {
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.transform = 'translate(' + (e.clientX - r.left - r.width / 2) * .25 + 'px,' + (e.clientY - r.top - r.height / 2) * .35 + 'px)';
      });
      el.addEventListener('mouseleave', function () { el.style.transform = ''; });
      el.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1), background .4s, color .4s, border-color .4s';
    });
  }

  /* ---------- Text splitting ---------- */
  $$('[data-split]').forEach(function (el) {
    el.innerHTML = el.textContent.split('').map(function (c) { return '<span class="char">' + c + '</span>'; }).join('');
  });
  $$('[data-words]').forEach(function (el) {
    el.innerHTML = el.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w">' + w + '</span>'; }).join(' ');
  });

  /* ---------- Counters ---------- */
  function countUp() {
    $$('[data-count]').forEach(function (el) {
      var end = +el.dataset.count;
      if (!hasGsap || reduced) { el.textContent = end; return; }
      var o = { v: 0 };
      gsap.to(o, { v: end, duration: 2, ease: 'power3.out', onUpdate: function () { el.textContent = Math.round(o.v); } });
    });
  }

  /* ---------- Loader + intro ---------- */
  var loader = $('#loader');
  function finishLoad() {
    document.body.classList.remove('is-loading');
    if (!hasGsap || reduced) {
      loader.style.display = 'none';
      $$('.reveal-up').forEach(function (e) { e.style.opacity = 1; e.style.transform = 'none'; });
      $$('.w').forEach(function (w) { w.style.opacity = 1; });
      countUp(); return;
    }
    var tl = gsap.timeline();
    tl.to('.loader-inner', { yPercent: -40, opacity: 0, duration: .6, ease: 'power3.in' })
      .to('.loader-curtain', { scaleY: 1, duration: .7, ease: 'expo.inOut' }, '-=.2')
      .set(loader, { background: 'transparent' })
      .to('.loader-curtain', { scaleY: 0, transformOrigin: 'top', duration: .9, ease: 'expo.inOut' })
      .set(loader, { display: 'none' })
      .from('.hero-title .char', { yPercent: 110, rotate: 6, duration: 1.3, ease: 'expo.out', stagger: .035 }, '-=.55')
      .from('.hero-media', { scale: 1.15, duration: 2.2, ease: 'expo.out' }, '<')
      .to('.reveal-up', { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: .1 }, '-=1')
      .from('.hero-top > *, .stat, .hero-scroll, .hero-counter, .nav > *', { opacity: 0, y: 20, duration: .9, ease: 'expo.out', stagger: .05 }, '<')
      .add(countUp, '<');
  }
  (function runLoader() {
    var countEl = $('#loaderCount'), n = 0, ready = false;
    var first = slides[0];
    var done = function () { ready = true; };
    if (first.complete) done(); else { first.addEventListener('load', done); first.addEventListener('error', done); }
    setTimeout(done, 2500);
    if (reduced) { finishLoad(); return; }
    (function tick() {
      n += ready ? 6 : (n < 80 ? 2 : 0.3);
      if (n >= 100) { countEl.textContent = 100; setTimeout(finishLoad, 150); return; }
      countEl.textContent = Math.floor(n);
      requestAnimationFrame(tick);
    })();
  })();

  /* ---------- Scroll animations ---------- */
  if (!hasGsap || reduced) return;
  gsap.registerPlugin(ScrollTrigger);

  // hero parallax out
  gsap.to('.hero-title', { yPercent: 35, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero-media', { yPercent: 18, scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  // word-by-word reveals
  $$('[data-words]').forEach(function (el) {
    gsap.to($$('.w', el), { opacity: 1, ease: 'none', stagger: .1, scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true } });
  });

  // headings rise
  $$('.h2, .statement-foot, .film-sub, .giessen-bio, .contact-lede, .contact-grid > div').forEach(function (el) {
    gsap.from(el, { y: 60, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
  });
  gsap.from('.cb-line', { yPercent: 100, duration: 1.4, ease: 'expo.out', stagger: .1, scrollTrigger: { trigger: '.contact-big', start: 'top 85%' } });

  // index rows + film cards + giessen list
  ScrollTrigger.batch('.irow, .giessen-list li, .jstep', { start: 'top 92%', onEnter: function (b) { gsap.from(b, { y: 40, opacity: 0, duration: 1, ease: 'expo.out', stagger: .06 }); } });
  ScrollTrigger.batch('.fcard', { start: 'top 92%', onEnter: function (b) { gsap.from(b, { y: 80, opacity: 0, duration: 1.2, ease: 'expo.out', stagger: .1 }); } });

  // journey line
  gsap.to('#journeyFill', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.journey', start: 'top 70%', end: 'bottom 70%', scrub: true } });

  // horizontal work section (desktop only)
  var mm = gsap.matchMedia();
  mm.add('(min-width: 721px)', function () {
    var dist = function () { return track.scrollWidth - innerWidth; };
    var tween = gsap.to(track, {
      x: function () { return -dist(); }, ease: 'none',
      scrollTrigger: {
        trigger: '#workPin', start: 'top top', end: function () { return '+=' + dist(); },
        pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1,
        onUpdate: function (s) { gsap.set('#workProgress', { scaleX: s.progress }); }
      }
    });
    $$('.wcard [data-parallax]').forEach(function (img) {
      gsap.fromTo(img, { xPercent: -6 }, { xPercent: 6, ease: 'none', scrollTrigger: { trigger: img.closest('.wcard'), containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
    });
  });

  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
