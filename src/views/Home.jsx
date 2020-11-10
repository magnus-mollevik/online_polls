import React, { useState, useEffect } from 'react';
import UndetailedComponent from '../components/UndetailedPollComponent';
import { list } from '../utils/eventService.js';




const Home = () => {
  const [polls, setPolls] = useState([]);
  const [error, setError] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await list();
      console.log(data);
      if (error) {
        setError(error);
      }
      else {
        setPolls(data);
        console.log(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      <UndetailedComponent></UndetailedComponent>
    </div>
  );
};

export default Home;