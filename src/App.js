import React from 'react';
import {Route,Routes} from 'react-router';

function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/addItem" element={<h1>Add Item</h1>} />
        </Routes>

</React.Fragment>


    </div>
  );
}

export default App;
