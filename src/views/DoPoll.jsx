import React, { useState, useEffect } from 'react';
import { get } from '../utils/eventService';

const DoPoll = props => {

  const [poll, setPoll] = useState([]);
  const [error, setError] = useState([]);

  const [pollId, setPollId] = useState('');

  const handleInput = (e) => {
    let input = e.target.value;
    setPollId(input);

  };

  const fetchPoll = async () => {
    if (pollId) {
      const { data, error } = await get(pollId);
      if (error) {
        setError(error);
      }
      else {
        console.log(data);
        setPoll(data);
      }
    }
  }


  return (
    <div>
      <h3>Do Poll View</h3>
      <input type='text' value={pollId} onChange={handleInput} />
      <button onClick={fetchPoll}>Søk</button>
      {poll && <p>{poll}</p>}
    </div>
  );
};

export default DoPoll;