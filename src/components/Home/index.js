import React, { useState, useEffect } from 'react';
import { getUpComing } from './MovieApi';
import Movies from '../Movies';
import Loading from '../Loading';
import Error from '../Error';

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      let page = 1;
      try {
        let results = await getUpComing(page);
        while (results.length < 20) {
          const newResults = await getUpComing(++page);
          results = [...results, ...newResults];
          console.log(results);
        }
        setData(results);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    if (error) {
      return <Error />;
    }
    return <Movies movies={data} />;
  }
}

export default Home;
