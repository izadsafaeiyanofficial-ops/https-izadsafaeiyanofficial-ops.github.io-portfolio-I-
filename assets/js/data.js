/* Portfolio content — edit here to update the site */
window.SITE = (function () {
  var I = 'assets/img/';

  /* Featured productions with photo galleries (horizontal "Selected Work") */
  var featured = [
    {
      id: 'etwas', title: 'Etwas kommt mir bekannt vor', year: '2025', place: 'Stadttheater Gießen',
      role: 'Director', playwright: 'Allex (Liat) Fassberg',
      text: 'Directing debut at Stadttheater Gießen. With Nasir Formuli, Roman Kurtz and Nina Plagens. Premiere 06.06.2025, reviewed in Nachtkritik.',
      awards: ['Nachtkritik review'],
      cover: 'etwas-22-nasir.jpg',
      images: [
        ['etwas-19-bus.jpg', 'Premiere 06.06.2025 · Stadttheater Gießen'],
        ['etwas-20-haltewunsch.jpg', 'Haltewunsch'],
        ['etwas-21-ensemble.jpg', 'Ensemble · Photo: Lena Bils'],
        ['etwas-22-nasir.jpg', 'Nasir Formuli & puppet'],
        ['etwas-23-blue.jpg', 'Blue night scene'],
        ['etwas-24-green.jpg', 'Roman Kurtz · Photo: Lena Bils'],
        ['etwas-25-puppet.jpg', 'Puppet scene'],
        ['etwas-26-nina.jpg', 'Nina Plagens'],
        ['etwas-27-mirror.jpg', 'Mirror scene'],
        ['etwas-28-riot.jpg', 'Act II'],
        ['etwas-29-struggle.jpg', 'Nasir Formuli'],
        ['etwas-30-exit.jpg', 'Exit — finale']
      ]
    },
    {
      id: 'hazfiyat', title: 'Hazfīyāt', year: '2026', place: 'Frankfurt',
      role: 'Director',
      text: 'With the characters Mama, Schima and Philipp. Premiere 04.09.2026 in Frankfurt.',
      cover: 'hazfiyat-40-mama-schima.jpg',
      images: [
        ['hazfiyat-40-mama-schima.jpg', 'Mama & Schima · Wohnzimmerszene'],
        ['hazfiyat-41-philipp.jpg', 'Philipp'],
        ['hazfiyat-42-mama-am-telefon.jpg', 'Mama & Schima · Am Telefon'],
        ['hazfiyat-43-schima.jpg', 'Schima — solo'],
        ['hazfiyat-44-ensemble.jpg', 'Philipp, Mama & Schima · Ensemble'],
        ['hazfiyat-45-schima-portrait.jpg', 'Schima — close-up']
      ]
    },
    {
      id: 'tiger', title: 'Tiger', year: '2019', place: 'Dargaz, Iran',
      role: 'Director', playwright: 'Amir Rastegar',
      text: 'A leopard — symbol of Iran — becomes a donkey under the regime’s tamer. Played once before the arrest that led directly to the flight from Iran.',
      cover: 'tiger-33-wide.jpg',
      images: [
        ['tiger-31-cloak.jpg', 'The cloak · Dargaz 2019'],
        ['tiger-32-soldiers.jpg', 'Soldiers — Act I'],
        ['tiger-33-wide.jpg', 'Final scene — single performance before arrest'],
        ['tiger-34-guitar.jpg', 'Guitar & resistance']
      ]
    },
    {
      id: 'p5', title: '5 + 1 = 9', year: '2015', place: 'Dargaz & Torbat Heydarieh Festival',
      role: 'Director', playwright: 'Jafar Ghasemi',
      text: 'Three families, three pregnant mothers in different social conditions — a critique of economic sanctions and state oppression. Around 1,500 spectators across two festivals.',
      awards: ['2nd Best Director', 'Best Actor', '2nd Best Actor', 'Best Actress'],
      cover: 'p5-08-5-1-9-scene-4.jpg',
      images: [
        ['p5-05-5-1-9-scene-1.jpg', '5+1=9 · Dargaz'],
        ['p5-06-5-1-9-scene-2.jpg', 'Scene'],
        ['p5-07-5-1-9-scene-3.jpg', 'Stage'],
        ['p5-08-5-1-9-scene-4.jpg', 'Act'],
        ['p5-09-5-1-9-scene-5.jpg', 'Performers']
      ]
    },
    {
      id: 'hekaet', title: 'Hekaet Natmam', sub: 'Unfinished Story · حکایت ناتمام', year: '2018', place: 'Mashhad Festival',
      role: 'Director', playwright: 'Ehsan Janemi',
      text: 'Stage reading with eleven young performers. Ten public performances in Dargaz.',
      awards: ['Best Director (3rd)', 'Best Performers', 'Best Music', 'Best Play'],
      cover: 'hekaet-38-movement.jpg',
      images: [
        ['hekaet-35-wide.jpg', 'Hekaet Natmam · Mashhad 2018'],
        ['hekaet-36-scene1.jpg', 'Stage reading · 11 young performers'],
        ['hekaet-37-scene2.jpg', 'Playwright: Ehsan Janemi'],
        ['hekaet-38-movement.jpg', 'Movement & text'],
        ['hekaet-39-chair.jpg', 'Empty chair — finale']
      ]
    },
    {
      id: 'bak', title: 'Bakereha', sub: 'The Virgins', year: '2016', place: 'Kavir Festival, Mashhad',
      role: 'Director', playwright: 'Meysam Pourtaghi',
      text: 'Selected for the Kavir Festival, jury including Dr. Qutbuddin Sadeghi and Vahid Lak. Later forced to change its title under censorship.',
      awards: ['Nina Goodarzi — 2nd', 'Mahla Zare — 2nd', 'Best Music'],
      cover: 'bak-02-bakereha-3.jpg',
      images: [
        ['bak-00-bakereha-1.jpg', 'Bakereha · Mashhad'],
        ['bak-01-bakereha-2.jpg', 'Scene'],
        ['bak-02-bakereha-3.jpg', 'Performers'],
        ['bak-03-bakereha-4.jpg', 'Act'],
        ['bak-04-bakereha-5.jpg', 'Stage']
      ]
    },
    {
      id: 'amp', title: 'The Scream Impression', sub: 'آمپرسیون جیغ بنفش', year: '2016', place: 'Rezvan Festival, Mashhad',
      role: 'Director', playwright: 'Payam Larian',
      text: '60 minutes, Chaharpa Theatre Group. The political tension around this production marked the beginning of intensified pressure from the regime.',
      awards: ['Best Actress (3rd)'],
      cover: 'amp-14-scream-5.jpg',
      images: [
        ['amp-10-scream-1.jpg', 'The Scream Impression'],
        ['amp-11-scream-2.jpg', 'Nina Goudarzi'],
        ['amp-12-scream-3.jpg', 'Duo scene'],
        ['amp-13-scream-4.jpg', 'Stage moment'],
        ['amp-14-scream-5.jpg', 'Rezvan Festival']
      ]
    },
    {
      id: 'par', title: 'Paresch Haeye Mowazi', sub: 'Bavrhae Man', year: '2017', place: 'Neyshabur & private space',
      role: 'Director', playwright: 'Meysam Pourtaghi / Payam Larian',
      text: 'Renamed under censorship pressure. A secret-service juror later declared the private rehearsal an “illegal act” — the beginning of arrest and exile.',
      awards: ['3rd Best Director', 'Best Actress (3rd)', 'Best Music'],
      cover: 'par-16-paresch-2.jpg',
      images: [
        ['par-15-paresch-1.jpg', 'Paresch Haeye Mowazi'],
        ['par-16-paresch-2.jpg', 'Scene'],
        ['par-17-paresch-3.jpg', 'Stage'],
        ['par-18-paresch-4.jpg', 'Act']
      ]
    }
  ];

  /* Full chronology. type: director | asst. gallery: id of a featured entry */
  var phases = [
    { years: '2026', title: 'Freelance', items: [
      { date: '04.09.2026', title: 'Hazfīyāt', meta: 'Frankfurt · Premiere', role: 'Director', type: 'director', gallery: 'hazfiyat' },
      { date: '2026', title: 'FIREKEEPER', meta: 'Film production', role: 'Regieassistenz', type: 'asst' }
    ]},
    { years: '2024 – 2025', title: 'Stadttheater Gießen · Season 24/25', items: [
      { date: '06.2025', title: 'Etwas kommt mir bekannt vor', meta: 'Playwright Allex (Liat) Fassberg · Stadttheater Gießen', role: 'Director', type: 'director', gallery: 'etwas', note: 'With Nasir Formuli, Roman Kurtz, Nina Plagens. Reviewed in Nachtkritik.' },
      { date: '04.2025', title: 'Generation Arbeit', meta: 'Regie Tamó Gvenetadze', role: 'Regieassistenz & Abendspielleitung', type: 'asst' },
      { date: '2025', title: 'Fifty Degrees of Now', meta: 'Regie Simone Sterr', role: 'Regieassistenz & Abendspielleitung', type: 'asst' },
      { date: '2025', title: 'Stadt Land Flut', meta: 'Regie Yeşim Nela Keim Schaub', role: 'Regieassistenz & Abendspielleitung', type: 'asst' },
      { date: '2025', title: 'Neometropolis', meta: 'Regie Thomas Krupa · Großes Haus', role: 'Regieassistenz', type: 'asst' },
      { date: '12.2024', title: 'Midnight Movie', meta: 'Regie Ruth Mensah · by Eve Leigh', role: 'Regieassistenz & Trailer', type: 'asst' },
      { date: '10.2024', title: 'Orestie', meta: 'Regie Thomas Krupa', role: 'Regieassistenz', type: 'asst' }
    ]},
    { years: '2021 – 2023', title: 'Germany · Independent', items: [
      { date: '2023', title: 'Untrennbar Pinns', meta: 'Short film · Halle an der Saale', role: 'Director / Writer', type: 'director', img: 'film-51-untrennbar-pinns.jpg' },
      { date: '2022', title: 'Löweismus und lila Schrei', meta: 'Tarmac Festival · Martin-Luther-Universität Halle', role: 'Director', type: 'director', note: 'Film theatre about the Iranian Revolution.' },
      { date: '2021', title: 'Donna Juanita', meta: 'Regie Niko Eleftheriadis · Bühnen Halle', role: 'Regieassistenz', type: 'asst' }
    ]},
    { years: '2013 – 2019', title: 'Iran · Mashhad & Dargaz', items: [
      { date: '02.2019', title: 'Tiger', meta: 'Playwright Amir Rastegar · Dargaz', role: 'Director', type: 'director', gallery: 'tiger' },
      { date: '2018', title: 'Hekaet Natmam', meta: 'Playwright Ehsan Janemi · Mashhad Festival', role: 'Director', type: 'director', gallery: 'hekaet' },
      { date: '2017', title: 'Paresch Haeye Mowazi', meta: 'Playwright Meysam Pourtaghi / Payam Larian · Neyshabur', role: 'Director', type: 'director', gallery: 'par' },
      { date: '10.2016', title: 'The Scream Impression', meta: 'Playwright Payam Larian · Rezvan Festival', role: 'Director', type: 'director', gallery: 'amp' },
      { date: '01.2016', title: 'Bakereha (The Virgins)', meta: 'Playwright Meysam Pourtaghi · Kavir Festival', role: 'Director', type: 'director', gallery: 'bak' },
      { date: '01.2015', title: '5 + 1 = 9', meta: 'Playwright Jafar Ghasemi · Torbat Heydarieh Festival', role: 'Director', type: 'director', gallery: 'p5' },
      { date: '05.2013', title: 'Mashdi Mashalla', meta: 'Traditional · Dargaz', role: 'Director', type: 'director', note: 'Comedy & musical theatre with 11 performers. First production as director. 10 public performances.' }
    ]}
  ];

  /* Film & video. yt = YouTube id (plays in-page). href = external link */
  var films = [
    { title: 'Midnight Movie', label: 'Trailer', meta: 'Stadttheater Gießen · 2024', desc: 'Trailer for the Schauspiel by Eve Leigh, Regie Ruth Mensah.', yt: 'wptOZlEZico', thumb: 'https://i.ytimg.com/vi/wptOZlEZico/hqdefault.jpg', big: true },
    { title: 'Zones of Simulation', label: 'Trailer & video', meta: 'Tafelhalle Nürnberg · 2026', desc: 'Dance performance for people with and without visual impairment.', href: 'https://www.instagram.com/reel/DVyxebOALPR/', thumb: I + 'film-49-zones-of-simulation.jpg' },
    { title: 'Silvestershow', sub: 'Liebeslieder — Lieblingslieder', label: 'Teaser', meta: 'Stadttheater Gießen · 2024', href: 'https://www.instagram.com/reel/DENoZ4MuPvj/', thumb: I + 'film-46-silvester-1.jpg' },
    { title: 'About Me — Ben Janssen', label: 'Portrait film', meta: 'Stadttheater Gießen · 2025', href: 'https://www.instagram.com/reel/DHoRIwoNrNX/', thumb: I + 'film-50-about-me-ben-janssen.jpg' },
    { title: 'Untrennbar Pinns', label: 'Short film — writer & director', meta: 'Halle an der Saale · 2023', desc: 'With Peter Kube, Paul Balssuweit, Frida Herzog.', href: 'https://www.instagram.com/reel/Cqn5Sqgj7Lo/', thumb: I + 'film-51-untrennbar-pinns.jpg', big: true },
    { title: 'Donna Juanita', label: 'Trailer', meta: 'Bühnen Halle · 2021', yt: '80Nc2Xo0slk', thumb: 'https://i.ytimg.com/vi/80Nc2Xo0slk/hqdefault.jpg' },
    { title: 'Saaletumult 2022', label: 'Film — camera & drone', meta: 'Halle an der Saale · 2022', yt: 'AE2vqpZtEOc', thumb: 'https://i.ytimg.com/vi/AE2vqpZtEOc/hqdefault.jpg' },
    { title: 'MoQ Tribe — Wonders in the Abyss', label: 'Aftermovie', meta: 'Berlin · 2025', href: 'https://www.instagram.com/reel/DWUOhwFgL14/', thumb: I + 'film-57-moq-tribe-wonders-in-the-abyss.jpg' },
    { title: 'Sasha Zucker', sub: 'Vertikalseilakrobatik', label: 'Portrait film', meta: '2023', href: 'https://www.instagram.com/tv/Cohy8xQsj5R/', thumb: I + 'film-52-sasha-zucker-vertikalseilakrobatik.jpg' },
    { title: 'Linda Sander', label: 'Artist portrait', meta: 'Saale Tumult · 2022', href: 'https://www.instagram.com/reel/CnNNOQrjANq/', thumb: I + 'film-53-linda-sander.jpg' },
    { title: 'Anne Scholze', sub: 'Vertikalseilakrobatik', label: 'Artist portrait', meta: 'Halle · 2022', href: 'https://www.instagram.com/reel/CleB1qNDIRy/', thumb: I + 'film-54-anne-scholze-vertikalseilakrobatik.jpg' },
    { title: 'Anne Scholze & Katarina Bohnet', label: 'Duo performance', meta: '2022', href: 'https://www.instagram.com/reel/CmzCzmkIhOK/', thumb: I + 'film-58-anne-scholze-katarina-bohnet-duo.jpg' },
    { title: 'Wir ziehen durch die ganze Welt', label: 'Teaser', meta: 'Oper Halle · 2022', yt: 'xmYN1qSZlvk', thumb: I + 'film-55-wir-ziehen-durch-die-ganze-welt.jpg' },
    { title: 'Rose Marie', sub: 'Tanz Theater', label: 'Dancer portrait', meta: 'Halle · 2022', yt: 'xDwYhMSgczo', thumb: I + 'film-56-rose-marie-tanz-theater.jpg' }
  ];

  featured.forEach(function (f) {
    f.cover = I + f.cover;
    f.images = f.images.map(function (p) { return { src: I + p[0], cap: p[1] }; });
  });
  phases.forEach(function (ph) { ph.items.forEach(function (it) { if (it.img) it.img = I + it.img; }); });

  return { featured: featured, phases: phases, films: films };
})();
