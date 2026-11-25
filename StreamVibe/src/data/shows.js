const shows = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Action",
    year: 2014,
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
  },
  {
    id: 2,
    title: "Inception",
    genre: "Action",
    year: 2010,
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
  },
  {
    id: 4,
    title: "The Hangover",
    genre: "Comedy",
    year: 2009,
    rating: 7.7,
    poster: "https://image.tmdb.org/t/p/w500/A0uS9rHR56FeBtpjVki16M5xxSW.jpg"
  },
  {
    id: 5,
    title: "Joker",
    genre: "Action",
    year: 2019,
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
  },
  {
    id: 6,
    title: "The Matrix",
    genre: "Action",
    year: 1999,
    rating: 8.7,
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
  },
  {
    id: 7,
    title: "Home Alone",
    genre: "Comedy",
    year: 1990,
    rating: 7.7,
    poster: "https://image.tmdb.org/t/p/w500/onTSipZ8R3bliBdKfPtsDuHTdlL.jpg"
  },
  {
    id: 8,
    title: "Titanic",
    genre: "Comedy",
    year: 1997,
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg"
  },
  {
    id: 9,
    title: "Gladiator",
    genre: "Action",
    year: 2000,
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg"
  },
  {
    id: 10,
    title: "Coco",
    genre: "Comedy",
    year: 2017,
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"
  },
    {
    id: 11,
    title: "Avatar",
    genre: "Action",
    year: 2009,
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg"
  },
  {
    id: 12,
    title: "Avengers: Endgame",
    genre: "Action",
    year: 2019,
    rating: 8.4,
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"
  },
  {
    id: 13,
    title: "Spider-Man: No Way Home",
    genre: "Action",
    year: 2021,
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
  },
  {
    id: 14,
    title: "Finding Nemo",
    genre: "Comedy",
    year: 2003,
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg"
  },
  {
    id: 15,
    title: "Toy Story",
    genre: "Comedy",
    year: 1995,
    rating: 8.3,
    poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg"
  },
  {
    id: 16,
    title: "Forrest Gump",
    genre: "Comedy",
    year: 1994,
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg"
  },
  {
    id: 17,
    title: "The Shawshank Redemption",
    genre: "Action",
    year: 1994,
    rating: 9.3,
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"
  },
  {
    id: 18,
    title: "Jurassic Park",
    genre: "Comedy",
    year: 1993,
    rating: 8.2,
    poster: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg"
  },
  {
    id: 19,
    title: "Pirates of the Caribbean",
    genre: "Comedy",
    year: 2003,
    rating: 8.1,
    poster: "https://image.tmdb.org/t/p/w500/poHwCZeWzJCShH7tOjg8RIoyjcw.jpg"
  },
  {
    id: 20,
    title: "The Lion King",
    genre: "Action",
    year: 1994,
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg"
  },
  {
    id: 21,
    title: "Shrek",
    genre: "Comedy",
    year: 2001,
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg"
  },
  {
    id: 22,
    title: "Home Alone 2",
    genre: "Comedy",
    year: 1992,
    rating: 6.9,
    poster: "https://image.tmdb.org/t/p/w500/uuitWHpJwxD1wruFl2nZHIb4UGN.jpg"
  },
  {
    id: 23,
    title: "Iron Man",
    genre: "Action",
    year: 2008,
    rating: 7.9,
    poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg"
  },
  {
    id: 24,
    title: "Doctor Strange",
    genre: "Comedy",
    year: 2016,
    rating: 7.5,
    poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg"
  },
  {
    id: 25,
    title: "Dune",
    genre: "Comedy",
    year: 2021,
    rating: 8.0,
    poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
  },
  {
    id: 26,
    title: "Whiplash",
    genre: "Comedy",
    year: 2014,
    rating: 8.5,
    poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg"
  },
  {
    id: 27,
    title: "The Conjuring",
    genre: "Comedy",
    year: 2013,
    rating: 7.5,
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg"
  }
];

export default shows;