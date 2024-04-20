import axios from "axios";

const url = `https://api.themoviedb.org/3/search/movie`;
const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTRlYWJmMTY5NTBlNDEyNjgzMDkwZTFhNGZiYmJjOCIsInN1YiI6IjY2MjNkZmYwZTI5NWI0MDE4Nzk5ZWE0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jwT9xim4bQyADDvD7sprN1czwPlm6nNFTNMIx4hRnjk";
const options = {
  headers: {
    Authorization: `Bearer ${apiToken}`,
  },
};

const searchMovies = async (query) => {
  try {
    const response = await axios.get(url + query, options);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export default searchMovies;
