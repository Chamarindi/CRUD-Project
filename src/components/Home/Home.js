import React from 'react';

function Home() {
    return (
        <div>
            <button onClick={()=>(window.location.href='/addItem')}>Add Item</button>
            <button onClick={()=>(window.location.href='/allitems')}>All Items</button>
        </div>
    );
}

export default Home;