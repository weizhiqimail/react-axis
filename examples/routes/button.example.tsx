import React from 'react';

import Button from '../../src/components/button';

const ButtonExample = () => {
  return <div>
    <Button type="default">你好</Button>
    <Button type="primary">你好</Button>
    <Button type="primary" size="large">你好</Button>
    <Button type="ghost">你好</Button>
    <Button type="dashed">你好</Button>
    <Button type="link">你好</Button>
  </div>;
};

export default ButtonExample;
