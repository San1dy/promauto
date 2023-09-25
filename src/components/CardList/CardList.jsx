import './CardList.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../Card/Card';

const CardList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
				console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

	const [expandedStates, setExpandedStates] = useState([]);

	useEffect(() => {
    setExpandedStates(users.map(() => false));
  }, [users]);

  return (
    <div className="cardlist" style={{ display: 'flex', justifyContent: 'space-between' }}>
      {users.map((user, index) => (
        <Card
          key={user.id}
          userData={user}
          isExpanded={expandedStates[index]}
          setIsExpanded={value => {
            const updatedStates = [...expandedStates];
            updatedStates[index] = value;
            setExpandedStates(updatedStates);
          }}
        />
      ))}
    </div>
  );
};

export default CardList;