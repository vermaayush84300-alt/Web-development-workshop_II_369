

import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const greeting = "Hello from Parent!";
  return (
    <div>
      <ChildComponent message={greeting} />
    </div>
  );
}
export default ParentComponent;

// ChildComponent.js 
import React from 'react';

function ChildComponent(props) {
  return (
    <p>{props.message}</p>
  );
}
export default ChildComponent; 