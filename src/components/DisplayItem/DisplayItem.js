import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DisplayItem() {
    const [inventory, setInventory] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        loadInventory();
    }, []);

    const loadInventory = async () => {
        const result = await axios.get("http://localhost:8081/inventory");
        setInventory(result.data);
    }
    const UpdateNavigate = (id) => {
        window.location.href = `/updateItem/${id}`;
    }
    return (
        <div>
            <h2>Inventory Item</h2>
            <table>
  <thead>
    <tr>
      <th>Item ID</th>
      <th>Item</th>
      <th>Item Name</th>
      <th>Category</th>
      <th>Quantity</th>
      <th>Details</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {inventory.map((item, index) => (
    <tr key={index}>
      <td>{item.itemId}</td>
      <td>
        <img src={`http://localhost:8081/uploads/${item.itemImage}`} alt={item.itemName} width="100" height="100" />
      </td>
      <td>{item.itemName}</td>
      <td>{item.itemCategory}</td>
      <td>{item.itemQty}</td>
      <td>{item.itemDetails}</td>

      <td>
         <button onClick={() => UpdateNavigate(item.id)}>Update</button>
      </td>
         
    </tr>
    
  ))}
  </tbody>
</table>
        </div>
    );
}

export default DisplayItem;