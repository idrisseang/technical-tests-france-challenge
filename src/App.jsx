import "./App.css";
import { orders, products, sellers } from "./data";

function App() {
  const calculSellerCa = (sellerId) => {
    const sellerOrders = orders.filter((order) => order.sellerId === sellerId);
    const totalCa = sellerOrders.reduce((acc, order) => {
      return (
        acc +
        order.products.reduce((orderTotal, product) => {
          const productInfo = products.find((p) => p.id === product.id);
          return orderTotal + productInfo.price * product.quantity;
        }, 0)
      );
    }, 0);
    return totalCa;
  };

  return (
    <div>
      <h1>CA vendeurs :</h1>
      {sellers.map((seller) => (
        <div key={seller.id}>
          <p>
            {seller.firstname} {seller.lastname} : {calculSellerCa(seller.id)} €
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
