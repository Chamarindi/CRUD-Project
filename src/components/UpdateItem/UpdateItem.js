import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateItem() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    itemId: '',
    itemName: '',
    itemCategory: '',
    itemQty: '',
    itemDetails: '',
    itemImage: null,
  });

  useEffect(() => {
    const fetchItemData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/inventory/${id}`);
        const itemData = response.data;
        setFormData({
          itemId: itemData.itemId || '',
          itemName: itemData.itemName || '',
          itemCategory: itemData.itemCategory || '',
          itemQty: itemData.itemQty || '',
          itemDetails: itemData.itemDetails || '',
          itemImage: null,
        });
      } catch (err) {
        console.error('error fetch data : ', err);
      }
    };
    fetchItemData();
  }, [id]);

  const onInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append(
      'itemDetails',
      JSON.stringify({
        itemId: formData.itemId,
        itemName: formData.itemName,
        itemCategory: formData.itemCategory,
        itemDetails: formData.itemDetails,
        itemQty: formData.itemQty,
      })
    );

    if (formData.itemImage) {
      data.append('file', formData.itemImage);
    }

    try {
      await axios.put(`http://localhost:8081/inventory/${id}`, data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Item updated');
      window.location.href = '/allItems';
    } catch (err) {
      console.error('error updating data : ', err);
      alert('Error updating item');
    }
  };

  return (
    <div>
      <p className="auth_topic">Update Item</p>
      <div className="from_vontiner">
        <div className="from_sub_coon">
          <form id="itemForm" onSubmit={onSubmit}>
            <label htmlFor="itemId">Item ID:</label><br />
            <input type="text" id="itemId" name="itemId"
              value={formData.itemId} onChange={onInputChange} required /><br />

            <label htmlFor="itemName">Item Name:</label><br />
            <input type="text" id="itemName" name="itemName"
              value={formData.itemName} onChange={onInputChange} required /><br />

            <label htmlFor="itemCategory">Item Category:</label><br />
            <select id="itemCategory" name="itemCategory"
              value={formData.itemCategory} onChange={onInputChange} required>
              <option value="" disabled>Select Item Category</option>
              <option value="Apparel & Fashion">Apparel & Fashion</option>
              <option value="Electronics & Gadgets">Electronics & Gadgets</option>
              <option value="Health & Beauty">Health & Beauty</option>
              <option value="Food & Dining">Food & Dining</option>
              <option value="Home & Furniture">Home & Furniture</option>
            </select><br />

            <label htmlFor="itemQty">Item Quantity:</label><br />
            <input type="number" id="itemQty" name="itemQty"
              value={formData.itemQty} onChange={onInputChange} required /><br />

            <label htmlFor="itemDetails">Item Details:</label><br />
            <textarea id="itemDetails" name="itemDetails"
              value={formData.itemDetails} onChange={onInputChange} required></textarea><br />

            <label htmlFor="itemImage">Item Image:</label><br />
            <input type="file" id="itemImage" name="itemImage"
              accept="image/*" onChange={onInputChange} /><br />

            <button type="submit" className="fom_btn">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateItem;