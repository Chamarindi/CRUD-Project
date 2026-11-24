import React from 'react';
import {Route,Routes} from 'react-router-dom';
import AddItem from './components/AddItem/AddItem';
import Home from './components/Home/Home';


function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addItem" element={<AddItem/>} />
        </Routes>

      </React.Fragment>


    </div>
  );
}

export default App;
