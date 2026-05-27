import './product.css';
function studentCard() {
    return (
        <div className="container">
            <h1>Product Showcase</h1>
            <div className="card">
                <h2>Wireless Mouse</h2>
                <p>Price: ₹599</p>
                <p>Category: Electronics Gadgets</p>
            </div>
            <div className="studentCard">
                <h2>Running Shoes</h2>
                <p>Price: ₹1499</p>
                <p>Category: Footwear</p>
            </div>
            <div className="marksCard">
                <h2>Smart Watch</h2>
                <p>Price: ₹2499</p>
                <p>Category: Electronics Gadgets</p>
            </div>
        </div>
    );
}
export default studentCard