import React, { useState, useEffect } from 'react';
import DoPollComponent from '../components/DoPollComponent';
import { get } from '../utils/eventService';


const DoPoll = props => {

  const [poll, setPoll] = useState(null);
  const [error, setError] = useState(null);

  const [pollId, setPollId] = useState('');

  useEffect( async () => {
    const latestPollId = localStorage.getItem("latestPollId");
    if (latestPollId) {
      const { data, error } = await get(latestPollId);
      if (error) {
        setError("Poll not found");
      }
      else {
        setPoll(data);
        setError(null);
      }
    }
    else{
      setError(null);
    }
  }, []);

  const handleInput = (e) => {
    let input = e.target.value;
    setPollId(input);
  };

  const fetchPoll = async () => {
    if (pollId) {
      const { data, error } = await get(pollId);
      if (error) {
        setPoll(null);
        setError("No such poll, try again");
      }
      else {
        setPoll(data);
        setError(null);
      }
    }
    else{
      setError(null);
    }
  }

  const loadPageWithPoll = async (pollId) => {
    window.location="/DoPoll";
    if (pollId) {
      const { data, error } = await get(pollId);
      if (error) {
        setError("Poll not found");
      }
      else {
        setPoll(data);
        setError(null);
      }
    }
    else{
      setError(null);
    }
  }


  return (
    <div>
      <h3>Do Poll View</h3>
      <input type='text' value={pollId} onChange={handleInput} />
      <button onClick={fetchPoll}>Søk</button>
      {error && <h1>{error}</h1>}
      {poll && <DoPollComponent setPoll={setPoll} poll={poll} loadPageWithPoll={loadPageWithPoll}/> }
    </div>

  );
};

export default DoPoll;