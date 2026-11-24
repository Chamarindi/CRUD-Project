import React from 'react';

function AddItem() {
    return (
        <div>
           <p className='auth_topic'>Add Item</p>
       <div className="from_vontiner">
        <div className="from_sub_coon">
          <form id="itemForm">
            <label htmlFor="itemId">Item ID:</label><br />
            <input type="text" id="itemId" name="itemId" required /><br />

            <label htmlFor="itemName">Item Name:</label><br />
            <input type="text" id="itemName" name="itemName" required /><br />

            <label htmlFor="itemCategory">Item Category:</label><br />
            <select id="itemCategory" name="itemCategory" required>
              <option value="" disabled>Select Item Category</option>
              <option value="Apparel & Fashion">Apparel & Fashion</option>
              <option value="Electronics & Gadgets">Electronics & Gadgets</option>
              <option value="Health & Beauty">Health & Beauty</option>
              <option value="Food & Dining">Food & Dining</option>
              <option value="Home & Furniture">Home & Furniture</option>
            </select><br />

            <label htmlFor="itemQty">Item Quantity:</label><br />
            <input type="number" id="itemQty" name="itemQty" required /><br />

            <label htmlFor="itemDetails">Item Details:</label><br />
            <textarea id="itemDetails" name="itemDetails" required></textarea><br />

            <label htmlFor="itemImage">Item Image:</label><br />
            <input
              type="file"
              id="itemImage"
              name="itemImage"
              accept="image/*"
            />
            <br />

            <button type="submit" className="fom_btn">Submit</button>
          </form>
        </div>
      </div>
        </div>
    );
}

export default AddItem;