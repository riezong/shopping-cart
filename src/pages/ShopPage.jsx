import { Link } from "react-router";

const ShopPage = () => {
  return (
    <div>
      <h1>Shop</h1>
      <div className="card-grid">

        <div className="product-card">
          <div className="product-image"></div>
          <h1>Item Name</h1>
          <p>Qty</p>
          <div className="qty-input">
            <button>-</button>
            <input type="Value" />
            <button>+</button>
          </div>
          <div className="add-to-cart">
            <button>Add to Cart</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image"></div>
          <h1>Item Name</h1>
          <p>Qty</p>
          <div className="qty-input">
            <button>-</button>
            <input type="Value" />
            <button>+</button>
          </div>
          <div className="add-to-cart">
            <button>Add to Cart</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image"></div>
          <h1>Item Name</h1>
          <p>Qty</p>
          <div className="qty-input">
            <button>-</button>
            <input type="Value" />
            <button>+</button>
          </div>
          <div className="add-to-cart">
            <button>Add to Cart</button>
          </div>
        </div>

        <div className="product-card">
          <div className="product-image"></div>
          <h1>Item Name</h1>
          <p>Qty</p>
          <div className="qty-input">
            <button>-</button>
            <input type="Value" />
            <button>+</button>
          </div>
          <div className="add-to-cart">
            <button>Add to Cart</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ShopPage;