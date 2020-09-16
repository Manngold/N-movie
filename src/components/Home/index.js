import React, { useState, useEffect } from 'react';
import { getUpComing } from './MovieApi';
import Movies from '../Movies';
import Loading from '../Loading';
import Error from '../Error';

const filterByDate = (item) => {
  const nowDate = new Date();
  return new Date(item.release_date) > nowDate;
};

function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { results },
        } = await getUpComing();
        setData(results.filter(filterByDate));
      } catch (error) {
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
