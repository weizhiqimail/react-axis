import React, { useState } from 'react';

const Button = () => {
  const [age, setAge] = useState(10);

  return (
    <div>
      button {age}
      <button onClick={() => setAge(age + 1)}>click</button>
    </div>
  );
};

export default Button;
