import axios from "axios"
import { dummyMovieShort, dummyMovieLongLoad } from "./dummy_data/dummyMovieData";

const useDummyData = true;
const dummyData = dummyMovieLongLoad;

export const getAllMovies = async () => {  

  if(useDummyData) {
    return dummyData
      .then(apiResponse => {
        console.log(apiResponse);
        if (!apiResponse.data.success) {
          return null;
        }
  
        return apiResponse.data.response;
      })
      .catch( err => {
        console.error(err);
        return null;
      })
  }

  return axios.get('/api/movies/all')
    .then((apiResponse) => {
      if (!apiResponse.data.success) {
        return null;
      }

      return apiResponse.data.response;
    })
    .catch( err => {
      console.error(err);
      return null;
    })
}