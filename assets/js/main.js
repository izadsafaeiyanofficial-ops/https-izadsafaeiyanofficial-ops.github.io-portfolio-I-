(function () {
  'use strict';

  var SITE = window.SITE;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var hasGsap = typeof window.gsap !== 'undefined';
  if (hasGsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
  if (!hasGsap || reduce) document.documentElement.classList.add('no-anim');

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function pad(n) { return (n < 10 ? '0' : '') + n; }
  function byId(id) { for (var i = 0; i < SITE.featured.length; i++) if (SITE.featured[i].id === id) return SITE.featured[i]; return null; }
  function ytEmbed(id) { return 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0&modestbranding=1&playsinline=1'; }

  /* ---------- Smooth scroll ---------- */
  var lenis = null;
  if (!reduce && typeof window.Lenis !== 'undefined') {
    lenis = new Lenis({ duration: 1.15, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }, smoothWheel: true });
    if (hasGsap) {
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      (function raf(t) { lenis.raf(t); requestAnimationFrame(raf); })(0);
    }
  }
  var locks = 0;
  function lockScroll(on) {
    locks = Math.max(0, locks + (on ? 1 : -1));
    document.body.classList.toggle('is-locked', locks > 0);
    if (lenis) { if (locks > 0) lenis.stop(); else lenis.start(); }
  }
  function scrollToTarget(sel) {
    var el = sel === '#top' ? 0 : $(sel);
    if (el === null) return;
    if (lenis) lenis.scrollTo(el, { offset: 0, duration: 1.4 });
    else window.scrollTo({ top: el === 0 ? 0 : el.getBoundingClientRect().top + window.scrollY, behavior: reduce ? 'auto' : 'smooth' });
  }

  /* ---------- Clock & year ---------- */
  var clock = $('#clock');
  function tick() {
    try { clock.textContent = new Intl.DateTimeFormat('de-DE', { hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin' }).format(new Date()); }
    catch (e) { var d = new Date(); clock.textContent = pad(d.getHours()) + ':' + pad(d.getMinutes()); }
  }
  tick(); setInterval(tick, 15000);
  $('#year').textContent = new Date().getFullYear();

  /* ---------- Hero slideshow + timecode ---------- */
  var heroSlides = [
    ['assets/img/hz-04-sofa-trio.jpg', 'Hazfīyāt', 'Keller Theater Frankfurt · 2026'],
    ['assets/img/etwas-22-nasir.jpg', 'Etwas kommt mir bekannt vor', 'Stadttheater Gießen · 2025'],
    ['assets/img/p5-12-tear.jpg', '5 + 1 = 9', 'Dargaz · 2015'],
    ['assets/img/hz-02-mama-lying.jpg', 'Hazfīyāt', 'Mama & Schima · 2026'],
    ['assets/img/tiger-33-wide.jpg', 'Tiger', 'Dargaz · 2019'],
    ['assets/img/amp-14-scream-5.jpg', 'The Scream Impression', 'Rezvan Festival, Mashhad · 2016']
  ];
  var heroMedia = $('#heroMedia');
  heroMedia.innerHTML = heroSlides.map(function (s, i) {
    return '<img src="' + s[0] + '" alt="" ' + (i ? 'loading="lazy"' : 'class="is-active"') + '>';
  }).join('');
  var heroImgs = $$('img', heroMedia), heroI = 0;
  $('#heroTotal').textContent = pad(heroSlides.length);
  function setHero(i) {
    heroImgs[heroI].classList.remove('is-active');
    heroI = i;
    var img = heroImgs[heroI];
    img.classList.remove('is-active'); void img.offsetWidth; img.classList.add('is-active');
    $('#heroIdx').textContent = pad(i + 1);
    $('#vfScene').textContent = 'SC ' + pad(i + 1) + ' · ' + heroSlides[i][1];
    $('#vfCap').textContent = heroSlides[i][2];
  }
  setHero(0);
  if (!reduce) setInterval(function () { if (!document.hidden) setHero((heroI + 1) % heroSlides.length); }, 5600);

  var tcEl = $('#timecode'), t0 = performance.now();
  (function tc() {
    var f = Math.floor((performance.now() - t0) / 40), s = Math.floor(f / 25);
    tcEl.textContent = pad(Math.floor(s / 3600)) + ':' + pad(Math.floor(s / 60) % 60) + ':' + pad(s % 60) + ':' + pad(f % 25);
    requestAnimationFrame(tc);
  })();

  /* ---------- Nav ---------- */
  var nav = $('#nav'), lastY = 0;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    nav.classList.toggle('is-solid', y > 40);
    nav.classList.toggle('is-hidden', y > lastY && y > window.innerHeight * .9 && !menu.classList.contains('is-open'));
    lastY = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  var menu = $('#menu'), burger = $('#burger');
  function toggleMenu(force) {
    var open = typeof force === 'boolean' ? force : !menu.classList.contains('is-open');
    if (open === menu.classList.contains('is-open')) return;
    menu.classList.toggle('is-open', open);
    menu.setAttribute('aria-hidden', String(!open));
    burger.setAttribute('aria-expanded', String(open));
    burger.firstElementChild.textContent = open ? 'Close' : 'Menu';
    lockScroll(open);
  }
  burger.addEventListener('click', function () { toggleMenu(); });

  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-scroll]');
    if (!a) return;
    var href = a.getAttribute('href');
    if (!href || href.charAt(0) !== '#') return;
    e.preventDefault();
    var wasOpen = menu.classList.contains('is-open');
    if (wasOpen) toggleMenu(false);
    setTimeout(function () { scrollToTarget(href); }, wasOpen ? 350 : 0);
  });

  if ('IntersectionObserver' in window) {
    var links = $$('.nav-links a');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('href') === '#' + en.target.id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['now', 'work', 'screen', 'credits', 'about', 'contact'].forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
  }

  /* ---------- Now playing: billing + stills ---------- */
  var hz = byId('hazfiyat');
  $('#billing').innerHTML = hz.credits.map(function (c) {
    var names = c[1].split(' · ').map(function (n) {
      return '<span class="b-n' + (/Izad/.test(n) ? ' is-me' : '') + '">' + esc(n) + '</span>';
    }).join(' ');
    return '<span class="b-l">' + esc(c[0]) + '</span>' + names;
  }).join(' ');

  $('#stillsTrack').innerHTML = hz.images.map(function (im, i) {
    return '<figure class="still" data-i="' + i + '"><img src="' + im.src + '" alt="' + esc(im.cap) + '" loading="lazy" draggable="false">' +
      '<span class="s-no mono">' + pad(i + 1) + '</span><figcaption>' + esc(im.cap) + '</figcaption></figure>';
  }).join('');

  (function dragScroll(el) {
    var down = false, sx = 0, sl = 0, moved = 0;
    el.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse') return;
      down = true; moved = 0; sx = e.clientX; sl = el.scrollLeft; el.classList.add('is-drag');
    });
    window.addEventListener('pointermove', function (e) {
      if (!down) return;
      var dx = e.clientX - sx; moved = Math.max(moved, Math.abs(dx)); el.scrollLeft = sl - dx;
    });
    window.addEventListener('pointerup', function () { down = false; el.classList.remove('is-drag'); });
    el.addEventListener('click', function (e) {
      if (moved > 6) { e.preventDefault(); e.stopPropagation(); return; }
      var f = e.target.closest('.still');
      if (f) openLightbox(hz.images, +f.dataset.i, hz.title);
    }, true);
    el.addEventListener('wheel', function (e) {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) || e.shiftKey) return;
      e.stopPropagation();
    }, { passive: true });
  })($('#stills'));

  /* ---------- Selected work ---------- */
  var workList = $('#workList');
  workList.innerHTML = SITE.featured.map(function (f, i) {
    return '<li class="work-row rv"><button data-open="' + f.id + '" data-img="' + f.cover + '" data-cursor="Open">' +
      '<span class="wr-no mono">' + pad(i + 1) + '</span>' +
      '<span class="wr-thumb"><img src="' + f.cover + '" alt="" loading="lazy"></span>' +
      '<span class="wr-title">' + esc(f.title) + (f.sub ? '<small>' + esc(f.sub) + '</small>' : '') + '</span>' +
      '<span class="wr-year mono">' + esc(f.year) + '</span>' +
      '<span class="wr-place">' + esc(f.place) + '</span>' +
      '<span class="wr-role mono">' + esc(f.role) + '</span>' +
      '<span class="wr-arrow" aria-hidden="true">↗</span></button></li>';
  }).join('');

  /* Hover peek */
  var peek = $('#peek'), peekImg = $('#peekImg');
  if (finePointer && hasGsap) {
    var px = gsap.quickTo(peek, 'x', { duration: .7, ease: 'power3' });
    var py = gsap.quickTo(peek, 'y', { duration: .7, ease: 'power3' });
    var pr = gsap.quickTo(peek, 'rotation', { duration: .9, ease: 'power3' });
    var lastX = 0;
    window.addEventListener('mousemove', function (e) { px(e.clientX); py(e.clientY); pr(Math.max(-8, Math.min(8, (e.clientX - lastX) * .4))); lastX = e.clientX; });
    $$('.work-row button').forEach(function (b) {
      b.addEventListener('mouseenter', function () { peekImg.src = b.dataset.img; peek.classList.add('is-on'); });
      b.addEventListener('mouseleave', function () { peek.classList.remove('is-on'); });
    });
  }

  /* ---------- Project overlay ---------- */
  var project = $('#project'), projectIn = $('#projectIn'), currentProject = null;
  function openProject(id) {
    var f = byId(id); if (!f) return;
    var idx = SITE.featured.indexOf(f), next = SITE.featured[(idx + 1) % SITE.featured.length];
    currentProject = f;
    projectIn.innerHTML =
      '<header class="pj-hero"><img src="' + f.cover + '" alt="">' +
        '<div class="pj-hero-text"><div class="pj-kicker mono">' + esc(f.year) + ' · ' + esc(f.place) + ' · ' + esc(f.role) + '</div>' +
        '<h2 class="pj-title">' + esc(f.title) + '</h2>' + (f.sub ? '<p class="pj-sub"><em>' + esc(f.sub) + '</em></p>' : '') + '</div></header>' +
      '<div class="wrap"><div class="pj-body"><div>' +
        '<p class="pj-text">' + esc(f.text) + '</p>' +
        (f.awards && f.awards.length ? '<div class="pj-awards">' + f.awards.map(function (a) { return '<span>✦ ' + esc(a) + '</span>'; }).join('') + '</div>' : '') +
        '<div class="pj-actions">' + (f.trailer ? '<button class="btn btn-solid" data-video="' + f.trailer + '" data-title="' + esc(f.title) + ' — Trailer">▶ Trailer</button>' : '') +
        '<button class="btn" data-lb="0">View photos <span>(' + f.images.length + ')</span></button></div>' +
      '</div><dl class="pj-credits">' +
        '<div><dt>Direction</dt><dd>Izad Safaeiyan</dd></div>' +
        (f.credits || []).filter(function (c) { return !/Izad/.test(c[1]); }).map(function (c) { return '<div><dt>' + esc(c[0]) + '</dt><dd>' + esc(c[1]) + '</dd></div>'; }).join('') +
        '<div><dt>Venue</dt><dd>' + esc(f.place) + '</dd></div><div><dt>Year</dt><dd>' + esc(f.year) + '</dd></div>' +
      '</dl></div>' +
      '<div class="pj-gallery">' + f.images.map(function (im, i) {
        return '<figure data-lb="' + i + '"><img src="' + im.src + '" alt="' + esc(im.cap) + '" loading="lazy"><figcaption>' + esc(im.cap) + '</figcaption></figure>';
      }).join('') + '</div>' +
      '<button class="pj-next" data-open="' + next.id + '"><span class="mono">Next production →</span><b>' + esc(next.title) + '</b></button></div>';
    project.scrollTop = 0;
    if (!project.classList.contains('is-open')) {
      project.classList.add('is-open'); project.setAttribute('aria-hidden', 'false'); lockScroll(true);
      setTimeout(function () { $('#projClose').focus({ preventScroll: true }); }, 50);
    }
  }
  function closeProject() {
    if (!project.classList.contains('is-open')) return;
    project.classList.remove('is-open'); project.setAttribute('aria-hidden', 'true'); lockScroll(false);
  }
  $('#projClose').addEventListener('click', closeProject);
  projectIn.addEventListener('click', function (e) {
    var t = e.target.closest('[data-lb]');
    if (t && currentProject) openLightbox(currentProject.images, +t.dataset.lb, currentProject.title);
  });

  /* ---------- Lightbox ---------- */
  var lb = $('#lightbox'), lbImg = $('#lbImg'), lbList = [], lbI = 0, lbTitle = '';
  function lbShow(i) {
    lbI = (i + lbList.length) % lbList.length;
    var it = lbList[lbI];
    lbImg.style.opacity = 0;
    lbImg.onload = function () { lbImg.style.transition = 'opacity .35s'; lbImg.style.opacity = 1; };
    lbImg.src = it.src; lbImg.alt = it.cap;
    $('#lbCap').textContent = it.cap;
    $('#lbCount').textContent = pad(lbI + 1) + ' / ' + pad(lbList.length);
    $('#lbTitle').textContent = lbTitle;
    [lbI + 1, lbI - 1].forEach(function (j) { var n = lbList[(j + lbList.length) % lbList.length]; if (n) (new Image()).src = n.src; });
  }
  function openLightbox(list, i, title) {
    lbList = list; lbTitle = title || '';
    lbShow(i || 0);
    if (!lb.classList.contains('is-open')) { lb.classList.add('is-open'); lb.setAttribute('aria-hidden', 'false'); lockScroll(true); }
  }
  function closeLightbox() {
    if (!lb.classList.contains('is-open')) return;
    lb.classList.remove('is-open'); lb.setAttribute('aria-hidden', 'true'); lockScroll(false);
  }
  $('#lbClose').addEventListener('click', closeLightbox);
  $('#lbPrev').addEventListener('click', function () { lbShow(lbI - 1); });
  $('#lbNext').addEventListener('click', function () { lbShow(lbI + 1); });
  (function swipe() {
    var sx = null;
    lb.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', function (e) {
      if (sx === null) return;
      var dx = e.changedTouches[0].clientX - sx; sx = null;
      if (Math.abs(dx) > 45) lbShow(lbI + (dx < 0 ? 1 : -1));
    });
  })();

  /* ---------- Video modal ---------- */
  var vm = $('#vmodal'), vmFrame = $('#vmFrame');
  function openVideo(id, title) {
    stopProjector();
    vmFrame.innerHTML = '<iframe src="' + ytEmbed(id) + '" title="' + esc(title || 'Video') + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
    $('#vmTitle').textContent = title || '';
    vm.classList.add('is-open'); vm.setAttribute('aria-hidden', 'false'); lockScroll(true);
  }
  function closeVideo() {
    if (!vm.classList.contains('is-open')) return;
    vm.classList.remove('is-open'); vm.setAttribute('aria-hidden', 'true'); lockScroll(false);
    setTimeout(function () { vmFrame.innerHTML = ''; }, 300);
  }
  $('#vmClose').addEventListener('click', closeVideo);
  vm.addEventListener('click', function (e) { if (e.target === vm || e.target === vmFrame) closeVideo(); });

  document.addEventListener('click', function (e) {
    var v = e.target.closest('[data-video]');
    if (v) { e.preventDefault(); openVideo(v.dataset.video, v.dataset.title); return; }
    var o = e.target.closest('[data-open]');
    if (o) { e.preventDefault(); openProject(o.dataset.open); }
  });

  document.addEventListener('keydown', function (e) {
    if (lb.classList.contains('is-open')) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowRight') lbShow(lbI + 1);
      else if (e.key === 'ArrowLeft') lbShow(lbI - 1);
      return;
    }
    if (e.key !== 'Escape') return;
    if (vm.classList.contains('is-open')) closeVideo();
    else if (project.classList.contains('is-open')) closeProject();
    else if (menu.classList.contains('is-open')) toggleMenu(false);
  });

  /* ---------- Screening room ---------- */
  var films = SITE.films, cur = 0, cat = 'all';
  var progList = $('#progList'), projector = $('#projector'), projImg = $('#projImg'), projFrame = $('#projFrame');
  var catName = { stage: 'Stage', move: 'Dance & circus', film: 'Film' };
  progList.innerHTML = films.map(function (f, i) {
    return '<li class="prog-item" data-i="' + i + '" data-cat="' + f.cat + '"><button>' +
      '<span class="pi-thumb"><img src="' + f.thumb + '" alt="" loading="lazy"><span class="pi-eq"><i></i><i></i><i></i></span></span>' +
      '<span class="pi-text"><span class="pi-top mono"><span>' + pad(i + 1) + ' · ' + esc(catName[f.cat] || '') + '</span><span class="pi-plat">' + (f.yt ? '▶ Play' : 'IG ↗') + '</span></span>' +
      '<span class="pi-title">' + esc(f.title) + (f.sub ? ' — ' + esc(f.sub) : '') + '</span>' +
      '<span class="pi-label">' + esc(f.label) + '</span></span></button></li>';
  }).join('');
  var progItems = $$('.prog-item', progList);

  function stopProjector() {
    projFrame.innerHTML = '';
    projector.classList.remove('is-playing');
  }
  function selectFilm(i, scrollList) {
    cur = i;
    var f = films[i];
    stopProjector();
    projImg.classList.add('is-swap');
    var src = f.thumb;
    setTimeout(function () {
      projImg.onload = function () { projImg.classList.remove('is-swap'); };
      projImg.src = src; projImg.alt = f.title;
      if (projImg.complete) projImg.classList.remove('is-swap');
    }, 180);
    $('#projNo').textContent = pad(i + 1);
    $('#projLabel').textContent = f.label;
    $('#projPlayTxt').textContent = f.yt ? 'Play' : 'Watch on Instagram ↗';
    $('#plateTitle').textContent = f.title;
    $('#plateSub').innerHTML = f.sub ? '<em>' + esc(f.sub) + '</em>' : '';
    $('#plateDesc').textContent = f.desc || '';
    $('#plateMeta').textContent = f.meta + ' · ' + f.label;
    $('#platePlatform').textContent = f.yt ? 'YouTube' : 'Instagram ↗';
    progItems.forEach(function (li) { li.classList.toggle('is-active', +li.dataset.i === i); });
    if (scrollList) {
      var li = progItems[i];
      progList.scrollTo({ top: li.offsetTop - progList.offsetTop - 8, behavior: reduce ? 'auto' : 'smooth' });
    }
  }
  function playFilm() {
    var f = films[cur];
    if (f.yt) {
      projFrame.innerHTML = '<iframe src="' + ytEmbed(f.yt) + '" title="' + esc(f.title) + '" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';
      projector.classList.add('is-playing');
    } else if (f.href) {
      window.open(f.href, '_blank', 'noopener');
    }
  }
  function visibleIdx() { return progItems.filter(function (li) { return !li.classList.contains('is-hidden'); }).map(function (li) { return +li.dataset.i; }); }
  function step(d) {
    var v = visibleIdx(); if (!v.length) return;
    var p = v.indexOf(cur); p = p < 0 ? 0 : (p + d + v.length) % v.length;
    selectFilm(v[p], true);
  }
  progList.addEventListener('click', function (e) {
    var li = e.target.closest('.prog-item'); if (!li) return;
    var i = +li.dataset.i;
    if (i === cur && !projector.classList.contains('is-playing')) { playFilm(); return; }
    selectFilm(i, false);
    if (window.innerWidth <= 1100) {
      var top = projector.getBoundingClientRect().top;
      if (top < 0 || top > window.innerHeight * .5) { if (lenis) lenis.scrollTo(projector, { offset: -80 }); else projector.scrollIntoView({ behavior: 'smooth' }); }
    }
  });
  $('#projPlay').addEventListener('click', playFilm);
  $('#projPoster').addEventListener('click', playFilm);
  $('#prevReel').addEventListener('click', function () { step(-1); });
  $('#nextReel').addEventListener('click', function () { step(1); });
  $('#tabs').addEventListener('click', function (e) {
    var b = e.target.closest('.tab'); if (!b) return;
    cat = b.dataset.cat;
    $$('.tab', $('#tabs')).forEach(function (t) { t.classList.toggle('is-active', t === b); });
    progItems.forEach(function (li) { li.classList.toggle('is-hidden', cat !== 'all' && li.dataset.cat !== cat); });
    var v = visibleIdx();
    $('#progCount').textContent = v.length;
    progList.scrollTop = 0;
    if (v.length && v.indexOf(cur) < 0) selectFilm(v[0], false);
  });
  $('#progCount').textContent = films.length;
  selectFilm(0, false);

  /* ---------- Credits roll ---------- */
  $('#roll').innerHTML = SITE.phases.map(function (ph) {
    return '<div class="phase rv"><div class="phase-head"><span class="phase-years">' + esc(ph.years) + '</span><span class="phase-title mono">' + esc(ph.title) + '</span></div>' +
      ph.items.map(function (it) {
        var inner = '<span class="cr-date mono">' + esc(it.date) + '</span><span class="cr-title">' + esc(it.title) + '</span>' +
          '<span class="cr-role">' + esc(it.role) + '</span><span class="cr-meta">' + esc(it.meta) + '</span>';
        var cls = 'credit is-' + it.type;
        if (it.gallery) return '<button class="' + cls + '" data-open="' + it.gallery + '" data-type="' + it.type + '">' + inner + '<span class="cr-go">→</span></button>';
        if (it.href) return '<a class="' + cls + '" href="' + it.href + '" target="_blank" rel="noopener noreferrer" data-type="' + it.type + '">' + inner + '<span class="cr-go">↗</span></a>';
        return '<div class="' + cls + '" data-type="' + it.type + '">' + inner + '<span class="cr-go"></span></div>';
      }).join('') + '</div>';
  }).join('');
  $('#creditFilter').addEventListener('click', function (e) {
    var b = e.target.closest('.tab'); if (!b) return;
    var f = b.dataset.filter;
    $$('.tab', $('#creditFilter')).forEach(function (t) { t.classList.toggle('is-active', t === b); });
    $$('.credit').forEach(function (c) { c.classList.toggle('is-hidden', f !== 'all' && c.dataset.type !== f); });
    $$('.phase').forEach(function (p) { p.style.display = $$('.credit:not(.is-hidden)', p).length ? '' : 'none'; });
    if (window.ScrollTrigger) ScrollTrigger.refresh();
  });

  /* ---------- Cursor ---------- */
  if (finePointer && hasGsap) {
    var cursor = $('#cursor'), cLabel = $('#cursorLabel');
    var cx = gsap.quickTo(cursor, 'x', { duration: .18, ease: 'power3' });
    var cy = gsap.quickTo(cursor, 'y', { duration: .18, ease: 'power3' });
    window.addEventListener('mousemove', function (e) { cx(e.clientX); cy(e.clientY); });
    document.addEventListener('mouseover', function (e) {
      var l = e.target.closest('[data-cursor]');
      if (l) { cLabel.textContent = l.dataset.cursor; cursor.classList.add('is-label'); cursor.classList.remove('is-hover'); return; }
      cursor.classList.remove('is-label');
      cursor.classList.toggle('is-hover', !!e.target.closest('a, button, .still, .pj-gallery figure'));
    });
    document.addEventListener('mouseleave', function () { cursor.style.opacity = 0; });
    document.addEventListener('mouseenter', function () { cursor.style.opacity = 1; });
  }

  /* ---------- Text splitting ---------- */
  $$('[data-words]').forEach(function (el) {
    el.innerHTML = el.textContent.trim().split(/\s+/).map(function (w) { return '<span class="w">' + esc(w) + '</span>'; }).join(' ');
  });
  $$('[data-chars]').forEach(function (el) {
    var t = el.textContent;
    el.setAttribute('aria-label', t);
    el.innerHTML = Array.from(t).map(function (c) { return '<span class="ch" aria-hidden="true">' + esc(c) + '</span>'; }).join('');
  });

  /* ---------- Intro + scroll animations ---------- */
  var leader = $('#leader');
  function finishIntro() {
    document.body.classList.remove('is-loading');
    if (leader) leader.remove();
    if (lenis) lenis.start();
  }

  if (!hasGsap || reduce) {
    finishIntro();
    $$('.w').forEach(function (w) { w.style.opacity = 1; });
    return;
  }

  if (lenis) lenis.stop();
  gsap.set('.ht-word', { yPercent: 110 });
  gsap.set('.hero-kicker, .hero-foot, .vf', { opacity: 0 });

  var sweep = $('#leaderSweep'), num = $('#leaderNum');
  var intro = gsap.timeline({ onComplete: finishIntro });
  [3, 2, 1].forEach(function (n) {
    intro.call(function () { num.textContent = n; })
      .fromTo(sweep, { '--a': '0deg' }, { '--a': '360deg', duration: .5, ease: 'none' });
  });
  intro
    .to(leader, { opacity: 0, duration: .35, ease: 'power2.out' })
    .fromTo('.hero-media', { scale: 1.15 }, { scale: 1, duration: 2, ease: 'power3.out' }, '<')
    .to('.ht-word', { yPercent: 0, duration: 1.3, stagger: .12, ease: 'expo.out' }, '<.05')
    .to('.vf', { opacity: 1, duration: .8 }, '<.4')
    .to('.hero-kicker, .hero-foot', { opacity: 1, duration: .8, stagger: .1 }, '<.1');

  // Hero exit parallax
  gsap.to('.hero-title', { yPercent: -18, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  gsap.to('.hero-media', { yPercent: 14, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  // Section head lines
  $$('.sec-line').forEach(function (l) {
    gsap.from(l, { scaleX: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: l, start: 'top 90%' } });
  });
  $$('.h-big').forEach(function (h) {
    gsap.from(h, { y: 60, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 88%' } });
  });

  // Hazfiyat title chars
  gsap.from('.now-title .ch', {
    yPercent: 105, duration: 1.2, stagger: .045, ease: 'expo.out',
    scrollTrigger: { trigger: '.now-title', start: 'top 85%' }
  });
  gsap.fromTo('.now-poster-in', { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: '.now-poster', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.from('.now-poster', { clipPath: 'inset(12% 12% 12% 12%)', duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.now-poster', start: 'top 85%' } });
  gsap.from('.billing', { opacity: 0, y: 30, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: '.billing', start: 'top 90%' } });
  gsap.from('.still', { x: 120, opacity: 0, duration: 1.3, stagger: .06, ease: 'expo.out', scrollTrigger: { trigger: '.stills', start: 'top 88%' } });

  // Rows
  ScrollTrigger.batch('.rv', {
    start: 'top 92%',
    onEnter: function (els) { gsap.to(els, { opacity: 1, y: 0, duration: 1, stagger: .07, ease: 'expo.out', overwrite: true }); }
  });

  gsap.from('.projector', { clipPath: 'inset(8% 8% 8% 8%)', duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.cinema', start: 'top 85%' } });
  gsap.from('.programme', { x: 60, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.cinema', start: 'top 85%' } });

  // Words light up
  $$('[data-words]').forEach(function (el) {
    gsap.to($$('.w', el), { opacity: 1, stagger: .08, ease: 'none', scrollTrigger: { trigger: el, start: 'top 80%', end: 'bottom 45%', scrub: true } });
  });

  gsap.fromTo('.portrait img', { yPercent: -8 }, { yPercent: 0, ease: 'none', scrollTrigger: { trigger: '.portrait', start: 'top bottom', end: 'bottom top', scrub: true } });
  gsap.from('.chapter', { y: 40, opacity: 0, duration: 1, stagger: .08, ease: 'expo.out', scrollTrigger: { trigger: '.chapters', start: 'top 88%' } });
  gsap.fromTo('.cb-line > span', { yPercent: 110 }, { yPercent: 0, duration: 1.3, stagger: .12, ease: 'expo.out', scrollTrigger: { trigger: '.contact-big', start: 'top 85%' } });
  gsap.from('.fin', { yPercent: 40, opacity: 0, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.footer', start: 'top 95%' } });

  window.addEventListener('load', function () { ScrollTrigger.refresh(); });
})();
