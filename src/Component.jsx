import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const Component = () => {
  const [name, setName] = useState('Tushar');

  return (
    <div>
       <ChildComponent name={name} />
       <button onClick={() => setName('Sunny')}>Change Name</button>
    </div>
  )
}

export default Component
