import React, { useState, useEffect } from 'react';
import UndetailedComponent from '../components/UndetailedPollComponent';
import { list } from '../utils/eventService.js';

const Home = () => {
  
  const [polls, setPolls] = useState([]);
  const [error, setError] = useState([]);
  
  useEffect(() =>{
    const fetchData = async () => {
      const {data, error } = await list();
      if(error){
        setError(error);
      }
      else {
        setPolls(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {polls && <UndetailedComponent polls = {polls}></UndetailedComponent>}
    </div>
  );
};

export default Home;