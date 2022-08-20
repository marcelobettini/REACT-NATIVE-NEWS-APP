import { useEffect, useState } from 'react';
const baseUrl = 'https://newsapi.org/v2/'
const APIKey = '&apiKey=5ff475ea07084b96bc8176a66872ce46'
const useFetch = (params) => {  
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = (params) => {    
    const endpoint = 'top-headlines'    
    fetch(baseUrl+endpoint+params+APIKey)
      .then(res => {
        if (!res.ok) {          
          console.log(res.status);
          throw new Error(`Error: ${res.status}`)
        }        
        return res.json()
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message)
        setIsLoading(false)
        setTimeout(()=> setError(null),3000)
      
      })
  }
  useEffect(() => {
    console.log('runs UseEffect with',params);
    getData(params)
  }, [params])

  return [data, error, isLoading]
}

export default useFetch