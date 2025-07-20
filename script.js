// ---  GENRE DATABASE ---
const genreDatabase = {
    // Electronic Leaning
    synthwave: {
        name: "Synthwave / Outrun",
        description: "Nostalgic 80s synths meet futuristic themes. Driving beats, neon aesthetics, retro-cool vibes perfect for a midnight drive. Think Blade Runner meets Miami Vice.",
        icon: "fas fa-car-side",
        color: "from-pink-500 to-purple-600",
        vibe: "retro",
        tracks: [ {title: "Nightcall", artist: "Kavinsky"}, {title: "Midnight City", artist: "M83"}, {title: "Tech Noir", artist: "Gunship"}, {title: "Turbo Killer", artist: "Carpenter Brut"}, {title: "Sunset", artist: "The Midnight"}, {title: "Resonance", artist: "HOME"} ],
        related: [ {name: "Cyberpunk", description: "Grittier, dystopian cousin embracing digital textures and darker futuristic visions."}, {name: "Darkwave", description: "Moodier, often incorporating post-punk gloom with synthesizers for introspection."} ]
    },
    cyberpunk: {
        name: "Cyberpunk",
        description: "High-tech, low-life. Gritty electronic soundscapes depicting dystopian futures, often with industrial and glitch elements. Rain, neon, and existential dread? Yes.",
        icon: "fas fa-robot",
        color: "from-cyan-500 to-blue-700",
         vibe: "intense",
        tracks: [ {title: "Humans Are Such Easy Prey", artist: "Perturbator"}, {title: "Ghost City", artist: "Thomas Barrandon"}, {title: "Venger (feat. Greta Link)", artist: "Perturbator"}, {title: "Chrome", artist: "Mega Drive"}, {title: "Neo-Tokyo", artist: "Scandroid"}, {title: "Diabolic", artist: "Perturbator"} ],
        related: [ {name: "Synthwave", description: "Shares futuristic themes but often less gritty and more focused on 80s nostalgia."}, {name: "Industrial", description: "Shares harsh textures and dark themes, often with more mechanical and abrasive sounds."} ]
    },
    techno: {
        name: "Techno",
        description: "Hypnotic, repetitive rhythms for the warehouse rave in your mind (or actual warehouse). It's 4 AM somewhere.",
        icon: "fas fa-industry",
        color: "from-gray-600 to-gray-800",
         vibe: "intense",
        tracks: [ {title: "Spastik", artist: "Plastikman"}, {title: "Windowlicker", artist: "Aphex Twin"}, {title: "Porcelain", artist: "Moby (Remixes!)"}, {title: "Belfast", artist: "Orbital"}, {title: "The Bells", artist: "Jeff Mills"}, {title: "Jaguar", artist: "DJ Rolando"} ],
        related: [ {name: "House", description: "Often groovier and more soulful/disco-influenced cousin of Techno."}, {name: "Minimal Techno", description: "Strips down techno elements to their core, focusing on subtle changes and space."} ]
    },
    house: {
        name: "House",
        description: "Born in Chicago, built on pure groove. Four-on-the-floor beats, soulful vocals, and feeling good. Can I get an Amen?",
        icon: "fas fa-house-chimney",
        color: "from-orange-400 to-red-500",
         vibe: "upbeat",
        tracks: [ {title: "Your Love", artist: "Frankie Knuckles"}, {title: "Gypsy Woman (She's Homeless)", artist: "Crystal Waters"}, {title: "Show Me Love", artist: "Robin S."}, {title: "One More Time", artist: "Daft Punk"}, {title: "Music Sounds Better With You", artist: "Stardust"}, {title: "Follow Me", artist: "Aly-Us"} ],
        related: [ {name: "Techno", description: "Shares electronic roots but often harder, more repetitive, and less focused on traditional song structure."}, {name: "Disco", description: "A key influence on House, providing the soulful vocals and groovy rhythms."} ]
    },
    dnb: {
        name: "Drum & Bass (DnB)",
        description: "Breakneck beats (174 BPM feels chill, right?) and basslines that rattle your teeth. Liquid smoothness or pure neurofunk chaos.",
        icon: "fas fa-drum",
        color: "from-yellow-400 to-orange-600",
         vibe: "intense",
        tracks: [ {title: "Original Nuttah", artist: "UK Apache & Shy FX"}, {title: "Brown Paper Bag", artist: "Roni Size / Reprazent"}, {title: "Tarantula", artist: "Pendulum"}, {title: "Mr Happy", artist: "DJ Hazard & D Minds"}, {title: "LK (feat. Stamina MC)", artist: "DJ Marky & XRS"}, {title: "Afterglow", artist: "Wilkinson"} ],
        related: [ {name: "Jungle", description: "The precursor to DnB, often featuring more complex, chopped-up Amen breaks and reggae/dub influences."}, {name: "Dubstep", description: "Shares a focus on bass weight but typically at slower tempos (around 140 BPM) and different rhythmic patterns."} ]
    },
    ambient: {
        name: "Ambient",
        description: "Music as atmosphere. Forget verses and choruses, just float away on soundscapes. Perfect for staring out a window dramatically.",
        icon: "fas fa-wind",
        color: "from-blue-300 to-teal-400",
         vibe: "chill",
        tracks: [ {title: "An Ending (Ascent)", artist: "Brian Eno"}, {title: "Avril 14th", artist: "Aphex Twin"}, {title: "Music for Airports 1/1", artist: "Brian Eno"}, {title: "Substrata", artist: "Biosphere"}, {title: "Teardrop", artist: "Massive Attack"}, {title: "#3 (Rhubarb)", artist: "Aphex Twin"} ],
        related: [ {name: "Drone", description: "Takes minimalism further, often focusing on sustained tones and microtonal changes."}, {name: "New Age", description: "Often shares atmospheric qualities but typically more melodic, structured, and overtly 'relaxing'."} ]
    },
    lofi: {
        name: "Lo-fi Hip Hop / Chillhop",
        description: "Relaxed hip hop beats, jazzy samples, vinyl crackle... the official sound of studying/relaxing/vibing cats. Endless YouTube streams await.",
        icon: "fas fa-headphones",
        color: "from-amber-400 to-orange-500",
         vibe: "chill",
        tracks: [ {title: "Affection", artist: "Jinsang"}, {title: "Midnight in a Perfect World", artist: "DJ Shadow"}, {title: "Feather (feat. Cise Starr & Akin Yai)", artist: "Nujabes"}, {title: "5:32pm", artist: "The Deli"}, {title: "Controlla (Lofi Flip)", artist: "Idealism"}, {title: "Better", artist: "Tomppabeats"} ],
        related: [ {name: "Jazz Hop", description: "Similar vibe but often with more prominent live jazz instrumentation or complex samples."}, {name: "Trip Hop", description: "Shares hip hop roots and atmospheric tendencies but often darker, slower, and more complex production."} ]
    },
     idm: {
        name: "Intelligent Dance Music (IDM)",
        description: "For when you want your electronic music to have a PhD. Complex rhythms, weird sounds, makes your brain feel tingly. Maybe.",
        icon: "fas fa-brain",
        color: "from-purple-400 to-indigo-600",
         vibe: "experimental",
        tracks: [ {title: "Windowlicker", artist: "Aphex Twin"}, {title: "Roygbiv", artist: "Boards of Canada"}, {title: "Flutter", artist: "Autechre"}, {title: "Come to Daddy (Pappy Mix)", artist: "Aphex Twin"}, {title: "Everything You Do Is A Balloon", artist: "Boards of Canada"}, {title: "Gantz Graf", artist: "Autechre"} ],
        related: [ {name: "Ambient", description: "Shares a focus on texture and atmosphere, but IDM is typically more rhythmically complex."}, {name: "Glitch", description: "Focuses specifically on the aesthetics of digital errors and artifacts, often a component of IDM."} ]
    },
     vaporwave: {
        name: "Vaporwave",
        description: "A E S T H E T I C. Slowed-down elevator music, 90s nostalgia, questioning capitalism, all wrapped in a pastel pink package. It's a mood.",
        icon: "fas fa-store", // Or maybe fas fa-statue ?
        color: "from-pink-300 to-cyan-400",
         vibe: "experimental",
        tracks: [ {title: "リサフランク420 / 現代のコンピュー", artist: "Macintosh Plus"}, {title: "Enjoy Yourself", artist: "Saint Pepsi"}, {title: "Resonance", artist: "HOME"}, {title: "ECCOJAMS VOL. 1 (Side A)", artist: "Chuck Person"}, {title: "ブート", artist: " haircuts for men"}, {title: "Private Caller", artist: "Saint Pepsi"} ],
        related: [ {name: "Chillwave", description: "Shares nostalgic and hazy qualities but usually more song-based and less sample-manipulation focused."}, {name: "Mallsoft", description: "A subgenre focusing specifically on the ambient sounds and muzak of shopping malls."} ]
    },
     dubstep: {
        name: "Dubstep",
        description: "Deep, dark, and wobbly. The original UK sound is all about sub-bass pressure and sparse beats. Perfect for feeling moody in a basement.",
        icon: "fas fa-volume-low",
        color: "from-indigo-700 to-purple-900",
         vibe: "intense",
        tracks: [ {title: "Midnight Request Line", artist: "Skream"}, {title: "Archangel", artist: "Burial"}, {title: "Cockney Thug", artist: "Caspa"}, {title: "Night", artist: "Benga & Coki"}, {title: "Changes", artist: "Mala"}, {title: "Anti War Dub", artist: "Digital Mystikz"} ],
        related: [ {name: "Grime", description: "Shares UK roots and dark sounds but typically faster, more aggressive, and MC-focused."}, {name: "Brostep", description: "A later, more aggressive US-influenced style with prominent mid-range 'growls' and drops (often what people think of as Dubstep)."} ]
    },
    // Rock Leaning
    classicrock: {
        name: "Classic Rock",
        description: "Dad rock? Nah, *legend* rock. Guitar riffs you know by heart, epic solos, and lyrics perfect for stadium singalongs.",
        icon: "fas fa-guitar",
        color: "from-red-500 to-yellow-500",
         vibe: "rock",
        tracks: [ {title: "Stairway to Heaven", artist: "Led Zeppelin"}, {title: "Bohemian Rhapsody", artist: "Queen"}, {title: "Sweet Child O' Mine", artist: "Guns N' Roses"}, {title: "Back in Black", artist: "AC/DC"}, {title: "Hotel California", artist: "Eagles"}, {title: "Comfortably Numb", artist: "Pink Floyd"} ],
        related: [ {name: "Hard Rock", description: "Amplifies the heavier, riff-based aspects of Classic Rock."}, {name: "Blues Rock", description: "Emphasizes the blues roots, often with more improvisation and soulful playing."} ]
    },
    hardrock: {
        name: "Hard Rock",
        description: "Classic rock, but louder and with more leather. Chunky riffs, powerful vocals, and probably some questionable hair choices back in the day.",
        icon: "fas fa-bolt",
        color: "from-orange-600 to-red-700",
         vibe: "rock",
        tracks: [ {title: "Highway to Hell", artist: "AC/DC"}, {title: "Welcome to the Jungle", artist: "Guns N' Roses"}, {title: "Smoke on the Water", artist: "Deep Purple"}, {title: "Paranoid", artist: "Black Sabbath"}, {title: "Whole Lotta Love", artist: "Led Zeppelin"}, {title: "Kickstart My Heart", artist: "Mötley Crüe"} ],
        related: [ {name: "Heavy Metal", description: "Takes the heaviness further with often faster tempos, darker themes, and more complex structures."}, {name: "Classic Rock", description: "The foundation from which Hard Rock evolved, often sharing artists and influences."} ]
    },
    metal: {
        name: "Heavy Metal",
        description: "Maximum volume, maximum distortion. From epic power metal to crushing death metal, it's all about intensity. Throw up the horns! \\m/",
        icon: "fas fa-hand-horns", // FontAwesome 5/6
        color: "from-gray-700 to-black",
         vibe: "intense",
        tracks: [ {title: "Master of Puppets", artist: "Metallica"}, {title: "The Number of the Beast", artist: "Iron Maiden"}, {title: "War Pigs", artist: "Black Sabbath"}, {title: "Ace of Spades", artist: "Motörhead"}, {title: "Raining Blood", artist: "Slayer"}, {title: "Walk", artist: "Pantera"} ],
        related: [ {name: "Hard Rock", description: "The direct predecessor, sharing riff-based structures but generally less extreme."}, {name: "Thrash Metal", description: "A faster, more aggressive subgenre focusing on intricate riffs and speed."} ]
    },
    punk: {
        name: "Punk Rock",
        description: "Fast, loud, and probably angry about something. Three chords and the truth (or just shouting). DIY or die!",
        icon: "fas fa-radiation",
        color: "from-red-600 to-pink-600",
         vibe: "intense",
        tracks: [ {title: "Blitzkrieg Bop", artist: "Ramones"}, {title: "Anarchy in the U.K.", artist: "Sex Pistols"}, {title: "God Save the Queen", artist: "Sex Pistols"}, {title: "London Calling", artist: "The Clash"}, {title: "California Über Alles", artist: "Dead Kennedys"}, {title: "Basket Case", artist: "Green Day (Pop Punk)"} ],
        related: [ {name: "Hardcore Punk", description: "Faster, heavier, and more aggressive than traditional punk."}, {name: "Post-Punk", description: "More experimental and atmospheric, exploring textures beyond raw punk energy."} ]
    },
    grunge: {
        name: "Grunge",
        description: "Hello Seattle! Angst, flannel, heavy riffs, and lyrics about... well, more angst. It smells like teen spirit, apparently.",
        icon: "fas fa-guitar-electric", // Or fas fa-tshirt
        color: "from-gray-500 to-teal-700",
         vibe: "rock",
        tracks: [ {title: "Smells Like Teen Spirit", artist: "Nirvana"}, {title: "Black Hole Sun", artist: "Soundgarden"}, {title: "Alive", artist: "Pearl Jam"}, {title: "Man in the Box", artist: "Alice in Chains"}, {title: "Plush", artist: "Stone Temple Pilots"}, {title: "Hunger Strike", artist: "Temple of the Dog"} ],
        related: [ {name: "Alternative Rock", description: "The broader category Grunge falls under, sharing non-mainstream sensibilities."}, {name: "Punk Rock", description: "A key influence on Grunge's energy, DIY ethos, and attitude."} ]
    },
    indierock: {
        name: "Indie Rock",
        description: "Too cool for the mainstream? Maybe. Guitar-based rock valuing authenticity, often catchy, sometimes quirky, always independent-spirited.",
        icon: "fas fa-compact-disc",
        color: "from-indigo-400 to-blue-500",
         vibe: "rock",
        tracks: [ {title: "Last Nite", artist: "The Strokes"}, {title: "Mr. Brightside", artist: "The Killers"}, {title: "Float On", artist: "Modest Mouse"}, {title: "Take Me Out", artist: "Franz Ferdinand"}, {title: "Seven Nation Army", artist: "The White Stripes"}, {title: "Obstacle 1", artist: "Interpol"} ],
        related: [ {name: "Alternative Rock", description: "Often overlaps, representing rock outside the mainstream, though Alt Rock can be on major labels."}, {name: "Post-Punk Revival", description: "A subgenre drawing heavily from classic post-punk sounds within an indie framework."} ]
    },
    psychedelicrock: {
        name: "Psychedelic Rock",
        description: "Open your mind... maaan. Effects-laden guitars, trippy lyrics, maybe a sitar? It's all about expanding perception (and guitar solos).",
        icon: "fas fa-eye",
        color: "from-purple-500 to-pink-500",
         vibe: "experimental",
        tracks: [ {title: "Purple Haze", artist: "The Jimi Hendrix Experience"}, {title: "Lucy in the Sky with Diamonds", artist: "The Beatles"}, {title: "White Rabbit", artist: "Jefferson Airplane"}, {title: "Light My Fire", artist: "The Doors"}, {title: "Tomorrow Never Knows", artist: "The Beatles"}, {title: "In-A-Gadda-Da-Vida", artist: "Iron Butterfly"} ],
        related: [ {name: "Space Rock", description: "Focuses on atmospheric textures and themes of outer space, often with lengthy instrumentals."}, {name: "Acid Rock", description: "A heavier, bluesier, and often more improvisational variant of psychedelic rock."} ]
    },
    postrock: {
         name: "Post-Rock",
         description: "Rock instruments, but make it cinematic. Builds, crescendos, atmosphere... often no singing, just pure instrumental journeys. Epic.",
         icon: "fas fa-mountain",
         color: "from-cyan-600 to-indigo-700",
         vibe: "experimental",
         tracks: [ {title: "Moya", artist: "Godspeed You! Black Emperor"}, {title: "The Only Moment We Were Alone", artist: "Explosions In The Sky"}, {title: "Mogwai Fear Satan", artist: "Mogwai"}, {title: "Halving the Compass", artist: "Helios"}, {title: "First Breath After Coma", artist: "Explosions In The Sky"}, {title: "Djed", artist: "Tortoise"} ],
         related: [ {name: "Ambient", description: "Shares a focus on atmosphere and texture, but Post-Rock typically uses more traditional rock instruments and dynamic shifts."}, {name: "Shoegaze", description: "Shares atmospheric qualities and effects-laden guitars, but Shoegaze is usually more song-structured with vocals."} ]
    },
    // Folk/World/Jazz/Blues Leaning
    indiefolk: {
        name: "Indie Folk",
        description: "Acoustic guitars meet indie coolness. Heartfelt lyrics, harmonies, maybe a banjo? Perfect for campfires or feeling sensitive.",
        icon: "fas fa-leaf",
        color: "from-green-500 to-yellow-600",
         vibe: "chill",
        tracks: [ {title: "Skinny Love", artist: "Bon Iver"}, {title: "Ho Hey", artist: "The Lumineers"}, {title: "Little Talks", artist: "Of Monsters and Men"}, {title: "Home", artist: "Edward Sharpe & The Magnetic Zeros"}, {title: "Holocene", artist: "Bon Iver"}, {title: "The Cave", artist: "Mumford & Sons"} ],
        related: [ {name: "Folk Rock", description: "The earlier blend of folk and rock, often more electric and traditional."}, {name: "Chamber Pop", description: "Incorporates orchestral arrangements and lush instrumentation with pop/rock structures."} ]
    },
    reggae: {
        name: "Reggae",
        description: "Laid-back Jamaican rhythms, infectious basslines, and positive vibrations (mostly). One love!",
        icon: "fas fa-drum", // Consider fas fa-cannabis if appropriate for audience
        color: "from-green-600 via-yellow-500 to-red-500", // Rasta colors
         vibe: "chill",
        tracks: [ {title: "No Woman, No Cry", artist: "Bob Marley & The Wailers"}, {title: "Pressure Drop", artist: "Toots & The Maytals"}, {title: "Red Red Wine", artist: "UB40"}, {title: "The Harder They Come", artist: "Jimmy Cliff"}, {title: "Stir It Up", artist: "Bob Marley & The Wailers"}, {title: "Many Rivers to Cross", artist: "Jimmy Cliff"} ],
        related: [ {name: "Dub", description: "An instrumental offshoot focusing on remixing reggae tracks with heavy echo, reverb, and effects."}, {name: "Ska", description: "The faster-paced precursor to Reggae, with emphasis on the upbeat."} ]
    },
    jazz: {
        name: "Jazz",
        description: "Improvisation is key. Cool, complex, smooth, or chaotic – jazz has it all. Prepare for saxophone solos.",
        icon: "fas fa-saxophone",
        color: "from-blue-500 to-purple-500",
         vibe: "chill", // Often, can be intense!
        tracks: [ {title: "So What", artist: "Miles Davis"}, {title: "Take Five", artist: "Dave Brubeck Quartet"}, {title: "Giant Steps", artist: "John Coltrane"}, {title: "Strange Fruit", artist: "Billie Holiday"}, {title: "My Favorite Things", artist: "John Coltrane"}, {title: "Round Midnight", artist: "Thelonious Monk"} ],
        related: [ {name: "Blues", description: "A foundational influence on Jazz, sharing harmonic structures and improvisational spirit."}, {name: "Jazz Fusion", description: "Blends jazz improvisation and harmony with rock, funk, and electronic elements."} ]
    },
    jazzfusion: {
         name: "Jazz Fusion",
         description: "Jazz went electric and got funky. Complex jazz harmonies meet rock energy and R&B grooves. Mind-bending stuff.",
         icon: "fas fa-bolt-lightning",
         color: "from-yellow-400 to-red-500",
         vibe: "experimental",
         tracks: [ {title: "Chameleon", artist: "Herbie Hancock"}, {title: "Birdland", artist: "Weather Report"}, {title: "Spain", artist: "Chick Corea"}, {title: "Red Baron", artist: "Billy Cobham"}, {title: "Actual Proof", artist: "Herbie Hancock"}, {title: "Bitches Brew", artist: "Miles Davis"} ],
         related: [ {name: "Progressive Rock", description: "Shares complexity and technical skill, but generally more rock-focused structure and sound."}, {name: "Funk", description: "A key rhythmic and harmonic influence, providing the groove backbone for much fusion."} ]
    },
    blues: {
        name: "Blues",
        description: "The bedrock of so much music. Soulful vocals, call-and-response guitar, and lyrics about hard times and heartbreak. Simple, powerful.",
        icon: "fas fa-guitar-electric",
        color: "from-blue-700 to-gray-600",
         vibe: "chill",
        tracks: [ {title: "Sweet Home Chicago", artist: "Robert Johnson"}, {title: "The Thrill Is Gone", artist: "B.B. King"}, {title: "Hoochie Coochie Man", artist: "Muddy Waters"}, {title: "Cross Road Blues", artist: "Robert Johnson"}, {title: "Pride and Joy", artist: "Stevie Ray Vaughan"}, {title: "Smokestack Lightnin'", artist: "Howlin' Wolf"} ],
        related: [ {name: "Rock and Roll", description: "Directly evolved from Blues, speeding up tempos and adding more energetic instrumentation."}, {name: "Soul Music", description: "Combines blues and gospel influences with R&B rhythms and passionate vocals."} ]
    },
     // Hip Hop / R&B / Pop Leaning
    hiphop: {
        name: "Hip Hop",
        description: "More than music, it's a culture. Rapping, beats, sampling, turntablism... constantly evolving, always influential.",
        icon: "fas fa-microphone-alt",
        color: "from-blue-600 to-indigo-700",
         vibe: "upbeat", // Can vary widely!
        tracks: [ {title: "N.Y. State of Mind", artist: "Nas"}, {title: "C.R.E.A.M.", artist: "Wu-Tang Clan"}, {title: "Juicy", artist: "The Notorious B.I.G."}, {title: "Shook Ones, Pt. II", artist: "Mobb Deep"}, {title: "Alright", artist: "Kendrick Lamar"}, {title: "Ms. Jackson", artist: "OutKast"} ],
        related: [ {name: "R&B", description: "Shares roots and often collaborates, with R&B focusing more on singing and melody over rhythmic rapping."}, {name: "Funk", description: "A major source of samples and rhythmic inspiration for early Hip Hop."} ]
    },
    rnb: {
        name: "R&B (Rhythm & Blues)",
        description: "Smooth vocals, slick production, and usually about love or lack thereof. The modern sound blends pop, soul, and hip hop seamlessly.",
        icon: "fas fa-heart",
        color: "from-rose-400 to-red-500",
         vibe: "upbeat", // Often
        tracks: [ {title: "No Scrubs", artist: "TLC"}, {title: "Crazy in Love", artist: "Beyoncé ft. Jay-Z"}, {title: "U Remind Me", artist: "Usher"}, {title: "Doo Wop (That Thing)", artist: "Lauryn Hill"}, {title: "Thinkin Bout You", artist: "Frank Ocean"}, {title: "Waterfalls", artist: "TLC"} ],
        related: [ {name: "Soul Music", description: "The direct predecessor, providing the vocal passion and gospel influences."}, {name: "Hip Hop", description: "Frequently integrated, with rappers featuring on R&B tracks and vice-versa ('Hip Hop Soul')."} ]
    },
    soul: {
        name: "Soul Music",
        description: "Pure feeling. Gospel passion meets blues structure and R&B rhythm. Horns, heart, and voices that could move mountains.",
        icon: "fas fa-record-vinyl",
        color: "from-amber-600 to-orange-700",
         vibe: "upbeat",
        tracks: [ {title: "Respect", artist: "Aretha Franklin"}, {title: "(Sittin' On) The Dock of the Bay", artist: "Otis Redding"}, {title: "What's Going On", artist: "Marvin Gaye"}, {title: "I Heard It Through The Grapevine", artist: "Marvin Gaye"}, {title: "A Change Is Gonna Come", artist: "Sam Cooke"}, {title: "Stand By Me", artist: "Ben E. King"} ],
        related: [ {name: "R&B", description: "Modern evolution of Soul, often incorporating more electronic production and pop structures."}, {name: "Funk", description: "Developed from Soul, emphasizing rhythm, basslines, and groove over melodic structure."} ]
    },
    funk: {
        name: "Funk",
        description: "It's all about THE GROOVE. Syncopated bass, tight drums, chicken-scratch guitar, and horn stabs. Get on the good foot!",
        icon: "fas fa-star",
        color: "from-purple-600 to-orange-500",
         vibe: "upbeat",
        tracks: [ {title: "Get Up (I Feel Like Being a) Sex Machine", artist: "James Brown"}, {title: "Superstition", artist: "Stevie Wonder"}, {title: "Flash Light", artist: "Parliament"}, {title: "Play That Funky Music", artist: "Wild Cherry"}, {title: "Brick House", artist: "Commodores"}, {title: "Give Up the Funk (Tear the Roof off the Sucker)", artist: "Parliament"} ],
        related: [ {name: "Soul Music", description: "Funk's direct ancestor, providing the vocal and harmonic basis."}, {name: "Disco", description: "Adopted Funk's rhythmic intensity, adding lush strings and four-on-the-floor beats."} ]
    },
     pop: {
        name: "Pop",
        description: "Catchy, polished, and designed to get stuck in your head for weeks. Love it or hate it, you probably know the words.",
        icon: "fas fa-microphone",
        color: "from-sky-400 to-pink-400",
         vibe: "upbeat",
        tracks: [ {title: "Billie Jean", artist: "Michael Jackson"}, {title: "Like a Prayer", artist: "Madonna"}, {title: "Toxic", artist: "Britney Spears"}, {title: "Rolling in the Deep", artist: "Adele"}, {title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars"}, {title: "Blinding Lights", artist: "The Weeknd"} ],
        related: [ {name: "Dance Pop", description: "Pop music specifically designed for dancing, with strong electronic beats."}, {name: "Electropop", description: "Pop music heavily reliant on synthesizers and electronic production."} ]
    },
     dreampop: {
        name: "Dream Pop",
        description: "Floaty vocals, shimmering guitars drenched in reverb, and hazy atmospheres. Like listening to music underwater, but in a good way.",
        icon: "fas fa-cloud",
        color: "from-indigo-300 to-violet-400",
         vibe: "chill",
        tracks: [ {title: "Space Song", artist: "Beach House"}, {title: "Cherry-coloured Funk", artist: "Cocteau Twins"}, {title: "Myth", artist: "Beach House"}, {title: "Fade Into You", artist: "Mazzy Star"}, {title: "Sometimes", artist: "My Bloody Valentine"}, {title: "Soon", artist: "My Bloody Valentine"} ],
        related: [ {name: "Shoegaze", description: "Shares atmospheric qualities but often much louder, more distorted, and vocals buried in the mix."}, {name: "Ambient Pop", description: "Blends pop structures with ambient textures, often less guitar-focused than Dream Pop."} ]
    },
    // --- ADDED UNIQUE GENRES ---
    midwestemo: {
        name: "Midwest Emo",
        description: "Twinkly guitars, complex rhythms, and earnest, often shouted vocals about feelings. Think basements, flannel, and intricate melodies.",
        icon: "fas fa-heart-crack", // Alt: fas fa-guitar
        color: "from-cyan-200 to-blue-400",
        vibe: "rock", // Can be chill or intense depending on the track
        tracks: [ {title: "Never Meant", artist: "American Football"}, {title: "The Summer Ends", artist: "American Football"}, {title: "Your Deep Rest", artist: "The Hotelier"}, {title: "Honestly?", artist: "Tiny Moving Parts"}, {title: "I Think I'll Be Ok", artist: "Bayside (Early)"}, {title: "Such Small Hands", artist: "La Dispute"} ],
        related: [ {name: "Indie Rock", description: "Shares guitar focus and often introspective lyrics, but usually less rhythmically complex."}, {name: "Math Rock", description: "Shares complex instrumentation and time signatures, but often less focused on emotive vocals."} ]
    },
    phonk: {
        name: "Phonk",
        description: "Dark, hypnotic beats sampling 90s Memphis rap, often with heavy bass, cowbells, and distorted vocals. For drifting cars or late-night vibes.",
        icon: "fas fa-car-burst", // Alt: fas fa-skull-crossbones
        color: "from-purple-800 to-gray-900",
        vibe: "intense",
        tracks: [ {title: "Murder In My Mind", artist: "Kordhell"}, {title: "Rave", artist: "Dxrk ダーク"}, {title: "METAMORPHOSIS", artist: "INTERWORLD"}, {title: "Close Eyes", artist: "DVRST"}, {title: "PRINCE OF DARKNESS", artist: "SHADXWBXRN, ARCHEZ, KXNVRA"}, {title: "SCOPIN", artist: "KUTE"} ],
        related: [ {name: "Trap", description: "Shares hip-hop roots and heavy bass, but Phonk often has a more lo-fi, distorted, and repetitive feel."}, {name: "Memphis Rap", description: "The direct source of samples and inspiration for classic Phonk."} ]
    },
    jpop: {
        name: "J-Pop (Japanese Pop)",
        description: "Diverse, high-energy pop from Japan. Catchy melodies, intricate arrangements, often incorporating rock, electronic, and traditional elements.",
        icon: "fas fa-microphone-stand", // Alt: fas fa-torii-gate
        color: "from-pink-400 to-orange-400",
        vibe: "upbeat",
        tracks: [ {title: "Idol", artist: "YOASOBI"}, {title: "Uptown Funk (Japanese Cover often viral)", artist: "Various"}, {title: "Koi", artist: "Gen Hoshino"}, {title: "PONPONPON", artist: "Kyary Pamyu Pamyu"}, {title: "Gurenge", artist: "LiSA"}, {title: "Marunouchi Sadistic", artist: "Sheena Ringo"} ],
        related: [ {name: "K-Pop", description: "Shares high production values and genre blending, but with distinct cultural and stylistic origins."}, {name: "Anime OST", description: "Frequently features J-Pop artists and shares similar high-energy or emotional styles."} ]
    },
    kpop: {
        name: "K-Pop (Korean Pop)",
        description: "Global phenomenon known for polished production, sharp choreography, genre-blending, and charismatic performers. Catchy hooks guaranteed.",
        icon: "fas fa-users", // Alt: fas fa-star
        color: "from-sky-400 to-fuchsia-500",
        vibe: "upbeat",
        tracks: [ {title: "Dynamite", artist: "BTS"}, {title: "Gangnam Style", artist: "PSY"}, {title: "DDU-DU DDU-DU", artist: "BLACKPINK"}, {title: "Fancy", artist: "TWICE"}, {title: "Love Shot", artist: "EXO"}, {title: "God's Menu", artist: "Stray Kids"} ],
        related: [ {name: "J-Pop", description: "Shares East Asian pop roots but differs in training systems, musical structures, and global marketing."}, {name: "Pop", description: "Shares the goal of broad appeal and catchiness, often incorporating global pop trends."} ]
    },
    animeost: {
        name: "Anime OST (Original Soundtrack)",
        description: "Music composed for Japanese animation. Ranges from epic orchestral scores and J-Rock anthems to J-Pop hits and touching ballads.",
        icon: "fas fa-tv", // Alt: fas fa-book-open (manga)
        color: "from-red-500 to-indigo-500",
        vibe: "varied", // Highly dependent on the anime!
        tracks: [ {title: "Gurenge (Demon Slayer)", artist: "LiSA"}, {title: "Unravel (Tokyo Ghoul)", artist: "TK from Ling tosite sigure"}, {title: "A Cruel Angel's Thesis (Evangelion)", artist: "Yoko Takahashi"}, {title: "The World (Death Note)", artist: "Nightmare"}, {title: "Tank! (Cowboy Bebop)", artist: "The Seatbelts"}, {title: "You Say Run (My Hero Academia)", artist: "Yuki Hayashi"} ],
        related: [ {name: "J-Pop", description: "Often features prominently in openings and endings."}, {name: "Film Score", description: "Shares the purpose of enhancing narrative and emotion through music."} ]
    },
    ukdrill: {
        name: "UK Drill",
        description: "Dark, gritty hip-hop subgenre originating from London. Characterized by sliding 808 basslines, sparse beats, and often nihilistic lyrics.",
        icon: "fas fa-mask", // Alt: fas fa-city
        color: "from-slate-600 to-black",
        vibe: "intense",
        tracks: [ {title: "Know Better", artist: "Headie One"}, {title: "Homerton B", artist: "Unknown T"}, {title: "War", artist: "ArrDee"}, {title: "Gun Lean", artist: "Russ Millions"}, {title: "Body", artist: "Tion Wayne & Russ Millions"}, {title: "No Diet", artist: "Digga D"} ],
        related: [ {name: "Grime", description: "Shares UK rap roots but typically faster tempos and different production styles."}, {name: "Chicago Drill", description: "The originator of the 'drill' sound, which UK Drill adapted and evolved."} ]
    },
    edm: {
        name: "EDM (Electronic Dance Music)",
        description: "Broad term for electronic music made for clubs and festivals. Big builds, bass drops, and energetic beats designed to make you move.",
        icon: "fas fa-bolt-lightning", // Alt: fas fa-headphones-alt
        color: "from-cyan-400 to-lime-400",
        vibe: "upbeat",
        tracks: [ {title: "Levels", artist: "Avicii"}, {title: "Don't You Worry Child", artist: "Swedish House Mafia"}, {title: "Clarity", artist: "Zedd ft. Foxes"}, {title: "Animals", artist: "Martin Garrix"}, {title: "Lean On", artist: "Major Lazer & DJ Snake ft. MØ"}, {title: "Wake Me Up", artist: "Avicii"} ],
        related: [ {name: "House", description: "A foundational genre for much of EDM, often more groove-focused."}, {name: "Techno", description: "Another key influence, often more repetitive and less focused on big 'drops'."} ]
    },
    futurebass: {
        name: "Future Bass",
        description: "Electronic genre with wavy synths, pitch-bending melodies, trap-influenced percussion, and often emotive vocals. Feels futuristic and sparkly.",
        icon: "fas fa-meteor", // Alt: fas fa-atom
        color: "from-teal-300 to-purple-400",
        vibe: "upbeat", // Often has chill elements too
        tracks: [ {title: "Shelter", artist: "Porter Robinson & Madeon"}, {title: "You & Me (Flume Remix)", artist: "Disclosure"}, {title: "Say It", artist: "Flume ft. Tove Lo"}, {title: "Innerbloom", artist: "RÜFÜS DU SOL"}, {title: "Never Be Like You", artist: "Flume ft. Kai"}, {title: "Alone", artist: "Marshmello"} ],
        related: [ {name: "Trap", description: "Influences the rhythmic patterns and drum sounds."}, {name: "Chillwave", description: "Shares some hazy, atmospheric qualities but often less 'drop' focused."} ]
    },
     // Other Genres
     classicalmusic: {
        name: "Classical Music",
        description: "Centuries of genius. Symphonies, concertos, operas... complex, emotional, and surprisingly dramatic sometimes. Fancy.",
        icon: "fas fa-violin",
        color: "from-yellow-200 to-gray-400",
         vibe: "chill", // Often, but can be intense!
        tracks: [ {title: "Symphony No. 5", artist: "Ludwig van Beethoven"}, {title: "The Four Seasons", artist: "Antonio Vivaldi"}, {title: "Clair de Lune", artist: "Claude Debussy"}, {title: "Ride of the Valkyries", artist: "Richard Wagner"}, {title: "Eine Kleine Nachtmusik", artist: "Wolfgang Amadeus Mozart"}, {title: "Also sprach Zarathustra", artist: "Richard Strauss"} ],
        related: [ {name: "Neoclassical", description: "Modern compositions drawing inspiration from classical forms and tonality, often blended with other genres."}, {name: "Film Score", description: "Often uses orchestral instrumentation and classical techniques to create mood for movies."} ]
    },
     filmmusic: {
         name: "Film Score / Soundtrack",
         description: "The sounds that make movies epic, heartbreaking, or terrifying. Often orchestral, always enhancing the story.",
         icon: "fas fa-clapperboard",
         color: "from-gray-400 to-blue-600",
         vibe: "varied", // Depends heavily on the film!
         tracks: [ {title: "Duel of the Fates (Star Wars)", artist: "John Williams"}, {title: "Time (Inception)", artist: "Hans Zimmer"}, {title: "Concerning Hobbits (LOTR)", artist: "Howard Shore"}, {title: "Hedwig's Theme (Harry Potter)", artist: "John Williams"}, {title: "The Ecstasy of Gold (The Good, the Bad and the Ugly)", artist: "Ennio Morricone"}, {title: "Lux Aeterna (Requiem for a Dream)", artist: "Clint Mansell"} ],
         related: [ {name: "Classical Music", description: "A primary influence and source of instrumentation/technique for orchestral scores."}, {name: "Ambient", description: "Often used in scores to create atmosphere and mood, especially in sci-fi or thrillers."} ]
     }
    // Add more genres with 'vibe' property...
}; // <<<< Make sure this closing brace is here!

// Get DOM elements
const startButton = document.getElementById('startButton');
const nextButton = document.getElementById('nextButton');
const retakeButton = document.getElementById('retakeButton');
const shareButton = document.getElementById('shareButton');
const progressBar = document.getElementById('progressBar');
const currentQuestionSpan = document.getElementById('currentQuestion');
const questionContainer = document.getElementById('questionContainer');
const storyVsVibeSlider = document.getElementById('storyVsVibeSlider');
const secondaryGenresContainer = document.getElementById('secondaryGenresContainer'); // Keep this if needed elsewhere, but not for the listener
const trackListContainer = document.getElementById('trackList');
const playlistTitleElement = document.getElementById('playlistTitle');
const memeEmojiElement = document.getElementById('memeEmoji'); // Get the meme emoji span
const resultsSection = document.getElementById('results'); // Get the results section for the event listener

// Section references
const sections = {
    landing: document.getElementById('landing'),
    quiz: document.getElementById('quiz'),
    loading: document.getElementById('loading'),
    results: resultsSection // Use the variable defined above
};

// Quiz variables
let currentQuestion = 1;
const totalQuestions = 10;
let userScores = {};
let currentSelections = {};
let sliderValue = 50;
let isQuestionAnswered = false;

// Analysis messages
const analysisMessages = [
    "Decoding your sonic signature...", "Calibrating the vibe-o-meter 3000...",
    "Consulting the ancient genre spirits...", "Mixing your perfect sound cocktail (shaken, not stirred)...",
    "Aligning your aural chakras (hope they're not wonky)...", "Quantifying your rhythm quotient (it's over 9000?)...",
    "Synthesizing your melody matrix... beep boop...", "Tuning into your frequency... don't touch that dial!",
    "Checking if the vibe is, indeed, immaculate..."
];

// --- Helper Functions ---

function showSection(sectionId) {
     Object.keys(sections).forEach(key => {
        sections[key].style.display = 'none';
        sections[key].classList.remove('active', 'animate__animated', 'animate__fadeIn', 'hidden');
    });

    if (sections[sectionId]) {
        sections[sectionId].style.display = 'block';
        sections[sectionId].classList.add('active', 'animate__animated', 'animate__fadeIn');
    } else {
        console.error("Section not found:", sectionId);
    }

     // Control body scroll based on section
     if (sectionId === 'landing' || sectionId === 'loading') {
         document.body.style.overflow = 'hidden';
     } else {
         document.body.style.overflow = 'auto';
     }
}


function updateProgress() {
    const percentage = ((currentQuestion -1) / totalQuestions) * 100;
    progressBar.style.width = `${percentage}%`;
    currentQuestionSpan.textContent = currentQuestion;
}

function enableNextButton() {
     isQuestionAnswered = true;
     nextButton.classList.remove('hidden-button');
     nextButton.disabled = false;
}

function disableNextButton() {
     isQuestionAnswered = false;
     nextButton.classList.add('hidden-button');
     nextButton.disabled = true;
}


function showQuestion(questionNumber) {
    document.querySelectorAll('.question-item').forEach(item => {
        const itemQuestionNumber = parseInt(item.dataset.question);
        item.style.display = 'none'; // Hide all first
        item.classList.remove('animate__animated', 'animate__fadeIn', 'hidden');

        if (itemQuestionNumber === questionNumber) {
             item.style.display = 'block';
             item.classList.add('animate__animated', 'animate__fadeIn');
         } else {
            item.classList.add('hidden');
        }
    });

    currentSelections = {}; // Reset selections for the new question
    disableNextButton(); // Disable next until an answer is selected
    isQuestionAnswered = false;

    // Special case for slider question - it's always 'answered'
    if(questionNumber === 3) {
        sliderValue = parseInt(storyVsVibeSlider.value);
        enableNextButton();
    }

    updateProgress();
}

 // Stores the scores from the currently selected answer
 function commitAnswerScores() {
     Object.entries(currentSelections).forEach(([genre, score]) => {
         // Ensure the genre exists in the database before trying to score it
         if (genreDatabase[genre]) {
             if (!userScores[genre]) userScores[genre] = 0;
             userScores[genre] += score; // Add score for selected genres
         } else {
            // console.warn(`Attempted to score non-existent genre: ${genre}`); // Optional warning
         }
     });
     console.log("Updated Scores:", userScores);
     currentSelections = {}; // Clear selections after committing
 }

 // Handles selecting/deselecting an option for most questions
function processSelection(element, scoreString) {
    const genres = scoreString.split(',');
    const scoreValue = 1; // Each selection adds 1 point to associated genres

    // Find the parent question item to manage selections within that question only
    const questionGroup = element.closest('.question-item');
    if (!questionGroup) return; // Should not happen

    // If the clicked element is already selected, deselect it
    if (element.classList.contains('selected')) {
        element.classList.remove('selected');
         genres.forEach(genre => {
             if (currentSelections[genre]) {
                 currentSelections[genre] -= scoreValue;
                 if (currentSelections[genre] <= 0) {
                     delete currentSelections[genre];
                 }
             }
         });
         // Check if any other selection remains in this question group
        const remainingSelected = questionGroup.querySelector('.selectable.selected, .selectable-option.selected, .abstract-shape.selected');
        if (!remainingSelected) {
            disableNextButton(); // Disable if nothing is selected anymore
        }

    } else {
         // Deselect any previously selected option within the same question
         questionGroup.querySelectorAll('.selectable.selected, .selectable-option.selected, .abstract-shape.selected').forEach(selectedEl => {
             selectedEl.classList.remove('selected');
             const oldScoreString = selectedEl.dataset.score;
             if (oldScoreString) {
                 const oldGenres = oldScoreString.split(',');
                 // Remove scores from the previously selected item
                 oldGenres.forEach(genre => {
                     if (currentSelections[genre]) {
                         currentSelections[genre] -= scoreValue;
                         if (currentSelections[genre] <= 0) {
                             delete currentSelections[genre];
                         }
                     }
                 });
             }
         });

         // Select the new element
         element.classList.add('selected');

         // Add scores for the newly selected item
         genres.forEach(genre => {
            // Check if genre exists before adding score
            if (genreDatabase[genre]) {
                if (!currentSelections[genre]) currentSelections[genre] = 0;
                currentSelections[genre] += scoreValue;
            } else {
                 // console.warn(`Selected element contains non-existent genre in data-score: ${genre}`); // Optional warning
            }
         });

         enableNextButton(); // Allow moving to the next question
    }
     console.log("Current Question Selections:", currentSelections);
}

// Calculates the top N genres based on accumulated scores
function getTopGenres(count = 3) {
    // Add scores from the slider before calculating final results
    // Ensure this only happens ONCE before final calculation OR if specifically on Q3
    if (currentQuestion > totalQuestions || currentQuestion === 3 ) {
         let sliderScoreGenres = '';
          // Define genres more broadly but potentially include relevant new ones
          if (sliderValue < 33) sliderScoreGenres = 'indiefolk,hiphop,midwestemo,singersongwriter,punk,blues,classicrock,folk'; // Story focused
          else if (sliderValue > 66) sliderScoreGenres = 'ambient,techno,instrumentalrock,lofi,dub,postrock,drone,vaporwave,idm,phonk,cyberpunk,dubstep'; // Vibes focused
          else sliderScoreGenres = 'pop,indierock,rnb,soul,dreampop,funk,house,jpop,kpop,edm,futurebass,synthwave'; // Mixed/Balanced

          const genres = sliderScoreGenres.split(',');
           genres.forEach(genreKey => {
              // Check if the genre actually exists in our database
              if(genreDatabase[genreKey]) {
                  if (!userScores[genreKey]) userScores[genreKey] = 0;
                  userScores[genreKey] += 1; // Add score from slider position
              }
          });
        console.log("Scores after potentially adding Slider:", userScores); // Log potentially updated scores
    }

    // Filter out entries with zero or negative scores before sorting
    const validScores = Object.entries(userScores).filter(([, score]) => score > 0);

    return validScores
        .sort(([, scoreA], [, scoreB]) => scoreB - scoreA) // Sort descending by score
        .slice(0, count)
        .map(([genre]) => genre); // Return only the genre keys
}

// Finds related genres, trying not to repeat already shown ones
function getDiverseRelated(primaryKey, existingKeys, count = 2) {
    const primaryGenre = genreDatabase[primaryKey];
    if (!primaryGenre || !primaryGenre.related) return [];

     const normalizeKey = (name) => name ? name.toLowerCase().replace(/ /g, '').replace(/\//g, '').replace(/\(/g, '').replace(/\)/g, '') : ''; // Added removal of ()

     let relatedOptions = primaryGenre.related
         .map(rel => {
             const relatedKey = normalizeKey(rel.name);
             // Ensure the related genre exists in our main database AND has data
             return (genreDatabase[relatedKey] && relatedKey) ? { key: relatedKey, ...genreDatabase[relatedKey] } : null;
         })
         .filter(relData => relData && !existingKeys.includes(relData.key)); // Filter out nulls and already displayed keys


    // If not enough related genres found, try finding top-scoring genres not yet displayed
     if (relatedOptions.length < count) {
        const allTop = Object.entries(userScores)
                         .filter(([, score]) => score > 0) // Only consider genres with positive score
                         .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
                         .map(([key]) => key); // Get all scored genres, sorted

        const fallbacks = allTop
            .map(key => genreDatabase[key] ? { key: key, ...genreDatabase[key] } : null)
            .filter(fallbackData =>
                fallbackData && // Exists in DB
                !existingKeys.includes(fallbackData.key) && // Not already shown/primary
                !relatedOptions.some(rel => rel.key === fallbackData.key) // Not already found as related
             );

         relatedOptions = [...relatedOptions, ...fallbacks];
     }


    return relatedOptions.slice(0, count).map(rel => ({ // Return only necessary info
            key: rel.key,
            name: rel.name,
            description: rel.description // Use the full description from the database for related items
         }));
}

// Updates the playlist display based on the selected genre key
function updatePlaylist(genreKey) {
    const genreData = genreDatabase[genreKey];
    trackListContainer.innerHTML = ''; // Clear previous tracks

    if (!genreData) {
        console.error("Genre data not found for key:", genreKey);
         playlistTitleElement.textContent = `Playlist for ???`;
         trackListContainer.innerHTML = `<p class="text-gray-400 italic text-center">Whoops! Couldn't find tracks for this. Maybe try the main genre?</p>`;
        return;
    }

     // Update playlist title with more fun text
     playlistTitleElement.textContent = `Your Official ${genreData.name} Vibe Mix:`;


    if (genreData.tracks && genreData.tracks.length > 0) {
        // Show up to 5 random tracks from the genre's list
        const tracksToShow = [...genreData.tracks].sort(() => 0.5 - Math.random()).slice(0, 5); // Use spread to avoid modifying original

        tracksToShow.forEach(track => {
            // Create YouTube search link for the track
            const youtubeQuery = encodeURIComponent(`${track.artist} ${track.title}`);
            const youtubeUrl = `https://www.youtube.com/results?search_query=${youtubeQuery}`;

            const trackElement = document.createElement('a');
            trackElement.href = youtubeUrl;
            trackElement.target = "_blank"; // Open in new tab
            trackElement.rel = "noopener noreferrer";
            trackElement.className = 'track-item animate__animated animate__fadeInUp'; // Apply styling and animation

            trackElement.innerHTML = `
                <div class="w-12 h-12 bg-gradient-to-br ${genreData.color || 'from-gray-500 to-gray-700'} rounded flex items-center justify-center mr-4 flex-shrink-0 shadow-md">
                    <i class="fas fa-play text-white"></i>
                </div>
                <div class="overflow-hidden">
                    <h4 class="font-bold truncate" title="${track.title} by ${track.artist}">${track.title}</h4>
                    <p class="text-gray-400 truncate" title="${track.artist}">${track.artist}</p>
                </div>
                <div class="ml-auto pl-2 flex-shrink-0"> <!-- Added container for icon -->
                     <i class="fas fa-external-link-alt text-gray-500 hover:text-teal-400 transition-colors"></i>
                </div>
            `;
            trackListContainer.appendChild(trackElement);
        });
    } else {
         // Placeholder if no tracks are defined for the genre
         trackListContainer.innerHTML = `<p class="text-gray-400 italic text-center">No specific tracks found for ${genreData.name}. The vibe is strong, though!</p>`;
    }
}

// NEW Helper function to handle highlighting clickable genre cards
function setActiveGenreCard(selectedCardElement) {
    // Remove 'selected' class from all clickable cards within the results section first
    resultsSection.querySelectorAll('.clickable-genre-card').forEach(card => {
        card.classList.remove('selected');
    });

    // Add 'selected' class to the newly selected card
    if (selectedCardElement) {
        selectedCardElement.classList.add('selected');
    }
}


// Displays the final results page
function displayResults() {
    const topGenreKeys = getTopGenres(5); // Get top 5 scores (make sure slider score is included here)
    console.log("Top Genre Keys for Display:", topGenreKeys);

    // Fallback logic: if no genres scored (edge case), default to something neutral
    const primaryGenreKey = topGenreKeys[0] || 'pop'; // Default fallback if no scores
    const primaryGenreData = genreDatabase[primaryGenreKey];
    const primaryGenreCardWrapper = document.getElementById('primaryGenreCardWrapper'); // Get the wrapper element

     // --- Meme Emoji Logic (keep as is) ---
     let memeReaction = "🎧"; // Default
     const vibeType = primaryGenreData?.vibe || 'varied'; // Get vibe type or default
     switch(vibeType) {
         case 'chill': memeReaction = '😌'; break;
         case 'upbeat': memeReaction = '😎'; break;
         case 'intense': memeReaction = '🔥'; break;
         case 'retro': memeReaction = '✨'; break;
         case 'experimental': memeReaction = '🧠'; break;
         case 'rock': memeReaction = '🤘'; break;
         default: memeReaction = '🎶';
     }
      if (memeEmojiElement) {
         memeEmojiElement.textContent = memeReaction;
         memeEmojiElement.classList.remove('animate__bounceIn');
         void memeEmojiElement.offsetWidth; // Trigger reflow
         memeEmojiElement.classList.add('animate__bounceIn');
     }
     // --- End Meme Emoji Logic ---


    if (!primaryGenreData || !primaryGenreCardWrapper) { // Check for wrapper too
        console.error("Primary genre data or wrapper element not found for key:", primaryGenreKey);
        // Basic error display
        document.getElementById('primaryGenre').textContent = "Hmm, Error Vibe?";
        document.getElementById('primaryGenreDescription').textContent = "Something went weird. Try again?";
        // Clear secondary cards and playlist
        document.getElementById('secondaryGenre1').textContent = "-";
        document.getElementById('secondaryGenre1Description').textContent = "";
        document.getElementById('secondaryGenre2').textContent = "-";
        document.getElementById('secondaryGenre2Description').textContent = "";
        document.getElementById('secondaryGenreCard1').dataset.genreKey = "";
        document.getElementById('secondaryGenreCard2').dataset.genreKey = "";
        updatePlaylist(null);
        setActiveGenreCard(null); // Clear any selection highlight
        showSection('results'); // Still show results section, but with error message
        return;
    }

    // **** Set the data-genre-key on the primary card wrapper ****
    primaryGenreCardWrapper.dataset.genreKey = primaryGenreKey;

    // Update primary genre display text/icon (keep existing logic)
    document.getElementById('primaryGenre').textContent = primaryGenreData.name;
    let description = primaryGenreData.description;
     if (vibeType === 'intense' && Math.random() > 0.5) description += " Hope you're ready.";
     if (vibeType === 'chill' && Math.random() > 0.5) description += " Maximum relaxation engaged.";
     if (vibeType === 'experimental' && Math.random() > 0.5) description += " Embrace the weirdness!";
    document.getElementById('primaryGenreDescription').textContent = description;

    const iconContainer = document.getElementById('primaryGenreIconContainer');
    const iconElement = document.getElementById('primaryGenreIcon');
    iconElement.className = `${primaryGenreData.icon || 'fas fa-music'} text-5xl text-white`;
    iconContainer.className = `w-36 h-36 bg-gradient-to-br ${primaryGenreData.color || 'from-gray-500 to-gray-700'} rounded-full mx-auto flex items-center justify-center shadow-lg`;

    // Update secondary genres (keep existing logic)
    let displayedKeys = [primaryGenreKey];
    const relatedGenres = getDiverseRelated(primaryGenreKey, displayedKeys, 2);
    const secGenreCard1 = document.getElementById('secondaryGenreCard1');
    const secGenreCard2 = document.getElementById('secondaryGenreCard2');

     // Fill Secondary Slot 1
     let sec1Key = null;
     let sec1Name = "Mystery Vibe";
     let sec1Desc = "Keep exploring!";
     if (relatedGenres.length > 0 && relatedGenres[0] && relatedGenres[0].key) {
         const sec1Data = relatedGenres[0];
         sec1Name = sec1Data.name;
         sec1Desc = sec1Data.description; // Use the full related description
         sec1Key = sec1Data.key;
         displayedKeys.push(sec1Key);
     } else {
         // Fallback to next highest score if no direct related found or available
         const fallback1Key = topGenreKeys.find(key => key && !displayedKeys.includes(key));
          if (fallback1Key && genreDatabase[fallback1Key]) {
              const fallback1Data = genreDatabase[fallback1Key];
              sec1Name = fallback1Data.name;
              sec1Desc = `You also scored high here: ${fallback1Data.description.split('.')[0]}.`; // Keep short desc for high score fallback
              sec1Key = fallback1Key;
              displayedKeys.push(sec1Key);
          }
     }
     document.getElementById('secondaryGenre1').textContent = sec1Name;
     document.getElementById('secondaryGenre1Description').textContent = sec1Desc;
     secGenreCard1.dataset.genreKey = sec1Key || "";
     secGenreCard1.style.display = sec1Key ? 'block' : 'none'; // Hide card if no genre found

     // Fill Secondary Slot 2
     let sec2Key = null;
     let sec2Name = "Another Mystery";
     let sec2Desc = "Your taste is complex!";
      if (relatedGenres.length > 1 && relatedGenres[1] && relatedGenres[1].key) {
          const sec2Data = relatedGenres[1];
          sec2Name = sec2Data.name;
          sec2Desc = sec2Data.description; // Use the full related description
          sec2Key = sec2Data.key;
          displayedKeys.push(sec2Key);
     } else {
         // Fallback to next highest score if not enough related
         const fallback2Key = topGenreKeys.find(key => key && !displayedKeys.includes(key));
          if (fallback2Key && genreDatabase[fallback2Key]) {
               const fallback2Data = genreDatabase[fallback2Key];
               sec2Name = fallback2Data.name;
               sec2Desc = `Another strong contender: ${fallback2Data.description.split('.')[0]}.`; // Keep short desc
               sec2Key = fallback2Key;
               displayedKeys.push(sec2Key);
          }
     }
     document.getElementById('secondaryGenre2').textContent = sec2Name;
     document.getElementById('secondaryGenre2Description').textContent = sec2Desc;
     secGenreCard2.dataset.genreKey = sec2Key || "";
     secGenreCard2.style.display = sec2Key ? 'block' : 'none'; // Hide card if no genre found

    // Initially update playlist with primary genre tracks
    updatePlaylist(primaryGenreKey);

    // **** Initially highlight the primary genre card ****
    setActiveGenreCard(primaryGenreCardWrapper);

    // Make sure results section is visible
    showSection('results');
}


// Simulates the loading/analysis process
function simulateAnalysis() {
    let messageIndex = 0;
    const messageElement = document.getElementById('analysisMessages');
     if (!messageElement) return; // Safety check

    // Show initial message
    messageElement.textContent = analysisMessages[messageIndex];
    messageElement.classList.add('animate__animated', 'animate__fadeIn');

    // Cycle through messages
    const interval = setInterval(() => {
        messageIndex = (messageIndex + 1) % analysisMessages.length;
        // Fade out/in effect for message change
        messageElement.classList.remove('animate__fadeIn');
        messageElement.classList.add('animate__fadeOut');

        setTimeout(() => {
             messageElement.textContent = analysisMessages[messageIndex];
             messageElement.classList.remove('animate__fadeOut');
             messageElement.classList.add('animate__fadeIn');
        }, 500); // Wait for fade out animation

    }, 2000); // Change message every 2 seconds

    // Simulate analysis time (e.g., 5 seconds)
    setTimeout(() => {
        clearInterval(interval); // Stop changing messages
        displayResults(); // Calculate and display the actual results
    }, 5000); // Total analysis time
}

// --- Event Listeners ---

startButton.addEventListener('click', () => {
    showSection('quiz');
    showQuestion(1);
});

nextButton.addEventListener('click', () => {
     // Ensure an answer is selected (unless it's the slider question which is always 'answered' when enabled)
     if (!isQuestionAnswered) return;

     // Commit scores for the current question (except slider, handled *before* getTopGenres)
     if (currentQuestion !== 3) {
         commitAnswerScores();
     } else {
         // Update sliderValue right before moving on from Q3
         sliderValue = parseInt(storyVsVibeSlider.value);
         // Slider score is added later in getTopGenres before final display
     }

    // Move to next question or finish
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
         // Final question answered, move to loading/analysis
         // The getTopGenres() call inside simulateAnalysis/displayResults will handle the final slider score addition
         progressBar.style.width = `100%`;
        showSection('loading');
        simulateAnalysis(); // Start the analysis simulation
    }
});

retakeButton.addEventListener('click', () => {
    // Reset everything
    currentQuestion = 1;
    userScores = {};
    currentSelections = {};
    sliderValue = 50;
    storyVsVibeSlider.value = 50;
     document.querySelectorAll('.selectable.selected, .selectable-option.selected, .abstract-shape.selected').forEach(el => el.classList.remove('selected'));
     // Reset results section highlighting
     setActiveGenreCard(null);
     // Clear results placeholders
    document.getElementById('primaryGenre').textContent = "Calculating...";
    document.getElementById('primaryGenreDescription').textContent = "Please wait...";
    document.getElementById('primaryGenreIcon').className = 'fas fa-music text-5xl text-white';
    document.getElementById('primaryGenreIconContainer').className = 'w-36 h-36 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full mx-auto flex items-center justify-center shadow-lg';
    document.getElementById('secondaryGenre1').textContent = "Genre 1";
    document.getElementById('secondaryGenre1Description').textContent = "Description loading...";
    document.getElementById('secondaryGenre2').textContent = "Genre 2";
    document.getElementById('secondaryGenre2Description').textContent = "Description loading...";
     document.getElementById('secondaryGenreCard1').style.display = 'block'; // Make sure cards are visible again
     document.getElementById('secondaryGenreCard2').style.display = 'block';
    if(memeEmojiElement) memeEmojiElement.textContent = ""; // Clear meme emoji
    playlistTitleElement.textContent = "Your Official Vibe Check Mix:";
    trackListContainer.innerHTML = `<div class="track-item p-4 rounded flex items-center opacity-50">...</div>`; // Reset playlist visually

    showSection('landing'); // Go back to start
});

shareButton.addEventListener('click', () => {
    const primaryGenreName = document.getElementById('primaryGenre').textContent || "a super cool vibe";
    const resultText = `My Vibe Check result is ${primaryGenreName}! 🎧 I've found my sonic soulmate (kinda). Find yours here: ${window.location.href}`;
    const shareUrl = window.location.href;

    if (navigator.share) {
        navigator.share({ title: 'My Vibe Check Result!', text: resultText, url: shareUrl, })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing:', error));
    } else if (navigator.clipboard) {
        navigator.clipboard.writeText(resultText).then(() => {
             alert('Vibe description copied to clipboard! Share it far and wide.');
        }).catch(err => {
            alert('Could not copy results. Maybe just tell your friends how cool your music taste is?');
            console.error('Clipboard copy failed: ', err);
        });
    } else {
        alert('Sharing is not supported on this browser. Brag about your amazing result manually!');
    }
});

// Event delegation for selectable items in the quiz
questionContainer.addEventListener('click', (e) => {
    const selectableTarget = e.target.closest('.selectable, .selectable-option, .abstract-shape');
    if (selectableTarget && selectableTarget.dataset.score) {
         processSelection(selectableTarget, selectableTarget.dataset.score);
    }
});

 // Handle slider input specifically
storyVsVibeSlider.addEventListener('input', (e) => {
    sliderValue = parseInt(e.target.value);
     // Slider doesn't need explicit selection, just enable next if it was disabled
     if (!isQuestionAnswered) {
        enableNextButton();
     }
});

// **** UPDATED Event listener for clicking ANY clickable genre card in the results section ****
resultsSection.addEventListener('click', (e) => {
    // Find the closest ancestor element that is a clickable genre card
    const clickedCard = e.target.closest('.clickable-genre-card');

    // Check if a clickable card was actually found and if it has a valid genre key
    if (clickedCard && clickedCard.dataset.genreKey && clickedCard.dataset.genreKey !== "") {
        const genreKey = clickedCard.dataset.genreKey;
        console.log("Clicked genre card with key:", genreKey);

        // Update the playlist based on the clicked card's genre key
        updatePlaylist(genreKey);

        // Update the visual highlighting to show this card is selected
        setActiveGenreCard(clickedCard);
    }
});


// --- Initialize on page load ---
showSection('landing');