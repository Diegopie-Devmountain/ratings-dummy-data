
export const dummyMovieShort = new Promise((resolve) => {
  resolve({
    data: {
      response: [
        {
          movieId: 73,
          title: 'The Hunt',
          overview: "Twelve strangers wake up in a clearing. They don't know where they are—or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted turns the tables on her pursuers.",     
          posterPath: 'https://image.tmdb.org/t/p/original//wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg',
          releaseDate: '2020-03-13T00:00:00.000Z'
        },
        {
          movieId: 74,
          title: 'The Lord of the Rings: The Return of the King',
          overview: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
          posterPath: 'https://image.tmdb.org/t/p/original//rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
          releaseDate: '2003-12-17T00:00:00.000Z'
        },
        {
          movieId: 75,
          title: 'Ford v Ferrari',
          overview: 'American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.',
          posterPath: 'https://image.tmdb.org/t/p/original//6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg',
          releaseDate: '2019-11-15T00:00:00.000Z'
        },
        {
          movieId: 76,
          title: 'Love Wedding Repeat',
          overview: "While trying to make his sister's wedding day go smoothly, Jack finds himself juggling an angry ex-girlfriend, an uninvited guest with a secret, a misplaced sleep sedative, and the girl that got away in alternate versions of the same day.",
          posterPath: 'https://image.tmdb.org/t/p/original//zn7feouGPU8sELez4qvpp0EtgeQ.jpg',
          releaseDate: '2020-04-10T00:00:00.000Z'
        }
      ],
      success: true,
    },
  });
});


