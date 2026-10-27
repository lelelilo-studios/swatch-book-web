// The Swatch Book index: renders the swatches from data/swatches.js, the chapter tabs, search, the care tag
// dialog and deep links (#16-ping). The studio intro plays once per browser session.
(() => {
  'use strict';
  const D = window.SWATCHES || { families: [], games: [] };
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = matchMedia('(pointer: coarse)').matches;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const store = { get: k => { try { return sessionStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { sessionStorage.setItem(k, v); } catch {} } };

  // ---- the studio intro: once per session, never on the way back from a game
  const fromGame = /\/games\//.test(document.referrer) && document.referrer.startsWith(location.origin);
  const playIntro = () => window.LeleliloIntro && window.LeleliloIntro.play({ base: 'lelelilo-intro/' });
  if (!store.get('swatch-intro') && !fromGame && !/[?&]nointro\b/.test(location.search)) { store.set('swatch-intro', '1'); playIntro(); }
  $('#intro-btn').addEventListener('click', () => { const p = playIntro(); if (p && p.then) p.then(() => {}); });

  // ---- WebGPU note
  (async () => {
    let ok = false;
    if (navigator.gpu) {
      for (let i = 0; i < 3 && !ok; i++) {
        try { ok = !!(await navigator.gpu.requestAdapter()); } catch { ok = false; }
        if (!ok) await new Promise(r => setTimeout(r, 300 * (i + 1)));
      }
    }
    $('#gpu-note').hidden = ok;
  })();

  // ---- build the book
  const fam = Object.fromEntries(D.families.map(f => [f.id, f]));
  const book = $('#book');
  const tabs = $('#tabs');
  const allTab = document.createElement('button');
  allTab.className = 'tab'; allTab.type = 'button'; allTab.setAttribute('role', 'tab'); allTab.dataset.f = 'all';
  allTab.style.setProperty('--c', 'var(--gold)');
  allTab.innerHTML = `All <b>${D.games.length}</b>`;
  tabs.append(allTab);
  for (const f of D.families) {
    const n = D.games.filter(g => g.family === f.id).length;
    const t = document.createElement('button');
    t.className = 'tab'; t.type = 'button'; t.setAttribute('role', 'tab'); t.dataset.f = f.id;
    t.style.setProperty('--c', f.color);
    t.innerHTML = `${esc(f.name)} <b>${n}</b>`;
    tabs.append(t);
    const sec = document.createElement('section');
    sec.className = 'chapter'; sec.id = `chapter-${f.id}`; sec.dataset.f = f.id;
    sec.style.setProperty('--c', f.color);
    sec.innerHTML = `<i class="brass tl"></i><i class="brass tr"></i><i class="brass bl"></i><i class="brass br"></i>
      <header class="chapter-head"><h2>${esc(f.name)} <span>· ${n}</span></h2><p>${esc(f.blurb)}</p></header><ol class="swatches"></ol>`;
    const ol = $('.swatches', sec);
    D.games.filter(g => g.family === f.id).forEach((g, i) => {
      const li = document.createElement('li');
      const r = ((parseInt(g.no, 10) * 37) % 9 - 4) * 0.45;
      const media = g.poster
        ? `<img src="${esc(g.poster)}" alt="" loading="lazy" decoding="async" width="600" height="750">${g.clip && !reduced ? `<video muted loop playsinline preload="none" data-src="${esc(g.clip)}"></video>` : ''}`
        : `<span class="unsewn"><span><b>${esc(g.title)}</b>still on the<br>sewing table</span></span>`;
      li.innerHTML = `<a class="swatch" href="games/${esc(g.slug)}/" data-slug="${esc(g.slug)}" style="--r:${r}deg;--tone:${esc(g.theme)}" aria-label="${esc(g.title)}, swatch ${esc(g.no)}: ${esc(g.style)}">
        <span class="pin" aria-hidden="true"></span><span class="cloth">${media}</span>
        <span class="label"><span class="no">No. ${esc(g.no)}</span><span class="name">${esc(g.title)}</span><span class="style">${esc(g.style)}</span></span></a>`;
      ol.append(li);
    });
    book.append(sec);
  }

  // ---- filters and search
  let current = 'all';
  const search = $('#search');
  function apply() {
    const q = search.value.trim().toLowerCase();
    let shown = 0;
    for (const sec of $$('.chapter')) {
      let any = 0;
      for (const a of $$('.swatch', sec)) {
        const g = D.games.find(x => x.slug === a.dataset.slug);
        const hay = `${g.no} ${g.title} ${g.style} ${g.tagline} ${fam[g.family]?.name ?? ''}`.toLowerCase();
        const vis = (current === 'all' || g.family === current) && (!q || hay.includes(q));
        a.parentElement.hidden = !vis; any += vis; shown += vis;
      }
      sec.hidden = !any;
    }
    $('#empty').hidden = shown > 0;
    for (const t of $$('.tab')) t.setAttribute('aria-selected', String(t.dataset.f === current));
  }
  tabs.addEventListener('click', e => {
    const t = e.target.closest('.tab'); if (!t) return;
    current = t.dataset.f; apply();
    const target = current === 'all' ? $('#book') : $(`#chapter-${current}`);
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + scrollY - $('.chapters').offsetHeight - 6, behavior: reduced ? 'auto' : 'smooth' });
  });
  search.addEventListener('input', apply);
  apply();

  // ---- hover previews: a looping clip plays over the poster (one at a time)
  let live = null;
  const stopLive = () => { if (live) { const v = $('video', live); if (v) v.pause(); live.classList.remove('live'); live = null; } };
  const startLive = a => {
    if (live === a) return; stopLive();
    const v = $('video', a); if (!v) return;
    if (!v.src) v.src = v.dataset.src;
    live = a; v.currentTime = 0;
    v.play().then(() => a.classList.add('live')).catch(() => {});
  };
  if (!coarse) {
    book.addEventListener('pointerover', e => { const a = e.target.closest('.swatch'); if (a) startLive(a); });
    book.addEventListener('pointerleave', stopLive);
    book.addEventListener('focusin', e => { const a = e.target.closest('.swatch'); if (a) startLive(a); });
  }

  // ---- the care tag
  const dlg = $('#tag');
  const facts = $('#tag-facts');
  let opened = null;
  let qrLib = null;
  function qr(url) {
    const box = $('#tag-qr');
    const draw = () => { try { const q = window.qrcode(0, 'M'); q.addData(url); q.make(); box.innerHTML = q.createSvgTag({ cellSize: 3, margin: 0, scalable: true }); } catch { $('#tag-phone').hidden = true; } };
    if (window.qrcode) return draw();
    if (!qrLib) {
      qrLib = new Promise((res, rej) => { const s = document.createElement('script'); s.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js'; s.onload = res; s.onerror = rej; document.head.append(s); });
    }
    qrLib.then(draw).catch(() => { $('#tag-phone').hidden = true; });
  }
  function openTag(slug, push = true) {
    const g = D.games.find(x => x.slug === slug); if (!g) return;
    opened = g;
    const url = new URL(`games/${g.slug}/`, location.href).href;
    dlg.style.setProperty('--tone', g.theme);
    $('#tag-no').textContent = g.no;
    $('#tag-title').textContent = g.title;
    $('#tag-tagline').textContent = g.tagline;
    $('#tag-media').innerHTML = g.clip && !reduced
      ? `<video src="${esc(g.clip)}" ${g.thumb ? `poster="${esc(g.thumb)}"` : ''} muted loop playsinline autoplay></video>`
      : (g.thumb || g.poster) ? `<img src="${esc(g.thumb || g.poster)}" alt="${esc(g.title)}, in play">` : `<span class="unsewn">Still on the sewing table</span>`;
    const play = $('#tag-play');
    play.href = `games/${g.slug}/`;
    play.setAttribute('aria-disabled', String(!g.ready));
    const controls = (g.controls || []).map(c => `<b>${esc(c.action)}</b><span>${esc([c.touch, c.keys].filter(Boolean).join(' · '))}</span>`).join('');
    const rows = [
      ['Style', esc(g.style)],
      g.how_to_play?.length ? ['Play', `<ul>${g.how_to_play.map(t => `<li>${esc(t)}</li>`).join('')}</ul>`] : null,
      controls ? ['Controls', `<div class="controls">${controls}</div>`] : null,
      g.palette?.length ? ['Colours', `<div class="swatches-dots">${g.palette.slice(0, 8).map(c => `<i style="background:${esc(c)}"></i>`).join('')}</div>`] : null,
      g.fonts?.length ? ['Type', esc(g.fonts.join(', '))] : null,
    ].filter(Boolean);
    facts.innerHTML = rows.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
    const phone = !coarse && g.ready;
    $('#tag-phone').hidden = !phone;
    if (phone) qr(url);
    if (!dlg.open) dlg.showModal();
    $('.tag', dlg).scrollTop = 0;
    if (push && location.hash !== `#${g.slug}`) history.pushState(null, '', `#${g.slug}`);
  }
  function closeTag() {
    if (dlg.open) dlg.close();
  }
  dlg.addEventListener('close', () => {
    $('#tag-media').innerHTML = '';
    if (location.hash) history.pushState(null, '', location.pathname + location.search);
    const a = opened && $(`.swatch[data-slug="${opened.slug}"]`); if (a) a.focus({ preventScroll: true });
  });
  for (const d of $$('.tag-dialog')) {
    d.addEventListener('click', e => { if (e.target === d || e.target.closest('[data-close]')) d.close(); });
  }
  book.addEventListener('click', e => {
    const a = e.target.closest('.swatch'); if (!a) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault(); openTag(a.dataset.slug);
  });
  $('#tag-copy').addEventListener('click', async () => {
    if (!opened) return;
    const url = new URL(`#${opened.slug}`, location.href).href;
    try { await navigator.clipboard.writeText(url); toast('Link copied'); } catch { toast(url); }
  });
  function toast(msg) {
    const t = document.createElement('div'); t.className = 'toast'; t.role = 'status'; t.textContent = msg; document.body.append(t);
    setTimeout(() => t.remove(), 1800);
  }
  const fromHash = () => { const s = decodeURIComponent(location.hash.slice(1)); if (D.games.some(g => g.slug === s)) openTag(s, false); else closeTag(); };
  addEventListener('popstate', fromHash);
  if (location.hash) fromHash();

  // ---- about
  const about = $('#about');
  const openAbout = e => { e && e.preventDefault(); about.showModal(); };
  $('#about-btn').addEventListener('click', openAbout);
  $('#about-link').addEventListener('click', openAbout);

  // ---- keys: / searches, arrows move between swatches, Enter opens, P plays
  addEventListener('keydown', e => {
    if (e.target === search) { if (e.key === 'Escape') { search.value = ''; apply(); search.blur(); } return; }
    if (e.key === '/' && !dlg.open) { e.preventDefault(); search.focus(); return; }
    if (dlg.open && (e.key === 'p' || e.key === 'P') && opened?.ready) { location.href = `games/${opened.slug}/`; return; }
    const a = document.activeElement?.closest?.('.swatch');
    if (!a || dlg.open) return;
    const all = $$('.swatch').filter(x => !x.parentElement.hidden);
    const i = all.indexOf(a);
    const cols = Math.round(a.closest('.swatches').clientWidth / a.parentElement.clientWidth) || 2;
    const step = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: cols, ArrowUp: -cols }[e.key];
    if (step) { e.preventDefault(); const n = all[Math.max(0, Math.min(all.length - 1, i + step))]; n.focus(); n.scrollIntoView({ block: 'nearest', behavior: reduced ? 'auto' : 'smooth' }); }
  });

  // ---- gold motes drifting up the night (paused when hidden or with reduced motion)
  const cv = $('#motes');
  const cx = cv.getContext('2d');
  let motes = [], W = 0, H = 0, dpr = 1, raf = 0;
  function size() {
    dpr = Math.min(2, devicePixelRatio || 1); W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(70, W * H / 16000));
    motes = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, r: .6 + Math.random() * 1.6, v: 4 + Math.random() * 10, p: Math.random() * 6.28, a: .25 + Math.random() * .55 }));
  }
  function frame(t) {
    cx.clearRect(0, 0, W, H);
    for (const m of motes) {
      m.y -= m.v / 60; m.x += Math.sin(t / 2400 + m.p) * .15;
      if (m.y < -6) { m.y = H + 6; m.x = Math.random() * W; }
      const tw = .55 + .45 * Math.sin(t / 700 + m.p * 3);
      cx.beginPath(); cx.arc(m.x, m.y, m.r, 0, 6.283);
      cx.fillStyle = `rgba(255, 214, 120, ${m.a * tw})`; cx.shadowColor = 'rgba(255, 201, 74, .8)'; cx.shadowBlur = 6; cx.fill();
    }
    raf = requestAnimationFrame(frame);
  }
  size(); addEventListener('resize', size);
  if (!reduced) {
    raf = requestAnimationFrame(frame);
    document.addEventListener('visibilitychange', () => { cancelAnimationFrame(raf); if (!document.hidden) raf = requestAnimationFrame(frame); });
  } else { frame(0); cancelAnimationFrame(raf); }
})();
