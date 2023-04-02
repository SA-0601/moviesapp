  
  
  //fetch data from API
  export const getMovie = async (searchTerm) => {
    //make fetch request and store response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=a6bf5964&t=${searchTerm}`
      );
      const data = await response.json();
        return data;
    } catch (error) {
      console.log(error);
    }
  };