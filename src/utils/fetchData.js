export const exerciseOptions ={
    method: 'GET',

    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };
  export const youtubeOptions = {
    method: 'GET',   
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '98c929a670mshc0e2ba9831dc1d2p1cd69ajsn814c94c633a4'
    },
  };
  
export const fetchData = async (url, options)=>{
    const response = await fetch(url, options);
    const data = await response.json();
    return data; 
}