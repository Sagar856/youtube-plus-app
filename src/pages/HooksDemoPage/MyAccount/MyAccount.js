import React, { useState } from 'react';

const MyAccount = () => {
  const [age, setAge] = useState(10);
  console.log(age);

  const [myName, setMyName] = useState('Jay');
  console.log(myName);

  const handleChangeAge = () => {
    setAge(50);
    console.log(age);
  };

  return (
    <div>
      <h3>MyAccount</h3>
      <p>Age: {age}</p>
      <button onClick={handleChangeAge}>Change Age</button>

      <p>Name: {myName}</p>
      <button onClick={() => setMyName('John')}>Change Name</button>
    </div>
  );
};

export default MyAccount;
