# ratings-dummy-data

We have a couple changes.

## Requesting Movie DB

*/server/routes/movie.routes.js*

```js
// old
movieRouter.get('/all', async (req, res) => {
  const allMovies = await Movie.findAll();
  res.json(allMovies);
});

// new
movieRouter.get('/all', async (req, res) => {
  const allMovies = await Movie.findAll();
  res.json({response: allMovies, success: true});
});

```

*/src/main.jsx*

```js
// old
loader={async () => {
  const res = await axios.get('/api/movies/all');
  return { movies: res.data };
}}

// new
loader={async () => {
  const res = await axios.get('/api/movies/all').then(api => api.data.response );          
  
  return {movies: res};
}}
```