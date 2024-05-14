import "../App.css";
import { orders, products, sellers } from "./data";

function SellerRevenueDisplay() {
  const calculSellerCa = (sellerId) => {
    const sellerOrders = orders.filter((order) => order.sellerId === sellerId);
    const totalCa = sellerOrders.reduce((acc, order) => {
      return (
        acc +
        order.products.reduce((orderTotal, currentOrderProduct) => {
          const productInfo = products.find(
            (product) => product.id === currentOrderProduct.id
          );
          return (
            orderTotal +
            parseInt(productInfo.price) * currentOrderProduct.quantity
          );
        }, 0)
      );
    }, 0);
    return totalCa;
  };

  return (
    <div>
      <h1>CA vendeurs :</h1>
      <ul>{/* Afficher chaque vendeur et son chiffre d'affaire */}</ul>
    </div>
  );
}

export default SellerRevenueDisplay;
