const API_KEY = "6504d1950ef26156ed61ff1f952a4d7e";

const BASE_URL = "https://api.themoviedb.org/3";


// فیلم های محبوب
export async function getPopularMovies() {

  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results;
}


// فیلم های ترند هفته
export async function getTrendingMovies() {

  const response = await fetch(
    `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results;
}


// فیلم های امتیاز بالا
export async function getTopRatedMovies() {

  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
  );

  const data = await response.json();

  return data.results;
}


// سرچ فیلم
export async function searchMovies(query) {

  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );

  const data = await response.json();

  return data.results;
}