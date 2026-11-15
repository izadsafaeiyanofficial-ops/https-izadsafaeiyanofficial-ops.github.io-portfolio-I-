/* Portfolio content — edit here to update the site */
window.SITE = (function () {
  var I = 'assets/img/';

  /* Productions with photo galleries. credits = [label, names] pairs (billing block) */
  var featured = [
    {
      id: 'hazfiyat', title: 'Hazfīyāt', sub: 'Die Auslassungen · The Omissions', year: '2026', place: 'Keller Theater Frankfurt',
      role: 'Regie & Konzept', playwright: 'Mahdi Ziachamani',
      text: 'A mother who carries her past inside her, and a daughter who lives entirely in the here and now. Told through repetition, silence and broken-off conversations, Hazfīyāt is about what stays unspoken between generations — a metaphor for collective forgetting and mental censorship inside a migrant family. In German & Farsi with German surtitles.',
      awards: ['Best play — international competition, 36th Fajr International Theatre Festival', 'Funded by Kulturamt Frankfurt am Main'],
      credits: [
        ['Text', 'Mahdi Ziachamani'], ['Regie & Konzept', 'Izad Safaeiyan'],
        ['Cast', 'Nazafarin Kazemi (Mama) · Mina Mahdyar (Schima) · Khashayar Valizadeh Aslani (Philipp)'],
        ['Music', 'Sam Eyvaz'], ['Costume', 'Amirabbas Mirzaei'], ['Regieassistenz', 'Khashayar Valizadeh Aslani'],
        ['Dramaturgie', 'Mel Brinkmann'], ['Production', 'Gilberto Ferreira'], ['Graphic design', 'Amin Zahiri'],
        ['Photos', 'Talisa Frenschkowski · Saber Sharifi']
      ],
      trailer: 'Zo5ai-FMaJA',
      cover: 'hz-06-schima-philipp.jpg',
      images: [
        ['hz-02-mama-lying.jpg', 'Mama lying, Schima behind — surtitles above · Photo: Talisa Frenschkowski'],
        ['hz-01-schima-tears.jpg', 'Mama behind the sofa, Schima in tears'],
        ['hz-03-embrace.jpg', 'Schima and Mama, close together'],
        ['hz-04-sofa-trio.jpg', 'Schima and Philipp on the sofa, Mama behind'],
        ['hz-05-philipp-door.jpg', 'Khashayar Valizadeh Aslani as Philipp'],
        ['hz-06-schima-philipp.jpg', 'Schima and Philipp on the sofa'],
        ['hz-07-surtitles.jpg', '„Wenn du mich vermisst, warum kommst du nicht hoch?“'],
        ['hz-08-mama-gesture.jpg', 'Mama and Schima on the sofa'],
        ['hz-09-side-by-side.jpg', 'Philipp, Mama and Schima side by side · Photo: Talisa Frenschkowski'],
        ['hz-10-mama-door.jpg', 'Mama at the door, Philipp and Schima on the sofa'],
        ['hz-11-philipp-front.jpg', 'Philipp in the foreground, Mama and Schima behind'],
        ['hz-12-door.jpg', 'Schima and Mama at the door · Photo: Saber Sharifi'],
        ['hz-13-schima-close.jpg', 'Mina Mahdyar as Schima · Photo: Saber Sharifi'],
        ['hz-14-mama.jpg', 'Nazafarin Kazemi as Mama · Photo: Saber Sharifi'],
        ['hz-15-set.jpg', 'The set — a door, a sofa, a small table, a glass of water'],
        ['hz-16-curtain-call.jpg', 'Curtain call with the whole ensemble · Photo: Saber Sharifi']
      ]
    },
    {
      id: 'etwas', title: 'Etwas kommt mir bekannt vor', year: '2025', place: 'Stadttheater Gießen',
      role: 'Director', playwright: 'Allex (Liat) Fassberg',
      text: 'Directing debut in Germany at Stadttheater Gießen. With Nasir Formuli, Roman Kurtz and Nina Plagens. Premiere 06.06.2025, reviewed in Nachtkritik.',
      awards: ['Nachtkritik review'],
      credits: [['Text', 'Allex (Liat) Fassberg'], ['Cast', 'Nasir Formuli · Roman Kurtz · Nina Plagens'], ['Photos', 'Lena Bils']],
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
      id: 'tiger', title: 'Tiger', year: '2019', place: 'Dargaz, Iran',
      role: 'Director', playwright: 'Amir Rastegar',
      text: 'A leopard — symbol of Iran — becomes a donkey under the regime’s tamer. Played once before the arrest that led directly to the flight from Iran.',
      credits: [['Text', 'Amir Rastegar']],
      cover: 'tiger-33-wide.jpg',
      images: [
        ['tiger-31-cloak.jpg', 'The cloak · Dargaz 2019'],
        ['tiger-32-soldiers.jpg', 'Soldiers — Act I'],
        ['tiger-33-wide.jpg', 'Final scene — single performance before arrest'],
        ['tiger-34-guitar.jpg', 'Guitar & resistance']
      ]
    },
    {
      id: 'hekaet', title: 'Hekaet Natmam', sub: 'Unfinished Story · حکایت ناتمام', year: '2018', place: 'Mashhad Festival',
      role: 'Director', playwright: 'Ehsan Janemi',
      text: 'Stage reading with eleven young performers. Ten public performances in Dargaz.',
      awards: ['Best Director (3rd)', 'Best Performers', 'Best Music', 'Best Play'],
      credits: [['Text', 'Ehsan Janemi']],
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
      id: 'par', title: 'Paresch Haeye Mowazi', sub: 'Bavrhae Man', year: '2017', place: 'Neyshabur & private space',
      role: 'Director', playwright: 'Meysam Pourtaghi / Payam Larian',
      text: 'Renamed under censorship pressure. A secret-service juror later declared the private rehearsal an “illegal act” — the beginning of arrest and exile.',
      awards: ['3rd Best Director', 'Best Actress (3rd)', 'Best Music'],
      credits: [['Text', 'Meysam Pourtaghi · Payam Larian']],
      cover: 'par-16-paresch-2.jpg',
      images: [
        ['par-15-paresch-1.jpg', 'Paresch Haeye Mowazi'],
        ['par-16-paresch-2.jpg', 'Scene'],
        ['par-17-paresch-3.jpg', 'Stage'],
        ['par-18-paresch-4.jpg', 'Act']
      ]
    },
    {
      id: 'amp', title: 'The Scream Impression', sub: 'آمپرسیون جیغ بنفش', year: '2016', place: 'Rezvan Festival, Mashhad',
      role: 'Director', playwright: 'Payam Larian',
      text: '60 minutes, Chaharpa Theatre Group. The political tension around this production marked the beginning of intensified pressure from the regime.',
      awards: ['Best Actress (3rd)'],
      credits: [['Text', 'Payam Larian'], ['Company', 'Chaharpa Theatre Group']],
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
      id: 'bak', title: 'Bakereha', sub: 'The Virgins', year: '2016', place: 'Kavir Festival, Mashhad',
      role: 'Director', playwright: 'Meysam Pourtaghi',
      text: 'Selected for the Kavir Festival, jury including Dr. Qutbuddin Sadeghi and Vahid Lak. Later forced to change its title under censorship.',
      awards: ['Nina Goodarzi — 2nd', 'Mahla Zare — 2nd', 'Best Music'],
      credits: [['Text', 'Meysam Pourtaghi']],
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
      id: 'p5', title: '5 + 1 = 9', year: '2015', place: 'Dargaz & Torbat Heydarieh Festival',
      role: 'Director', playwright: 'Jafar Ghasemi',
      text: 'Three families, three pregnant mothers in different social conditions — a critique of economic sanctions and state oppression. A set of red rope and stretched plastic that the performers tear through. Around 1,500 spectators across two festivals.',
      awards: ['2nd Best Director', 'Best Actor', '2nd Best Actor', 'Best Actress'],
      credits: [
        ['Text', 'Jafar Ghasemi'],
        ['Cast', 'Abas Ghafarniya · Nina Godarzi · Mohammad Javad Ghorban Zadeh · Amir Akhlaghi · Hasan Lael Sani · Ehsan Negahban'],
        ['Assistant director & set', 'Ehsan Negahban'], ['Lighting', 'Ghader Meshkini'], ['Make-up', 'Neda Reyhani'],
        ['Music', 'Ehsan Negahban · Javad Golmimi']
      ],
      cover: 'p5-12-tear.jpg',
      images: [
        ['p5-12-tear.jpg', 'Breaking through the membrane'],
        ['p5-10-membrane.jpg', 'Behind the membrane'],
        ['p5-11-hands.jpg', 'Hands against the plastic'],
        ['p5-07-5-1-9-scene-3.jpg', 'Stage'],
        ['p5-08-5-1-9-scene-4.jpg', 'Three fathers'],
        ['p5-05-5-1-9-scene-1.jpg', '5+1=9 · Dargaz'],
        ['p5-06-5-1-9-scene-2.jpg', 'Scene'],
        ['p5-09-5-1-9-scene-5.jpg', 'Performers'],
        ['p5-13-bow.jpg', 'Curtain call'],
        ['p5-14-setup.jpg', 'Building the set'],
        ['p5-15-backstage.jpg', 'Before the show'],
        ['p5-16-balcony.jpg', 'From the balcony'],
        ['p5-17-ensemble.jpg', 'Ensemble & festival team'],
        ['p5-18-poster.jpg', 'Poster'],
        ['p5-19-brochure.jpg', 'Programme — credits']
      ]
    }
  ];

  /* Full chronology. type: director | asst. gallery: id of a featured entry. href: external link */
  var phases = [
    { years: '2026', title: 'Freelance', items: [
      { date: '09.2026', title: 'Hazfīyāt — Die Auslassungen', meta: 'Text Mahdi Ziachamani · Keller Theater Frankfurt', role: 'Regie & Konzept', type: 'director', gallery: 'hazfiyat' },
      { date: '2026', title: 'FIREKEEPER', meta: 'Film production', role: 'Regieassistenz', type: 'asst' }
    ]},
    { years: '2024 – 2025', title: 'Stadttheater Gießen · Season 24/25', items: [
      { date: '06.2025', title: 'Etwas kommt mir bekannt vor', meta: 'Text Allex (Liat) Fassberg · Stadttheater Gießen', role: 'Director', type: 'director', gallery: 'etwas' },
      { date: '04.2025', title: 'Generation Arbeit', meta: 'Regie Tamó Gvenetadze', role: 'Regieassistenz & Abendspielleitung', type: 'asst', href: 'https://stadttheater-giessen.de/de/veranstaltungen/stuecke/generation-arbeit-at/' },
      { date: '2025', title: 'Fifty Degrees of Now', meta: 'Regie Simone Sterr', role: 'Regieassistenz & Abendspielleitung', type: 'asst', href: 'https://stadttheater-giessen.de/en/events/plays/fifty-degrees-of-now' },
      { date: '2025', title: 'Stadt Land Flut', meta: 'Regie Yeşim Nela Keim Schaub', role: 'Regieassistenz & Abendspielleitung', type: 'asst', href: 'https://stadttheater-giessen.de/de/archiv/veranstaltungen/stadt-land-flut/' },
      { date: '2025', title: 'Neometropolis', meta: 'Regie Thomas Krupa · Großes Haus', role: 'Regieassistenz', type: 'asst', href: 'https://stadttheater-giessen.de/de/archiv/veranstaltungen/neometropolis/' },
      { date: '12.2024', title: 'Midnight Movie', meta: 'Regie Ruth Mensah · by Eve Leigh', role: 'Regieassistenz & Trailer', type: 'asst', href: 'https://stadttheater-giessen.de/de/archiv/veranstaltungen/midnight-movie/' },
      { date: '10.2024', title: 'Die Orestie', meta: 'Regie Thomas Krupa', role: 'Regieassistenz', type: 'asst', href: 'https://stadttheater-giessen.de/en/archive/events/die-orestie/' }
    ]},
    { years: '2021 – 2023', title: 'Germany · Independent', items: [
      { date: '2023', title: 'Untrennbar Pinns', meta: 'Short film · Halle an der Saale', role: 'Director / Writer', type: 'director', href: 'https://www.instagram.com/reel/Cqn5Sqgj7Lo/' },
      { date: '2022', title: 'Löweismus und lila Schrei', meta: 'Tarmac Festival · Martin-Luther-Universität Halle', role: 'Director', type: 'director' },
      { date: '2021', title: 'Donna Juanita', meta: 'Regie Niko Eleftheriadis · Bühnen Halle', role: 'Regieassistenz', type: 'asst' }
    ]},
    { years: '2013 – 2019', title: 'Iran · Mashhad & Dargaz', items: [
      { date: '02.2019', title: 'Tiger', meta: 'Text Amir Rastegar · Dargaz', role: 'Director', type: 'director', gallery: 'tiger' },
      { date: '2018', title: 'Hekaet Natmam', meta: 'Text Ehsan Janemi · Mashhad Festival', role: 'Director', type: 'director', gallery: 'hekaet' },
      { date: '2017', title: 'Paresch Haeye Mowazi', meta: 'Text Meysam Pourtaghi / Payam Larian · Neyshabur', role: 'Director', type: 'director', gallery: 'par' },
      { date: '10.2016', title: 'The Scream Impression', meta: 'Text Payam Larian · Rezvan Festival', role: 'Director', type: 'director', gallery: 'amp' },
      { date: '01.2016', title: 'Bakereha (The Virgins)', meta: 'Text Meysam Pourtaghi · Kavir Festival', role: 'Director', type: 'director', gallery: 'bak' },
      { date: '01.2015', title: '5 + 1 = 9', meta: 'Text Jafar Ghasemi · Torbat Heydarieh Festival', role: 'Director', type: 'director', gallery: 'p5' },
      { date: '05.2013', title: 'Mashdi Mashalla', meta: 'Comedy & musical theatre · Dargaz', role: 'Director', type: 'director' }
    ]}
  ];

  /* Film & video. cat: stage | move | film. yt = YouTube id (plays in the screen). href = external link */
  var films = [
    { title: 'Hazfīyāt', sub: 'Die Auslassungen', label: 'Trailer', cat: 'stage', meta: 'Keller Theater Frankfurt · 2026', desc: 'The trailer after the premiere. A mother, a daughter and everything left unsaid — repetition, silence and broken-off conversations, in German & Farsi.', yt: 'Zo5ai-FMaJA', thumb: I + 'yt-Zo5ai-FMaJA.jpg' },
    { title: 'Hazfīyāt', sub: 'Documentation', label: 'Documentation', cat: 'stage', meta: 'Keller Theater Frankfurt · 2026', desc: 'The production documented — the room, the sofa, the door and three figures who slowly erase one another.', yt: 'kbn1w-YP4nI', thumb: I + 'yt-kbn1w-YP4nI.jpg' },
    { title: 'Hazfīyāt', sub: 'Before the premiere', label: 'Teaser', cat: 'stage', meta: 'Instagram · 2026', desc: 'The teaser released before the premiere in Frankfurt.', href: 'https://www.instagram.com/reel/DcdiKHOC6Lu/', thumb: I + 'hz-07-surtitles.jpg' },
    { title: 'Laura García Aguilera', label: 'Dance teaser', cat: 'move', meta: '4K · @laura_garcia_aguilera', desc: 'Dance in the open air, right among the audience — children on the asphalt, a body on the ground, the street as a stage. Shot close, in 4K.', yt: 'gupoUc9-iy8', thumb: I + 'yt-gupoUc9-iy8.jpg' },
    { title: 'Max', label: 'Dance teaser', cat: 'move', meta: 'Dance · aerial silk', desc: 'Red light, black space and an aerial silk — a dance teaser built from shadow, tension and release.', yt: 'uB9FoXONBIc', thumb: I + 'yt-uB9FoXONBIc.jpg' },
    { title: 'Linda Sander', sub: 'Rope & circus', label: 'Artist film', cat: 'move', meta: 'Saale Tumult · 2022', desc: 'Dance on the rope and the art of the circus — strength, height and a moment of weightlessness. Linda Sander between sky and concrete, cut as one flowing mix.', yt: 'iAPugGK8RVo', thumb: I + 'yt-iAPugGK8RVo.jpg' },
    { title: 'Midnight Movie', label: 'Trailer', cat: 'stage', meta: 'Stadttheater Gießen · 2024', desc: 'Trailer for the play by Eve Leigh, directed by Ruth Mensah.', yt: 'wptOZlEZico', thumb: 'https://i.ytimg.com/vi/wptOZlEZico/hqdefault.jpg' },
    { title: 'Zones of Simulation', label: 'Trailer & video', cat: 'move', meta: 'Tafelhalle Nürnberg · 2026', desc: 'Dance performance for people with and without visual impairment.', href: 'https://www.instagram.com/reel/DVyxebOALPR/', thumb: I + 'film-49-zones-of-simulation.jpg' },
    { title: 'Untrennbar Pinns', label: 'Short film — writer & director', cat: 'film', meta: 'Halle an der Saale · 2023', desc: 'With Peter Kube, Paul Balssuweit and Frida Herzog.', href: 'https://www.instagram.com/reel/Cqn5Sqgj7Lo/', thumb: I + 'film-51-untrennbar-pinns.jpg' },
    { title: 'Silvestershow', sub: 'Liebeslieder — Lieblingslieder', label: 'Teaser', cat: 'stage', meta: 'Stadttheater Gießen · 2024', desc: 'New Year’s Eve show teaser.', href: 'https://www.instagram.com/reel/DENoZ4MuPvj/', thumb: I + 'film-46-silvester-1.jpg' },
    { title: 'About Me — Ben Janssen', label: 'Portrait film', cat: 'film', meta: 'Stadttheater Gießen · 2025', desc: 'A short portrait of the actor Ben Janssen.', href: 'https://www.instagram.com/reel/DHoRIwoNrNX/', thumb: I + 'film-50-about-me-ben-janssen.jpg' },
    { title: 'Donna Juanita', label: 'Trailer', cat: 'stage', meta: 'Bühnen Halle · 2021', desc: 'Trailer for the production directed by Niko Eleftheriadis.', yt: '80Nc2Xo0slk', thumb: 'https://i.ytimg.com/vi/80Nc2Xo0slk/hqdefault.jpg' },
    { title: 'Wir ziehen durch die ganze Welt', label: 'Teaser', cat: 'stage', meta: 'Oper Halle · 2022', desc: 'Teaser for Oper Halle.', yt: 'xmYN1qSZlvk', thumb: I + 'film-55-wir-ziehen-durch-die-ganze-welt.jpg' },
    { title: 'Saaletumult 2022', label: 'Festival film — camera & drone', cat: 'film', meta: 'Halle an der Saale · 2022', desc: 'Festival film — camera and drone.', yt: 'AE2vqpZtEOc', thumb: 'https://i.ytimg.com/vi/AE2vqpZtEOc/hqdefault.jpg' },
    { title: 'MoQ Tribe', sub: 'Wonders in the Abyss', label: 'Aftermovie', cat: 'film', meta: 'Berlin · 2025', desc: 'Aftermovie for MoQ Tribe — Wonders in the Abyss.', href: 'https://www.instagram.com/reel/DWUOhwFgL14/', thumb: I + 'film-57-moq-tribe-wonders-in-the-abyss.jpg' },
    { title: 'Rose Marie', sub: 'Tanz Theater', label: 'Dancer portrait', cat: 'move', meta: 'Halle · 2022', desc: 'Portrait of a dancer.', yt: 'xDwYhMSgczo', thumb: I + 'film-56-rose-marie-tanz-theater.jpg' },
    { title: 'Sasha Zucker', sub: 'Vertikalseilakrobatik', label: 'Portrait film', cat: 'move', meta: '2023', desc: 'Vertical rope acrobatics.', href: 'https://www.instagram.com/tv/Cohy8xQsj5R/', thumb: I + 'film-52-sasha-zucker-vertikalseilakrobatik.jpg' },
    { title: 'Anne Scholze', sub: 'Vertikalseilakrobatik', label: 'Artist portrait', cat: 'move', meta: 'Halle · 2022', desc: 'Vertical rope acrobatics.', href: 'https://www.instagram.com/reel/CleB1qNDIRy/', thumb: I + 'film-54-anne-scholze-vertikalseilakrobatik.jpg' },
    { title: 'Anne Scholze & Katarina Bohnet', label: 'Duo performance', cat: 'move', meta: '2022', desc: 'Duo performance.', href: 'https://www.instagram.com/reel/CmzCzmkIhOK/', thumb: I + 'film-58-anne-scholze-katarina-bohnet-duo.jpg' }
  ];

  featured.forEach(function (f) {
    f.cover = I + f.cover;
    f.images = f.images.map(function (p) { return { src: I + p[0], cap: p[1] }; });
  });

  return { featured: featured, phases: phases, films: films };
})();
