import { useEffect, useState } from 'react';
const useFetch = (url) => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getData = (url) => {
    fetch(url)
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
    getData(url)
  }, [])

  return [data, error, isLoading]
}

export default useFetch