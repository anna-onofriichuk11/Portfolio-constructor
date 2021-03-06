// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Test.css';

function Test () {
  const [users, setUsers] = useState([]);

  /* useEffect(async () => {
    await fetch('users')
      .then(body => body.json())
      .then(res => setUsers(res.users))
  }, []); */

  useEffect(() => {
    // using this syntax instead of the upper variant
    // because React starts swearing
    async function fet () {
      await fetch('users')
        .then(body => body.json())
        .then(res => setUsers(res.users));
    }
    fet();
  }, []);

  return (
    <div className="Test">
      {users.map(user =>
        (<p key={user.id} align="center">{user.id}. {user.fname} {user.lname}</p>))}
    </div>
  );
}

export default Test;
