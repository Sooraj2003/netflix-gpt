

export const BACKGROUND_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg";

export const PHOTO_URL = "https://occ-0-4994-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
    }
  };

  export const NOW_PLAYING_URL = 'https://api.themoviedb.org/3/movie/now_playing?page=1';

  export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500";

  export const TOP_RATED_URL ="https://api.themoviedb.org/3/movie/top_rated"
  export const POPULAR_URL = " https://api.themoviedb.org/3/movie/popular?page=1"
  export const UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming"

  export const SUPPORTED_LANGUAGES = [{identifier:"en",type:"English"},{identifier:"ka",type:"Kannada"},{identifier:"hi",type:"Hindi"}]

  
 