export const dummyMovieLongLoad = new Promise( (resolve) => {
  setTimeout(() => {
    resolve({
      data: {
        response: [
          {
            movieId: 61,
            title: 'Frozen',
            overview: "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
            posterPath: 'https://image.tmdb.org/t/p/original//yald8Lsb4uCRvjIH3spzR84Kdwf.jpg',
            releaseDate: '2013-11-27T00:00:00.000Z'
          },
          {
            movieId: 62,
            title: 'Captain America: Civil War',
            overview: 'Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.',
            posterPath: 'https://image.tmdb.org/t/p/original//A6BCtWOv5R1X6DmklAuSM6OxnL9.jpg',
            releaseDate: '2016-05-06T00:00:00.000Z'
          },
          {
            movieId: 63,
            title: 'Fury',
            overview: "In the last months of World War II, as the Allies make their final push in the European theatre, a battle-hardened U.S. Army sergeant named 'Wardaddy' commands a Sherman tank called 'Fury' and its five-man crew on a deadly mission behind enemy lines. Outnumbered and outgunned, Wardaddy and his men face overwhelming odds in their heroic attempts to strike at the heart of Nazi Germany.",
            posterPath: 'https://image.tmdb.org/t/p/original//pfte7wdMobMF4CVHuOxyu6oqeeA.jpg',
            releaseDate: '2014-10-17T00:00:00.000Z'
          },
          {
            movieId: 64,
            title: 'Thor: Ragnarok',
            overview: 'Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.',
            posterPath: 'https://image.tmdb.org/t/p/original//rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg',
            releaseDate: '2017-11-03T00:00:00.000Z'
          },
          {
            movieId: 65,
            title: 'The Shining',
            overview: "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
            posterPath: 'https://image.tmdb.org/t/p/original//b6ko0IKC8MdYBBPkkA1aBPLe2yz.jpg',
            releaseDate: '1980-05-23T00:00:00.000Z'
          },
          {
            movieId: 66,
            title: 'War of the Worlds',
            overview: 'Ray Ferrier is a divorced dockworker and less-than-perfect father. Soon after his ex-wife and her new husband drop off his teenage son and young daughter for a rare weekend visit, a strange and powerful lightning storm touches down.',
            posterPath: 'https://image.tmdb.org/t/p/original//6Biy7R9LfumYshur3YKhpj56MpB.jpg',
            releaseDate: '2005-06-29T00:00:00.000Z'
          },
          {
            movieId: 67,
            title: 'Dracula Untold',
            overview: "Vlad Tepes is a great hero, but when he learns the Sultan is preparing for battle and needs to form an army of 1,000 boys, he vows to find a way to protect his family. Vlad turns to dark forces in order to get the power to destroy his enemies and agrees to go from hero to monster as he's turned into the mythological vampire, Dracula.",
            posterPath: 'https://image.tmdb.org/t/p/original//m5h3NtZ2ZfryIHl1MvatmANvIqQ.jpg',
            releaseDate: '2014-10-03T00:00:00.000Z'
          },
          {
            movieId: 68,
            title: 'Avengers: Endgame',
            overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
            posterPath: 'https://image.tmdb.org/t/p/original//or06FN3Dka5tukK1e9sl16pB3iy.jpg',
            releaseDate: '2019-04-26T00:00:00.000Z'
          },
          {
            movieId: 69,
            title: 'Dark Waters',
            overview: "A tenacious attorney uncovers a dark secret that connects a growing number of unexplained deaths to one of the world's largest corporations. In the process, he risks everything — his future, his family, and his own life — to expose the truth.",
            posterPath: 'https://image.tmdb.org/t/p/original//hJ6YEbrjFvToa5c7IiUqILoB6Je.jpg',
            releaseDate: '2019-11-22T00:00:00.000Z'
          },
          {
            movieId: 70,
            title: 'Captain Marvel',
            overview: 'The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.',
            posterPath: 'https://image.tmdb.org/t/p/original//AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
            releaseDate: '2019-03-08T00:00:00.000Z'
          },
          {
            movieId: 71,
            title: 'Trolls World Tour',
            overview: 'Queen Poppy and Branch make a surprising discovery — there are other Troll worlds beyond their own, and their distinct differences create big clashes between these various tribes. When a mysterious threat puts all of the Trolls across the land in danger, Poppy, Branch, and their band of friends must embark on an epic quest to create harmony among the feuding Trolls to unite them against certain doom.',
            posterPath: 'https://image.tmdb.org/t/p/original//7W0G3YECgDAfnuiHG91r8WqgIOe.jpg',
            releaseDate: '2020-04-10T00:00:00.000Z'
          },
          {
            movieId: 72,
            title: '君の名は。',
            overview: 'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.',
            posterPath: 'https://image.tmdb.org/t/p/original//q719jXXEzOoYaps6babgKnONONX.jpg',
            releaseDate: '2017-04-07T00:00:00.000Z'
          },
          {
            movieId: 73,
            title: 'The Hunt',
            overview: "Twelve strangers wake up in a clearing. They don't know where they are—or how they got there. In the shadow of a dark internet conspiracy theory, ruthless elitists gather at a remote location to hunt humans for sport. But their master plan is about to be derailed when one of the hunted turns the tables on her pursuers.",     
            posterPath: 'https://image.tmdb.org/t/p/original//wxPhn4ef1EAo5njxwBkAEVrlJJG.jpg',
            releaseDate: '2020-03-13T00:00:00.000Z'
          },
          {
            movieId: 74,
            title: 'The Lord of the Rings: The Return of the King',
            overview: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
            posterPath: 'https://image.tmdb.org/t/p/original//rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
            releaseDate: '2003-12-17T00:00:00.000Z'
          },
          {
            movieId: 75,
            title: 'Ford v Ferrari',
            overview: 'American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.',
            posterPath: 'https://image.tmdb.org/t/p/original//6ApDtO7xaWAfPqfi2IARXIzj8QS.jpg',
            releaseDate: '2019-11-15T00:00:00.000Z'
          },
          {
            movieId: 76,
            title: 'Love Wedding Repeat',
            overview: "While trying to make his sister's wedding day go smoothly, Jack finds himself juggling an angry ex-girlfriend, an uninvited guest with a secret, a misplaced sleep sedative, and the girl that got away in alternate versions of the same day.",
            posterPath: 'https://image.tmdb.org/t/p/original//zn7feouGPU8sELez4qvpp0EtgeQ.jpg',
            releaseDate: '2020-04-10T00:00:00.000Z'
          }
        ],
        success: true,
      },
    });
  }, 5000)
})
