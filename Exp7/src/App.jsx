
import './App.css';
function App() {
  return (
    <div className="container">
      <h1>My Favourite nature gallery</h1>
      <div className="image">
        <img src="https://tse2.mm.bing.net/th/id/OIP.rUYYAuK9JfV5JxcpHdj6DAHaE7?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Nature Image 1" />
        <p>mountain view</p>
      </div>
      <div className="green">
        <img src="https://tse2.mm.bing.net/th/id/OIP.zIe0jgRoR7gc21L4TrLD2AHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Nature Image 2" />
        <p>greenforest</p>
      </div>
      <div className="water">
        <img src="https://tse1.mm.bing.net/th/id/OIP.3DNaRuK2pT0RoAwffwNljQHaFL?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Nature Image 3" />
        <p>waterfall</p>
      </div>
    </div>
  );
}
export default App;


// import studentCard from './studentCard';
// function App() {
//   return (
//     <div className="app">
//       <studentCard name="John Doe" age={20} major="Computer Science" />
//       <studentCard name="Jane Smith" age={22} major="Mathematics" />
//     </div>
//   );
// }
// export default App;

// import { Component, useState } from 'react';
// function App() {
//   const [count, setCount] = useState(1);
//   return (
//     <div>
//       <h1>Counter Application</h1>
//       <h1> {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }
// export default App;


// cd Exp7
// npm run dev