import React from 'react';
import {Route,Routes} from 'react-router-dom';
import AddItem from './components/AddItem/AddItem';
import Home from './components/Home/Home';
import DisplayItem from './components/DisplayItem/DisplayItem';


function App() {
  return (
    <div>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addItem" element={<AddItem/>} />
          <Route path="/allitems" element={<DisplayItem/>} />
        </Routes>

      </React.Fragment>


    </div>
  );
}

export default App;
