import React,{useState, useEffect} from 'react'
import axios from 'axios';

// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.responseType = 'json';

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading]= useState(false);
    const [error, setError]= useState(null);

    // error ? (
    //     <Text>Something went wrong</Text>
    //   ) :


    const fetchData = async () =>{
        setIsLoading(true);
        try {
            const response = await axios.get('https://dummyjson.com/products?limit=10')
            // const response = await axios.get('http://192.168.1.12/api/products')
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error)
        }finally{
            setIsLoading(false);
        }
    }


    useEffect(()=>{
        fetchData();
    }, []);

    const refetch =()=>{
        setIsLoading(true);
        fetchData();
    }


  return  {data, isLoading, error, refetch}
}

export default useFetch